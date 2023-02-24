import React from "react";
class CommentBoxOf extends React.Component {
  constructor(props){
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(e){
    e.preventDefault()
    this.props.onAddComment(this.textInput.value)
    this.textInput.value = ''
  }

  render() {
    return(
      <form className="p-5" onSubmit={this.handleSubmit}>
        <div className="form-group">
          <label>留言内容</label>
          <input
            type="text"
            className="form-control"
            placeholder="请输入"
            ref={(textInput) => {this.textInput = textInput}}
          />
        </div>
        <button
          type="submit"
          className="btn btn-primary"
        >
          留言
        </button>
        <p>已有{this.props.commentsLength}多条</p>
      </form>
    )
  
  }

}

export default CommentBoxOf;