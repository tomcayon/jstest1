function show_alert() {
  if (event.keyCode == 13) {
    var name = document.getElementById('myname').value;
    document.getElementById("p1").innerHTML = "Bonjour " + name + " !";
    }
  } 