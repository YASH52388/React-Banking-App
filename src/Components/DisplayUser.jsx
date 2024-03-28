//import react, { useContext, useEffect } from 'react'
import { useUser } from '../Context/UserContext';

function DisplayUser(){
    const { user } = useUser();

    // No need for useEffect for logging user data
    //console.log(user);
  
    // Handle case when user data is null or empty
    if (!user || user.length === 0) {
      return <div></div>;
    }
  
    return console.log(user);
  }
export default DisplayUser