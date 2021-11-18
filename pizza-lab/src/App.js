import React from 'react'
import 'boxicons';
import { Header } from './components/header/Header.jsx';
import  Main  from './components/main/Main.jsx';
import { Footer } from './components/footer/Footer';


function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <Footer />      
    </div>
  );
}

export default App;