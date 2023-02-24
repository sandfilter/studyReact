import React from "react";

class LikesBtn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      likes: 0
    }
    // this.increaseLikes = this.increaseLikes.bind(this);
  }
  increaseLikes() {
    this.setState ({
      likes : ++this.state.likes
    })
  }
  render() {
    return (
      <div className="likes-button-component"> 
        <button 
          type="button"
          className="btn btn-outline-primary btn-lg"
          onClick = {() => {this.increaseLikes()}}
        >
          {this.state.likes}
        </button>
      </div>
    )
  }
}

export default LikesBtn;