// 01-jsonIntro
var mArray = new Array();
var newRec;

class About {
	constructor (name, id, login, campus, program){
		this.name=name; this.id=id;
		this.login=login;
		this.campus = campus; this.program=program;
	}
} // end of class AboutMe

$(document).ready(function() {
console.log("in doc ready 2")

$.getJSON("/dataFiles/a1.json", function(data) {
  for (let abt of data.AboutMe) {
    newRec = new About(
      abt.myName, abt.myID,
      abt.myLogin, abt.myCampus, abt.myProgram
    );
    mArray.push(newRec);
  }
  console.log(mArray);

  $("section:first").html("");
  for (let x of data.AboutMe) {
    $("section:first").append(
      `
      <h1>My name is ${x.myName}</h1>
      <h2>My student number is ${x.myID}</h2>
      <h3>My login name is ${x.myLogin}</h3>
      <h4>My campus is ${x.myCampus}</h4>
      <h5>My program is ${x.myProgram}</h5><br>
      <img class="photo" src="/images/regis.jpg"><br>
      `
    );
  }

}); // end of .getJSON
});