import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="header">
        <h1 className="text-3xl font-bold underline text-white text-center">
          Expense Tracker
        </h1>
      </header>
      <div className="content">
        <div className="grid">
          <div className="p-8 m-5 border-4 border-solid rounded border-white-400">
            <strong>Cargills: LKR 2900.00</strong> <br />
            <span>28/03/2022 05:00 PM</span>
          </div>
          <div className="p-8 m-5 border-4 border-solid rounded border-white-400">
            <strong>Cargills: LKR 2900.00</strong> <br />
            <span>28/03/2022 05:00 PM</span>
          </div>
        </div>
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
        <button className=" bg-blue hover:bg-purple text-white font-bold p-4 rounded m-2">
          Add Record
        </button>
      </div>
    </div>
  );
}

export default App;
