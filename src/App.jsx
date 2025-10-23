import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HeaderProvider } from "./context/HeaderContext";

import Index from "./pages/Index";
import AboutMe from "./pages/AboutMe";
import Header from "./components/Header"; 

const noHeader = ["/"];


const App = () => {
  return (
    <>
      <div className="m-0 p-0 box-border font-primary">
        <HeaderProvider>    
          <Router>

            {noHeader.includes(window.location.pathname) ? null : <Header />}

            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/about-me" element={<AboutMe />} />
            </Routes>
          </Router>
        </HeaderProvider>
      </div>
    </>
  )
}

export default App