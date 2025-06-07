import { ChevronDown } from "lucide-react"

export default function Accordion({ title, description, isActive, onClick, className }) {
	return (
		<div onClick={onClick} className={`flex flex-col bg-teal px-4 py-3 shadow-black rounded-xl border-2 border-black transition-all duration-300 ease-in-out cursor-pointer ${className}`}>
			<div className="flex justify-between items-center">
				<h3 className="font-medium text-lg">{title}</h3>

				<ChevronDown className={`w-6 h-6 transition-transform duration-300 ${isActive ? "rotate-180" : ""}`} />
			</div>

			<div className={`overflow-hidden transition-all duration-300 ${isActive ? "max-h-[200px] mt-2 opacity-100" : "max-h-0 opacity-0"}`}>
				<p className="text-black">{description}</p>
			</div>
		</div>
	)
}
