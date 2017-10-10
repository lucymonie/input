import React from 'react'

class ListItems extends React.Component {
  constructor (props) {
    super(props);
    this.handleClick = props.handleClick.bind(this);
  }

  render () {
    return (
      <div>
        <h2>List</h2>
        <ul>
          {this.props.list.map((item, index) =>
            <li key={index}>{item}
              <span
                className="icon"
                item={item}
                onClick={this.handleClick}
              >
                 X
              </span>
            </li>)
          }
        </ul>
      </div>
    )
  }
}

export default ListItems;
