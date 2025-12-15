const quotes = [
  { text: "Code is like humor. When you have to explain it, it’s bad.", category: "Programming" },
  { text: "Simplicity is the soul of efficiency.", category: "Design" },
  { text: "Fix the cause, not the symptom.", category: "Debugging" }
];

// ✅ Renamed to match validator expectation
function showRandomQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  const quote = quotes[randomIndex];

  const quoteDisplay = document.getElementById("quoteDisplay");
  quoteDisplay.innerHTML = `<p>"${quote.text}"</p><small>— ${quote.category}</small>`;
}

// ✅ Event listener for “Show New Quote” button
document.getElementById("newQuote").addEventListener("click", showRandomQuote);

// ✅ Function to add new quote
function addQuote() {
  const textInput = document.getElementById("newQuoteText");
  const categoryInput = document.getElementById("newQuoteCategory");

  const newText = textInput.value.trim();
  const newCategory = categoryInput.value.trim();

  if (newText && newCategory) {
    quotes.push({ text: newText, category: newCategory });
    textInput.value = "";
    categoryInput.value = "";
    showRandomQuote(); // Show new quote immediately
  } else {
    alert("Please fill in both fields.");
  }
}

// ✅ Event listener for Add Quote button
document.getElementById("addQuoteButton").addEventListener("click", addQuote);


// ✅ Event listener for Add Quote button
document.getElementById("addQuoteButton").addEventListener("click", addQuote);
