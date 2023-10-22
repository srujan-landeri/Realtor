import React from 'react'
import { useState } from 'react'

/* importing  navigator to navigate */
import { useNavigate } from 'react-router-dom'

export default function Header() {

    const [activeTab, setActiveTab] = useState('home')
    const navigate = useNavigate()

    function handleActiveTab(tab) {
        
        setActiveTab(tab)
        if(tab === 'home') {
            navigate('/')
            return
        }

        navigate('/' + tab)
    }

    return (
        <nav className='navigation-bar'>
            <img onClick = {() => handleActiveTab("home")} src="https://static.rdc.moveaws.com/images/logos/rdc-logo-default.svg" alt="" />

            <ul>
                <li onClick = {() => handleActiveTab("home")} className={activeTab === 'home'? 'active' : ''}>Home</li>
                <li onClick = {() => handleActiveTab("offers")} className={activeTab === 'offers'? 'active' : ''}>Offers</li>
                <li onClick = {() => handleActiveTab("sign-in")} className={activeTab === 'sign-in'? 'active' : ''}>Sign in</li>
            </ul>
        </nav>
    )
}
