import React from "react";
import Header from "./Header";
// import Merch from "./Merch";
import MerchList from "./MerchList";
// import MerchControl from "./MerchControl";

function App(){
  return (
    <React.Fragment>
      <Header />
      <MerchList />
      {/* <Merch /> */}
     {/* <MerchControl /> */}
    </React.Fragment>
  );
}

export default App;