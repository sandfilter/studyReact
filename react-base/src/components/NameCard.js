const NameCard = (props) => {
  const { name, number, isHuman, tags } = props;
  return(
    <div>
      <h1>{name}</h1>
      <ul>
        <li>电话：{ number }</li>
        <li>{ isHuman ? '人类' : 'ET' }</li>
        <hr />
        <p>
          {
            tags.map ((tag, index) =>(
              <span key={index}>{ tag }</span>
            )) 
          }
        </p>
      </ul>
    </div>
  )
}
/*
function NameCard() {
   const { name, number, isHuman, tags } = this.props; //报错
  return(
    <div>
      <h1>{name}</h1>
      <ul>
        <li>电话：{ number }</li>
        <li>{ isHuman ? '人类' : 'ET' }</li>
        <hr />
        <p>
          {
            tags.map ((tag, index) =>(
              <span key={index}>{ tag }</span>
            )) 
          }
        </p>
      </ul>
    </div>
  )
}
*/
export default NameCard;