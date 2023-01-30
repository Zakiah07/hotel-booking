import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import TopNav from "./components/TopNav";
import PrivateRoute from "./components/PrivateRoute";
import Home from "./booking/Home";
import Login from "./auth/Login";
import Register from "./auth/Register";
import Dashboard from "./user/Dashboard";
import DashboardSeller from "./user/DashboardSeller";
import NewHotel from "./hotels/NewHotel";
import StripeCallback from "./stripe/StripeCallback";
import EditHotel from "./hotels/EditHotel";
import ViewHotel from "./hotels/ViewHotel";

function App() {
  return (
    <Router>
      <TopNav />
      <ToastContainer position="top-center" />
      <Routes>
        <Route
          path="/"
          element={<Home />}
        />
        <Route
          path="/login"
          element={<Login />}
        />
        <Route
          path="/register"
          element={<Register />}
        />
        <Route
          path="/dashboard"
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        />
        <Route
          path="/dashboard/seller"
          element={
            <PrivateRoute>
              <DashboardSeller />
            </PrivateRoute>
          }
        />
        <Route
          path="/hotels/new"
          element={
            <PrivateRoute>
              <NewHotel />
            </PrivateRoute>
          }
        />
        <Route
          path="/stripe/callback"
          element={
            <PrivateRoute>
              <StripeCallback />
            </PrivateRoute>
          }
        />
        <Route
          path="/hotel/edit/:hotelId"
          element={
            <PrivateRoute>
              <EditHotel />
            </PrivateRoute>
          }
        />
        <Route
          path="/hotel/:hotelId"
          element={<ViewHotel />}
        />
      </Routes>
    </Router>
  );
}

export default App;
