// ✅ 1. quotes array with correct structure
const quotes = [
  { text: "Code is like humor. When you have to explain it, it’s bad.", category: "Programming" },
  { text: "Simplicity is the soul of efficiency.", category: "Design" },
  { text: "Fix the cause, not the symptom.", category: "Debugging" }
];

// ✅ 2. displayRandomQuote function
function displayRandomQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  const quote = quotes[randomIndex];

  const quoteDisplay = document.getElementById("quoteDisplay");
  quoteDisplay.innerHTML = `<p>"${quote.text}"</p><small>— ${quote.category}</small>`;
}

// ✅ 6. Event listener for “Show New Quote” button
document.getElementById("newQuote").addEventListener("click", displayRandomQuote);

// ✅ 4. addQuote function
function addQuote() {
  const textInput = document.getElementById("newQuoteText");
  const categoryInput = document.getElementById("newQuoteCategory");

  const newText = textInput.value.trim();
  const newCategory = categoryInput.value.trim();

  // ✅ 5. Logic to add quote and update DOM
  if (newText && newCategory) {
    quotes.push({ text: newText, category: newCategory });
    textInput.value = "";
    categoryInput.value = "";
    displayRandomQuote(); // Optional: show new quote immediately
  } else {
    alert("Please fill in both fields.");
  }
}

// ✅ Event listener for Add Quote button
document.getElementById("addQuoteButton").addEventListener("click", addQuote);
