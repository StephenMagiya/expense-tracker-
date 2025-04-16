import { useState } from "react";
import ExpenseForm from "./components/ExpenseForm";
import ExpenseTable from "./components/ExpenseTable";
import SearchBar from "./components/SearchBar";

function App() {
  const [expenses, setExpenses] = useState([
    { id: 1, description: "Groceries", amount: 50, category: "Food" },
    { id: 2, description: "Internet", amount: 30, category: "Utilities" },
    { id: 3, description: "Transport", amount: 20, category: "Travel" },
  ]);

  const [searchTerm, setSearchTerm] = useState("");

  const handleAddExpense = (newExpense) => {
    setExpenses([...expenses, { ...newExpense, id: Date.now() }]);
  };

  const filteredExpenses = expenses.filter(
    (exp) =>
      exp.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      exp.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container">
      <h1>Expense Tracker</h1>
      <SearchBar searchTerm={searchTerm} onSearch={setSearchTerm} />
      <ExpenseForm onAddExpense={handleAddExpense} />
      <ExpenseTable expenses={filteredExpenses} />
    </div>
  );
}

export default App;
