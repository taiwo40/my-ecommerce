
// import './product.css'
function Product(props) {
  return (
    <div>
    <div className="whole" >
         <div className='manda'>

          <img className='image' src= {props.img}/>
          <h3>Title: {props.tittle }</h3>
          <h4>price$ { props.price}</h4>
          
         </div>
    </div>
    </div>
  )
}

export default Product