function generate() {
   var noBtns = document.getElementById("myNumber").value;
   for (var index = 1; index <= noBtns; ++index) {
      const button = document.createElement("button");
      button.innerText = "Click me";
      button.value = index;
      button.addEventListener("click", function() {
         checkBtn(button.value, noBtns);
      });
      document.body-myBody.appendChild(button);
   }
}
function checkBtn(currentBtn, nrBtns) {
   var result = Math.floor(Math.random() * nrBtns) + 1;
   if (currentBtn == result) {
      alert("You win!");
   } else {
      alert("You lose!");
   }
}
