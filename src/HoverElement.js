import React from 'react';

export default  class HoverElement extends React.Component {


   render(){
      let { people } = this.props;
      let i = 0;

      return(
         <div className="hideBlock">
             {people.map(person => 
               <span key={i++}>
                  <li>First Name : {person.firstName} </li>
                  <li>Last Name : {person.lastName}</li>
               </span>
             )}
         </div>
      )
   }
}

