
import React, { useState } from 'react';

// 使用React hook 受控组件
function CommentBox () {
  // 声明一个叫 "value" 的 state 变量
  const [value, setValue] = useState('');
  const handleSubmit = (event) =>{
    setValue(alert(event.target[0].value))
    event.preventDefault();
  }
  return(
    <form className="p-5" onSubmit={handleSubmit}>
      <h4>{value}</h4>
      <div className="form-group">
        <label>留言</label>
        <input
          type="text"
          className="form-control"
          placeholder="请输入"
          onChange={(e) => setValue(e.target.value)}
          value={value}
        />
      </div>
      <button
        type="submit"
        className="btn btn-primary"
      >
        留言
      </button>
    </form>
  )



}

export default CommentBox;