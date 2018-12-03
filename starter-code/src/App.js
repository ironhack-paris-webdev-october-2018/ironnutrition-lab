import React, { Component } from "react";
import "./App.css";
import "bulma/css/bulma.css";
import foods from "./foods.json";
import FoodBox from "./components/FoodBox";
import Form from "./components/Form";

class App extends Component {
  state = {
    foods
  };

  handleSubmit = ({ name, calories, image }) => {
    this.setState(state => {
      return {
        foods: [
          // we create a new array with all the previous foods AND our new food. Then we update the state with the new array
          ...state.foods,
          { name: name, calories: calories, image: image, quantity: 0 }
        ]
      };
    });
  };

  render() {
    return (
      <section>
        {/* use onSubmit in the Form */}
        <Form onSubmit={this.handleSubmit} />

        <div className="App">
          {/* We use the prop food in the FoodBox component */}
          {this.state.foods.map(oneFood => (
            <FoodBox food={oneFood} />
          ))}
        </div>
      </section>
    );
  }
}

export default App;
