import { useState } from "react"

export default function Image({ src, alt = "Image", className, onClick }) {
	const [isClicked, setIsClicked] = useState(false)

	const handleClick = () => {
		setIsClicked(true)
		setTimeout(() => {
			setIsClicked(false)
		}, 200)
	}

	return (
		<div
			onClick={(e) => {
				handleClick()
				onClick?.(e)
			}}
			className={`overflow-hidden shadow-black rounded-xl border-3 border-black ${isClicked ? "animate-clicked" : ""} ${className}`}
		>
			<img src={src} alt={alt} className="object-cover bg-cover h-full w-full" />
		</div>
	)
}
