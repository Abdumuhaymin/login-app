import { Route, Routes } from "react-router-dom";
import Login from "./pages/login";
import { MainLayout } from "./main-layout/main-Layout";
import Home from "./pages/home/home";
function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<MainLayout />}>
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
