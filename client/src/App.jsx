import { BrowserRouter, Routes, Route } from "react-router-dom";
import Utama from "./pages/Utama";
import Aturcara from "./pages/Aturcara";
import Lokasi from "./pages/Lokasi";
import Rsvp from "./pages/Rsvp";
import Signup from "./pages/Signup";
import Signin from "./pages/Signin";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Utama />} />
        <Route path="/aturcara" element={<Aturcara />} />
        <Route path="/lokasi" element={<Lokasi />} />
        <Route path="/rsvp" element={<Rsvp />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<Signin />} />
      </Routes>
    </BrowserRouter>
  );
}
