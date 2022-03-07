import React from "react";
export default class AddDogClass extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
          isGoing: undefined,
          numberOfGuests: undefined
        };
    
        this.handleInputChange = this.handleInputChange.bind(this);
    
}
}
