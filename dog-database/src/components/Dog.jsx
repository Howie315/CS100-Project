import React, {useState, } from  "react";
import { RiCloseCircleLine } from 'react-icons/ri';
import { TiEdit } from 'react-icons/ti';
import AddDog from "./AddDog";
import AddDogClass from './AddDogClass'

const Dog = ({dogs, completeDog, removeDog, updateDog}) => {
  const[edit, setEdit] = useState({
    id:null,
    value: ''
  });



const submitUpdate = value =>{
  updateDog(edit.id, value);
  setEdit({
    id: null,
    value: ''
  });
};

if(edit.id){
  return <AddDogClass edit ={edit} onSubmit = {submitUpdate} />;

}

return dogs.map((dog, index) => (
  <div
  className={dog.isCompelte ? 'dog-row complete' : 'dog-row'}
  key ={index}
  >
    <div key = {dog.id} onClick={() => completeDog(dog.id)}>
      {dog.text}
      </div>
      <div className = 'icons'>
        <RiCloseCircleLine
        onClick={() => removeDog(dog.id)}
        className = 'delete-icon'
        />
        <TiEdit
        onClick={() => setEdit({ id: dog.id, value: dog.text})}
        className ='edit-icon'
        />
        </div>
        </div>
));
};

export default Dog;