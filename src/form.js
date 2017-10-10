import React from 'react'

class Form extends React.Component {
  constructor (props) {
    super(props);
    this.handleChange = props.handleChange.bind(this);
    this.handleSubmit = props.handleSubmit.bind(this);
  }

  render () {
    return (
      <form onSubmit={this.handleSubmit}>
        <input value={this.props.textEntered} onChange={this.handleChange} />
        <button type="submit" >Add</button>
      </form>
    )
  }
}

export default Form;
