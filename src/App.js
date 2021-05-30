
import './App.css';
import './Component/Profile/style.css';
import React from "react";
import MyFirstComponent from './project/test';
import FullName from './Component/Profile/FullName';
import ProfilePhoto from './Component/Profile/ProfilePhoto';
import Address from './Component/Profile/Address';
function App() {
  return (
    <div className="App">
  
 <>
 <ProfilePhoto />
 <FullName />
 <Address />

   <MyFirstComponent />
 </>

    </div>
  );
}

export default App;
