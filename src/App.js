import React, { useState } from 'react';
import data from './data';
import List from './List';
function App() {
  const [people,setPeople]=useState(data);
  // console.log(data) here all data is there in form of array objects

  return <main>

    <section className='container'>
      <h3>{people.length} Birthdays Today</h3>

      {/* here we are passing all data to List component in people prop. */}
      <List people={people}/>


      {/* here we are deleting all the data in array on button click,using function of that state containing data */}
      <button onClick={()=>setPeople([])}>Clear All</button>
    </section>



  </main>;
}

export default App;  
 
