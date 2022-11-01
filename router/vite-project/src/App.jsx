import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./Navbar";
import About from "./pages/About";
import Contact from "./pages/Contact";
// import Error from "./pages/Error";
import ReachMe from "./pages/ReachMe";
import EmailMe from "./pages/EmailMe";
import ErrorBoundary from "./pages/Error"
import SingleUser from "./pages/SingleUser"
import Users from "./pages/Users"
import { ErrorPage } from "./ErrorPage";



function App() {
  return (
    <>
      <ErrorBoundary>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/Navbar" element={<Navbar />} /> */}
          <Route path="/Contact">
            <Route index element={<Contact />} />
            <Route path=":id" element={<ReachMe />} />
            <Route path="new" element={<EmailMe />} />
          </Route>
          <Route path="users" element={<Users />}></Route>
          <Route path="users/:id" element={<SingleUser />}></Route>
          <Route path="/About" element={<About />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </ErrorBoundary>
    </>
  );
}

export default App;
