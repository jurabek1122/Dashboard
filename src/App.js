import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import Dashboard from "./pages/Dashboard";
import Students from "./pages/Students";
import Guruhlar from "./pages/Guruhlar";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="main">
        <Sidebar />
        <div className="content">
          <Header />
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/guruhlar" element={<Guruhlar />} />
            <Route path="/students" element={<Students />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;