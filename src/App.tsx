import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { DataProvider } from "./context/DataContext";
import Frontend from "./pages/Frontend";
import AdminDashboard from "./pages/AdminDashboard";

function App() {
  return (
    <DataProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Frontend />} />
          <Route path="/admin" element={<AdminDashboard />} />
        </Routes>
      </Router>
    </DataProvider>
  );
}

export default App;
