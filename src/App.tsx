import React, {useState} from 'react';
import Topbar from "./components/Navbar/Topbar";
import Funding from "./pages/Funding/Funding";
import Sidebar from "./components/Navbar/Sidebar";

function App() {
  const [showSidebar, setShowSidebar] = useState(false);
  
  
  return (
    <div className="App">
      <Topbar toggle={() => setShowSidebar(true)} showSidebar={showSidebar} />
      <Sidebar setToggle={() => setShowSidebar(false)} showSidebar={showSidebar} />
      <Funding />
    </div>
  );
}

export default App;
