import "./App.css";
import ExpenseItem from "./components/ExpenseItem";

const expenses = [
  {
    id: 0,
    description: "Cargills",
    amount: 2900.0,
    timestamp: "03/12/2021 05:00 PM",
  },
  {
    id: 1,
    description: "Petrol",
    amount: 6900.0,
    timestamp: "01/06/2022 05:00 PM",
  },
];

const expensesList = expenses.map((expenseItem) => {
  return <ExpenseItem expenseItem={expenseItem} />;
});

const addToExpnesesList = () => {
  console.log("expenses list called");
};

function App() {
  return (
    <div className="App">
      <header className="header">
        <h1 className="text-3xl font-bold underline text-white text-center">
          Expense Tracker
        </h1>
      </header>
      <div className="content">
        <div className="grid">{expensesList}</div>
      </div>
      <div className="add-form grid">
        <input
          type="text"
          name="description"
          placeholder="Description"
          className="p-4 m-2 text-black"
        />
        <input
          type="text"
          name="amount"
          placeholder="Amount"
          className="p-4 m-2 text-black"
        />
        <button
          className=" bg-blue hover:bg-purple text-white font-bold p-4 rounded m-2"
          onClick={addToExpnesesList}
        >
          Add Record
        </button>
      </div>
    </div>
  );
}

export default App;
