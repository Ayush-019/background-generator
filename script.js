var input = document.getElementById("myinput");
var button = document.getElementById("btn");
var ul = document.querySelector("ul");

document.getElementById("btn").addEventListener("click", function () {
  if (input.value.length > 0) {
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(input.value));
    ul.appendChild(li);
    input.value = "";
  }
});

input.addEventListener("keypress", function (event) {
  if (input.value.length > 0 && event.keyCode == 13) {
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(input.value));
    ul.appendChild(li);
    input.value = "";
  }
});

document.getElementById("hide").addEventListener("click", function () {
  if (ul.style.display != "none") {
    var x = confirm("Are you sure yow wanna hide the list?");
    if (x == true) {
      ul.style.display = "none";
    }
  } else {
    ul.style.display = "table";
    ul.style.margin = "15px auto";
  }
});


// Css Color Generator
var body = document.querySelector("body");
var color1 = document.getElementById("color1");
var color2 = document.getElementById("color2");

color1.addEventListener("input", function(){
    body.style.background = "linear-gradient(to right, "+ color1.value +" , "+ color2.value +")"; 
    document.querySelector("h3").textContent = body.style.background + ";";
})

color2.addEventListener("input", function () {
  body.style.background =
    "linear-gradient(to right, " + color1.value + " , " + color2.value + ")";
    document.querySelector("h3").textContent = body.style.background + ";";
});

//Making a single Function ::
// function setgradient(){
//     body.style.background = "linear-gradient(to right, "+ color1.value +" , "+ color2.value +")"; 
//     document.querySelector("h3").textContent = body.style.background + ";";
// }

// color1.addEventListener("input", setgradient)
// color2.addEventListener("input", setgradient)
