import React from "react";
 

// here we are passing the people prop(state,variable containing data)
const List = ({ people }) => {
  return (
    <>
      {people.map((person) => {

        //destructuring the data variables,person is variable which will contain data one by one
        const { id, name, age, image } = person;
        return (
          <article key={id} className="person">
            <img src={image} alt="" />
            <div>
              <h4>{name}</h4>
              <p>{age} years</p>
            </div>
          </article>
        );
      })}
    </>
  );
};

export default List;

// here person is an argument which carries all values that is id,name,age
// and image 
// Map function always return new Array of same size
// 
