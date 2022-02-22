const wordsList = new Array();
function addWords() {
  let add = document.getElementById("words").value;
  wordsList.push(add);  
}

function checkWord() {
  let check = document.getElementById("check").value;
  if (wordsList.includes(check)) {
    document.getElementById("displayResult").style.color = "green";
    document.getElementById("displayResult").innerHTML = "This word there is in the dictionary!";
  } else {
    document.getElementById("displayResult").style.color = "red";
    document.getElementById("displayResult").innerHTML = "This word there is not in the dictionary!";
  }
}
