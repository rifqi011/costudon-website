import Image from "./Image"
import Icon from "./Icon"

const Teams = [
	{
		id: 1,
		name: "Rifqi",
		instagram: "alcyoneuzz",
		image: "rifqi.jpg",
		role: "Programmer",
	},
	{
		id: 2,
		name: "Firas",
		instagram: "fas14_art",
		image: "firas.jpg",
		role: "UI/UX Designer",
	},
	{
		id: 3,
		name: "Rafaizal",
		instagram: "rafaizal8",
		image: "rafaizal.jpg",
		role: "Data Analisys",
	},
]

export default function Developers({ isOpen, toggle }) {
	return (
		<>
			{/* Overlay */}
			<div className={`fixed inset-0 bg-black/50 z-50 transition-opacity duration-300 ${isOpen ? "opacity-100" : "opacity-0 pointer-events-none"}`} onClick={toggle}></div>

			<div className={`fixed left-0 max-h-3/4 w-full px-4 py-5 bg-white border-t-3 border-black transition-all duration-300 ease-in-out z-60 ${isOpen ? "bottom-0" : "-bottom-full"}`}>
				<div className="flex justify-between items-center">
					<h3 className="text-2xl font-medium">Para Pengembang</h3>

					<div onClick={toggle}>
						<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 40 40" fill="none">
							<path d="M36.9705 3.02954L3.02933 36.9707" stroke="black" strokeWidth="8" />
							<path d="M3.02954 3.02954L36.9707 36.9707" stroke="black" strokeWidth="8" />
						</svg>
					</div>
				</div>

				<div className="mt-8 flex flex-col gap-4">
					{Teams.map((item, index) => (
						<div key={index} className=" flex gap-4">
							<Image src={`./images/members/${item.image}`} alt={`Foto ${item.name}`} className="aspect-square w-1/3" />

							<div className="flex flex-col gap-3">
								<h4 className="text-2xl">{item.name}</h4>
								<p>{item.role}</p>

								<a href={`https://instagram.com/${item.instagram}`} className="flex items-center gap-2" target="_blank" rel="noopener noreferrer">
									<Icon className="!h-10 !w-10 mr-2">
										<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-instagram-icon lucide-instagram">
											<rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
											<path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
											<line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
										</svg>
									</Icon>
								</a>
							</div>
						</div>
					))}
				</div>
			</div>
		</>
	)
}
