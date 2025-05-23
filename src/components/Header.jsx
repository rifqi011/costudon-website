import { useState, useEffect } from "react"

export default function Header() {
	const [isScrolled, setIsScrolled] = useState(false)

	useEffect(() => {
		const handleScroll = () => {
			setIsScrolled(window.scrollY > 50)
		}

		window.addEventListener("scroll", handleScroll)
		return () => window.removeEventListener("scroll", handleScroll)
	}, [])

	return (
		<header className={`top-0 left-0 w-full fixed z-50 container mx-auto px-4 py-5 transition-all duration-200 ease-in-out ${isScrolled ? "bg-white shadow-md border-b-2 border-black" : "bg-transparent"}`}>
			<div className="relative w-full flex items-center">
				<a href="#" className={`text-2xl font-semibold text-black left-0 transition-all duration-700 ease-out ${isScrolled ? "opacity-100 translate-x-0 w-full" : "opacity-0 -translate-x-12 w-0"}`}>
					Costudon
				</a>

				{/* SVG Container dengan animasi yang diperbaiki */}
				<div className={`transition-all duration-700 ease-in-out`}>
					<button className="relative w-10 h-8 flex items-center justify-center">
						{/* Container untuk kedua SVG dengan animasi yang sinkron */}
						<div className="relative w-full h-full">
							{/* SVG Original - Hamburger kiri */}
							<div className={`absolute inset-0 flex items-center justify-center transition-all duration-700 ease-in-out ${isScrolled ? "opacity-0 scale-90 translate-x-2" : "opacity-100 scale-100 translate-x-0"}`}>
								<svg xmlns="http://www.w3.org/2000/svg" width="29" height="21" viewBox="0 0 29 21" fill="none">
									<path
										d="M18.3398 16.5137C18.8243 16.5137 19.2893 16.7063 19.6318 17.0488C19.9742 17.3913 20.167 17.8556 20.167 18.3398C20.167 18.8243 19.9744 19.2893 19.6318 19.6318C19.2893 19.9744 18.8243 20.167 18.3398 20.167H2.32715C1.90322 20.167 1.494 20.0193 1.16895 19.7529L1.03516 19.6318C0.69259 19.2893 0.5 18.8243 0.5 18.3398C0.500041 17.8555 0.692733 17.3913 1.03516 17.0488L1.16895 16.9268C1.49398 16.6605 1.90328 16.5137 2.32715 16.5137H18.3398ZM26.3398 8.50684C26.8243 8.50684 27.2893 8.69943 27.6318 9.04199L27.7529 9.17578C28.0192 9.50074 28.1669 9.90924 28.167 10.333C28.167 10.8174 27.9743 11.2824 27.6318 11.625C27.2893 11.9676 26.8243 12.1602 26.3398 12.1602H2.32715C1.90318 12.1602 1.49402 12.0125 1.16895 11.7461L1.03516 11.625C0.69259 11.2824 0.5 10.8175 0.5 10.333C0.500176 9.32336 1.31944 8.50684 2.32715 8.50684H26.3398ZM13.0068 0.5L13.1875 0.508789C13.6055 0.550355 13.9982 0.735571 14.2979 1.03516L14.4199 1.16895C14.6862 1.49398 14.833 1.90329 14.833 2.32715C14.8329 2.75084 14.6861 3.15947 14.4199 3.48438L14.2979 3.61816C13.9553 3.96059 13.4912 4.15328 13.0068 4.15332H2.32715C1.90314 4.15332 1.49403 4.00571 1.16895 3.73926L1.03516 3.61816C0.692708 3.27571 0.500128 2.81143 0.5 2.32715L0.509766 2.13965C0.603476 1.21791 1.38236 0.5 2.32715 0.5H13.0068Z"
										fill="black"
										stroke="black"
									/>
								</svg>
							</div>
							{/* SVG Scrolled - Hamburger kanan */}
							<div className={`absolute inset-0 flex items-center justify-center transition-all duration-700 ease-in-out ${isScrolled ? "opacity-100 scale-100 translate-x-0" : "opacity-0 scale-90 -translate-x-2"}`}>
								<svg xmlns="http://www.w3.org/2000/svg" width="29" height="22" viewBox="0 0 29 22" fill="none">
									<path
										d="M10.3271 4.54156C9.84269 4.54156 9.37772 4.34898 9.03516 4.00641C8.69284 3.66391 8.50004 3.19964 8.5 2.71539C8.5 2.23093 8.69259 1.76597 9.03516 1.4234C9.37772 1.08084 9.84269 0.888245 10.3271 0.888245H26.3398C26.7638 0.888245 27.173 1.03595 27.498 1.30231L27.6318 1.4234C27.9744 1.76597 28.167 2.23093 28.167 2.71539C28.167 3.19972 27.9743 3.66389 27.6318 4.00641L27.498 4.12848C27.173 4.39477 26.7637 4.54156 26.3398 4.54156H10.3271ZM2.32715 12.5484C1.84269 12.5484 1.37772 12.3558 1.03516 12.0132C0.692822 11.6708 0.500084 11.2065 0.5 10.7222C0.5 10.2378 0.692641 9.77279 1.03516 9.43024C1.37772 9.08767 1.84269 8.89508 2.32715 8.89508H26.3398C26.7638 8.89508 27.173 9.04274 27.498 9.30914L27.6318 9.43024C27.9744 9.7728 28.167 10.2378 28.167 10.7222C28.1668 11.7319 27.3476 12.5484 26.3398 12.5484H2.32715ZM15.6602 20.5552L15.4795 20.5464C15.0615 20.5049 14.6688 20.3197 14.3691 20.0201C14.0267 19.6776 13.8341 19.2134 13.834 18.7291C13.834 18.2446 14.0266 17.7796 14.3691 17.4371C14.7117 17.0946 15.1758 16.902 15.6602 16.9019H26.3398C26.7638 16.9019 27.173 17.0495 27.498 17.316L27.6318 17.4371C27.9744 17.7796 28.167 18.2446 28.167 18.7291L28.1572 18.9156C28.0635 19.8373 27.2846 20.5552 26.3398 20.5552H15.6602Z"
										fill="black"
										stroke="black"
									/>
								</svg>
							</div>
						</div>
					</button>
				</div>
			</div>
		</header>
	)
}
