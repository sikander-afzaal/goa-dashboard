import { Route, Routes } from "react-router-dom";
import Header from "./Layout/Header/Header";
import TopBar from "./Layout/TopBar/TopBar";
import List from "./Pages/List/List";
import Rent from "./Pages/Rent/Rent";

function App() {
  return (
    <div className="App">
      <Header />
      <TopBar />
      <div className="shadow1"></div>
      <div className="shadow2"></div>
      <Routes>
        <Route path="/" element={<Rent />} />
        <Route path="/list" element={<List />} />
      </Routes>
    </div>
  );
}

export default App;
