import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HeaderProvider } from "./context/HeaderContext";
import { useLocation } from "react-router-dom";

import Index from "./pages/Index";
import AboutMe from "./pages/AboutMe";
import Header from "./components/Header"; 
import Portfolio from "./pages/Portfolio";

const AppContent = () => {
  const location = useLocation();
  const noHeader = ["/"];

  return (
    <div className="m-0 p-0 box-border font-primary">
      {!noHeader.includes(location.pathname) && <Header />}

      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/about-me" element={<AboutMe />} />
        <Route path="/portfolio" element={<Portfolio />} />
      </Routes>
    </div>
  );
};

const App = () => {
  return (
    <HeaderProvider>    
      <Router>
        <AppContent />
      </Router>
    </HeaderProvider>
  )
}

export default App;