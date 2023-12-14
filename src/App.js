import { Route, Routes } from "react-router";
import "./App.css";
import Login from "./pages/Login";
import OtpVerfication from "./pages/OtpVerfication";
import Home from "./pages/Home";
import RequireAuth from "./components/RequireAuth";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/login/otpverification" element={<OtpVerfication />} />
        <Route
          path="/"
          element={
            <RequireAuth>
              <Home />
            </RequireAuth>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
