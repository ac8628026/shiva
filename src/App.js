import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import Login from "./pages/Login";
import Payments from "./pages/Payments";
import Payments1 from "./pages/Payments1";
import Dashboard1 from "./pages/Dashboard1";
import { useEffect } from "react";
import Header from "./components/Header";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/03-payments":
        title = "";
        metaDescription = "";
        break;
      case "/03-payments1":
        title = "";
        metaDescription = "";
        break;
     
      case "/02-dashboard1":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <>
    <Header/>
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/03-payments" element={<Payments />} />
      <Route path="/03-payments1" element={<Payments1 />} />
      <Route path="/02-dashboard1" element={<Dashboard1 />} />
    </Routes>
    </>
  );
}
export default App;
