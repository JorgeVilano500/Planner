import React from "react";



class Task extends React.Component {
  constructor(props) {
    super(props);
    
  }
  render() {
    return (
      <div>
        <div className = "task">
          <p>{this.props.name}</p>
          <p>{this.props.description}</p>
        </div>
      </div>
    )
  }
}

export default Task;