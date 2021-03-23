const mongoose = require("mongoose");
const bcrypt = require("bcrypt");


const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: [true, "Name Field cannot be empty"]
    },
    lastName: {
        type: String,
        required: [true, "Name Field cannot be empty"]
    },
    email: {
        type: String,
        required: [true, "Email is required"]
    },
    password: {
        type: String,
        required: [true, "Password is required"]
    }
});

userSchema.statics.findAndValidate = async function (email, password) {
    const foundUser = await this.findOne({ email });
    const result = await bcrypt.compare(password, foundUser.password);
    return result ? foundUser : false;
}

userSchema.pre("save", async function (next) {
    if (!this.isModified("password"))
        return next();
    this.password = await bcrypt.hash(this.password, 12);
    next();
});

module.exports = mongoose.model("User", userSchema);