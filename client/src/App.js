import "./App.css";
import GetAllTrains from "./components/GetAllTrains";
import GetTrainDetails from "./components/GetTrainDetails";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<GetAllTrains />} />
          <Route path="train/:trainId" element={<GetTrainDetails />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
