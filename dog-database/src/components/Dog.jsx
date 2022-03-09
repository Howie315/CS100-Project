import React from "react";




const [toggled, setToggled] = useState(false);
const toggle = () => {
  setToggled(!toggled);
const contextValue = {
   toggled: toggled,
   toggle: toggle,
};
}

class Dog extends React.Component {
  constructor(props) {
    super(props);
    this.callMe = this.callMe.bind(this);
  }


  // ParentClass function
  

  render() {
    return false;
  }
}
