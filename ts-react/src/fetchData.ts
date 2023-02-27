import axios from "axios"

function wrapPromise( promise: Promise< any >){
  let status = 'pending'
  let result: any
  let supender = promise.then((r)=>{
    status = 'success'
    result = r
  },(e) => {
    status = "error"
    result = e
  })
  return {
    read() {
      if (status === 'pending' ){
        throw supender
      } else if (status ==='error'){
        throw result
      } else if (status ==='success') {
        throw result
      }
    }
  }
}
export default function fetchData(url: string ){
  const promise = axios.get(url).then( rawData => rawData.data)
  return wrapPromise(promise)
}
