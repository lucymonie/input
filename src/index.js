import React from 'react'
import ReactDOM from 'react-dom'


class SubmitName extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      name: 'there',
      textEntered: ''
    }
  }

  onChange (event) {
    event.preventDefault();
    this.setState({
      textEntered: event.target.value
    })
  }

  onSubmit (event) {
    event.preventDefault();
    this.setState({
      name: this.state.textEntered,
      textEntered: ''
    })
  }

  render () {
    return (
      <div>
        <Greeting name={this.state.name}/>
        <form onSubmit={this.onSubmit.bind(this)}>
          <input value={this.state.textEntered} onChange={this.onChange.bind(this)} />
          <button>Submit</button>
        </form>
      </div>
    )
  }
}

class Greeting extends React.Component {
  render () {
    return (
      <div>
        <h2>Greeting: Hello {this.props.name}</h2>
      </div>
    )
  }
}


const app = document.getElementById('root');
ReactDOM.render(<SubmitName />, app)
