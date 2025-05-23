import { NavLink, Navigate }  from "react-router-dom";
import { useState } from 'react';

export default function Nav(){

	const [ active,setActive ] = useState('home');

	function checkActive(active){
		return active ? " border-b border-main text-white" : "text-gray-400";
	}
	
	return (
		<nav className="flex items-center justify-between text-gray-300">
			<div className="font-bold text-xl hidden sm:md:block">Lazarus <span className="text-main">Gabriel</span></div>
			<ul className="flex flex-row space-x-10 text-xs items-center">
				<NavLink className={({isActive}) => checkActive(isActive)} to="/">Home</NavLink>
				<NavLink className={({isActive}) => checkActive(isActive)} to="/projects">Projects</NavLink>
				<NavLink className={({isActive}) => checkActive(isActive)} to="/skills">Skills</NavLink>
				<NavLink className={({isActive}) => checkActive(isActive)} to="/contact">Contact</NavLink>
			</ul>
			<div className="text-xs">	</div>
		</nav>
	);
}