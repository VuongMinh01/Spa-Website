import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React from "react";
import "antd/dist/reset.css"; // Ant Design v5
import { publicRoute } from "./routes";
import PhoneRing from "./components/PhoneRing"; // Import đúng cách
import Navbar from './components/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        {/* Các route công khai */}
        {publicRoute.map((route, index) => {
          const Page = route.component;
          return <Route key={index} path={route.path} element={<Page />} />;
        })}
      </Routes>
      <PhoneRing />

    </BrowserRouter>
  );
}

export default App;
