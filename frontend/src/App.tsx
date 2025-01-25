import {
  BrowserRouter,
  Navigate,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import "./App.css";
import Footer from "./components/common/footer";
import Navbar from "./components/common/navbar";
// import ProtectedRoute from "./components/auth/ProtectedRoute";
import History from "./pages/History";
import Home from "./pages/Home";
import Index from "./pages/Index";
import Library from "./pages/Library";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";
import Register from "./pages/Register";

function Logout() {
  localStorage.clear();
  return <Navigate to="/login" />;
}

function RegisterAndLogout() {
  localStorage.clear();
  return <Register />;
}

function Layout() {
  const location = useLocation();
  const hideNavAndFooter =
    location.pathname === "/login" || location.pathname === "/register";
  const isLoggedInUser =
    location.pathname === "/home" ||
    location.pathname === "/library" ||
    location.pathname === "/history";

  return (
    <>
      {!hideNavAndFooter && !isLoggedInUser && <Navbar isLoggedIn={false} />}
      {isLoggedInUser && <Navbar isLoggedIn={true} />}

      <Routes>
        <Route path="/" element={<Index />} />
        <Route
          path="/home"
          element={
            // <ProtectedRoute>
            <Home />
            // </ProtectedRoute>
          }
        />
        <Route
          path="/library"
          element={
            // <ProtectedRoute>
            <Library />
            // </ProtectedRoute>
          }
        />
        <Route
          path="/history"
          element={
            // <ProtectedRoute>
            <History />
            // </ProtectedRoute>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/register" element={<RegisterAndLogout />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      {!hideNavAndFooter && !isLoggedInUser && <Footer isLoggedIn={false} />}
      {isLoggedInUser && <Footer isLoggedIn={true} />}
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Layout />
    </BrowserRouter>
  );
}

export default App;
