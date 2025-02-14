import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import { useAuth } from "./hooks/useAuth";
import MainLayout from "./layouts/mainLayout";
import HomePage from "./pages/home";
import LoginPage from "./pages/loginPage";

const App: React.FC = () => {
  const { user } = useAuth();

  return user ? (
    <Router>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<HomePage />} />
        </Route>
      </Routes>
    </Router>
  ) : (
    <LoginPage />
  );
};

export default App;
