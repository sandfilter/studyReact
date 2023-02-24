
import React, { useRef } from 'react';

// 使用React hook 非受控组件
function CommentBoxF () {
  const inputRef = useRef()
  // 声明一个叫 "value" 的 state 变量
  const formSubmitHandler = (e) => {
    e.preventDefault()
    inputRef.props.onAddComment(inputRef.current.value);
  }

  return(
    <form className="p-5" onSubmit={formSubmitHandler}>
      <div className="form-group">
        <label>留言</label>
        <input
          type="text"
          className="form-control"
          placeholder="请输入"
          ref={inputRef}
        />
      </div>
      <button
        type="submit"
        className="btn btn-primary"
      >
        留言
      </button>
      <p>已有{}评论</p>
    </form>
  )

}

export default CommentBoxF;