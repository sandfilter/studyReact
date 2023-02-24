
import React, { useState } from 'react';

// 使用React hook 受控组件-邮箱验证
function CommentEmail () {
  const [email, setEmail] = useState('')
  const [error, setError] = useState('')

  const inputChangeHandler = e => {
    e.preventDefault()
    const value =e.target.value
    setEmail(value)
    if(!/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/i.test(value)){
      setError("无效邮箱")
    }else{
      setError("")
    }
  }

  return(
    <form className="p-5">
      <div className="form-group">
        <label>Email</label>
        <input 
          type='email'
          className='form-control'
          placeholder='请输入邮箱'
          value={email}
          onChange={inputChangeHandler}
        />
      </div>
      <p className='error'>{error && error}</p>
    </form>
  )

}

export default CommentEmail;