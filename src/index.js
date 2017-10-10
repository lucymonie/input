import React from 'react'
import ReactDOM from 'react-dom'
import ListItems from './list-items'
import Form from './form'
import './index.css'


class List extends React.Component {
  constructor (props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      textEntered: '',
      list:['Monkeys', 'Giraffes', 'Elephants']
    }
  }

  handleClick (event) {
    event.preventDefault();
    const itemToDelete = event.target.getAttribute('item');
    const newList = this.state.list.filter((item) => item !== itemToDelete);
    this.setState({
      list: newList
    });
  }

  handleChange (event) {
    event.preventDefault();
    this.setState({
      textEntered: event.target.value
    });
  }

  handleSubmit (event) {
    event.preventDefault();
    const newList = [...this.state.list, this.state.textEntered];
    this.setState({
      textEntered: '',
      list: newList
    });
  }

  render () {
    return (
      <div className="container">
        <ListItems
          list={this.state.list}
          handleClick={this.handleClick}
         />
        <Form
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
          textEntered={this.state.textEntered}
        />
      </div>
    )
  }
}


const app = document.getElementById('root');
ReactDOM.render(<List />, app)
