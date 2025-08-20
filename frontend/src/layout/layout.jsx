import { Outlet } from "react-router-dom";
import NavBar from "../component/navbar/navbar.jsx";
import Footer from "../component/footer/footer.jsx";

export default function RootLayout() {
    return (
      <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
        <NavBar />
        <main style={{ flex: 1 }}>
          <Outlet />
        </main>
        <Footer />
      </div>
    );
  }
  
