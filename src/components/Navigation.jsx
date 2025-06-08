import { useState, useEffect } from "react"

const Menu = [
	{
		name: "Beranda",
		href: "#home",
	},
	{
		name: "Tentang Kami",
		href: "#about",
	},
	{
		name: "Anggota",
		href: "#members",
	},
	{
		name: "Galeri",
		href: "#gallery",
	},
	{
		name: "Prestasi",
		href: "#achievements",
	},
]

export default function MobileMenu({ isOpen, toggleMenu }) {
	const [activeSection, setActiveSection] = useState("")

	useEffect(() => {
		const handleScroll = () => {
			const sections = Menu.map((item) => item.href.replace("#", ""))

			for (const section of sections) {
				const element = document.getElementById(section)

				if (element) {
					const rect = element.getBoundingClientRect()

					if (rect.top <= 100 && rect.bottom >= 100) {
						setActiveSection(section)
						break
					}
				}
			}
		}

		window.addEventListener("scroll", handleScroll)
		return () => window.removeEventListener("scroll", handleScroll)
	}, [])

	return (
		<>
			{/* Overlay */}
			<div className={`fixed inset-0 bg-black/50 z-40 transition-opacity duration-300 ${isOpen ? "opacity-100" : "opacity-0 pointer-events-none"}`} onClick={toggleMenu}></div>

			<div className={`fixed top-0 h-screen w-3/4 bg-white z-50 border-r-3 border-black duration-300 ease-in-out transition-all ${isOpen ? " left-0" : "-left-full"}`}>
				<div className="flex justify-between items-center px-4 py-5 border-b-3 border-black">
					<h1 className="text-2xl font-semibold text-black">Costudon</h1>

					<div onClick={toggleMenu}>
						<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 40 40" fill="none">
							<path d="M36.9705 3.02954L3.02933 36.9707" stroke="black" strokeWidth="8" />
							<path d="M3.02954 3.02954L36.9707 36.9707" stroke="black" strokeWidth="8" />
						</svg>
					</div>
				</div>

				<ul>
					{Menu.map((item, index) => {
						const sectionId = item.href.replace("#", "")

						return (
							<li key={index}>
								<a
									href={item.href}
									className={`block px-4 py-4 border-b-3 border-black font-semibold text-xl transition-colors duration-300 ease ${activeSection === sectionId ? "bg-teal" : ""}`}
									onClick={() => {
										setActiveSection(sectionId)
										toggleMenu()
									}}
								>
									{item.name}
								</a>
							</li>
						)
					})}
				</ul>
			</div>
		</>
	)
}
