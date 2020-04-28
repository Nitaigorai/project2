if (confirm("Press a button!")) {
  txt = "You pressed OK!";
} else {
  txt = "You pressed Cancel!";
}

function displayResult() {
if (document.getElementById("checkbox").checked)
   console.log("checked");
else
   console.log("not checked");
}
