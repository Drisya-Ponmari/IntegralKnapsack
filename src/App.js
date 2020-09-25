import React from 'react';
import logo from './logo.svg';
import './App.css';
import Main from "./Template/Main";
import Header from "./Template/Header";
import Footer from "./Template/Footer";


function App() {
  return (
    <div >
      <header className="App-header">
       <Header/>
       <Main/>
       
       <Footer/>
      </header>
    </div>
  );
}

export default App;
//className="App"  className="App-header"
