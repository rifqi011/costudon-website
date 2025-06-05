import { useState, useEffect } from "react"

export default function Image({ src, alt = "Image", className, onClick }) {
	const [isClicked, setIsClicked] = useState(false)
	const [modalOpen, setModalOpen] = useState(false)

	useEffect(() => {
		if (modalOpen) {
			document.body.style.overflow = "hidden"
		} else {
			document.body.style.overflow = "unset"
		}

		return () => {
			document.body.style.overflow = "unset"
		}
	}, [modalOpen])

	const handleClick = () => {
		setIsClicked(true)

		setTimeout(() => {
			setIsClicked(false)
		}, 200)

		setTimeout(() => {
			setModalOpen(true)
		}, 100)
	}

	return (
		<>
			<div
				onClick={(e) => {
					handleClick()
					onClick?.(e)
				}}
				className={`overflow-hidden shadow-black rounded-xl border-3 border-black ${isClicked ? "animate-clicked" : ""} ${className}`}
			>
				<img src={src} alt={alt} className="object-cover bg-cover h-full w-full" loading="lazy" />
			</div>

            <div
                className={`modal fixed top-0 left-0 z-50 h-full w-full items-center justify-center bg-black/80 ${modalOpen ? "flex" : "hidden"}`}
                onClick={(e) => {
                    if (e.target === e.currentTarget) {
                        setModalOpen(false)
                    }
                }}
            >
				<div className={`absolute top-4 right-4 bg-red-500 border-3 border-black cursor-pointer p-2 shadow-black`} onClick={() => setModalOpen(false)}>
					<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 40 40" fill="none">
						<path d="M36.9705 3.02954L3.02933 36.9707" stroke="black" strokeWidth="8" />
						<path d="M3.02954 3.02954L36.9707 36.9707" stroke="black" strokeWidth="8" />
					</svg>
				</div>

				<img className={`object-contain max-w-[90vw] max-h-[90vh] rounded-xl border-3 border-black transition-all ease-in-out ${modalOpen ? "animate-modal" : ""}`} src={src} alt={alt} loading="lazy" />
			</div>
		</>
	)
}
