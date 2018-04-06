var query;

search() {
  this.query = document.getElementById("searchbar").value;
  window.location = "https://www.google.com/search?q=", this.query;
}

jewSearch() {
}
