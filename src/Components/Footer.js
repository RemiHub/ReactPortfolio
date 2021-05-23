import React from 'react'
import { Router, Route, BrowserRouter } from 'react-router-dom'
import {Link} from 'react-router-dom'
import about from '../About'

const Footer = () => {
    return (
        <div className="footer">
            <ul>
                <li className="active">PROJECTS</li>
                <li>~ARISE~</li>
                <li>~RISE DESIGNS~</li>
                <li>CONTACTS</li>
                <BrowserRouter >
                <li><Link to={'about'}>ABOUT ME</Link></li>
                </BrowserRouter>
            </ul>
        </div>
    )
}

export default Footer
