import React, {Component} from 'react'

class Form extends Component {

    initialState = {
        ingredientName: '',
        ingredientQuantity: '',
        ingredientUnits: '',
    }

    state = this.initialState

    handleChange = (event) => {
        const { name, value } = event.target
        this.setState({
            [name]: value,
        })
    }

    addIngredient = () => {
        this.props.addIngredient(this.state)
        this.setState(this.intialState)
    }

    render() {
        const { ingredientName, ingredientQuantity, ingredientUnits} = this.state;
      
        return (
          <form>
            <label htmlFor="ingredientName">Ingredient</label>
            <input
              type="text"
              name="ingredientName"
              id="ingredientName"
              value={ingredientName}
              onChange={this.handleChange} />
            <label htmlFor="ingredientQuantity">Quantity</label>
            <input
              type="number"
              name="ingredientQuantity"
              id="ingredientQuantity"
              value={ingredientQuantity}
              onChange={this.handleChange} />
            <label htmlFor="ingredientUnits">Units</label>
            <input
              type="text"
              name="ingredientUnits"
              id="ingredientUnits"
              value={ingredientUnits}
              onChange={this.handleChange} />
            <input
                type="button"
                value="Add"
                onClick={this.addIngredient} />
          </form>
        );
      }
}

export default Form;