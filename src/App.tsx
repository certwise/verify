import "./App.css";
import View from "./pages/View";
import { Route, Routes } from "react-router-dom";
import "./config";
import { useContext, useEffect } from "react";
import Context from "./store";
import Header from "./partials/Header";
import Footer from "./partials/Footer";
function App() {
  const { store } = useContext(Context);
  useEffect(() => console.log(store), [store]);
  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
      <Header />
      <main className="flex-grow mt-16 md:mt-20">
        <Routes>
          <Route path="/:certificateId" element={<View />} />
        </Routes>
        <Footer />
      </main>
    </div>
  );
}

export default App;
