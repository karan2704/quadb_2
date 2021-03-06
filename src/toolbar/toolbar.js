import React from 'react'
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import TelegramIcon from '@material-ui/icons/Telegram';
import ToggleOnIcon from '@material-ui/icons/ToggleOn';

import './toolbar.css'

const Toolbar = () => {
    return(
        <div className='toolbar'>
            <nav>
                <img src="data:image/png;base64,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" alt='hodlingo logo'/>
            </nav>
            <nav>
            <button className='small'>INR<ArrowDropDownIcon /></button>
                <button className='small'>BTC<ArrowDropDownIcon/></button>
            </nav>
            <nav>
                <button className='timer'>58</button>
                <button className='big'><TelegramIcon/>Connect Telegram</button>
                <button className='big'>< ToggleOnIcon /></button>
            </nav>
        </div>
    )
}

export default Toolbar