import React from 'react';
import axios from 'axios';
import HoverElement from './HoverElement';






export default class PeopleList extends React.Component {
    state = {
      people: [],
      array: []
      }
  
   componentDidMount() {

      axios.get(`https://yalantis-react-school.herokuapp.com/api/task0/users`)
        .then(res => {
          let people = res.data;

          this.setState({people});
      
        }).then(res =>{
          let people = this.changedPeople();
         
          this.setState({people})
         
        }).then(res =>{
          let array = this.newArr();
         
          this.setState({array})
         
        })

        
      
    }

    changedPeople(){
      let {people} = this.state;
      
      people.map(person =>{
        let newString = parseInt( person.dob.split('-')[1]);
        return person.dob = newString;
     })

     return people;
     
    }



    newArr() {
      
      let {people} = this.state;
      let someArr = [];
      
      people.map(person =>{
        return someArr.push(person.dob);
      })
      
  

      var arr2 = {};

      // массив с повторениями
  
     for (var i = 0; i < someArr.length; i++) {
       if (arr2[someArr[i]]) {
         arr2[someArr[i]] += 1;
       } else {
         arr2[someArr[i]] = 1;
       }
     }

 
     // повторения меняются на цвета
     // цвета для массива с повторениями
     
     for (let key in arr2) {
   
      if(arr2[key] === 0 || arr2[key] <= 2){
        arr2[key] = 'gray';
      }
      if(arr2[key] === 3  || arr2[key] <= 6){
        arr2[key] = 'blue';
      }
      if(arr2[key] === 7 || arr2[key] <= 10){
        arr2[key] = 'green';
      }
      if(arr2[key] === 11 || arr2[key] <= 9999 ){
        arr2[key] = 'red';
      }

    }

 
    // цвета массива для рендера
    for(let i=0; i < someArr.length ; i++){
      
      for (let key in arr2){
          if(someArr[i] == key){
           
              someArr[i] = arr2[key]
              
          }
      }
    }

  
     return someArr;

     

    }


     hlPeople(number){
      // массив совпадений по месяцам
      let {people} = this.state;
      let arr = []
 

      people.map(person =>{
       
        if(person.dob == number){
          return arr.push({
            firstName: person.firstName,
            lastName: person.lastName
          })
        }
      
        
      })
     
    return arr;


    }

  
       
   
   
   render() {
    let {people, array} = this.state;
    let i = 1;
    let counter = 0;
 
  
    
   return (
  <React.Fragment>

        {people.map(person => 
        <div key={person.id} className="row ">
            <span>{i++}.{person.firstName}</span>
            <span>{person.lastName}</span>
            <span className={array[counter++]} >{person.dob}

            <HoverElement people={this.hlPeople(person.dob)}  />
            </span>
        </div>
        
        )}
        



</React.Fragment>
   )
 }



  }



  
