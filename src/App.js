import React from 'react';
import ApiCall from './ApiCall';
import Header from './Header';
import Footer from './Footer';
import Section2 from './Section2';



function App() {
  return (
    <div>
      <div>
        <Header/>
      </div>
      <div className="App">
        <ApiCall/>
      </div>
      <div>
        <Section2/>
      </div>
      <div>
        <Footer/>
      </div>
    </div>
    
  );
}

export default App;
