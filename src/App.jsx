import { Navigate, Route, Routes } from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import Login from "./pages/Login";
import Home from "./pages/Home";
import SignUp from "./pages/SignUp";
import Contact from "./pages/Contact";
import FAQ from "./pages/FAQ";
import UserProfile from "./pages/UserProfile";
import { useContext } from "react";
import { AuthContext } from "./context/AuthContext";
function App() {
  const { token } = useContext(AuthContext);
  return (
    <div>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<Home />} />
          {/* {!token && <Route path="/login" element={<Login />} />} */}
          <Route
            path="/login"
            element={<Login />}
            // element={!token ? <Login /> : <Navigate to="/" />}
          />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/profile" element={<UserProfile />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
