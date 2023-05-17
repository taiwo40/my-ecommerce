import Product from '../component/Product'

function Products() {
  const nums=[
    {
      title:"Whale Harbor Dreams (Saltwater Sunsets Book 1)",
      img: "https://images-na.ssl-images-amazon.com/images/I/81X1plzH9DL._AC_UL127_SR127,127_.jpg",
      price : 56.88
      
    },

    {
      title: "The Cat Who Saved Books: A Novel",
      img: "https://images-na.ssl-images-amazon.com/images/I/71+vQyk44IL._AC_UL127_SR127,127_.jpg",
      price: 67.90
    },
    {
    title:"The Dark Halo (Johnny Coombes) Paperback  May 5, 202",
    img:"https://images-na.ssl-images-amazon.com/images/I/81lJ9+mcvzL._AC_UL254_SR254,254_.jpg",
    price:"",
  },
  {
    title:"NYPD Red 7: The Murder Sorority (The NYPD Red Series) Paperback May 16, 2023",
    img:"https://images-na.ssl-images-amazon.com/images/I/81a5KHEkwQL._AC_UL254_SR254,254_.jpg",
    price:"",
  },
  {
    title:"The Savannah Madam (Savannah Sleuth Sisters Murder Mysteries) Paperback  June 10, 2020",
    img:"https://images-na.ssl-images-amazon.com/images/I/91vwHMt+x7L._AC_UL254_SR254,254_.jpg",
    price:"",
  },

  ]
  return (
    <div className='manda1'>
      {
      nums.map(( value,index)=>{
        return(
          <div key={index} >
            <Product title={value.title} img={ value.img} price={value.price} /> 
            </div>
        )
      })
     

    }
    </div>
  )
}

export default Products