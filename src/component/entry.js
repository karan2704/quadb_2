import React from 'react'
import './entry.css'

const Entry = (props)  => {
    return(
        <div className='entry'>
             <nav>{props.srNo}</nav>
            <nav style={{'textTransform': 'uppercase'}}>{props.baseUnit}/INR</nav>
            <nav>₹{props.last}</nav>
            <nav>₹{props.buy}/₹{props.sell}</nav>
            <nav>{props.volume}</nav>
            <nav>{props.baseUnit}</nav>
        </div>
    )
}

export default Entry;