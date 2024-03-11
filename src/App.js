import "./App.css";

function App() {
  const habdleClick = () => {
    console.log("hello");
  };

  const handleFormInput = (e) => {
    console.log(e.target);
    console.log(e.target.name);
    console.log(e.target.value);
    console.log("handle form iNput");
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("form Submitted");
  };
  return (
    <div className="App">
      <h1>Ramesh</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" name="example" onChange={handleFormInput} />
        <br />
        <button onClick={habdleClick} style={{ margin: "1rem" }}>
          click
        </button>
      </form>
    </div>
  );
}

export default App;
