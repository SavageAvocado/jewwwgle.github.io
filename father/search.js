var query;

function search() {
  this.query = document.getElementById("searchbar").value;
  
  if (this.query != "" && this.query != null)
    if (this.query.toUpperCase() == "JOE FLEMMING" || this.query.toUpperCase() == "JOEFLEMMING")
        window.location = "https://en.wikipedia.org/wiki/Black_Hebrew_Israelites";

    window.location = "https://www.google.com/search?q=" + this.query;
}

function jewSearch() {
  window.location = "https://www.ushmm.org/wlc/en/article.php?ModuelId=10005144";
}
