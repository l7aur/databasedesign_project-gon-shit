import '../csses/App.css';
import Page1 from "./Page1";
import ArmorPage from "./ArmorPage"
import CharacterPage from "./CharacterPage"
import BossPage from "./BossPage";
import SorceryPage from "./SorceryPage";
import IncantationPage from "./IncantationPage";
import WeaponPage from "./WeaponPage";

import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import HomeButton from "./HomeButton";

function App() {
    return (
         <Router>
            <Routes>
                <Route path="/" element={<Page1 />} />
                <Route path="/" element={<HomeButton/>} />
                <Route path="/BossPage" element={<BossPage />} />
                <Route path="/WeaponPage" element={<WeaponPage />} />
                <Route path="/ArmorPage" element={<ArmorPage />} />
                <Route path="/SorceryPage" element={<SorceryPage />} />
                <Route path="/IncantationPage" element={<IncantationPage />} />
                <Route path="/CharacterPage" element={<CharacterPage />} />
           </Routes>
         </Router>

    );
}

export default App;
