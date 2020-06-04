import React, {useState, useEffect} from "react";

function Customer(){
    const [cust, setCust]=useState("");
    
    async function fetchData(){
      const res= await fetch("/api/customers");
      res
        .json()
        .then(res=>setCust(res))
  
    }
  
    useEffect(()=>{
      fetchData();
    });
    
    const daata=JSON.stringify(cust);
    console.log(daata)
    return <div>
    <h1>customer 11111 </h1>
     
    </div>
}

export default Customer;