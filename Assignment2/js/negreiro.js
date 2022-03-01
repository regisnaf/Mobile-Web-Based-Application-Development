
var personalFName;
var personalLName;
var sID;
var user;
var prog;
var country;

var rowID;

var newRec;

var catList = new Array();
var animalList = new Array();

class Cat {
	constructor (cattype, logo) {
		this.cattype = cattype; 
    this.logo = logo;
	}
}

class AnimalDet {
	constructor (animal, category, scientific, colors, photoDepiction) {
		this.animal = animal; 
    this.category = category;
    this.scientific = scientific;
    this.colors = colors;
    this.photoDepiction = photoDepiction;
	}
}

$(document).ready(function() {
  console.log("in doc ready");

	$.ajax({
		type: "GET", url: "data/A2-JSON.json",
		dataType: "json",
		success: loadJSON,
		error: function (e) {alert(`${e.status} - ${e.statusText}`);}
	}); // end of ajax call

  //get data from local storage
  FirstName = localStorage.getItem("FirstName");
  LastName = localStorage.getItem("LastName");
  StudentID = localStorage.getItem("StudentID");
  UserName = localStorage.getItem("UserName");
  Program = localStorage.getItem("Program");
  HomeCountry = localStorage.getItem("HomeCountry");

  //Add Personal data to Header
$("#personal").html(
  `
  <h4>A2 / ${FirstName} ${LastName} / ${StudentID} / ${UserName}</h4><hr>
  `
);
//Add css to Header
$("#personal").css({
  "font-family": 'Garamond, serif',
  "font-size": 15,
  color:'brown'
});

  //Add Personal data to Footer
  $("#personalfooter").html(
    `
    <hr>
    <h5>My Sheridan Program: ${Program}</h5>
    <h5>My Home Country: ${HomeCountry}</h5>
    `
  );

  //Add css to footer
$("#personalfooter").css({
  "font-family": 'Garamond, serif',
  color:'brown'
});

//GET data from local storage
rowID = localStorage.getItem("rowID");
catList = JSON.parse(localStorage.getItem("catList"));

//for loop to show the catList
  $("#categ").html("");
	for (let x=0; x < 5; x++) {
		$("#categ").append(
		`
    
		<li id='${x}'>
    <div class="container">
    <img src="images/${catList[x].logo}" style="width: 100% border:2px solid">
			<a class="btn" href='pages/secondpage.html'>
      ${catList[x].cattype} 
      </a>
      </div> 
		</li>
   
		`
		);
	} //end of for loop


});//end of doc ready

//load json data
function loadJSON(data) {

  console.log(data);
  //Read PersonalA2
personalFName = data.A2Personal.FirstName;
personalLName = data.A2Personal.LastName;
sID = data.A2Personal.StudentID;
user = data.A2Personal.UserName;
prog = data.A2Personal.Program;
country = data.A2Personal.HomeCountry;

//Create category list
for (let cat of data.Categories) {
  catList.push(new Cat (cat.cattype, cat.logo));
}

//create animal list
for (let ani of data.AnimalDetails) {
  animalList.push(
    new AnimalDet(ani.animal, ani.category, ani.scientific, ani.colors, ani.photoDepiction)
  );
}

console.log(catList);
console.log(animalList);

// Save data to local storage
$(document).on("click", "#categ >li", function() {
  
  //Save data to local storage
  localStorage.setItem("FirstName", data.A2Personal.FirstName);
  localStorage.setItem("LastName", data.A2Personal.LastName);
  localStorage.setItem("StudentID", data.A2Personal.StudentID);
  localStorage.setItem("UserName", data.A2Personal.UserName);
  localStorage.setItem("Program", data.A2Personal.Program);
  localStorage.setItem("HomeCountry", data.A2Personal.HomeCountry);
	localStorage.setItem("rowID", $(this).closest("li").attr("id"));
  localStorage.setItem("catList", JSON.stringify(catList));
  localStorage.setItem("animalList", JSON.stringify(animalList));
});
}//end of load data

