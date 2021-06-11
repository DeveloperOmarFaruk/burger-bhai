import React, {useState} from 'react'
import {DotDropdownData} from './DotDropdownData'
import './Dropdown.css'
import {NavLink} from 'react-router-dom'


const style = {
    color: 'var(--Orange)',
}


const DotDropdown = () => {
    const [click, setClick] = useState(false)

    const handleClick = () => setClick(!click)


    return (
        <>
            <ul onClick={handleClick} className={click ? 'dropdown-menu clicked' : 'dropdown-menu dot-menu'}>
            {
                DotDropdownData.map((item, index) => {
                    return(
                        <li key={index}>
                            <NavLink className={item.cName} to={item.path} onClick={() => setClick(false)} activeStyle={style}>
                            {item.title}
                            </NavLink>
                        </li>
                    )
                })
            }
            </ul>
        </>
    )
}

export default DotDropdown
