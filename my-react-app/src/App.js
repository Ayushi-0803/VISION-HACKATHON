import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/auth/pages/Layout";
import Home from "./components/auth/pages/Home";
import Contact from "./components/auth/pages/Contact";

import SendPassEmail from "./components/auth/pages/SendPassEmail";
import ResetPassword from "./components/auth/pages/ResetPassword";
import Dashboard from "./components/auth/pages/Dashboard";
import Announcements_student from "./components/auth/pages/Announcements_student";
import { MDBContainer } from "mdb-react-ui-kit";
import { AuthProvider } from "./context/UserAuthContext";
import UserLogin from "./components/auth/pages/UserLogin";
import Registration from "./components/auth/pages/Registration";
import { UserAuthContextProvider } from "./context/UserAuthContext";
function App() {
  return (
    <>
      <UserAuthContextProvider>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/Contact" element={<Contact />} />
            <Route path="/login" element={<UserLogin />} />

            <Route path="/signUp" element={<Registration />} />
            <Route path="/announcements" element={<Announcements_student />} />

            <Route path="/reset" element={<ResetPassword />} />
          </Route>
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </UserAuthContextProvider>
    </>
  );
}

export default App;
