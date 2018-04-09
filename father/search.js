var query;

function search() {
  this.query = document.getElementById("searchbar").value;
  
  if (this.query != "" && this.query != null)
    if (this.query.toUpperCase() == "JOE FLEMMING" || this.query.toUpperCase() == "JOEFLEMMING" || this.query.toUpperCase() == "JOE")
        window.location = "https://en.wikipedia.org/wiki/Black_Hebrew_Israelites";
    else if (this.query.toUpperCase() == "MATTHEW NEMETH" || this.query.toUpperCase() == "MATTHEWNEMETH" || this.query.toUpperCase() == "NEMETH")
        window.location = "https://en.wikipedia.org/wiki/Rhodesia";
    else if (this.query.toUpperCase() == "DAVID ACEVEDO" || this.query.toUpperCase() == "DAVIDACEVEDO" || this.query.toUpperCase() == "DAVE")
        window.location = "";
    else
      window.location = "https://www.google.com/search?q=" + this.query;
}

function jewSearch() {
  window.location = "https://www.ushmm.org/wlc/en/article.php?ModuelId=10005144";
}
