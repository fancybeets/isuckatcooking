import React, { Component } from 'react'
import Form from './Form'
import Table from './Table'

class App extends Component {

    removeIngredient = (index) => {
        const { ingredients } = this.state
    
        this.setState( {
            ingredients: ingredients.filter((ingredient, i) => {
                return i !== index
            }),
        })
    }

    addIngredient = (ingredient) => {
        this.setState({ingredients: [...this.state.ingredients, ingredient]})
    }

    state = {
      ingredients: [],
    }

    render() {
        const { ingredients } = this.state
      
        return (
            <div className="container">
            <h1 className="site-heading">I Suck at Cooking</h1>
              <Table ingredientData={ingredients} removeIngredient={this.removeIngredient} />
              <Form addIngredient = {this.addIngredient} />
            </div>
          )
      }
  }


export default App
