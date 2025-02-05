import "./App.css";
import { Route, Routes } from "react-router-dom";
import MainPage from "./pages/MainPage/MainPage";
import { MenuPage } from "./pages/Menu-page/MenuPage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/menu" element={<MenuPage />} />
      </Routes>
    </div>
  );
}

export default App;
