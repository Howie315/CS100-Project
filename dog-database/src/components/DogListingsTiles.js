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
        if(!dog.text || /^\s*$/.test(dog.text)){
            return;
        }
    

    const newDogs = [dog, ...dogs];

    setDogs(newDogs);
    console.log(...dogs);
};

const updateDog = (dogId, newValue) => {
    if(!newValue.text || /^\s*$/.test(newValue.text)){
        return;
    }
    setDogs(prev => prev.map(item=> (item.id === dogId ? newValue : item)));
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
    <View style ={styles.container}>
        <Dog
            dogs = {dogs}
            completeDog = {completeDog}
            removeDog = {removeDog}
            updateDog={updateDog}
        />
        </View>
    <AddDogClass onSubmit ={addDog} />
   
    </>
);
}

export default DogListingsList;