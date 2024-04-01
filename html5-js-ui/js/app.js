let lastWorkMessage
lastWorkMessage = ""

function doWork() {
  if (lastWorkMessage.length === 0) {
    alert("Working on it.");
  }
  else {
    lastWorkMessage = lastWorkMessage.concat("Working on it.\n");
  }

}
function seeqLogin() {
  if (lastWorkMessage.length === 0) {
    alert("Logging into Seeq.");
  }
  else {
    lastWorkMessage = lastWorkMessage.concat("Logging into Seeq.\n");
  }
}
function getWork() {
  if (lastWorkMessage.length === 0) {
    alert("Retrieving work result.");
  }
  else {
    lastWorkMessage = lastWorkMessage.concat("Retrieving work result.\n");
  }
}

function oneClickAll() {
  lastWorkMessage = "**";
  seeqLogin();
  doWork();
  getWork();
  alert(lastWorkMessage);
  lastWorkMessage = "";
}
