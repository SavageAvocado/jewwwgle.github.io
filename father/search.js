var translations = {"a": "א", "b": ".ב", "c": "8==D", "d": "ד", "e": "ה", "f": "ו", "g": "ז", "h": "ח", "i": "אני", "j": "י", "k": "k", "l": "l", "m": "M", "n": "n", "o": "או", "p": "עמ '", "q": "q", "r": "ייצור", "s": "s", "t": "t", "u": "u", "v": "v", "w": "w", "x": "איקס", "y": "ו", "z": "מ"};
var translate = false;
var query;

function search() {
  if (document.getElementById("searchbar").value == undefined || document.getElementById("searchbar").value.replace(" ", "") == "")
		return;
	
  this.query = document.getElementById("searchbar").value;
		
  if (this.query.toUpperCase() == "JOE FLEMMING" || this.query.toUpperCase() == "JOEFLEMMING" || this.query.toUpperCase() == "JOE") {
    window.location = "https://en.wikipedia.org/wiki/Black_Hebrew_Israelites";
		return;
	}
	
  if (this.query.toUpperCase() == "AVOCADO") {
    window.location = "https://www.jewgle.gq/imates/avocado.jpg";
		return;
	}
	
  if (this.query.toUpperCase() == "MATTHEW NEMETH" || this.query.toUpperCase() == "MATTHEWNEMETH" || this.query.toUpperCase() == "NEMETH") {
    window.location = "https://en.wikipedia.org/wiki/Rhodesia";
		return;
	}
	
  if (this.query.toUpperCase() == "DAVID ACEVEDO" || this.query.toUpperCase() == "DAVIDACEVEDO" || this.query.toUpperCase() == "DAVE") {
    window.location = "https://www.youtube.com/";
		return;
	}
	
  if (this.query.toUpperCase() == "ROBERT HASSAJ" || this.query.toUpperCase() == "ROBERTHASSAJ" || this.query.toUpperCase() == "HASSAJ") {
    window.location = "https://www.youtube.com/watch?v=OT4MyqrWo6E";
		return;
	}
	
  if (this.query.toUpperCase() == "VINCENT SIMONCELLI" || this.query.toUpperCase() == "VINCENT SIMONCELLI" || this.query.toUpperCase() == "VINCENT") {
    window.location = "https://food.fnr.sndimg.com/content/dam/images/food/fullset/2011/2/4/1/RX-FNM_030111-Lighten-Up-012_s4x3.jpg.rend.hgtvcom.616.462.suffix/1382539856907.jpeg";
		return;
	}
	
  if (this.query.toUpperCase() == "DAVID HOLLEY" || this.query.toUpperCase() == "DAVIDHOLLEY" || this.query.toUpperCase() == "DAVID") {
    window.location = "http://www.hitler.org";
		return;
	}
	
	if (this.query.toUpperCase() == "LIL PIMP" || this.query.toUpperCase() == "LILPIMP" || this.query.toUpperCase() == "LILP") {
    window.location = "https://www.jewgle.gq/lil-pimp/";
		return;
	}
	
  if (this.query.toUpperCase() == "CORNHUB" || this.query.toUpperCase() == "CORNHUBS" || this.query.toUpperCase() == "CORN HUB" || this.query.toUpperCase() == "CORN HUBS") {
    window.location = "https://www.cornhubs.gq/";
		return;
	}
	
  window.location = "https://www.google.com/search?q=" + this.query.replace(" ", "%20").replace("!", "%21").replace("+", "%2B").replace("#", "%23");
}

function searchEnter(e) {
  //this.updateQuery(e);
  this.fixText(e);
	
  if (e.keyCode != 13)
    return;
  
  this.search();
}

//function updateQuery(e) {
  //if (this.query == undefined)
    //this.query = String.fromCharCode(e.which);
  //else
    //this.query += String.fromCharCode(e.which);
//}

function fixText(e) {
  if (!this.translate)
    return;
	
  if (String.fromCharCode(e.which).toLowerCase() in this.translations) {
    e.preventDefault();
    document.getElementById("searchbar").value += this.translations[String.fromCharCode(e.which).toLowerCase()];
  }
}

function toggleTranslate() {
  this.translate = !this.translate;
  document.getElementById("searchbar").style.textAlign = this.translate ? "right" : "left";
	
  if (this.translate) {
    alert("Yes, I know translations are fucked. There's still a lot that has to be fixed.");
	  
    this.query = document.getElementById("searchbar").value;
		
    for (var key in this.translations) {
      document.getElementById("searchbar").value = document.getElementById("searchbar").value.replace(key, this.translations[key]);
    }
  } else {
    for (var key in this.translations) {
      document.getElementById("searchbar").value = this.query;
    }
  }
}

function focus() {
  document.getElementById("searchbar").focus();
  document.getElementById("searchbar").select();
}

this.focus();
