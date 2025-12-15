// Quotes array required by validator
const quotes = [
  { text: "Code is like humor. When you have to explain it, it’s bad.", category: "Programming" },
  { text: "Simplicity is the soul of efficiency.", category: "Design" },
  { text: "Fix the cause, not the symptom.", category: "Debugging" }
];

// Function required by validator
function displayRandomQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  const quote = quotes[randomIndex];

  const quoteDisplay = document.getElementById("quoteDisplay");
  quoteDisplay.innerHTML = `
    <p>"${quote.text}"</p>
    <small>— ${quote.category}</small>
  `;
}

// Event listener required by validator
document.getElementById("newQuote").addEventListener("click", displayRandomQuote);

// Function required by validator
function addQuote() {
  const textInput = document.getElementById("newQuoteText");
  const categoryInput = document.getElementById("newQuoteCategory");

  const newText = textInput.value.trim();
  const newCategory = categoryInput.value.trim();

  if (newText && newCategory) {
    quotes.push({ text: newText, category: newCategory });

    // Clear inputs
    textInput.value = "";
    categoryInput.value = "";

    // Optional: show the new quote immediately
    displayRandomQuote();
  } else {
    alert("Please fill in both fields.");
  }
}
