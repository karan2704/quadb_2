import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Entry from '../component/entry'

import './container.css'
import Heading from '../component/heading'

const Container = () => {

   const [data, setData] = useState({})

   useEffect(() => {
    axios.get('http://localhost:8080')
    .then((response) =>{
        setData(response.data);

    })
    .catch((err) => {
        console.log(err);
    })
   }, [])

   const renderedList = Object.keys(data).slice(1,11)
        .map((entryKey, index) => {
            return (
            <li>
                <Entry 
            key={entryKey}
            srNo={index + 1}
            last={data[entryKey].last}
            buy={data[entryKey].buy}
            sell={data[entryKey].sell}
            volume={data[entryKey].volume}
            baseUnit={data[entryKey].base_unit}
            />
            </li>
            )})
    

        // let transformedIngredients = Object.keys(props.ingredients)
        // .map(igKey => {
        //      return [...Array(props.ingredients[igKey])].map((_, i) => {
        //         return <BurgerIngredient key={igKey + i} type={igKey} />
        //      });
        //     })
        // .reduce((arr, ele) => {
        //     return arr.concat(ele)
        // }, [])


    return(
        <div className='container'>
            <ul>
            <Heading />
            {renderedList}
            </ul>
            
        </div>
    )
}

export default Container
