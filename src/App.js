import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const nayoks = ['razzak','joshim','fahim','ilias kanchon']
  const products =[
    {name:'photoshop',price:'$1200'},
    {name:'illustator',price:'$12'},
    {name:'PDF reader',price:'$1234'},
    {name:'premier elements',price:'$123'}
  ]
  const nayokNames = nayoks.map(name=>name)
  console.log(nayokNames)
  return (
    <div className="App">
      <header className="App-header">
      <ul>
        {
          nayoks.map(name=><li>{name}</li>)
        }
        {
          products.map(product=><li>{product.name}</li>)
        }
      </ul>
      <Counter></Counter>
      <Users></Users>
      <p>i am a react person</p>
      {
        products.map(product=><Product product={product}></Product>)
      }
      
      </header>
      
    </div>
  );
}
function Product(props){
  
  const productStyle = {
    border : '1px solid grey',
    borderRadius : '5px',
    backgroundColor :'lightgray',
    height:'200px',
    width:'200px',
    float:'left'
  }
  const {name,price} = props.product;
  return(
    <div style={productStyle}>
     <div>
     <h3>{name}</h3>
      <h5>{price}</h5>
      <button>Buy Now</button>
     </div>
    </div>
  )
}
function Users(){
  const [users,setUsers] = useState([]);
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res=>res.json())
    .then(data=> setUsers(data))
  },[])
  return(
    <div>
      <h3>Dynamic users: {users.length}</h3>
      <ul>
        {
          users.map(user=><li>{user.email}</li>)
        }
      </ul>
    </div>
  )
}
function Counter(){
  const [count, setCount] =useState(10)
  const handleIncrease=()=>setCount(count + 1);
  
  return (
    <div>
      <h1>count:{count}</h1>
      <button onClick={()=>setCount(count + 1)}>increase</button>
    </div>
  )
}

function Person(props){
  return (
    <div style={{color:'red',border:'2px solid green',margin:'10px'}}>
      <h1>name:{}</h1>
      <h2>hero of the year</h2>
    </div>
  )
}
export default App;
