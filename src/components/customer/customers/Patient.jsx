import React, {useState, useEffect} from "react";
import axios from "axios";
//import { response } from "express";

function createTable(alpha){
  
  return ( <div>
    <ul key={alpha.statecode} />
    <li patients={alpha.confirmed} />
    </div>
  )
}

function Patient(props){

    var [data,setData]=useState([]);
     
    useEffect(() => {
      const fetchData = async () => {
        
        const result = await axios("https://api.covid19india.org/data.json",);
        setData(result.data);
        
      };
   
      fetchData();
    }, []);

     const story=JSON.stringify(data)
     console.log(story)
   
    return ( <div>
      <h1> hiiiiiiiiiii</h1>

   
     {/* <h1> {story.statewise.map(createTable)}  </h1> */}
     </div>
     
    )
     
}

export default Patient;