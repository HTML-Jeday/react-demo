import React from 'react';
import PeopleList from './PeopleList';
import './App.css';


function App() {
  return (
 <main>
     <div className="firstRow row">
     <span>First Name</span>
     <span>Last Name</span>
     <span>Birth Date</span>
   </div>
   <div className="bodyRow">
      <PeopleList />
   </div>
 </main>
  );
}

export default App;
