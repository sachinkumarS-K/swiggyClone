import React from 'react'
import ResturantCard from './ResturantCard'
const HocCard = () => {
     return (props) => {
          console.log(props.res)
          return (
            <div>
              <H1>veg</H1>
              <ResturantCard card={props.card} />
            </div>
          );
  }
 
}

export default HocCard
