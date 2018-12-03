import React, { Component } from "react";

class Form extends Component {
  state = {
    name: "",
    calories: "",
    image: ""
  };

  handleSubmit(event) {
    event.preventDefault();

    const { name, calories, image } = this.state;

    //onSubmit comes from App.js
    this.props.onSubmit({ name, calories, image });

    //when the form is submitted, you want the input fields to be empty.
    this.setState({ name: "", calories: "", image: "" });
  }

  render() {
    return (
      <section>
        <form onSubmit={event => this.handleSubmit(event)}>
          <label>
            Name
            <input
              type="text"
              value={this.state.name}
              //Adding the onChange updates the state every time there is a change in the input
              onChange={event => this.setState({ name: event.target.value })}
            />
          </label>

          <label>
            Image
            <input
              type="text"
              value={this.state.image}
              onChange={event => this.setState({ image: event.target.value })}
            />
          </label>

          <label>
            Calories
            <input
              type="number"
              value={this.state.calories}
              onChange={event =>
                this.setState({ calories: event.target.value })
              }
            />
          </label>

          <button>Add a food</button>
        </form>
      </section>
    );
  }
}

export default Form;
