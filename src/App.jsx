import { Routes, Route, useLocation } from "react-router-dom";
// import { AuthProvider, useAuth } from './context/AuthContext';
// import ProtectedRoute from './components/ProtectedRoute';
import Sidebar from "./components/Sidebar";
import Home from "./pages/Home";
import Market from "./pages/Market";
import StockList from "./components/ForeignStockList";
import Wallet from "./pages/Wallet";
import TraderProfile from "./pages/TraderProfile";
import History from "./pages/History";
import Trade from "./pages/Trade";
import { localStocks } from "./components/stock/localStock";
import { foreignStocks } from "./components/stock/foreignStocks";
import Fixed from "./pages/Fixed";
import StockDetail from "./components/StockDetail";
import Refer from "./pages/Refer";
import Users from "./pages/Users";
import LocalStockList from "./components/LocalStockList";
import ForeignStockList from "./components/ForeignStockList";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Verify from "./pages/Verify";
import AdminDashboard from "./pages/admin/AdminDashboard";
import Transactions from "./pages/admin/Transactions";

function AppRoutes() {
  const location = useLocation();
  // const { user } = useAuth();
  // const isAdmin = localStorage.getItem('adminRole');
  const hideNavbar =
    location.pathname === "/login" ||
    location.pathname === "/signup" ||
    location.pathname === "/verify" ||
    location.pathname.includes("/trade/") ||
    location.pathname.includes("/trader/") ||
    location.pathname.includes("/admin/");

  // // Always redirect to login if not authenticated, except for signup and verify pages
  // if (!user && !isAdmin && !['/login', '/signup', '/verify'].includes(location.pathname)) {
  //   return <Navigate to="/login" />;
  // }

  // // Redirect authenticated users trying to access auth pages to appropriate dashboard
  // if ((user || isAdmin) && ['/login', '/signup', '/verify'].includes(location.pathname)) {
  //   return isAdmin ? <Navigate to="/admin/users" /> : <Navigate to="/" />;
  // }

  // // Redirect root path to login if not authenticated
  // if (location.pathname === '/' && !user && !isAdmin) {
  //   return <Navigate to="/login" />;
  // }

  return (
    <div className="min-h-screen bg-[#111111] text-white">
      {!hideNavbar && <Sidebar hideOnMobile={hideNavbar} />}
      <div className={!hideNavbar ? "lg:pl-64" : ""}>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/verify" element={<Verify />} />

          {/* Admin Routes */}
          <Route path="/admin/users" element={<Users />} />
          <Route path="/admin/transactions" element={<Transactions />} />
          <Route path="/admin/dashboard" element={<AdminDashboard />} />

          {/* User Routes */}
          <Route path="/" element={<Home />} />
          <Route path="/market" element={<Market />} />
          {/* <Route path="/market/stocks" element={<StockList />} /> */}
          <Route path="/trade/:symbol" element={<StockDetail />} />
          <Route path="/wallet" element={<Wallet />} />
          <Route path="/trader/:traderId" element={<TraderProfile />} />
          <Route path="/history" element={<History />} />
          <Route path="/trade" element={<Trade />} />
          <Route path="/market/local-stocks" element={<LocalStockList stocks={localStocks} />} />
          <Route path="/market/foreign-stocks" element={<ForeignStockList stocks={foreignStocks} />} />
          <Route path="/fixed" element={<Fixed />} />
          <Route path="/refer" element={<Refer />} />
        </Routes>
      </div>
    </div>
  );
}

function App() {
  return (
    // <AuthProvider>
    <AppRoutes />
    // </AuthProvider>
  );
}

export default App;
