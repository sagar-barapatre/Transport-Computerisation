var v = $("#booking-form").validate({
  rules: {
    bf_totalGuests: {
      required: true,
      String: true,
    },
    bf_date: {
      required: true,
      String: true,
    },
    bf_time: {
      required: true,
      String: true,
    },
    bf_hours: {
      required: true,
      String: true,
    },
    bf_fullname: {
      required: true,
      String: true,
    },
    bf_email: {
      required: true,
      email: true,
    },
  },
  errorElement: "span",
  errorClass: "error",
  errorPlacement: function (error, element) {
    error.insertBefore(element);
  },
});

$(".next-btn1").click(function () {
  if (v.form()) {
    $(".tab-pane").hide();
    $("#step2").fadeIn(1000);
    $(".progressbar-dots").removeClass("active");
    $(".progressbar-dots:nth-child(2)").addClass("active");
  }
});
$(".next-btn2").click(function () {
  if (v.form()) {
    $(".tab-pane").hide();
    $("#step3").fadeIn(1000);
    $(".progressbar-dots").removeClass("active");
    $(".progressbar-dots:nth-child(3)").addClass("active");
  }
});

$(document).ready(function () {
  var date_input = $('input[name="date"]'); //our date input has the name "date"
  var container =
    $(".bootstrap-iso form").length > 0
      ? $(".bootstrap-iso form").parent()
      : "body";
  var options = {
    format: "mm/dd/yyyy",
    container: container,
    todayHighlight: true,
    autoclose: true,
  };
  date_input.datepicker(options);
});

var handles = [
  "SELECT STATE",
  "Andhra Pradesh",
  "Arunachal Pradesh",
  "Assam",
  "Bihar",
  "Chhattisgarh",
  "Dadra and Nagar Haveli",
  "Daman and Diu",
  "Delhi",
  "Goa",
  "Gujarat",
  "Haryana",
  "Himachal Pradesh",
  "Jammu and Kashmir",
  "Jharkhand",
  "Karnataka",
  "Kerala",
  "Madhya Pradesh",
  "Maharashtra",
  "Manipur",
  "Meghalaya",
  "Mizoram",
  "Nagaland",
  "Orissa",
  "Puducherry",
  "Punjab",
  "Rajasthan",
  "Sikkim",
  "Tamil Nadu",
  "Telangana",
  "Tripura",
  "Uttar Pradesh",
  "Uttarakhand",
  "West Bengal",
];

$(function () {
  var options = "";
  for (var i = 0; i < handles.length; i++) {
    options += '<option value="' + handles[i] + '">' + handles[i] + "</option>";
  }
  $("#listBox1").html(options);
  $("#listBox2").html(options);
});

function selct_district1($val1) {
  if ($val1 == "SELECT STATE") {
    var options = "";
    $("#secondlist1").html(options);
  }
  if ($val1 == "Andhra Pradesh") {
    var andhra = [
      "Adoni",
      "Amalapuram",
      "Anakapalle",
      "Anantapur",
      "Bapatla",
      "Bheemunipatnam",
      "Bhimavaram",
      "Bobbili",
      "Chilakaluripet",
      "Chirala",
      "Chittoor",
      "Dharmavaram",
      "Eluru",
      "Gooty",
      "Gudivada",
      "Gudur",
      "Guntakal",
      "Guntur",
      "Hindupur",
      "Jaggaiahpet",
      "Jammalamadugu",
      "Kadapa",
      "Kadiri",
      "Kakinada",
      "Kandukur",
      "Kavali",
      "Kovvur",
      "Kurnool",
      "Macherla",
      "Machilipatnam",
      "Madanapalle",
      "Mandapeta",
      "Markapur",
      "Nagari",
      "Naidupet",
      "Nandyal",
      "Narasapuram",
      "Narasaraopet",
      "Narsipatnam",
      "Nellore",
      "Nidadavole",
      "Nuzvid",
      "Ongole",
      "Palacole",
      "Palasa Kasibugga",
      "Parvathipuram",
      "Pedana",
      "Peddapuram",
      "Pithapuram",
      "Ponnur",
      "Proddatur",
      "Punganur",
      "Puttur",
      "Rajahmundry",
      "Rajam",
      "Rajampet",
      "Ramachandrapuram",
      "Rayachoti",
      "Rayadurg",
      "Renigunta",
      "Repalle",
      "Salur",
      "Samalkot",
      "Sattenapalle",
      "Srikakulam",
      "Srikalahasti",
      "Srisailam Project (Right Flank Colony) Township",
      "Sullurpeta",
      "Tadepalligudem",
      "Tadpatri",
      "Tanuku",
      "Tenali",
      "Tirupati",
      "Tiruvuru",
      "Tuni",
      "Uravakonda",
      "Venkatagiri",
      "Vijayawada",
      "Vinukonda",
      "Visakhapatnam",
      "Vizianagaram",
      "Yemmiganur",
      "Yerraguntla",
    ];
    $(function () {
      var options = "";
      for (var i = 0; i < andhra.length; i++) {
        options +=
          '<option value="' + andhra[i] + '">' + andhra[i] + "</option>";
      }
      $("#secondlist1").html(options);
    });
  }

  if ($val1 == "Arunachal Pradesh") {
    var ap = [
      "Anjaw",
      "Changlang",
      "Dibang Valley",
      "East Siang",
      "East Kameng",
      "Kurung Kumey",
      "Lohit",
      "Longding",
      "Lower Dibang Valley",
      "Lower Subansiri",
      "Papum Pare",
      "Tawang",
      "Tirap",
      "Upper Siang",
      "Upper Subansiri",
      "West Kameng",
      "West Siang",
    ];
    $(function () {
      var options = "";
      for (var i = 0; i < ap.length; i++) {
        options += '<option value="' + ap[i] + '">' + ap[i] + "</option>";
      }
      $("#secondlist1").html(options);
    });
  }

  if ($val1 == "Assam") {
    var assam = [
      "Barpeta",
      "Bongaigaon City",
      "Dhubri",
      "Dibrugarh",
      "Diphu",
      "Goalpara",
      "Guwahati",
      "Jorhat",
      "Karimganj",
      "Lanka",
      "Lumding",
      "Mangaldoi",
      "Mankachar",
      "Margherita",
      "Mariani",
      "Marigaon",
      "Nagaon",
      "Nalbari",
      "North Lakhimpur",
      "Rangia",
      "Sibsagar",
      "Silapathar",
      "Silchar",
      "Tezpur",
      "Tinsukia",
    ];
    $(function () {
      var options = "";
      for (var i = 0; i < assam.length; i++) {
        options += '<option value="' + assam[i] + '">' + assam[i] + "</option>";
      }
      $("#secondlist1").html(options);
    });
  }

  if ($val1 == "Bihar") {
    var bihar = [
      "Araria",
      "Arrah",
      "Arwal",
      "Asarganj",
      "Aurangabad",
      "Bagaha",
      "Barh",
      "Begusarai",
      "Bettiah",
      "Bhabua",
      "Bhagalpur",
      "Buxar",
      "Chhapra",
      "Darbhanga",
      "Dehri-on-Sone",
      "Dumraon",
      "Forbesganj",
      "Gaya",
      "Gopalganj",
      "Hajipur",
      "Jamalpur",
      "Jamui",
      "Jehanabad",
      "Katihar",
      "Kishanganj",
      "Lakhisarai",
      "Lalganj",
      "Madhepura",
      "Madhubani",
      "Maharajganj",
      "Mahnar Bazar",
      "Makhdumpur",
      "Maner",
      "Manihari",
      "Marhaura",
      "Masaurhi",
      "Mirganj",
      "Mokameh",
      "Motihari",
      "Motipur",
      "Munger",
      "Murliganj",
      "Muzaffarpur",
      "Narkatiaganj",
      "Naugachhia",
      "Nawada",
      "Nokha",
      "Patna*",
      "Piro",
      "Purnia",
      "Rafiganj",
      "Rajgir",
      "Ramnagar",
      "Raxaul Bazar",
      "Revelganj",
      "Rosera",
      "Saharsa",
      "Samastipur",
      "Sasaram",
      "Sheikhpura",
      "Sheohar",
      "Sherghati",
      "Silao",
      "Sitamarhi",
      "Siwan",
      "Sonepur",
      "Sugauli",
      "Sultanganj",
      "Supaul",
      "Warisaliganj",
    ];
    $(function () {
      var options = "";
      for (var i = 0; i < bihar.length; i++) {
        options += '<option value="' + bihar[i] + '">' + bihar[i] + "</option>";
      }
      $("#secondlist1").html(options);
    });
  }

  if ($val1 == "Chhattisgarh") {
    var Chhattisgarh = [
      "Ambikapur",
      "Bhatapara",
      "Bhilai Nagar",
      "Bilaspur",
      "Chirmiri",
      "Dalli-Rajhara",
      "Dhamtari",
      "Durg",
      "Jagdalpur",
      "Korba",
      "Mahasamund",
      "Manendragarh",
      "Mungeli",
      "Naila Janjgir",
      "Raigarh",
      "Raipur*",
      "Rajnandgaon",
      "Sakti",
      "Tilda Newra",
    ];
    $(function () {
      var options = "";
      for (var i = 0; i < Chhattisgarh.length; i++) {
        options +=
          '<option value="' +
          Chhattisgarh[i] +
          '">' +
          Chhattisgarh[i] +
          "</option>";
      }
      $("#secondlist1").html(options);
    });
  }

  if ($val1 == "Dadra and Nagar Haveli") {
    var dadra = ["Silvassa*"];
    $(function () {
      var options = "";
      for (var i = 0; i < dadra.length; i++) {
        options += '<option value="' + dadra[i] + '">' + dadra[i] + "</option>";
      }
      $("#secondlist1").html(options);
    });
  }

  if ($val1 == "Delhi") {
    var delhi = ["Delhi", "New Delhi*"];
    $(function () {
      var options = "";
      for (var i = 0; i < delhi.length; i++) {
        options += '<option value="' + delhi[i] + '">' + delhi[i] + "</option>";
      }
      $("#secondlist1").html(options);
    });
  }

  if ($val1 == "Goa") {
    var goa = ["Mapusa", "Margao", "Marmagao", "Panaji*"];
    $(function () {
      var options = "";
      for (var i = 0; i < goa.length; i++) {
        options += '<option value="' + goa[i] + '">' + goa[i] + "</option>";
      }
      $("#secondlist1").html(options);
    });
  }

  if ($val1 == "Gujarat") {
    var gujarat = [
      "Adalaj",
      "Ahmedabad",
      "Amreli",
      "Anand",
      "Anjar",
      "Ankleshwar",
      "Bharuch",
      "Bhavnagar",
      "Bhuj",
      "Chhapra",
      "Deesa",
      "Dhoraji",
      "Godhra",
      "Jamnagar",
      "Kadi",
      "Kapadvanj",
      "Keshod",
      "Khambhat",
      "Lathi",
      "Limbdi",
      "Lunawada",
      "Mahesana",
      "Mahuva",
      "Manavadar",
      "Mandvi",
      "Mangrol",
      "Mansa",
      "Mahemdabad",
      "Modasa",
      "Morvi",
      "Nadiad",
      "Navsari",
      "Padra",
      "Palanpur",
      "Palitana",
      "Pardi",
      "Patan",
      "Petlad",
      "Porbandar",
      "Radhanpur",
      "Rajkot",
      "Rajpipla",
      "Rajula",
      "Ranavav",
      "Rapar",
      "Salaya",
      "Sanand",
      "Savarkundla",
      "Sidhpur",
      "Sihor",
      "Songadh",
      "Surat",
      "Talaja",
      "Thangadh",
      "Tharad",
      "Umbergaon",
      "Umreth",
      "Una",
      "Unjha",
      "Upleta",
      "Vadnagar",
      "Vadodara",
      "Valsad",
      "Vapi",
      "Vapi",
      "Veraval",
      "Vijapur",
      "Viramgam",
      "Visnagar",
      "Vyara",
      "Wadhwan",
      "Wankaner",
    ];
    $(function () {
      var options = "";
      for (var i = 0; i < gujarat.length; i++) {
        options +=
          '<option value="' + gujarat[i] + '">' + gujarat[i] + "</option>";
      }
      $("#secondlist1").html(options);
    });
  }

  if ($val1 == "Haryana") {
    var haryana = [
      "Bahadurgarh",
      "Bhiwani",
      "Charkhi Dadri",
      "Faridabad",
      "Fatehabad",
      "Gohana",
      "Gurgaon",
      "Hansi",
      "Hisar",
      "Jind",
      "Kaithal",
      "Karnal",
      "Ladwa",
      "Mahendragarh",
      "Mandi Dabwali",
      "Narnaul",
      "Narwana",
      "Palwal",
      "Panchkula",
      "Panipat",
      "Pehowa",
      "Pinjore",
      "Rania",
      "Ratia",
      "Rewari",
      "Rohtak",
      "Safidon",
      "Samalkha",
      "Sarsod",
      "Shahbad",
      "Sirsa",
      "Sohna",
      "Sonipat",
      "Taraori",
      "Thanesar",
      "Tohana",
      "Yamunanagar",
    ];
    $(function () {
      var options = "";
      for (var i = 0; i < haryana.length; i++) {
        options +=
          '<option value="' + haryana[i] + '">' + haryana[i] + "</option>";
      }
      $("#secondlist1").html(options);
    });
  }

  if ($val1 == "Himachal Pradesh") {
    var himachal = [
      "Mandi",
      "Nahan",
      "Palampur",
      "Shimla*",
      "Solan",
      "Sundarnagar",
    ];
    $(function () {
      var options = "";
      for (var i = 0; i < himachal.length; i++) {
        options +=
          '<option value="' + himachal[i] + '">' + himachal[i] + "</option>";
      }
      $("#secondlist1").html(options);
    });
  }

  if ($val1 == "Jammu and Kashmir") {
    var jammu = [
      "Anantnag",
      "Baramula",
      "Jammu",
      "Kathua",
      "Punch",
      "Rajauri",
      "Sopore",
      "Srinagar*",
      "Udhampur",
    ];
    $(function () {
      var options = "";
      for (var i = 0; i < jammu.length; i++) {
        options += '<option value="' + jammu[i] + '">' + jammu[i] + "</option>";
      }
      $("#secondlist1").html(options);
    });
  }

  if ($val1 == "Jharkhand") {
    var jharkhand = [
      "Adityapur",
      "Bokaro Steel City",
      "Chaibasa",
      "Chatra",
      "Chirkunda",
      "Medininagar (Daltonganj)",
      "Deoghar",
      "Dhanbad",
      "Dumka",
      "Giridih",
      "Gumia",
      "Hazaribag",
      "Jamshedpur",
      "Jhumri Tilaiya",
      "Lohardaga",
      "Madhupur",
      "Mihijam",
      "Musabani",
      "Pakaur",
      "Patratu",
      "Phusro",
      "Ramgarh",
      "Ranchi*",
      "Sahibganj",
      "Saunda",
      "Simdega",
      "Tenu dam-cum-Kathhara",
    ];
    $(function () {
      var options = "";
      for (var i = 0; i < jharkhand.length; i++) {
        options +=
          '<option value="' + jharkhand[i] + '">' + jharkhand[i] + "</option>";
      }
      $("#secondlist1").html(options);
    });
  }

  if ($val1 == "Karnataka") {
    var karnataka = [
      "Adyar",
      "Afzalpur",
      "Arsikere",
      "Athni",
      "Bengaluru",
      "Belagavi",
      "Ballari",
      "Chikkamagaluru",
      "Davanagere",
      "Gokak",
      "Hubli-Dharwad",
      "Karwar",
      "Kolar",
      "Lakshmeshwar",
      "Lingsugur",
      "Maddur",
      "Madhugiri",
      "Madikeri",
      "Magadi",
      "Mahalingapura",
      "Malavalli",
      "Malur",
      "Mandya",
      "Mangaluru",
      "Manvi",
      "Mudalagi",
      "Mudabidri",
      "Muddebihal",
      "Mudhol",
      "Mulbagal",
      "Mundargi",
      "Nanjangud",
      "Nargund",
      "Navalgund",
      "Nelamangala",
      "Pavagada",
      "Piriyapatna",
      "Puttur",
      "Rabkavi Banhatti",
      "Raayachuru",
      "Ranebennuru",
      "Ramanagaram",
      "Ramdurg",
      "Ranibennur",
      "Robertson Pet",
      "Ron",
      "Sadalagi",
      "Sagara",
      "Sakaleshapura",
      "Sindagi",
      "Sanduru",
      "Sankeshwara",
      "Saundatti-Yellamma",
      "Savanur",
      "Sedam",
      "Shahabad",
      "Shahpur",
      "Shiggaon",
      "Shikaripur",
      "Shivamogga",
      "Surapura",
      "Shrirangapattana",
      "Sidlaghatta",
      "Sindhagi",
      "Sindhnur",
      "Sira",
      "Sirsi",
      "Siruguppa",
      "Srinivaspur",
      "Tarikere",
      "Tekkalakote",
      "Terdal",
      "Talikota",
      "Tiptur",
      "Tumkur",
      "Udupi",
      "Vijayapura",
      "Wadi",
      "Yadgir",
    ];
    $(function () {
      var options = "";
      for (var i = 0; i < karnataka.length; i++) {
        options +=
          '<option value="' + karnataka[i] + '">' + karnataka[i] + "</option>";
      }
      $("#secondlist1").html(options);
    });
  }

  if ($val1 == "Kerala") {
    var kerala = [
      "Adoor",
      "Alappuzha",
      "Attingal",
      "Chalakudy",
      "Changanassery",
      "Cherthala",
      "Chittur-Thathamangalam",
      "Guruvayoor",
      "Kanhangad",
      "Kannur",
      "Kasaragod",
      "Kayamkulam",
      "Kochi",
      "Kodungallur",
      "Kollam",
      "Kottayam",
      "Kozhikode",
      "Kunnamkulam",
      "Malappuram",
      "Mattannur",
      "Mavelikkara",
      "Mavoor",
      "Muvattupuzha",
      "Nedumangad",
      "Neyyattinkara",
      "Nilambur",
      "Ottappalam",
      "Palai",
      "Palakkad",
      "Panamattom",
      "Panniyannur",
      "Pappinisseri",
      "Paravoor",
      "Pathanamthitta",
      "Peringathur",
      "Perinthalmanna",
      "Perumbavoor",
      "Ponnani",
      "Punalur",
      "Puthuppally",
      "Koyilandy",
      "Shoranur",
      "Taliparamba",
      "Thiruvalla",
      "Thiruvananthapuram",
      "Thodupuzha",
      "Thrissur",
      "Tirur",
      "Vaikom",
      "Varkala",
      "Vatakara",
    ];
    $(function () {
      var options = "";
      for (var i = 0; i < kerala.length; i++) {
        options +=
          '<option value="' + kerala[i] + '">' + kerala[i] + "</option>";
      }
      $("#secondlist1").html(options);
    });
  }

  if ($val1 == "Madhya Pradesh") {
    var mp = [
      "Alirajpur",
      "Ashok Nagar",
      "Balaghat",
      "Bhopal",
      "Ganjbasoda",
      "Gwalior",
      "Indore",
      "Itarsi",
      "Jabalpur",
      "Lahar",
      "Maharajpur",
      "Mahidpur",
      "Maihar",
      "Malaj Khand",
      "Manasa",
      "Manawar",
      "Mandideep",
      "Mandla",
      "Mandsaur",
      "Mauganj",
      "Mhow Cantonment",
      "Mhowgaon",
      "Morena",
      "Multai",
      "Mundi",
      "Murwara (Katni)",
      "Nagda",
      "Nainpur",
      "Narsinghgarh",
      "Narsinghgarh",
      "Neemuch",
      "Nepanagar",
      "Niwari",
      "Nowgong",
      "Nowrozabad (Khodargama)",
      "Pachore",
      "Pali",
      "Panagar",
      "Pandhurna",
      "Panna",
      "Pasan",
      "Pipariya",
      "Pithampur",
      "Porsa",
      "Prithvipur",
      "Raghogarh-Vijaypur",
      "Rahatgarh",
      "Raisen",
      "Rajgarh",
      "Ratlam",
      "Rau",
      "Rehli",
      "Rewa",
      "Sabalgarh",
      "Sagar",
      "Sanawad",
      "Sarangpur",
      "Sarni",
      "Satna",
      "Sausar",
      "Sehore",
      "Sendhwa",
      "Seoni",
      "Seoni-Malwa",
      "Shahdol",
      "Shajapur",
      "Shamgarh",
      "Sheopur",
      "Shivpuri",
      "Shujalpur",
      "Sidhi",
      "Sihora",
      "Singrauli",
      "Sironj",
      "Sohagpur",
      "Tarana",
      "Tikamgarh",
      "Ujjain",
      "Umaria",
      "Vidisha",
      "Vijaypur",
      "Wara Seoni",
    ];
    $(function () {
      var options = "";
      for (var i = 0; i < mp.length; i++) {
        options += '<option value="' + mp[i] + '">' + mp[i] + "</option>";
      }
      $("#secondlist1").html(options);
    });
  }

  if ($val1 == "Maharashtra") {
    var maharashtra = [
      "Ahmednagar",
      "Akola",
      "Akot",
      "Amalner",
      "Ambejogai",
      "Amravati",
      "Anjangaon",
      "Arvi",
      "Aurangabad",
      "Bhiwandi",
      "Dhule",
      "Kalyan-Dombivali",
      "Ichalkaranji",
      "Kalyan-Dombivali",
      "Karjat",
      "Latur",
      "Loha",
      "Lonar",
      "Lonavla",
      "Mahad",
      "Malegaon",
      "Malkapur",
      "Mangalvedhe",
      "Mangrulpir",
      "Manjlegaon",
      "Manmad",
      "Manwath",
      "Mehkar",
      "Mhaswad",
      "Mira-Bhayandar",
      "Morshi",
      "Mukhed",
      "Mul",
      "Greater Mumbai*",
      "Murtijapur",
      "Nagpur",
      "Nanded-Waghala",
      "Nandgaon",
      "Nandura",
      "Nandurbar",
      "Narkhed",
      "Nashik",
      "Navi Mumbai",
      "Nawapur",
      "Nilanga",
      "Osmanabad",
      "Ozar",
      "Pachora",
      "Paithan",
      "Palghar",
      "Pandharkaoda",
      "Pandharpur",
      "Panvel",
      "Parbhani",
      "Parli",
      "Partur",
      "Pathardi",
      "Pathri",
      "Patur",
      "Pauni",
      "Pen",
      "Phaltan",
      "Pulgaon",
      "Pune",
      "Purna",
      "Pusad",
      "Rahuri",
      "Rajura",
      "Ramtek",
      "Ratnagiri",
      "Raver",
      "Risod",
      "Sailu",
      "Sangamner",
      "Sangli",
      "Sangole",
      "Sasvad",
      "Satana",
      "Satara",
      "Savner",
      "Sawantwadi",
      "Shahade",
      "Shegaon",
      "Shendurjana",
      "Shirdi",
      "Shirpur-Warwade",
      "Shirur",
      "Shrigonda",
      "Shrirampur",
      "Sillod",
      "Sinnar",
      "Solapur",
      "Soyagaon",
      "Talegaon Dabhade",
      "Talode",
      "Tasgaon",
      "Thane",
      "Tirora",
      "Tuljapur",
      "Tumsar",
      "Uchgaon",
      "Udgir",
      "Umarga",
      "Umarkhed",
      "Umred",
      "Uran",
      "Uran Islampur",
      "Vadgaon Kasba",
      "Vaijapur",
      "Vasai-Virar",
      "Vita",
      "Wadgaon Road",
      "Wai",
      "Wani",
      "Wardha",
      "Warora",
      "Warud",
      "Washim",
      "Yavatmal",
      "Yawal",
      "Yevla",
    ];
    $(function () {
      var options = "";
      for (var i = 0; i < maharashtra.length; i++) {
        options +=
          '<option value="' +
          maharashtra[i] +
          '">' +
          maharashtra[i] +
          "</option>";
      }
      $("#secondlist1").html(options);
    });
  }

  if ($val1 == "Manipur") {
    var manipur = ["Imphal*", "Lilong", "Mayang Imphal", "Thoubal"];
    $(function () {
      var options = "";
      for (var i = 0; i < manipur.length; i++) {
        options +=
          '<option value="' + manipur[i] + '">' + manipur[i] + "</option>";
      }
      $("#secondlist1").html(options);
    });
  }

  if ($val1 == "Meghalaya") {
    var meghalaya = ["Nongstoin", "Shillong*", "Tura"];
    $(function () {
      var options = "";
      for (var i = 0; i < meghalaya.length; i++) {
        options +=
          '<option value="' + meghalaya[i] + '">' + meghalaya[i] + "</option>";
      }
      $("#secondlist1").html(options);
    });
  }

  if ($val1 == "Mizoram") {
    var mizoram = ["Aizawl", "Lunglei", "Saiha"];
    $(function () {
      var options = "";
      for (var i = 0; i < mizoram.length; i++) {
        options +=
          '<option value="' + mizoram[i] + '">' + mizoram[i] + "</option>";
      }
      $("#secondlist1").html(options);
    });
  }

  if ($val1 == "Nagaland") {
    var nagaland = [
      "Dimapur",
      "Kohima*",
      "Mokokchung",
      "Tuensang",
      "Wokha",
      "Zunheboto",
    ];
    $(function () {
      var options = "";
      for (var i = 0; i < nagaland.length; i++) {
        options +=
          '<option value="' + nagaland[i] + '">' + nagaland[i] + "</option>";
      }
      $("#secondlist1").html(options);
    });
  }

  if ($val1 == "Orissa") {
    var orissa = [
      "Balangir",
      "Baleshwar Town",
      "Barbil",
      "Bargarh",
      "Baripada Town",
      "Bhadrak",
      "Bhawanipatna",
      "Bhubaneswar*",
      "Brahmapur",
      "Byasanagar",
      "Cuttack",
      "Dhenkanal",
      "Jatani",
      "Jharsuguda",
      "Kendrapara",
      "Kendujhar",
      "Malkangiri",
      "Nabarangapur",
      "Paradip",
      "Parlakhemundi",
      "Pattamundai",
      "Phulabani",
      "Puri",
      "Rairangpur",
      "Rajagangapur",
      "Raurkela",
      "Rayagada",
      "Sambalpur",
      "Soro",
      "Sunabeda",
      "Sundargarh",
      "Talcher",
      "Tarbha",
      "Titlagarh",
    ];
    $(function () {
      var options = "";
      for (var i = 0; i < orissa.length; i++) {
        options +=
          '<option value="' + orissa[i] + '">' + orissa[i] + "</option>";
      }
      $("#secondlist1").html(options);
    });
  }

  if ($val1 == "Puducherry") {
    var puducherry = ["Karaikal", "Mahe", "Pondicherry*", "Yanam"];
    $(function () {
      var options = "";
      for (var i = 0; i < puducherry.length; i++) {
        options +=
          '<option value="' +
          puducherry[i] +
          '">' +
          puducherry[i] +
          "</option>";
      }
      $("#secondlist1").html(options);
    });
  }

  if ($val1 == "Punjab") {
    var punjab = [
      "Amritsar",
      "Barnala",
      "Batala",
      "Bathinda",
      "Dhuri",
      "Faridkot",
      "Fazilka",
      "Firozpur",
      "Firozpur Cantt.",
      "Gobindgarh",
      "Gurdaspur",
      "Hoshiarpur",
      "Jagraon",
      "Jalandhar Cantt.",
      "Jalandhar",
      "Kapurthala",
      "Khanna",
      "Kharar",
      "Kot Kapura",
      "Longowal",
      "Ludhiana",
      "Malerkotla",
      "Malout",
      "Mansa",
      "Moga",
      "Mohali",
      "Morinda, India",
      "Mukerian",
      "Muktsar",
      "Nabha",
      "Nakodar",
      "Nangal",
      "Nawanshahr",
      "Pathankot",
      "Patiala",
      "Pattran",
      "Patti",
      "Phagwara",
      "Phillaur",
      "Qadian",
      "Raikot",
      "Rajpura",
      "Rampura Phul",
      "Rupnagar",
      "Samana",
      "Sangrur",
      "Sirhind Fatehgarh Sahib",
      "Sujanpur",
      "Sunam",
      "Talwara",
      "Tarn Taran",
      "Urmar Tanda",
      "Zira",
      "Zirakpur",
    ];
    $(function () {
      var options = "";
      for (var i = 0; i < punjab.length; i++) {
        options +=
          '<option value="' +
          punjab[i] +
          '">' +
          napunjabgaland[i] +
          "</option>";
      }
      $("#secondlist1").html(options);
    });
  }

  if ($val1 == "Rajasthan") {
    var rajasthan = [
      "Ajmer",
      "Alwar",
      "Bikaner",
      "Bharatpur",
      "Bhilwara",
      "Jaipur*",
      "Jodhpur",
      "Lachhmangarh",
      "Ladnu",
      "Lakheri",
      "Lalsot",
      "Losal",
      "Makrana",
      "Malpura",
      "Mandalgarh",
      "Mandawa",
      "Mangrol",
      "Merta City",
      "Mount Abu",
      "Nadbai",
      "Nagar",
      "Nagaur",
      "Nasirabad",
      "Nathdwara",
      "Neem-Ka-Thana",
      "Nimbahera",
      "Nohar",
      "Nokha",
      "Pali",
      "Phalodi",
      "Phulera",
      "Pilani",
      "Pilibanga",
      "Pindwara",
      "Pipar City",
      "Prantij",
      "Pratapgarh",
      "Raisinghnagar",
      "Rajakhera",
      "Rajaldesar",
      "Rajgarh (Alwar)",
      "Rajgarh (Churu)",
      "Rajsamand",
      "Ramganj Mandi",
      "Ramngarh",
      "Ratangarh",
      "Rawatbhata",
      "Rawatsar",
      "Reengus",
      "Sadri",
      "Sadulshahar",
      "Sadulpur",
      "Sagwara",
      "Sambhar",
      "Sanchore",
      "Sangaria",
      "Sardarshahar",
      "Sawai Madhopur",
      "Shahpura",
      "Shahpura",
      "Sheoganj",
      "Sikar",
      "Sirohi",
      "Sojat",
      "Sri Madhopur",
      "Sujangarh",
      "Sumerpur",
      "Suratgarh",
      "Taranagar",
      "Todabhim",
      "Todaraisingh",
      "Tonk",
      "Udaipur",
      "Udaipurwati",
      "Vijainagar, Ajmer",
    ];
    $(function () {
      var options = "";
      for (var i = 0; i < rajasthan.length; i++) {
        options +=
          '<option value="' + rajasthan[i] + '">' + rajasthan[i] + "</option>";
      }
      $("#secondlist1").html(options);
    });
  }

  if ($val1 == "Tamil Nadu") {
    var tn = [
      "Arakkonam",
      "Aruppukkottai",
      "Chennai*",
      "Coimbatore",
      "Erode",
      "Gobichettipalayam",
      "Kancheepuram",
      "Karur",
      "Lalgudi",
      "Madurai",
      "Manachanallur",
      "Nagapattinam",
      "Nagercoil",
      "Namagiripettai",
      "Namakkal",
      "Nandivaram-Guduvancheri",
      "Nanjikottai",
      "Natham",
      "Nellikuppam",
      "Neyveli (TS)",
      "O' Valley",
      "Oddanchatram",
      "P.N.Patti",
      "Pacode",
      "Padmanabhapuram",
      "Palani",
      "Palladam",
      "Pallapatti",
      "Pallikonda",
      "Panagudi",
      "Panruti",
      "Paramakudi",
      "Parangipettai",
      "Pattukkottai",
      "Perambalur",
      "Peravurani",
      "Periyakulam",
      "Periyasemur",
      "Pernampattu",
      "Pollachi",
      "Polur",
      "Ponneri",
      "Pudukkottai",
      "Pudupattinam",
      "Puliyankudi",
      "Punjaipugalur",
      "Ranipet",
      "Rajapalayam",
      "Ramanathapuram",
      "Rameshwaram",
      "Rasipuram",
      "Salem",
      "Sankarankoil",
      "Sankari",
      "Sathyamangalam",
      "Sattur",
      "Shenkottai",
      "Sholavandan",
      "Sholingur",
      "Sirkali",
      "Sivaganga",
      "Sivagiri",
      "Sivakasi",
      "Srivilliputhur",
      "Surandai",
      "Suriyampalayam",
      "Tenkasi",
      "Thammampatti",
      "Thanjavur",
      "Tharamangalam",
      "Tharangambadi",
      "Theni Allinagaram",
      "Thirumangalam",
      "Thirupuvanam",
      "Thiruthuraipoondi",
      "Thiruvallur",
      "Thiruvarur",
      "Thuraiyur",
      "Tindivanam",
      "Tiruchendur",
      "Tiruchengode",
      "Tiruchirappalli",
      "Tirukalukundram",
      "Tirukkoyilur",
      "Tirunelveli",
      "Tirupathur",
      "Tirupathur",
      "Tiruppur",
      "Tiruttani",
      "Tiruvannamalai",
      "Tiruvethipuram",
      "Tittakudi",
      "Udhagamandalam",
      "Udumalaipettai",
      "Unnamalaikadai",
      "Usilampatti",
      "Uthamapalayam",
      "Uthiramerur",
      "Vadakkuvalliyur",
      "Vadalur",
      "Vadipatti",
      "Valparai",
      "Vandavasi",
      "Vaniyambadi",
      "Vedaranyam",
      "Vellakoil",
      "Vellore",
      "Vikramasingapuram",
      "Viluppuram",
      "Virudhachalam",
      "Virudhunagar",
      "Viswanatham",
    ];
    $(function () {
      var options = "";
      for (var i = 0; i < tn.length; i++) {
        options += '<option value="' + tn[i] + '">' + tn[i] + "</option>";
      }
      $("#secondlist1").html(options);
    });
  }

  if ($val1 == "Telangana") {
    var telangana = [
      "Adilabad",
      "Bellampalle",
      "Bhadrachalam",
      "Bhainsa",
      "Bhongir",
      "Bodhan",
      "Farooqnagar",
      "Gadwal",
      "Hyderabad*",
      "Jagtial",
      "Jangaon",
      "Kagaznagar",
      "Kamareddy",
      "Karimnagar",
      "Khammam",
      "Koratla",
      "Kothagudem",
      "Kyathampalle",
      "Mahbubnagar",
      "Mancherial",
      "Mandamarri",
      "Manuguru",
      "Medak",
      "Miryalaguda",
      "Nagarkurnool",
      "Narayanpet",
      "Nirmal",
      "Nizamabad",
      "Palwancha",
      "Ramagundam",
      "Sadasivpet",
      "Sangareddy",
      "Siddipet",
      "Sircilla",
      "Suryapet",
      "Tandur",
      "Vikarabad",
      "Wanaparthy",
      "Warangal",
      "Yellandu",
    ];
    $(function () {
      var options = "";
      for (var i = 0; i < telangana.length; i++) {
        options +=
          '<option value="' + telangana[i] + '">' + telangana[i] + "</option>";
      }
      $("#secondlist1").html(options);
    });
  }

  if ($val1 == "Tripura") {
    var tripura = [
      "Agartala*",
      "Belonia",
      "Dharmanagar",
      "Kailasahar",
      "Khowai",
      "Pratapgarh",
      "Udaipur",
    ];
    $(function () {
      var options = "";
      for (var i = 0; i < tripura.length; i++) {
        options +=
          '<option value="' + tripura[i] + '">' + tripura[i] + "</option>";
      }
      $("#secondlist1").html(options);
    });
  }

  if ($val1 == "Uttar Pradesh") {
    var up = [
      "Achhnera",
      "Agra",
      "Aligarh",
      "Allahabad",
      "Amroha",
      "Azamgarh",
      "Bahraich",
      "Chandausi",
      "Etawah",
      "Firozabad",
      "Fatehpur Sikri",
      "Hapur",
      "Hardoi *",
      "Jhansi",
      "Kalpi",
      "Kanpur",
      "Khair",
      "Laharpur",
      "Lakhimpur",
      "Lal Gopalganj Nindaura",
      "Lalitpur",
      "Lalganj",
      "Lar",
      "Loni",
      "Lucknow*",
      "Mathura",
      "Meerut",
      "Modinagar",
      "Moradabad",
      "Nagina",
      "Najibabad",
      "Nakur",
      "Nanpara",
      "Naraura",
      "Naugawan Sadat",
      "Nautanwa",
      "Nawabganj",
      "Nehtaur",
      "Niwai",
      "Noida",
      "Noorpur",
      "Obra",
      "Orai",
      "Padrauna",
      "Palia Kalan",
      "Parasi",
      "Phulpur",
      "Pihani",
      "Pilibhit",
      "Pilkhuwa",
      "Powayan",
      "Pukhrayan",
      "Puranpur",
      "Purquazi",
      "Purwa",
      "Rae Bareli",
      "Rampur",
      "Rampur Maniharan",
      "Rampur Maniharan",
      "Rasra",
      "Rath",
      "Renukoot",
      "Reoti",
      "Robertsganj",
      "Rudauli",
      "Rudrapur",
      "Sadabad",
      "Safipur",
      "Saharanpur",
      "Sahaspur",
      "Sahaswan",
      "Sahawar",
      "Sahjanwa",
      "Saidpur",
      "Sambhal",
      "Samdhan",
      "Samthar",
      "Sandi",
      "Sandila",
      "Sardhana",
      "Seohara",
      "Shahabad, Hardoi",
      "Shahabad, Rampur",
      "Shahganj",
      "Shahjahanpur",
      "Shamli",
      "Shamsabad, Agra",
      "Shamsabad, Farrukhabad",
      "Sherkot",
      "Shikarpur, Bulandshahr",
      "Shikohabad",
      "Shishgarh",
      "Siana",
      "Sikanderpur",
      "Sikandra Rao",
      "Sikandrabad",
      "Sirsaganj",
      "Sirsi",
      "Sitapur",
      "Soron",
      "Suar",
      "Sultanpur",
      "Sumerpur",
      "Tanda",
      "Thakurdwara",
      "Thana Bhawan",
      "Tilhar",
      "Tirwaganj",
      "Tulsipur",
      "Tundla",
      "Ujhani",
      "Unnao",
      "Utraula",
      "Varanasi",
      "Vrindavan",
      "Warhapur",
      "Zaidpur",
      "Zamania",
    ];
    $(function () {
      var options = "";
      for (var i = 0; i < up.length; i++) {
        options += '<option value="' + up[i] + '">' + up[i] + "</option>";
      }
      $("#secondlist1").html(options);
    });
  }

  if ($val1 == "Uttarakhand") {
    var uttarakhand = [
      "Bageshwar",
      "Dehradun",
      "Haldwani-cum-Kathgodam",
      "Hardwar",
      "Kashipur",
      "Manglaur",
      "Mussoorie",
      "Nagla",
      "Nainital",
      "Pauri",
      "Pithoragarh",
      "Ramnagar",
      "Rishikesh",
      "Roorkee",
      "Rudrapur",
      "Sitarganj",
      "Srinagar",
      "Tehri",
    ];
    $(function () {
      var options = "";
      for (var i = 0; i < uttarakhand.length; i++) {
        options +=
          '<option value="' +
          uttarakhand[i] +
          '">' +
          uttarakhand[i] +
          "</option>";
      }
      $("#secondlist1").html(options);
    });
  }

  if ($val1 == "West Bengal") {
    var wb = [
      "Adra",
      "Alipurduar",
      "Arambagh",
      "Asansol",
      "Baharampur",
      "Balurghat",
      "Bankura",
      "Darjiling",
      "English Bazar",
      "Gangarampur",
      "Habra",
      "Hugli-Chinsurah",
      "Jalpaiguri",
      "Jhargram",
      "Kalimpong",
      "Kharagpur",
      "Kolkata",
      "Mainaguri",
      "Malda",
      "Mathabhanga",
      "Medinipur",
      "Memari",
      "Monoharpur",
      "Murshidabad",
      "Nabadwip",
      "Naihati",
      "Panchla",
      "Pandua",
      "Paschim Punropara",
      "Purulia",
      "Raghunathpur",
      "Raghunathganj",
      "Raiganj",
      "Rampurhat",
      "Ranaghat",
      "Sainthia",
      "Santipur",
      "Siliguri",
      "Sonamukhi",
      "Srirampore",
      "Suri",
      "Taki",
      "Tamluk",
      "Tarakeswar",
    ];
    $(function () {
      var options = "";
      for (var i = 0; i < wb.length; i++) {
        options += '<option value="' + wb[i] + '">' + wb[i] + "</option>";
      }
      $("#secondlist1").html(options);
    });
  }
}

function selct_district2($val1) {
  if ($val1 == "SELECT STATE") {
    var options = "";
    $("#secondlist2").html(options);
  }
  if ($val1 == "Andhra Pradesh") {
    var andhra = [
      "Adoni",
      "Amalapuram",
      "Anakapalle",
      "Anantapur",
      "Bapatla",
      "Bheemunipatnam",
      "Bhimavaram",
      "Bobbili",
      "Chilakaluripet",
      "Chirala",
      "Chittoor",
      "Dharmavaram",
      "Eluru",
      "Gooty",
      "Gudivada",
      "Gudur",
      "Guntakal",
      "Guntur",
      "Hindupur",
      "Jaggaiahpet",
      "Jammalamadugu",
      "Kadapa",
      "Kadiri",
      "Kakinada",
      "Kandukur",
      "Kavali",
      "Kovvur",
      "Kurnool",
      "Macherla",
      "Machilipatnam",
      "Madanapalle",
      "Mandapeta",
      "Markapur",
      "Nagari",
      "Naidupet",
      "Nandyal",
      "Narasapuram",
      "Narasaraopet",
      "Narsipatnam",
      "Nellore",
      "Nidadavole",
      "Nuzvid",
      "Ongole",
      "Palacole",
      "Palasa Kasibugga",
      "Parvathipuram",
      "Pedana",
      "Peddapuram",
      "Pithapuram",
      "Ponnur",
      "Proddatur",
      "Punganur",
      "Puttur",
      "Rajahmundry",
      "Rajam",
      "Rajampet",
      "Ramachandrapuram",
      "Rayachoti",
      "Rayadurg",
      "Renigunta",
      "Repalle",
      "Salur",
      "Samalkot",
      "Sattenapalle",
      "Srikakulam",
      "Srikalahasti",
      "Srisailam Project (Right Flank Colony) Township",
      "Sullurpeta",
      "Tadepalligudem",
      "Tadpatri",
      "Tanuku",
      "Tenali",
      "Tirupati",
      "Tiruvuru",
      "Tuni",
      "Uravakonda",
      "Venkatagiri",
      "Vijayawada",
      "Vinukonda",
      "Visakhapatnam",
      "Vizianagaram",
      "Yemmiganur",
      "Yerraguntla",
    ];
    $(function () {
      var options = "";
      for (var i = 0; i < andhra.length; i++) {
        options +=
          '<option value="' + andhra[i] + '">' + andhra[i] + "</option>";
      }
      $("#secondlist2").html(options);
    });
  }

  if ($val1 == "Arunachal Pradesh") {
    var ap = [
      "Anjaw",
      "Changlang",
      "Dibang Valley",
      "East Siang",
      "East Kameng",
      "Kurung Kumey",
      "Lohit",
      "Longding",
      "Lower Dibang Valley",
      "Lower Subansiri",
      "Papum Pare",
      "Tawang",
      "Tirap",
      "Upper Siang",
      "Upper Subansiri",
      "West Kameng",
      "West Siang",
    ];
    $(function () {
      var options = "";
      for (var i = 0; i < ap.length; i++) {
        options += '<option value="' + ap[i] + '">' + ap[i] + "</option>";
      }
      $("#secondlist2").html(options);
    });
  }

  if ($val1 == "Assam") {
    var assam = [
      "Barpeta",
      "Bongaigaon City",
      "Dhubri",
      "Dibrugarh",
      "Diphu",
      "Goalpara",
      "Guwahati",
      "Jorhat",
      "Karimganj",
      "Lanka",
      "Lumding",
      "Mangaldoi",
      "Mankachar",
      "Margherita",
      "Mariani",
      "Marigaon",
      "Nagaon",
      "Nalbari",
      "North Lakhimpur",
      "Rangia",
      "Sibsagar",
      "Silapathar",
      "Silchar",
      "Tezpur",
      "Tinsukia",
    ];
    $(function () {
      var options = "";
      for (var i = 0; i < assam.length; i++) {
        options += '<option value="' + assam[i] + '">' + assam[i] + "</option>";
      }
      $("#secondlist2").html(options);
    });
  }

  if ($val1 == "Bihar") {
    var bihar = [
      "Araria",
      "Arrah",
      "Arwal",
      "Asarganj",
      "Aurangabad",
      "Bagaha",
      "Barh",
      "Begusarai",
      "Bettiah",
      "Bhabua",
      "Bhagalpur",
      "Buxar",
      "Chhapra",
      "Darbhanga",
      "Dehri-on-Sone",
      "Dumraon",
      "Forbesganj",
      "Gaya",
      "Gopalganj",
      "Hajipur",
      "Jamalpur",
      "Jamui",
      "Jehanabad",
      "Katihar",
      "Kishanganj",
      "Lakhisarai",
      "Lalganj",
      "Madhepura",
      "Madhubani",
      "Maharajganj",
      "Mahnar Bazar",
      "Makhdumpur",
      "Maner",
      "Manihari",
      "Marhaura",
      "Masaurhi",
      "Mirganj",
      "Mokameh",
      "Motihari",
      "Motipur",
      "Munger",
      "Murliganj",
      "Muzaffarpur",
      "Narkatiaganj",
      "Naugachhia",
      "Nawada",
      "Nokha",
      "Patna*",
      "Piro",
      "Purnia",
      "Rafiganj",
      "Rajgir",
      "Ramnagar",
      "Raxaul Bazar",
      "Revelganj",
      "Rosera",
      "Saharsa",
      "Samastipur",
      "Sasaram",
      "Sheikhpura",
      "Sheohar",
      "Sherghati",
      "Silao",
      "Sitamarhi",
      "Siwan",
      "Sonepur",
      "Sugauli",
      "Sultanganj",
      "Supaul",
      "Warisaliganj",
    ];
    $(function () {
      var options = "";
      for (var i = 0; i < bihar.length; i++) {
        options += '<option value="' + bihar[i] + '">' + bihar[i] + "</option>";
      }
      $("#secondlist2").html(options);
    });
  }

  if ($val1 == "Chhattisgarh") {
    var Chhattisgarh = [
      "Ambikapur",
      "Bhatapara",
      "Bhilai Nagar",
      "Bilaspur",
      "Chirmiri",
      "Dalli-Rajhara",
      "Dhamtari",
      "Durg",
      "Jagdalpur",
      "Korba",
      "Mahasamund",
      "Manendragarh",
      "Mungeli",
      "Naila Janjgir",
      "Raigarh",
      "Raipur*",
      "Rajnandgaon",
      "Sakti",
      "Tilda Newra",
    ];
    $(function () {
      var options = "";
      for (var i = 0; i < Chhattisgarh.length; i++) {
        options +=
          '<option value="' +
          Chhattisgarh[i] +
          '">' +
          Chhattisgarh[i] +
          "</option>";
      }
      $("#secondlist2").html(options);
    });
  }

  if ($val1 == "Dadra and Nagar Haveli") {
    var dadra = ["Silvassa*"];
    $(function () {
      var options = "";
      for (var i = 0; i < dadra.length; i++) {
        options += '<option value="' + dadra[i] + '">' + dadra[i] + "</option>";
      }
      $("#secondlist2").html(options);
    });
  }

  if ($val1 == "Delhi") {
    var delhi = ["Delhi", "New Delhi*"];
    $(function () {
      var options = "";
      for (var i = 0; i < delhi.length; i++) {
        options += '<option value="' + delhi[i] + '">' + delhi[i] + "</option>";
      }
      $("#secondlist2").html(options);
    });
  }

  if ($val1 == "Goa") {
    var goa = ["Mapusa", "Margao", "Marmagao", "Panaji*"];
    $(function () {
      var options = "";
      for (var i = 0; i < goa.length; i++) {
        options += '<option value="' + goa[i] + '">' + goa[i] + "</option>";
      }
      $("#secondlist2").html(options);
    });
  }

  if ($val1 == "Gujarat") {
    var gujarat = [
      "Adalaj",
      "Ahmedabad",
      "Amreli",
      "Anand",
      "Anjar",
      "Ankleshwar",
      "Bharuch",
      "Bhavnagar",
      "Bhuj",
      "Chhapra",
      "Deesa",
      "Dhoraji",
      "Godhra",
      "Jamnagar",
      "Kadi",
      "Kapadvanj",
      "Keshod",
      "Khambhat",
      "Lathi",
      "Limbdi",
      "Lunawada",
      "Mahesana",
      "Mahuva",
      "Manavadar",
      "Mandvi",
      "Mangrol",
      "Mansa",
      "Mahemdabad",
      "Modasa",
      "Morvi",
      "Nadiad",
      "Navsari",
      "Padra",
      "Palanpur",
      "Palitana",
      "Pardi",
      "Patan",
      "Petlad",
      "Porbandar",
      "Radhanpur",
      "Rajkot",
      "Rajpipla",
      "Rajula",
      "Ranavav",
      "Rapar",
      "Salaya",
      "Sanand",
      "Savarkundla",
      "Sidhpur",
      "Sihor",
      "Songadh",
      "Surat",
      "Talaja",
      "Thangadh",
      "Tharad",
      "Umbergaon",
      "Umreth",
      "Una",
      "Unjha",
      "Upleta",
      "Vadnagar",
      "Vadodara",
      "Valsad",
      "Vapi",
      "Vapi",
      "Veraval",
      "Vijapur",
      "Viramgam",
      "Visnagar",
      "Vyara",
      "Wadhwan",
      "Wankaner",
    ];
    $(function () {
      var options = "";
      for (var i = 0; i < gujarat.length; i++) {
        options +=
          '<option value="' + gujarat[i] + '">' + gujarat[i] + "</option>";
      }
      $("#secondlist2").html(options);
    });
  }

  if ($val1 == "Haryana") {
    var haryana = [
      "Bahadurgarh",
      "Bhiwani",
      "Charkhi Dadri",
      "Faridabad",
      "Fatehabad",
      "Gohana",
      "Gurgaon",
      "Hansi",
      "Hisar",
      "Jind",
      "Kaithal",
      "Karnal",
      "Ladwa",
      "Mahendragarh",
      "Mandi Dabwali",
      "Narnaul",
      "Narwana",
      "Palwal",
      "Panchkula",
      "Panipat",
      "Pehowa",
      "Pinjore",
      "Rania",
      "Ratia",
      "Rewari",
      "Rohtak",
      "Safidon",
      "Samalkha",
      "Sarsod",
      "Shahbad",
      "Sirsa",
      "Sohna",
      "Sonipat",
      "Taraori",
      "Thanesar",
      "Tohana",
      "Yamunanagar",
    ];
    $(function () {
      var options = "";
      for (var i = 0; i < haryana.length; i++) {
        options +=
          '<option value="' + haryana[i] + '">' + haryana[i] + "</option>";
      }
      $("#secondlist2").html(options);
    });
  }

  if ($val1 == "Himachal Pradesh") {
    var himachal = [
      "Mandi",
      "Nahan",
      "Palampur",
      "Shimla*",
      "Solan",
      "Sundarnagar",
    ];
    $(function () {
      var options = "";
      for (var i = 0; i < himachal.length; i++) {
        options +=
          '<option value="' + himachal[i] + '">' + himachal[i] + "</option>";
      }
      $("#secondlist2").html(options);
    });
  }

  if ($val1 == "Jammu and Kashmir") {
    var jammu = [
      "Anantnag",
      "Baramula",
      "Jammu",
      "Kathua",
      "Punch",
      "Rajauri",
      "Sopore",
      "Srinagar*",
      "Udhampur",
    ];
    $(function () {
      var options = "";
      for (var i = 0; i < jammu.length; i++) {
        options += '<option value="' + jammu[i] + '">' + jammu[i] + "</option>";
      }
      $("#secondlist2").html(options);
    });
  }

  if ($val1 == "Jharkhand") {
    var jharkhand = [
      "Adityapur",
      "Bokaro Steel City",
      "Chaibasa",
      "Chatra",
      "Chirkunda",
      "Medininagar (Daltonganj)",
      "Deoghar",
      "Dhanbad",
      "Dumka",
      "Giridih",
      "Gumia",
      "Hazaribag",
      "Jamshedpur",
      "Jhumri Tilaiya",
      "Lohardaga",
      "Madhupur",
      "Mihijam",
      "Musabani",
      "Pakaur",
      "Patratu",
      "Phusro",
      "Ramgarh",
      "Ranchi*",
      "Sahibganj",
      "Saunda",
      "Simdega",
      "Tenu dam-cum-Kathhara",
    ];
    $(function () {
      var options = "";
      for (var i = 0; i < jharkhand.length; i++) {
        options +=
          '<option value="' + jharkhand[i] + '">' + jharkhand[i] + "</option>";
      }
      $("#secondlist2").html(options);
    });
  }

  if ($val1 == "Karnataka") {
    var karnataka = [
      "Adyar",
      "Afzalpur",
      "Arsikere",
      "Athni",
      "Bengaluru",
      "Belagavi",
      "Ballari",
      "Chikkamagaluru",
      "Davanagere",
      "Gokak",
      "Hubli-Dharwad",
      "Karwar",
      "Kolar",
      "Lakshmeshwar",
      "Lingsugur",
      "Maddur",
      "Madhugiri",
      "Madikeri",
      "Magadi",
      "Mahalingapura",
      "Malavalli",
      "Malur",
      "Mandya",
      "Mangaluru",
      "Manvi",
      "Mudalagi",
      "Mudabidri",
      "Muddebihal",
      "Mudhol",
      "Mulbagal",
      "Mundargi",
      "Nanjangud",
      "Nargund",
      "Navalgund",
      "Nelamangala",
      "Pavagada",
      "Piriyapatna",
      "Puttur",
      "Rabkavi Banhatti",
      "Raayachuru",
      "Ranebennuru",
      "Ramanagaram",
      "Ramdurg",
      "Ranibennur",
      "Robertson Pet",
      "Ron",
      "Sadalagi",
      "Sagara",
      "Sakaleshapura",
      "Sindagi",
      "Sanduru",
      "Sankeshwara",
      "Saundatti-Yellamma",
      "Savanur",
      "Sedam",
      "Shahabad",
      "Shahpur",
      "Shiggaon",
      "Shikaripur",
      "Shivamogga",
      "Surapura",
      "Shrirangapattana",
      "Sidlaghatta",
      "Sindhagi",
      "Sindhnur",
      "Sira",
      "Sirsi",
      "Siruguppa",
      "Srinivaspur",
      "Tarikere",
      "Tekkalakote",
      "Terdal",
      "Talikota",
      "Tiptur",
      "Tumkur",
      "Udupi",
      "Vijayapura",
      "Wadi",
      "Yadgir",
    ];
    $(function () {
      var options = "";
      for (var i = 0; i < karnataka.length; i++) {
        options +=
          '<option value="' + karnataka[i] + '">' + karnataka[i] + "</option>";
      }
      $("#secondlist2").html(options);
    });
  }

  if ($val1 == "Kerala") {
    var kerala = [
      "Adoor",
      "Alappuzha",
      "Attingal",
      "Chalakudy",
      "Changanassery",
      "Cherthala",
      "Chittur-Thathamangalam",
      "Guruvayoor",
      "Kanhangad",
      "Kannur",
      "Kasaragod",
      "Kayamkulam",
      "Kochi",
      "Kodungallur",
      "Kollam",
      "Kottayam",
      "Kozhikode",
      "Kunnamkulam",
      "Malappuram",
      "Mattannur",
      "Mavelikkara",
      "Mavoor",
      "Muvattupuzha",
      "Nedumangad",
      "Neyyattinkara",
      "Nilambur",
      "Ottappalam",
      "Palai",
      "Palakkad",
      "Panamattom",
      "Panniyannur",
      "Pappinisseri",
      "Paravoor",
      "Pathanamthitta",
      "Peringathur",
      "Perinthalmanna",
      "Perumbavoor",
      "Ponnani",
      "Punalur",
      "Puthuppally",
      "Koyilandy",
      "Shoranur",
      "Taliparamba",
      "Thiruvalla",
      "Thiruvananthapuram",
      "Thodupuzha",
      "Thrissur",
      "Tirur",
      "Vaikom",
      "Varkala",
      "Vatakara",
    ];
    $(function () {
      var options = "";
      for (var i = 0; i < kerala.length; i++) {
        options +=
          '<option value="' + kerala[i] + '">' + kerala[i] + "</option>";
      }
      $("#secondlist2").html(options);
    });
  }

  if ($val1 == "Madhya Pradesh") {
    var mp = [
      "Alirajpur",
      "Ashok Nagar",
      "Balaghat",
      "Bhopal",
      "Ganjbasoda",
      "Gwalior",
      "Indore",
      "Itarsi",
      "Jabalpur",
      "Lahar",
      "Maharajpur",
      "Mahidpur",
      "Maihar",
      "Malaj Khand",
      "Manasa",
      "Manawar",
      "Mandideep",
      "Mandla",
      "Mandsaur",
      "Mauganj",
      "Mhow Cantonment",
      "Mhowgaon",
      "Morena",
      "Multai",
      "Mundi",
      "Murwara (Katni)",
      "Nagda",
      "Nainpur",
      "Narsinghgarh",
      "Narsinghgarh",
      "Neemuch",
      "Nepanagar",
      "Niwari",
      "Nowgong",
      "Nowrozabad (Khodargama)",
      "Pachore",
      "Pali",
      "Panagar",
      "Pandhurna",
      "Panna",
      "Pasan",
      "Pipariya",
      "Pithampur",
      "Porsa",
      "Prithvipur",
      "Raghogarh-Vijaypur",
      "Rahatgarh",
      "Raisen",
      "Rajgarh",
      "Ratlam",
      "Rau",
      "Rehli",
      "Rewa",
      "Sabalgarh",
      "Sagar",
      "Sanawad",
      "Sarangpur",
      "Sarni",
      "Satna",
      "Sausar",
      "Sehore",
      "Sendhwa",
      "Seoni",
      "Seoni-Malwa",
      "Shahdol",
      "Shajapur",
      "Shamgarh",
      "Sheopur",
      "Shivpuri",
      "Shujalpur",
      "Sidhi",
      "Sihora",
      "Singrauli",
      "Sironj",
      "Sohagpur",
      "Tarana",
      "Tikamgarh",
      "Ujjain",
      "Umaria",
      "Vidisha",
      "Vijaypur",
      "Wara Seoni",
    ];
    $(function () {
      var options = "";
      for (var i = 0; i < mp.length; i++) {
        options += '<option value="' + mp[i] + '">' + mp[i] + "</option>";
      }
      $("#secondlist2").html(options);
    });
  }

  if ($val1 == "Maharashtra") {
    var maharashtra = [
      "Ahmednagar",
      "Akola",
      "Akot",
      "Amalner",
      "Ambejogai",
      "Amravati",
      "Anjangaon",
      "Arvi",
      "Aurangabad",
      "Bhiwandi",
      "Dhule",
      "Kalyan-Dombivali",
      "Ichalkaranji",
      "Kalyan-Dombivali",
      "Karjat",
      "Latur",
      "Loha",
      "Lonar",
      "Lonavla",
      "Mahad",
      "Malegaon",
      "Malkapur",
      "Mangalvedhe",
      "Mangrulpir",
      "Manjlegaon",
      "Manmad",
      "Manwath",
      "Mehkar",
      "Mhaswad",
      "Mira-Bhayandar",
      "Morshi",
      "Mukhed",
      "Mul",
      "Greater Mumbai*",
      "Murtijapur",
      "Nagpur",
      "Nanded-Waghala",
      "Nandgaon",
      "Nandura",
      "Nandurbar",
      "Narkhed",
      "Nashik",
      "Navi Mumbai",
      "Nawapur",
      "Nilanga",
      "Osmanabad",
      "Ozar",
      "Pachora",
      "Paithan",
      "Palghar",
      "Pandharkaoda",
      "Pandharpur",
      "Panvel",
      "Parbhani",
      "Parli",
      "Partur",
      "Pathardi",
      "Pathri",
      "Patur",
      "Pauni",
      "Pen",
      "Phaltan",
      "Pulgaon",
      "Pune",
      "Purna",
      "Pusad",
      "Rahuri",
      "Rajura",
      "Ramtek",
      "Ratnagiri",
      "Raver",
      "Risod",
      "Sailu",
      "Sangamner",
      "Sangli",
      "Sangole",
      "Sasvad",
      "Satana",
      "Satara",
      "Savner",
      "Sawantwadi",
      "Shahade",
      "Shegaon",
      "Shendurjana",
      "Shirdi",
      "Shirpur-Warwade",
      "Shirur",
      "Shrigonda",
      "Shrirampur",
      "Sillod",
      "Sinnar",
      "Solapur",
      "Soyagaon",
      "Talegaon Dabhade",
      "Talode",
      "Tasgaon",
      "Thane",
      "Tirora",
      "Tuljapur",
      "Tumsar",
      "Uchgaon",
      "Udgir",
      "Umarga",
      "Umarkhed",
      "Umred",
      "Uran",
      "Uran Islampur",
      "Vadgaon Kasba",
      "Vaijapur",
      "Vasai-Virar",
      "Vita",
      "Wadgaon Road",
      "Wai",
      "Wani",
      "Wardha",
      "Warora",
      "Warud",
      "Washim",
      "Yavatmal",
      "Yawal",
      "Yevla",
    ];
    $(function () {
      var options = "";
      for (var i = 0; i < maharashtra.length; i++) {
        options +=
          '<option value="' +
          maharashtra[i] +
          '">' +
          maharashtra[i] +
          "</option>";
      }
      $("#secondlist2").html(options);
    });
  }

  if ($val1 == "Manipur") {
    var manipur = ["Imphal*", "Lilong", "Mayang Imphal", "Thoubal"];
    $(function () {
      var options = "";
      for (var i = 0; i < manipur.length; i++) {
        options +=
          '<option value="' + manipur[i] + '">' + manipur[i] + "</option>";
      }
      $("#secondlist2").html(options);
    });
  }

  if ($val1 == "Meghalaya") {
    var meghalaya = ["Nongstoin", "Shillong*", "Tura"];
    $(function () {
      var options = "";
      for (var i = 0; i < meghalaya.length; i++) {
        options +=
          '<option value="' + meghalaya[i] + '">' + meghalaya[i] + "</option>";
      }
      $("#secondlist2").html(options);
    });
  }

  if ($val1 == "Mizoram") {
    var mizoram = ["Aizawl", "Lunglei", "Saiha"];
    $(function () {
      var options = "";
      for (var i = 0; i < mizoram.length; i++) {
        options +=
          '<option value="' + mizoram[i] + '">' + mizoram[i] + "</option>";
      }
      $("#secondlist2").html(options);
    });
  }

  if ($val1 == "Nagaland") {
    var nagaland = [
      "Dimapur",
      "Kohima*",
      "Mokokchung",
      "Tuensang",
      "Wokha",
      "Zunheboto",
    ];
    $(function () {
      var options = "";
      for (var i = 0; i < nagaland.length; i++) {
        options +=
          '<option value="' + nagaland[i] + '">' + nagaland[i] + "</option>";
      }
      $("#secondlist2").html(options);
    });
  }

  if ($val1 == "Orissa") {
    var orissa = [
      "Balangir",
      "Baleshwar Town",
      "Barbil",
      "Bargarh",
      "Baripada Town",
      "Bhadrak",
      "Bhawanipatna",
      "Bhubaneswar*",
      "Brahmapur",
      "Byasanagar",
      "Cuttack",
      "Dhenkanal",
      "Jatani",
      "Jharsuguda",
      "Kendrapara",
      "Kendujhar",
      "Malkangiri",
      "Nabarangapur",
      "Paradip",
      "Parlakhemundi",
      "Pattamundai",
      "Phulabani",
      "Puri",
      "Rairangpur",
      "Rajagangapur",
      "Raurkela",
      "Rayagada",
      "Sambalpur",
      "Soro",
      "Sunabeda",
      "Sundargarh",
      "Talcher",
      "Tarbha",
      "Titlagarh",
    ];
    $(function () {
      var options = "";
      for (var i = 0; i < orissa.length; i++) {
        options +=
          '<option value="' + orissa[i] + '">' + orissa[i] + "</option>";
      }
      $("#secondlist2").html(options);
    });
  }

  if ($val1 == "Puducherry") {
    var puducherry = ["Karaikal", "Mahe", "Pondicherry*", "Yanam"];
    $(function () {
      var options = "";
      for (var i = 0; i < puducherry.length; i++) {
        options +=
          '<option value="' +
          puducherry[i] +
          '">' +
          puducherry[i] +
          "</option>";
      }
      $("#secondlist2").html(options);
    });
  }

  if ($val1 == "Punjab") {
    var punjab = [
      "Amritsar",
      "Barnala",
      "Batala",
      "Bathinda",
      "Dhuri",
      "Faridkot",
      "Fazilka",
      "Firozpur",
      "Firozpur Cantt.",
      "Gobindgarh",
      "Gurdaspur",
      "Hoshiarpur",
      "Jagraon",
      "Jalandhar Cantt.",
      "Jalandhar",
      "Kapurthala",
      "Khanna",
      "Kharar",
      "Kot Kapura",
      "Longowal",
      "Ludhiana",
      "Malerkotla",
      "Malout",
      "Mansa",
      "Moga",
      "Mohali",
      "Morinda, India",
      "Mukerian",
      "Muktsar",
      "Nabha",
      "Nakodar",
      "Nangal",
      "Nawanshahr",
      "Pathankot",
      "Patiala",
      "Pattran",
      "Patti",
      "Phagwara",
      "Phillaur",
      "Qadian",
      "Raikot",
      "Rajpura",
      "Rampura Phul",
      "Rupnagar",
      "Samana",
      "Sangrur",
      "Sirhind Fatehgarh Sahib",
      "Sujanpur",
      "Sunam",
      "Talwara",
      "Tarn Taran",
      "Urmar Tanda",
      "Zira",
      "Zirakpur",
    ];
    $(function () {
      var options = "";
      for (var i = 0; i < punjab.length; i++) {
        options +=
          '<option value="' +
          punjab[i] +
          '">' +
          napunjabgaland[i] +
          "</option>";
      }
      $("#secondlist2").html(options);
    });
  }

  if ($val1 == "Rajasthan") {
    var rajasthan = [
      "Ajmer",
      "Alwar",
      "Bikaner",
      "Bharatpur",
      "Bhilwara",
      "Jaipur*",
      "Jodhpur",
      "Lachhmangarh",
      "Ladnu",
      "Lakheri",
      "Lalsot",
      "Losal",
      "Makrana",
      "Malpura",
      "Mandalgarh",
      "Mandawa",
      "Mangrol",
      "Merta City",
      "Mount Abu",
      "Nadbai",
      "Nagar",
      "Nagaur",
      "Nasirabad",
      "Nathdwara",
      "Neem-Ka-Thana",
      "Nimbahera",
      "Nohar",
      "Nokha",
      "Pali",
      "Phalodi",
      "Phulera",
      "Pilani",
      "Pilibanga",
      "Pindwara",
      "Pipar City",
      "Prantij",
      "Pratapgarh",
      "Raisinghnagar",
      "Rajakhera",
      "Rajaldesar",
      "Rajgarh (Alwar)",
      "Rajgarh (Churu)",
      "Rajsamand",
      "Ramganj Mandi",
      "Ramngarh",
      "Ratangarh",
      "Rawatbhata",
      "Rawatsar",
      "Reengus",
      "Sadri",
      "Sadulshahar",
      "Sadulpur",
      "Sagwara",
      "Sambhar",
      "Sanchore",
      "Sangaria",
      "Sardarshahar",
      "Sawai Madhopur",
      "Shahpura",
      "Shahpura",
      "Sheoganj",
      "Sikar",
      "Sirohi",
      "Sojat",
      "Sri Madhopur",
      "Sujangarh",
      "Sumerpur",
      "Suratgarh",
      "Taranagar",
      "Todabhim",
      "Todaraisingh",
      "Tonk",
      "Udaipur",
      "Udaipurwati",
      "Vijainagar, Ajmer",
    ];
    $(function () {
      var options = "";
      for (var i = 0; i < rajasthan.length; i++) {
        options +=
          '<option value="' + rajasthan[i] + '">' + rajasthan[i] + "</option>";
      }
      $("#secondlist2").html(options);
    });
  }

  if ($val1 == "Tamil Nadu") {
    var tn = [
      "Arakkonam",
      "Aruppukkottai",
      "Chennai*",
      "Coimbatore",
      "Erode",
      "Gobichettipalayam",
      "Kancheepuram",
      "Karur",
      "Lalgudi",
      "Madurai",
      "Manachanallur",
      "Nagapattinam",
      "Nagercoil",
      "Namagiripettai",
      "Namakkal",
      "Nandivaram-Guduvancheri",
      "Nanjikottai",
      "Natham",
      "Nellikuppam",
      "Neyveli (TS)",
      "O' Valley",
      "Oddanchatram",
      "P.N.Patti",
      "Pacode",
      "Padmanabhapuram",
      "Palani",
      "Palladam",
      "Pallapatti",
      "Pallikonda",
      "Panagudi",
      "Panruti",
      "Paramakudi",
      "Parangipettai",
      "Pattukkottai",
      "Perambalur",
      "Peravurani",
      "Periyakulam",
      "Periyasemur",
      "Pernampattu",
      "Pollachi",
      "Polur",
      "Ponneri",
      "Pudukkottai",
      "Pudupattinam",
      "Puliyankudi",
      "Punjaipugalur",
      "Ranipet",
      "Rajapalayam",
      "Ramanathapuram",
      "Rameshwaram",
      "Rasipuram",
      "Salem",
      "Sankarankoil",
      "Sankari",
      "Sathyamangalam",
      "Sattur",
      "Shenkottai",
      "Sholavandan",
      "Sholingur",
      "Sirkali",
      "Sivaganga",
      "Sivagiri",
      "Sivakasi",
      "Srivilliputhur",
      "Surandai",
      "Suriyampalayam",
      "Tenkasi",
      "Thammampatti",
      "Thanjavur",
      "Tharamangalam",
      "Tharangambadi",
      "Theni Allinagaram",
      "Thirumangalam",
      "Thirupuvanam",
      "Thiruthuraipoondi",
      "Thiruvallur",
      "Thiruvarur",
      "Thuraiyur",
      "Tindivanam",
      "Tiruchendur",
      "Tiruchengode",
      "Tiruchirappalli",
      "Tirukalukundram",
      "Tirukkoyilur",
      "Tirunelveli",
      "Tirupathur",
      "Tirupathur",
      "Tiruppur",
      "Tiruttani",
      "Tiruvannamalai",
      "Tiruvethipuram",
      "Tittakudi",
      "Udhagamandalam",
      "Udumalaipettai",
      "Unnamalaikadai",
      "Usilampatti",
      "Uthamapalayam",
      "Uthiramerur",
      "Vadakkuvalliyur",
      "Vadalur",
      "Vadipatti",
      "Valparai",
      "Vandavasi",
      "Vaniyambadi",
      "Vedaranyam",
      "Vellakoil",
      "Vellore",
      "Vikramasingapuram",
      "Viluppuram",
      "Virudhachalam",
      "Virudhunagar",
      "Viswanatham",
    ];
    $(function () {
      var options = "";
      for (var i = 0; i < tn.length; i++) {
        options += '<option value="' + tn[i] + '">' + tn[i] + "</option>";
      }
      $("#secondlist2").html(options);
    });
  }

  if ($val1 == "Telangana") {
    var telangana = [
      "Adilabad",
      "Bellampalle",
      "Bhadrachalam",
      "Bhainsa",
      "Bhongir",
      "Bodhan",
      "Farooqnagar",
      "Gadwal",
      "Hyderabad*",
      "Jagtial",
      "Jangaon",
      "Kagaznagar",
      "Kamareddy",
      "Karimnagar",
      "Khammam",
      "Koratla",
      "Kothagudem",
      "Kyathampalle",
      "Mahbubnagar",
      "Mancherial",
      "Mandamarri",
      "Manuguru",
      "Medak",
      "Miryalaguda",
      "Nagarkurnool",
      "Narayanpet",
      "Nirmal",
      "Nizamabad",
      "Palwancha",
      "Ramagundam",
      "Sadasivpet",
      "Sangareddy",
      "Siddipet",
      "Sircilla",
      "Suryapet",
      "Tandur",
      "Vikarabad",
      "Wanaparthy",
      "Warangal",
      "Yellandu",
    ];
    $(function () {
      var options = "";
      for (var i = 0; i < telangana.length; i++) {
        options +=
          '<option value="' + telangana[i] + '">' + telangana[i] + "</option>";
      }
      $("#secondlist2").html(options);
    });
  }

  if ($val1 == "Tripura") {
    var tripura = [
      "Agartala*",
      "Belonia",
      "Dharmanagar",
      "Kailasahar",
      "Khowai",
      "Pratapgarh",
      "Udaipur",
    ];
    $(function () {
      var options = "";
      for (var i = 0; i < tripura.length; i++) {
        options +=
          '<option value="' + tripura[i] + '">' + tripura[i] + "</option>";
      }
      $("#secondlist2").html(options);
    });
  }

  if ($val1 == "Uttar Pradesh") {
    var up = [
      "Achhnera",
      "Agra",
      "Aligarh",
      "Allahabad",
      "Amroha",
      "Azamgarh",
      "Bahraich",
      "Chandausi",
      "Etawah",
      "Firozabad",
      "Fatehpur Sikri",
      "Hapur",
      "Hardoi *",
      "Jhansi",
      "Kalpi",
      "Kanpur",
      "Khair",
      "Laharpur",
      "Lakhimpur",
      "Lal Gopalganj Nindaura",
      "Lalitpur",
      "Lalganj",
      "Lar",
      "Loni",
      "Lucknow*",
      "Mathura",
      "Meerut",
      "Modinagar",
      "Moradabad",
      "Nagina",
      "Najibabad",
      "Nakur",
      "Nanpara",
      "Naraura",
      "Naugawan Sadat",
      "Nautanwa",
      "Nawabganj",
      "Nehtaur",
      "Niwai",
      "Noida",
      "Noorpur",
      "Obra",
      "Orai",
      "Padrauna",
      "Palia Kalan",
      "Parasi",
      "Phulpur",
      "Pihani",
      "Pilibhit",
      "Pilkhuwa",
      "Powayan",
      "Pukhrayan",
      "Puranpur",
      "Purquazi",
      "Purwa",
      "Rae Bareli",
      "Rampur",
      "Rampur Maniharan",
      "Rampur Maniharan",
      "Rasra",
      "Rath",
      "Renukoot",
      "Reoti",
      "Robertsganj",
      "Rudauli",
      "Rudrapur",
      "Sadabad",
      "Safipur",
      "Saharanpur",
      "Sahaspur",
      "Sahaswan",
      "Sahawar",
      "Sahjanwa",
      "Saidpur",
      "Sambhal",
      "Samdhan",
      "Samthar",
      "Sandi",
      "Sandila",
      "Sardhana",
      "Seohara",
      "Shahabad, Hardoi",
      "Shahabad, Rampur",
      "Shahganj",
      "Shahjahanpur",
      "Shamli",
      "Shamsabad, Agra",
      "Shamsabad, Farrukhabad",
      "Sherkot",
      "Shikarpur, Bulandshahr",
      "Shikohabad",
      "Shishgarh",
      "Siana",
      "Sikanderpur",
      "Sikandra Rao",
      "Sikandrabad",
      "Sirsaganj",
      "Sirsi",
      "Sitapur",
      "Soron",
      "Suar",
      "Sultanpur",
      "Sumerpur",
      "Tanda",
      "Thakurdwara",
      "Thana Bhawan",
      "Tilhar",
      "Tirwaganj",
      "Tulsipur",
      "Tundla",
      "Ujhani",
      "Unnao",
      "Utraula",
      "Varanasi",
      "Vrindavan",
      "Warhapur",
      "Zaidpur",
      "Zamania",
    ];
    $(function () {
      var options = "";
      for (var i = 0; i < up.length; i++) {
        options += '<option value="' + up[i] + '">' + up[i] + "</option>";
      }
      $("#secondlist2").html(options);
    });
  }

  if ($val1 == "Uttarakhand") {
    var uttarakhand = [
      "Bageshwar",
      "Dehradun",
      "Haldwani-cum-Kathgodam",
      "Hardwar",
      "Kashipur",
      "Manglaur",
      "Mussoorie",
      "Nagla",
      "Nainital",
      "Pauri",
      "Pithoragarh",
      "Ramnagar",
      "Rishikesh",
      "Roorkee",
      "Rudrapur",
      "Sitarganj",
      "Srinagar",
      "Tehri",
    ];
    $(function () {
      var options = "";
      for (var i = 0; i < uttarakhand.length; i++) {
        options +=
          '<option value="' +
          uttarakhand[i] +
          '">' +
          uttarakhand[i] +
          "</option>";
      }
      $("#secondlist2").html(options);
    });
  }

  if ($val1 == "West Bengal") {
    var wb = [
      "Adra",
      "Alipurduar",
      "Arambagh",
      "Asansol",
      "Baharampur",
      "Balurghat",
      "Bankura",
      "Darjiling",
      "English Bazar",
      "Gangarampur",
      "Habra",
      "Hugli-Chinsurah",
      "Jalpaiguri",
      "Jhargram",
      "Kalimpong",
      "Kharagpur",
      "Kolkata",
      "Mainaguri",
      "Malda",
      "Mathabhanga",
      "Medinipur",
      "Memari",
      "Monoharpur",
      "Murshidabad",
      "Nabadwip",
      "Naihati",
      "Panchla",
      "Pandua",
      "Paschim Punropara",
      "Purulia",
      "Raghunathpur",
      "Raghunathganj",
      "Raiganj",
      "Rampurhat",
      "Ranaghat",
      "Sainthia",
      "Santipur",
      "Siliguri",
      "Sonamukhi",
      "Srirampore",
      "Suri",
      "Taki",
      "Tamluk",
      "Tarakeswar",
    ];
    $(function () {
      var options = "";
      for (var i = 0; i < wb.length; i++) {
        options += '<option value="' + wb[i] + '">' + wb[i] + "</option>";
      }
      $("#secondlist2").html(options);
    });
  }
}
