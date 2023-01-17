import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/auth/pages/Layout";
import Home from "./components/auth/pages/Home";
import Contact from "./components/auth/pages/Contact";
import LoginReg from "./components/auth/pages/LoginReg";
import SendPassEmail from "./components/auth/pages/SendPassEmail";
import ResetPassword from "./components/auth/pages/ResetPassword";
import  Dashboard  from "./components/auth/pages/Dashboard";
import Announcements_student from "./components/auth/pages/Announcements_student";


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="Contact" element={<Contact />} />
            <Route path="login" element={<LoginReg />} />
            <Route path="sendpassemail" element={<SendPassEmail />} />
            <Route path="announcements" element={<Announcements_student />} />

            <Route path="reset" element={<ResetPassword />} />
          </Route>
          <Route path="dashboard" element={<Dashboard />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
