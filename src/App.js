import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import Dashboard from "./pages/Dashboard";
import Students from "./pages/Students";
import AddStudent from "./pages/AddStudent";
import AddGroup from "./pages/AddGroup";
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
            <Route path="/groups" element={<Guruhlar />} />
            <Route path="/students" element={<Students />} />
            <Route path="/add-student" element={<AddStudent />} />
            <Route path="/add-group" element={<AddGroup />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;