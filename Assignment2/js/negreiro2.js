
var personalFName;
var personalLName;
var sID;
var user;
var prog;
var country;

var rowID;

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
animalList = JSON.parse(localStorage.getItem("animalList"));

//show content
$("#categ").html(
  `
  <h3>
  Animals from the ${catList[rowID].cattype} Category
  </h3>
  `
  );


//if rowID = Mammal show Mammal content
  if (rowID === '0') {
    for(x = 0; x < 3; x++) {
		$("#categ").append(
		`
		<li id='${x}'>
    <div class="container">
    <img src="${animalList[x].photoDepiction}"> 
			<p>
      The ${animalList[x].animal} 
      with the scientific name of ${animalList[x].scientific}
      has a basic colour range of ${animalList[x].colors}.
      </p>
      
      </div> 
		</li>  
		`
		);}
    }
    //if rowID = Reptile show Reptile content
    if (rowID === '1') {
      for(x = 3; x < 6; x++) {
      $("#categ").append(
      `
      <li id='${x}'>
      <div class="container">
      <img src="${animalList[x].photoDepiction}"> 
        <p>
        The ${animalList[x].animal} 
        with the scientific name of ${animalList[x].scientific}
        has a basic colour range of ${animalList[x].colors}.
        </p>
        
        </div> 
      </li>  
      `
      );}
      }

      //if rowID = Bird show Bird content
      if (rowID === '2') {
        for(x = 6; x < 9; x++) {
        $("#categ").append(
        `
        <li id='${x}'>
        <div class="container">
        <img src="${animalList[x].photoDepiction}"> 
          <p>
          The ${animalList[x].animal} 
          with the scientific name of ${animalList[x].scientific}
          has a basic colour range of ${animalList[x].colors}.
          </p>
          
          </div> 
        </li>  
        `
        );}
        }
        //if rowID = Amphibian show amphibian content
        if (rowID === '3') {
          for(x = 9; x < 12; x++) {
          $("#categ").append(
          `
          <li id='${x}'>
          <div class="container">
          <img src="${animalList[x].photoDepiction}"> 
            <p>
            The ${animalList[x].animal} 
            with the scientific name of ${animalList[x].scientific}
            has a basic colour range of ${animalList[x].colors}.
            </p>
            
            </div> 
          </li>  
          `
          );}
          }

          //if rowID = Fish show fish content
          if (rowID === '4') {
            for(x = 12; x < 15; x++) {
            $("#categ").append(
            `
            <li id='${x}'>
            <div class="container">
            <img src="${animalList[x].photoDepiction}"> 
              <p>
              The ${animalList[x].animal} 
              with the scientific name of ${animalList[x].scientific}
              has a basic colour range of ${animalList[x].colors}.
              </p>
              
              </div> 
            </li>  
            `
            );}
            }

});
