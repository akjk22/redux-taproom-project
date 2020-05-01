import React from "react";
import Header from "./Header";
// import Keg from "./Keg";
import KegList from "./MerchList";
// import KegControl from "./KegControl";

function App(){
  return (
    <React.Fragment>
      <Header />
      <KegList />
      {/* <Keg /> */}
     {/* <KegControl /> */}
    </React.Fragment>
  );
}

export default App;