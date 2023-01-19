import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "../common/header";
import Matter from "../common/mattter";
import EighthPage from "../pages/eighth";
import FifthPage from "../pages/fifth";
import FirstPage from "../pages/first";
import FourthPage from "../pages/fourth";
import NinthPage from "../pages/ninth";
import SecondPage from "../pages/second";
import SeventhPage from "../pages/seventh";
import SixthPage from "../pages/sixth";
import TenthPage from "../pages/tenth";
import ThirdPage from "../pages/third";

function RootRouter() {
    return (
        <BrowserRouter>
            <Header />
            <Matter />
            <Routes>
                <Route path="/" element={<FirstPage />} />
                <Route path="/1" element={<SecondPage />} />
                <Route path="/2" element={<ThirdPage />} />
                <Route path="/3" element={<FourthPage />} />
                <Route path="/4" element={<FifthPage />} />
                <Route path="/5" element={<SixthPage />} />
                <Route path="/6" element={<SeventhPage />} />
                <Route path="/7" element={<EighthPage />} />
                <Route path="/8" element={<NinthPage />} />
                <Route path="/9" element={<TenthPage />} />
            </Routes>
        </BrowserRouter>
    );
}

export default RootRouter;
