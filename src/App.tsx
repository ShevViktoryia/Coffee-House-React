import "./App.css";
import { Route, Routes } from "react-router-dom";
import MainPage from "./pages/MainPage/MainPage";
import { MenuPage } from "./pages/Menu-page/MenuPage";
import { Layout } from "./layout/Layout";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<MainPage />} />
          <Route path="/menu" element={<MenuPage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
