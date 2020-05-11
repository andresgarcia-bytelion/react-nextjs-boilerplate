import React from 'react'
import Image from '../assets/icons/logo.svg'
import { Link } from 'react-router-dom';
import './logo.scss'

function Logo() {
	return(
		<h1 className="logo">
			<Link className="logo_link" to="/">
				<span className="logo_icon"><Image /></span>
				<span className="logo_label">Company Name</span>
			</Link>
		</h1>)
}

export default Logo