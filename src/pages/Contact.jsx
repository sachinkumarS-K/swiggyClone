import React , {useState , useEffect} from 'react'
import User from '../component/User.jsx'
import Shimmer from '../component/shimmer/Shimmer.jsx'
import Loader from '../component/loader/Loader.jsx'
import axios from 'axios'

const Contact = () => {

   return (
    <div>
      CONTACT
      <User name={"Golu"} />
      <Shimmer/>
    </div>
  );
}

export default Contact
