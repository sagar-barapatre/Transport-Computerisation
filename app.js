const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const mongoose = require("mongoose");
const session = require("express-session");
var axios = require("axios");
const bcrypt = require("bcrypt");
const User = require("./models/User");
const Order = require("./models/Order");
const Driver = require("./models/Driver");
const Vehicle = require("./models/Vehicle");
const Feedback = require("./models/Feedback");
var reqbodypricing = Math.floor(Math.random() * 501) + 500;


mongoose
  .connect(
    "mongodb+srv://sagar:sagar2019.@cluster0.nxqpo.mongodb.net/WebDevWorkshop?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
      useCreateIndex: true,
    }
  )
  .then(() => {
    console.log("connected to db!");
  })
  .catch((err) => {
    console.log("error", err);
  });

app.set("view engine", "ejs");
app.set("views", "views");

app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use(session({ secret: "keepABetterSecretThanThis", resave: false, saveUninitialized: true }));

const isLogin = (req,res,next) => {
    if(!req.session.userId)
        res.redirect("/login");
    else
        next();
};

app.get("/", (req, res) => {
    res.render("index");
});

app.get("/register", (req, res) => {
    res.render("signup");
});

app.post("/register", async (req, res) => {
    const firstName = req.body.firstName;
    const lastName = req.body.lastName;
    const email = req.body.email;
    const password = req.body.password;
    const user = new User({firstName, lastName, email, password});
    await user.save();
    req.session.userId = user._id;
    res.redirect("/login");
});

app.get("/login", (req, res) => {
    res.render("signup");
});


app.get("/dashboard", (req, res) => {
//   axios
//     .get("http://localhost:3000/api/users")
//     .then(function (response) {
//       res.render("admin", { users: response.data });
//     })
//     .catch((err) => {
//       res.send(err);
//     });
    const allOrders = Order.find({});

    allOrders.exec(function (err, response) {
      if (err) throw err;
      res.render("admin", { allData: response });
    });
});

app.get("/display-vehicle", (req, res) => {
  const allVehicles = Vehicle.find({});

  allVehicles.exec(function (err, response) {
    if (err) throw err;
    res.render("vehicles", { allData: response });
  });
});

app.get("/display-driver", (req, res) => {
  const allDrivers = Driver.find({});

  allDrivers.exec(function (err, response) {
    if (err) throw err;
    res.render("drivers", { allData: response });
  });
});

app.post("/login", async (req, res) => {
    const email = req.body.email;
    const password = req.body.password;
    const foundUser = await User.findAndValidate(email, password);
   
    if (foundUser) {
        req.session.userId = foundUser._id;
        if (email === "admin@test.com" && password === "123456") {
            res.redirect("/dashboard")
        }
        else {
            res.redirect("/orders");
        }
    } else {
      res.redirect("/");
    }
});

app.get("/feedback", (req, res) => {
  res.render("feedback");
});

app.post("/feedback", (req, res) => {
  const FullName = req.body.fname;
  const EmailID = req.body.femail;
  const Company = req.body.fcompany;
  const Subject = req.body.fsubject;
  const Message = req.body.fmessage;

  const feedback = new Feedback({
    FullName,
    EmailID,
    Company,
    Subject,
    Message,
  });
  feedback
    .save(feedback)
    .then((data) => {
      res.redirect("/orders");
    })
    .catch((err) => {
      res.status(500);
      console.log(err);
    });
});


app.get("/orders", (req, res, next) => {
    const individualOrder = Order.find({ emailID: "B119016@iiit-bh.ac.in" });

    individualOrder.exec(function (err, data){
        if (err) throw err;
        res.render("orders", { records: data });
    });
});

app.get("/placeOrder", (req, res) => {
  var vehicles = {};
  var drivers = {};
  if (req.session.userId) {
    Driver.find({}, function (err, allDrivers) {
      if (err) {
        console.log(err);
      } else {
        drivers = allDrivers;
      }
    });

    Vehicle.find({}, function (err, allVehicles) {
      if (err) {
        console.log(err);
      } else {
        vehicles = allVehicles;
        res.render("placeOrder", {
          allVehicles: vehicles,
          allDrivers: drivers,
        });
      }
    });
  }
});

app.post("/placeOrder", async (req, res) => {
  const Date = req.body.date;
   const Pricing = reqbodypricing;
   const Drivers = "Shyam Gandhi";
   const Vehicles = "TATA Prima";
  const PickupState = req.body.pickupstate;
  const PickupCity = req.body.pickupcity;
  const DropState = req.body.dropstate;
  const DropCity = req.body.dropcity;
  const firstandlastname = req.body.bf_name;
  const emailID = req.body.bf_email;
  const extraMessages = req.body.bf_extraMessages;

  try {
    const order = new Order({
      Date,
      Pricing,
      Drivers,
      Vehicles,
      PickupState,
      PickupCity,
      DropState,
      DropCity,
      firstandlastname,
      emailID,
      extraMessages,
    });
    order.save();
    res.render("hello");
  } catch (e) {
    console.log(e);
  }
});

app.get("/add-user", (req, res) => {
  res.render("add_user");
});

app.get("/add-vehicle", (req, res) => {
  res.render("add_vehicle");
});

app.get("/add-driver", (req, res) => {
  res.render("add_drivers");
});

app.get("/update-user", (req, res) => {
  axios
    .get("http://localhost:8080/api/users", {
      params: {
        id: req.query.id,
      },
    })
    .then((userdata) => {
      // console.log(userdata.data);
      res.render("update_user", { user: userdata.data });
      
    })
    .catch((err) => {
      console.log(err);
    });
});

app.get("/update-vehicle", (req, res) => {
  axios
    .get("http://localhost:8080/api/vehicles", {
      params: {
        id: req.query.id,
      },
    })
    .then((userdata) => {
      // console.log(userdata.data);
      res.render("update_vehicle", { user: userdata.data });
    })
    .catch((err) => {
      console.log(err);
    });
});

app.get("/update-driver", (req, res) => {
  axios
    .get("http://localhost:8080/api/drivers", {
      params: {
        id: req.query.id,
      },
    })
    .then((userdata) => {
      // console.log(userdata.data);
      res.render("update_driver", { user: userdata.data });
    })
    .catch((err) => {
      console.log(err);
    });
});

app.get("/api/users", (req, res) => {
  if (req.query.id) {
    const id = req.query.id;

    Order.findById(id)
      .then((data) => {
        res.send(data);
      })
      .catch((err) => {
        res
          .status(500)
          .send({ message: "Error retrieving user with id " + id });
      });
  } else {
    Order.find()
      .then((user) => {
        res.send(user);
      })
      .catch((err) => {
        res.status(500).send({
          message:
            err.message || "Error Occurred while retriving user information",
        });
      });
  }
});

app.get("/api/vehicles", (req, res) => {
  if (req.query.id) {
    const id = req.query.id;

    Vehicle.findById(id)
      .then((data) => {
        res.send(data);
      })
      .catch((err) => {
        res
          .status(500)
          .send({ message: "Error retrieving user with id " + id });
      });
  } else {
    Vehicle.find()
      .then((user) => {
        res.send(user);
      })
      .catch((err) => {
        res.status(500).send({
          message:
            err.message || "Error Occurred while retriving user information",
        });
      });
  }
});

app.get("/api/drivers", (req, res) => {
  if (req.query.id) {
    const id = req.query.id;

    Driver.findById(id)
      .then((data) => {
        res.send(data);
      })
      .catch((err) => {
        res
          .status(500)
          .send({ message: "Error retrieving user with id " + id });
      });
  } else {
    Driver.find()
      .then((user) => {
        res.send(user);
      })
      .catch((err) => {
        res.status(500).send({
          message:
            err.message || "Error Occurred while retriving user information",
        });
      });
  }
});

// API
app.post("/api/users", (req, res) => {
  // validate request
  if (!req.body) {
    res.status(400).send({ message: "Content can not be emtpy!" });
    return;
  }
  const Date = req.body.date;
  const Pricing = req.body.pricing;
  const PickupState = req.body.PickupState;
  const PickupCity = req.body.PickupCity;
  const DropState = req.body.DropState;
  const DropCity = req.body.DropCity;
  const firstandlastname = req.body.name;
  const emailID = req.body.emailid;
  const extraMessages = req.body.messages;

  // new user
  const order = new Order({
    Date,
    Pricing,
    PickupState,
    PickupCity,
    DropState,
    DropCity,
    firstandlastname,
    emailID,
    extraMessages,
  });

  // save user in the database
  order
    .save(order)
    .then((data) => {
      //res.send(data)
      res.redirect("/dashboard");
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message ||
          "Some error occurred while creating a create operation",
      });
    });
});


app.post("/api/vehicles", (req, res) => {
  // validate request
  if (!req.body) {
    res.status(400).send({ message: "Content can not be emtpy!" });
    return;
  }
  const VehicleName = req.body.vehiclename;
  const Brand = req.body.brand;
  const vehicleType = req.body.vehicletype;
  const RegistrationNumber = req.body.registration;
  const VehicleRCNumber = req.body.vehicleregistrationcertificatenumber;
  const VehicleNumber = req.body.vehiclenumber;
  const Colour = req.body.colour;
  const CarinsuranceNumber = req.body.carinsurancenumber;

  // new user
  const vehicle = new Vehicle({
    VehicleName,
    Brand,
    vehicleType,
    RegistrationNumber,
    VehicleRCNumber,
    VehicleNumber,
    Colour,
    CarinsuranceNumber,
  });

  // save user in the database
  vehicle
    .save(vehicle)
    .then((data) => {
      //res.send(data)
      res.redirect("/display-vehicle");
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message ||
          "Some error occurred while creating a create operation",
      });
    });
});
app.post("/api/drivers", (req, res) => {
  // validate request
  if (!req.body) {
    res.status(400).send({ message: "Content can not be emtpy!" });
    return;
  }
  const FullName = req.body.fullname;
  const DateOfBirth = req.body.dateofbirth;
  const Age = req.body.age;
  const DrivingLicenseNumber = req.body.drivinglicensenumber;
  const AadharCardNumber = req.body.aadharcardnumber;
  const Address = req.body.address;
  const PhoneNumber = req.body.phonenumber;
  const Gender = req.body.gender;
  const EmailID = req.body.emailid;

  // new user
  const driver = new Driver({
    FullName,
    DateOfBirth,
    Age,
    DrivingLicenseNumber,
    AadharCardNumber,
    Address,
    PhoneNumber,
    Gender,
    EmailID,
  });

  // save user in the database
  driver
    .save(driver)
    .then((data) => {
      //res.send(data)
      res.redirect("/display-driver");
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message ||
          "Some error occurred while creating a create operation",
      });
    });
});

app.put("/api/users/:id", (req, res) => {
  if (!req.body) {
    return res.status(400).send({ message: "Data to update can not be empty" });
  }

  const id = req.params.id;
  Order.updateOne(
    { _id: id },
    { $set: req.body },
    {
      upsert: true,
    }
  )
    .then((data) => {
      if (!data) {
        res.status(404).send({
          message: `Cannot Update user with ${id}. Maybe user not found!`,
        });
      } else {
        res.send(data);
      }
    })
    .catch((err) => {
      res.status(500).send({ message: "Error Update user information" });
    });
});

app.put("/api/vehicles/:id", (req, res) => {
  if (!req.body) {
    return res.status(400).send({ message: "Data to update can not be empty" });
  }

  const id = req.params.id;
  Vehicle.updateOne(
    { _id: id },
    { $set: req.body },
    {
      upsert: true,
    }
  )
    .then((data) => {
      if (!data) {
        res.status(404).send({
          message: `Cannot Update user with ${id}. Maybe user not found!`,
        });
      } else {
        res.send(data);
      }
    })
    .catch((err) => {
      res.status(500).send({ message: "Error Update user information" });
    });
});

app.put("/api/drivers/:id", (req, res) => {
  if (!req.body) {
    return res.status(400).send({ message: "Data to update can not be empty" });
  }

  const id = req.params.id;
  Driver.updateOne(
    { _id: id },
    { $set: req.body },
    {
      upsert: true,
    }
  )
    .then((data) => {
      if (!data) {
        res.status(404).send({
          message: `Cannot Update user with ${id}. Maybe user not found!`,
        });
      } else {
        res.send(data);
      }
    })
    .catch((err) => {
      res.status(500).send({ message: "Error Update user information" });
    });
});

app.delete("/api/users/:id", (req, res) => {
  const id = req.params.id;
  // console.log(id);
  Order.findByIdAndDelete(id)
    .then((data) => {
      if (!data) {
        res
          .status(404)
          .send({ message: `Cannot Delete with id ${id}. Maybe id is wrong` });
      } else {
        res.send({
          message: "User was deleted successfully!",
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Could not delete User with id=" + id,
      });
    });
});

app.delete("/api/drivers/:id", (req, res) => {
  const id = req.params.id;
  // console.log(id);
  Driver.findByIdAndDelete(id)
    .then((data) => {
      if (!data) {
        res
          .status(404)
          .send({ message: `Cannot Delete with id ${id}. Maybe id is wrong` });
      } else {
        res.send({
          message: "User was deleted successfully!",
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Could not delete User with id=" + id,
      });
    });
});

app.delete("/api/vehicles/:id", (req, res) => {
  const id = req.params.id;
  // console.log(id);
  Vehicle.findByIdAndDelete(id)
    .then((data) => {
      if (!data) {
        res
          .status(404)
          .send({ message: `Cannot Delete with id ${id}. Maybe id is wrong` });
      } else {
        res.send({
          message: "User was deleted successfully!",
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Could not delete User with id=" + id,
      });
    });
});

app.get("/logout", (req, res) => {
  req.session.userId = null;
  res.redirect("/");
});
app.post("/logout",(req,res)=>{
    req.session.userId = null;
    res.redirect("/");
})

const PORT = 8080;
  app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  });