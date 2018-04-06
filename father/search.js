var query;

function search() {
  this.query = document.getElementById("searchbar").value;
  
  if (this.query != "" && this.query != null)
    window.location = "https://www.google.com/search?q=" + this.query;
}

function jewSearch() {
  window.location = "https://www.ushmm.org/wlc/en/article.php?ModuelId=10005144";
}
