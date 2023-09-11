import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home, Contact, Education, Projects, Skills, Error } from "./pages";
import { Sidebar, Explorer, Footer, Titlebar, Tabsbar } from "./components";

const App = () => {
  return (
    <BrowserRouter>
      <Titlebar />
      <div style={{ display: "flex" }}>
        <Sidebar />
        <Explorer />
        <div style={{ width: "100%" }}>
          <Tabsbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/education" element={<Education />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="*" element={<Error />} />
          </Routes>
        </div>
      </div>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
