import { useState, useEffect } from "react"

export default function Icon({ children, href, onClick, className = "" }) {
	const [isClicked, setIsClicked] = useState(false)

	const handleClick = () => {
		setIsClicked(true)
		setTimeout(() => {
			setIsClicked(false)
		}, 200) // sesuai dengan durasi animasi 0.2s
	}

	const baseClass = `inline-flex items-center justify-center w-12 h-12 bg-teal shadow-black border-2 border-black rounded-full cursor-pointer hover:bg-teal-600 transition-all duration-200 ${isClicked ? "animate-clicked" : ""} ${className}`

	if (href) {
		return (
			<a href={href} target="_blank" rel="noopener noreferrer" className={baseClass} onClick={handleClick}>
				{children}
			</a>
		)
	} else {
		return (
			<div
				className={baseClass}
				onClick={(e) => {
					handleClick()
					onClick?.(e)
				}}
			>
				{children}
			</div>
		)
	}
}
