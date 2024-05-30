import React from "react";
// Components
import ToastPlayground from "../ToastPlayground";
import Footer from "../Footer";
// Providers
import ToastProvider from "../../providers/ToastProvider";

function App() {
  return (
    <ToastProvider>
      <ToastPlayground />
      <Footer />
    </ToastProvider>
  );
}

export default App;
