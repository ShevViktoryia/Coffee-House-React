import "./App.css";
import { Route, Routes } from "react-router-dom";
import MainPage from "./pages/MainPage/MainPage";
import { CoffeePage } from "./pages/Coffee-page/CoffeePage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/coffee" element={<CoffeePage />} />
      </Routes>
    </div>
  );
}

export default App;
