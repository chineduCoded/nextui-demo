import { NextUIProvider } from "@nextui-org/react"
import './App.css';
import { Suspense, lazy } from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar";
import Loader from "./components/Loader";

const Product = lazy(() => import("./components/Product"))
const Cart = lazy(() => import("./components/Cart"))

function App() {
  return (
    <div className="App">
      <NextUIProvider>
        <Navbar />
        <Router>
          <Suspense fallback={<Loader />}>
            <Routes>
              <Route path="/" element={<Product />} />
              <Route path="/cart" element={<Cart />} />
            </Routes>
          </Suspense>
        </Router>
      </NextUIProvider>
    </div>
  );
}

export default App;
