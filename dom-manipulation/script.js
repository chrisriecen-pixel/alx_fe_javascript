function createAddQuoteForm() {
  const textInput = document.getElementById("newQuoteText");
  const categoryInput = document.getElementById("newQuoteCategory");

  const newText = textInput.value.trim();
  const newCategory = categoryInput.value.trim();

  if (newText && newCategory) {
    quotes.push({ text: newText, category: newCategory });
    textInput.value = "";
    categoryInput.value = "";
    showRandomQuote();
  } else {
    alert("Please fill in both fields.");
  }
}

document.getElementById("addQuoteButton").addEventListener("click", createAddQuoteForm);
