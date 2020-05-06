import React from "react";
import Header from "./Header";
// import Keg from "./Keg";
// import KegList from "./KegList/KegList";
import KegControl from "./KegControl";
import './App.css';


function App(){
  return (
    <React.Fragment>
      <Header />
      <KegControl />
    </React.Fragment>
  );
}

export default App;