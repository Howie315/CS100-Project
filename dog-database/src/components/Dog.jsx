import React, {useState, } from  "react";
import { RiCloseCircleLine } from 'react-icons/ri';
import { TiEdit } from 'react-icons/ti';
import AddDog from "./AddDog";
import AddDogClass from './AddDogClass';
import styled from 'styled-components'


const Dog = ({dogs, completeDog, removeDog, updateDog, theName, age, gender, breed, id, description}) => {
  const[edit, setEdit] = useState({
    theName: "",
    age: 0,
    gender: "",
    breed: "",
    id:null,
    description: "",
    dogTagList:[]

  });

 
const submitUpdate = value =>{
  updateDog(edit.theName, edit.age, edit.breed, edit.gender, edit.id, description);
  setEdit({
    theName: "",
    age: 0,
    gender: "",
    breed: "",
    id: null,
    description: ""
  });
};



if(edit.id){
  return <AddDogClass edit ={edit} onSubmit = {submitUpdate} />;

}


return dogs.map((dog, index) => (
  <div
  className={dog.isComplete ? 'dog-row complete' : 'dog-row'}
  key ={index}
  >
    <div key = {dog.id} onClick={() => completeDog(dog.id)}>
      {dog.theName}
      {dog.age}
      {dog.gender}
      {dog.breed}
      {dog.description}

      </div>
      <div className = 'icons'>
        <RiCloseCircleLine
        onClick={() => removeDog(dog.id)}
        className = 'delete-icon'
        />
        <TiEdit
        onClick={() => setEdit({ theName: dog.theName, age: dog.age ,gender: dog.gender, breed: dog.breed,id: dog.id, description: dog.description})}
        className ='edit-icon'
        />
        <styledDogTile>

          </styledDogTile>     
          </div>
        </div>
));
};

export const styledDogTile = styled.div`
  
`

export default Dog;