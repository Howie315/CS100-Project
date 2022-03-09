import React, {useState} from "react"
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import axios from "axios";
import AddDogClass from './AddDogClass'
import { FlatList, StyleSheet, Text, View, TextInput} from 'react-native';
import Dog from './Dog'

const styles = StyleSheet.create({
    container: {
     flex: 1,
     paddingTop: 22
    },
    item: {
      padding: 10,
      fontSize: 18,
      height: 44,
    },
  });

function DogListingsList(){
    const[dogs, setDogs]  = useState([]);

    const addDog = dog =>{
        if(!dog.description || /^\s*$/.test(dog.description)){
            return;
        }

        if(!dog.theName || /^\s*$/.test(dog.theName)){
            return;
        }
        if(!dog.age || /^\s*$/.test(dog.age)){
            return;
        }
        if(!dog.breed || /^\s*$/.test(dog.breed)){
            return;
        }
        if(!dog.gender || /^\s*$/.test(dog.gender)){
            return;
        }


    const newDogs = [dog, ...dogs];

    setDogs(newDogs);
    console.log(...dogs);
};

const updateDog = (dogName, dogAge, dogGender, dogBreed, dogId, newDesc) => {
    if(!newDesc.description || /^\s*$/.test(newDesc.description)){
        return;
    }
    if(!dogName.theName || /^\s*$/.test(dogName.theName)){
        return;
    }
    if(!dogAge.age|| /^\s*$/.test(dogAge.age)){
        return;
    }
    if(!dogGender || /^\s*$/.test(dogGender.gender)){
        return;
    }
    if(!dogBreed || /^\s*$/.test(dogBreed.breed)){
        return;
    }
  
    setDogs(prev => prev.map(item=> (item.id === dogId ? newDesc : item)));
    setDogs(prev => prev.map(item=> (item.id === dogId ? dogName : item)));
    setDogs(prev => prev.map(item=> (item.id === dogId ? dogAge : item)));
    setDogs(prev => prev.map(item=> (item.id === dogId ? dogGender : item)));
    setDogs(prev => prev.map(item=> (item.id === dogId ? dogBreed : item)));
};

const removeDog = id =>{
    const removedArr = [...dogs].filter(dog => dog.id !== id);

    setDogs(removedArr);
};

const completeDog = id =>{
    let updateDog = dogs.map(todo => {
        if(dogs.id === id){
            dogs.isComplete = !dogs.isComplete;
        }
        return dogs;
    });
    setDogs(updateDog);
};

return (
    <>
    <h1>
        Add Dogs When you're ready
    </h1>
        <Dog
            dogs = {dogs}
            completeDog = {completeDog}
            removeDog = {removeDog}
            updateDog={updateDog}
        />
     
    <AddDogClass onSubmit ={addDog} />
   
    </>
);
}

export default DogListingsList;