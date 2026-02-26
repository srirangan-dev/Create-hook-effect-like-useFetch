import PropTypes from 'prop-types'
import { useEffect, useState } from 'react';


function Course(props) {




  // conditional rendering

  //let purchased=false;

   const [purchased, setPurchased]= useState(false);
  //  const [discount,setDiscount]=useState(props.price);

  useEffect(()=>{

    console.log('inside course use effect');
    console.log(purchased);

  });



  function BuyCourse(amt){
    console.log(props.name,"purchasesd",amt,"% discount");
    setPurchased(true);
    // setDiscount(discount-amt);
    console.log(purchased);
  }

 
    return (
     props.name  && <div className="card">
        <img src={props.image} alt="" />
        <h3>{props.name}</h3>
        <p>{props.price}</p>
       <button  onClick={()=>BuyCourse(20)}>Buy now</button><br></br><br></br>
       <button onClick={()=>props.delete(props.id)}  > Delete</button>
       <p> {purchased ? "Already purchases" : " Get it now"} </p>
      </div>
    );

  
}

Course.propTypes = {
  name: PropTypes.string,
  rating: PropTypes.number,
  show: PropTypes.bool,
  price: PropTypes.string,
  image: PropTypes.string
};

export default Course;
