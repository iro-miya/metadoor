var xmlhttp;

if (window.XMLHttpRequest) {
  xmlhttp = new XMLHttpRequest();
} else {
  // code for IE6, IE5
  xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
}

xmlhttp.onreadystatechange = function() {
  if (xmlhttp.readyState == XMLHttpRequest.DONE ) {
    if(xmlhttp.status == 200){
      var status = JSON.parse(xmlhttp.responseText).status;
      status = status === "open" ||
               status === "closed" ?
               status :
               "down";

      document.getElementById("open").style.display = "none";
      document.getElementById("closed").style.display = "none";
      document.getElementById("down").style.display = "none";
      document.getElementById(status).style.display = "inline";
    } else {
      console.log('Error: ' + xmlhttp.status)
    }
  }
}

xmlhttp.open("GET", "status.json", true);
xmlhttp.send();

setInterval(function(){
  xmlhttp.open("GET", "status.json", true);
  xmlhttp.send();
}, 3000);
