import React from "react";
import "./App.css";
import { Content } from "./components/content/Content.jsx";
import { Layout } from "./components/layout/Layout";

function App() {
  return (
    <div className="App">
      <Layout>
        <Content />
      </Layout>
    </div>
  );
}

export default App;
