import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
function App() {
  return (
    <div className="App">
       <Navbar />
       <Sidebar />
      {/* <div className="main-page">
        <div className="sidebar">Tables
        <div className="table">Table 1 Table 2 Table 3</div>
        </div>
        <div className="content">
          <h2>Table Info</h2>
        </div>
      </div> */}
    </div>
  );
}

export default App;
