const expenses = [
  { description: "lunch", amount: 2000, category: "food" },
  { description: "mobile", amount: 10000, category: "Electronics" },
  { description: "shoes", amount: 2500, category: "Clothing" },
];

const descInput = document.getElementById("descInp");
const categoryInput = document.getElementById("categoryInp");
const amountInput = document.getElementById("amountInp");
const display = document.getElementById("display");
const addExpBtn = document.getElementById("addExpBtn");
const showtotal = document.getElementById("showtotal");
const dropdown = document.getElementById("dropdownBtn");

function renderExpenses(filterCategory = "all") {
  display.innerHTML = "";
  showtotal.innerHTML = "";

  let filteredExpense =
    filterCategory === "all"
      ? expenses
      : expenses.filter((exp) => exp.category === filterCategory);

  filteredExpense.forEach((exp) => {
    let expenseDiv = document.createElement("div");
    let divDesc = document.createElement("div");
    divDesc.innerHTML = `${exp.description}-${exp.category}`;
    let divAmt = document.createElement("div");
    divAmt.innerHTML = `${exp.amount}`;

    expenseDiv.appendChild(divDesc);
    expenseDiv.appendChild(divAmt);
    display.appendChild(expenseDiv);
  });

  let total = filteredExpense.reduce((acc, exp) => acc + Number(exp.amount), 0);
  let displayTotal = document.createElement("div");
  displayTotal.innerHTML = `Total : Rs-${total}`;
  showtotal.appendChild(displayTotal);
}

addExpBtn.addEventListener("click", () => {
  let newExpense = {
    description: descInput.value,
    category: categoryInput.value,
    amount: amountInput.value,
  };

  expenses.push(newExpense);

  descInput.value = "";
  categoryInput.value = "";
  amountInput.value = "";
  renderExpenses(dropdown.value);
});

dropdown.addEventListener("change", () => {
  renderExpenses(dropdown.value);
});

renderExpenses();
