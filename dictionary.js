const wordsList = new Array();
function addWords() {
  let add = document.getElementById("added-word").value;
  wordsList.push(add);  
}

function checkWord() {
  let check = document.getElementById("searchedWord").value;
  if (wordsList.includes(check)) {
    document.getElementById("dictionary-query-message").style.color = "green";
    document.getElementById("dictionary-query-message").innerHTML = "This word there is in the dictionary!";
  } else {
    document.getElementById("dictionary-query-message").style.color = "red";
    document.getElementById("dictionary-query-message").innerHTML = "This word there is not in the dictionary!";
  }
}
