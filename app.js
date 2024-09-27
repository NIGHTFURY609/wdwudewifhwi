const inputOneValue = document.getElementById("inputOne");
const inputTwoValue = document.getElementById("inputTwo");
const btnCalculate = document.getElementById("btn-calculate");
const resultDiv = document.getElementById("result-div");
btnCalculate.addEventListener("click", () => {
  let percentage;
  if (inputOneValue.value == ""||inputTwoValue.value == "") {
    alert("please input names");
  } else {
    percentage = Math.floor(Math.random()*100 + 1);
    resultDiv.innerHTML=`<h1>${percentage}% <h1>`;
    setTimeout(()=>{
     resultDiv.innerHTML = "";
    },4000)
  }

  inputOneValue.value = "";
  inputTwoValue.value ="";
});
