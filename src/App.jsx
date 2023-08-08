import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home, Contact, Education, Projects, Skills, Error } from "./pages";
import { Sidebar, Navbar, Footer } from "./components";

const App = () => {
  return (
    <BrowserRouter>
      <Sidebar />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/education" element={<Education />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
