var query;

function search() {
  this.query = document.getElementById("searchbar").value;
  
  if (this.query != "" && this.query != null)
    if (this.query.toUpperCase() == "JOE FLEMMING" || this.query.toUpperCase() == "JOEFLEMMING" || this.query.toUpperCase() == "JOE")
        window.location = "https://en.wikipedia.org/wiki/Black_Hebrew_Israelites";
    else if (this.query.toUpperCase() == "MATTHEW NEMETH" || this.query.toUpperCase() == "MATTHEWNEMETH" || this.query.toUpperCase() == "NEMETH")
        window.location = "https://en.wikipedia.org/wiki/Rhodesia";
    else if (this.query.toUpperCase() == "DAVID ACEVEDO" || this.query.toUpperCase() == "DAVIDACEVEDO" || this.query.toUpperCase() == "DAVE")
        window.location = "http://www.youtube.com/";
    else if (this.query.toUpperCase() == "ROBERT HASSAJ" || this.query.toUpperCase() == "ROBERTHASSAJ" || this.query.toUpperCase() == "HASSAJ")
        window.location = "https://www.youtube.com/watch?v=OT4MyqrWo6E";
    else if (this.query.toUpperCase() == "VINCENT SIMONCELLI" || this.query.toUpperCase() == "VINCENT SIMONCELLI" || this.query.toUpperCase() == "VINCENT")
        window.location = "https://food.fnr.sndimg.com/content/dam/images/food/fullset/2011/2/4/1/RX-FNM_030111-Lighten-Up-012_s4x3.jpg.rend.hgtvcom.616.462.suffix/1382539856907.jpeg";
    else if (this.query.toUpperCase() == "DAVID HOLLEY" || this.query.toUpperCase() == "DAVIDHOLLEY" || this.query.toUpperCase() == "DAVID")
        window.location = "https://www.hitler.org";
    else
      window.location = "https://www.google.com/search?q=" + this.query;
}

function jewSearch() {
  window.location = "https://www.ushmm.org/wlc/en/article.php?ModuelId=10005144";
}
