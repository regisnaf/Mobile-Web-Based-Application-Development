// 01-jsonIntro
var mArray = new Array();
var pArray = new Array();
var cArray = new Array();
var newRec;

class About {
	constructor (name, id, login, campus, program){
		this.name=name; this.id=id;
		this.login=login;
		this.campus = campus; this.program=program;
	}
} // end of class AboutMe

$(document).ready(function() {
	//loaded AboutMe array
	console.log("in doc ready");
		$.getJSON("dataFiles/a1.json", function(data) {
			for (let abt of data.AboutMe) {
				newRec = new About(
					abt.myName, abt.myID,
					abt.myLogin, abt.myCampus, abt.myProgram
				);
				mArray.push(newRec);
			}
			console.log(mArray);

			$("h3").html("");
			for (let x of data.AboutMe) {
				$("h3").append(
					`
					<h3><i>SYST24444 Assignment #1</i> for ${x.myName} / ${x.myID}</h3>
					`
				);
			}

		}); // end of .getJSON

		
		$("#term1").click(function forOf() {
			console.log("in term1");
			let out = document.getElementById("info");

			class Term1 {
				constructor (number, name) {
					this.number = number;
					this.name = name;
				}
			}

			class Course1 {
				constructor (cnumber, ctype, ccode, cimage) {
					this.cnumber = cnumber;
					this.ctype = ctype;
					this.ccode = ccode;
					this.cimage = cimage;
				}
			}

			var bTerm1 = new Array();
			bTerm1.push(new Term1("1", "CP"));


			for (let b of bTerm1) {
			out.innerHTML += 
			`
			<h3>Term: ${b.number} / Name: ${b.name}</h3>
			`
			;}
			var bCourse1 = new Array();
			bCourse1.push(new Course1("1", "PROG", "10082", "java"));
			bCourse1.push(new Course1("1", "MATH", "18584", "math"));
			bCourse1.push(new Course1("1", "TELE", "13167", "data"));


			for (let c of bCourse1) {
			out.innerHTML += 
			`
			<p>Course: ${c.ctype}${c.ccode} <img src="images/${c.cimage}.png"></p>
			`
			;}

			
		});
		
		$("#term2").click(function forOf() {
			console.log("in term2");
			let out = document.getElementById("info");

			class Term2 {
				constructor (number, name) {
					this.number = number;
					this.name = name;
				}
			}

			class Course2 {
				constructor (cnumber, ctype, ccode, cimage) {
					this.cnumber = cnumber;
					this.ctype = ctype;
					this.ccode = ccode;
					this.cimage = cimage;
				}
			}

			var bTerm2 = new Array();
			bTerm2.push(new Term2("2", "SE"));


			for (let b of bTerm2) {
			out.innerHTML += 
			`
			<h3>Term: ${b.number} / Name: ${b.name}</h3>
			`
			;}
			var bCourse2 = new Array();
			bCourse2.push(new Course2("2", "PROG", "24178", "java"));
			bCourse2.push(new Course2("2", "SYST", "10199", "web"));
			bCourse2.push(new Course2("2", "SYST", "13416", "linux"));


			for (let c of bCourse2) {
			out.innerHTML += 
			`
			<p>Course: ${c.ctype}${c.ccode} <img src="images/${c.cimage}.png"></p>
			`
			;}
		});

		$("#term3").click(function forOf() {
			console.log("in term3");
			let out = document.getElementById("info");

			class Term3 {
				constructor (number, name) {
					this.number = number;
					this.name = name;
				}
			}

			class Course3 {
				constructor (cnumber, ctype, ccode, cimage) {
					this.cnumber = cnumber;
					this.ctype = ctype;
					this.ccode = ccode;
					this.cimage = cimage;
				}
			}

			var bTerm3 = new Array();
			bTerm3.push(new Term3("3", "ISE"));


			for (let b of bTerm3) {
			out.innerHTML += 
			`
			<h3>Term: ${b.number} / Name: ${b.name}</h3>
			`
			;}
			var bCourse3 = new Array();
			bCourse3.push(new Course3("3", "PROG", "32758", "java"));
			bCourse3.push(new Course3("3", "INFO", "24178", "web"));
			bCourse3.push(new Course3("3", "SYST", "28296", "linux"));


			for (let c of bCourse3) {
			out.innerHTML += 
			`
			<p>Course: ${c.ctype}${c.ccode} <img src="images/${c.cimage}.png"></p>
			`
			;}
		});

		$("#term4").click(function forOf() {
			console.log("in term4");
			let out = document.getElementById("info");

			class Term4 {
				constructor (number, name) {
					this.number = number;
					this.name = name;
				}
			}

			class Course4 {
				constructor (cnumber, ctype, ccode, cimage) {
					this.cnumber = cnumber;
					this.ctype = ctype;
					this.ccode = ccode;
					this.cimage = cimage;
				}
			}

			var bTerm4 = new Array();
			bTerm4.push(new Term4("4", "SDNE"));


			for (let b of bTerm4) {
			out.innerHTML += 
			`
			<h3>Term: ${b.number} / Name: ${b.name}</h3>
			`
			;}
			var bCourse4 = new Array();
			bCourse4.push(new Course4("4", "SYST", "24444", "web"));
			bCourse4.push(new Course4("4", "PROG", "32356", "java"));
			bCourse4.push(new Course4("4", "PROG", "20799", "java"));


			for (let c of bCourse4) {
			out.innerHTML += 
			`
			<p>Course: ${c.ctype}${c.ccode} <img src="images/${c.cimage}.png"></p>
			`
			;}
		});

		$("#Toggle").click(function() {
			$("section[title ^= 'Text']").css("color", "red").css("font-style", "italic");
		});

		$("#Prog").click(function() {
			console.log("in PROG");
			$("img[src $= 'java.png']").addClass("pngBorder");
		});
	
		$.getJSON("dataFiles/a1.json", function(data) {
			for (let abt of data.AboutMe) {
				newRec = new About(
					abt.myName, abt.myID,
					abt.myLogin, abt.myCampus, abt.myProgram
				);
				mArray.push(newRec);
			}
			console.log(mArray);

			$("footer").html("");
			for (let x of data.AboutMe) {
				$("footer").append(
					`
					<p><i>Login: </i> ${x.myLogin} / Campus: ${x.myCampus} / Program: ${x.myProgram}</i></p>
					`
				);
			}

		}); // end of .getJSON
}); // end of doc ready

/*
var myProg = new Array();
myProg.push(new Program("1", "CP"));
myProg.push(new Program("2", "SE"));
myProg.push(new Program("3", "ISE"));
myProg.push(new Program("4", "SDNE"));

var mycourses = new Array();
mycourses.push(new CourseCodes("1", "PROG", "10082", "java.png"));
mycourses.push(new CourseCodes("1", "MATH", "18584", "math.png"));
mycourses.push(new CourseCodes("1", "TELE", "13167", "data.png"));
mycourses.push(new CourseCodes("2", "PROG", "24178", "java.png"));
mycourses.push(new CourseCodes("2", "SYST", "10199", "web.png"));
mycourses.push(new CourseCodes("2", "SYST", "13416", "linux.png"));
mycourses.push(new CourseCodes("3", "PROG", "32758", "java.png"));
mycourses.push(new CourseCodes("3", "INFO", "24178", "security.png"));
mycourses.push(new CourseCodes("3", "SYST", "28296", "linux.png"));
mycourses.push(new CourseCodes("4", "SYST", "24444", "web.png"));
mycourses.push(new CourseCodes("4", "PROG", "32356", "csharp.png"));
mycourses.push(new CourseCodes("4", "PROG", "20799", "c.png"));
*/