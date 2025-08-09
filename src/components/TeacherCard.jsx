import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
// Import data members dari file JSON
import teachersData from "../data/teachers.json"
import Icon from "./Icon"
import Image from "./Image"

export default function TeacherCard() {
	const [currentIndex, setCurrentIndex] = useState(0)
	const teachers = teachersData

	const nextSlide = () => {
		setCurrentIndex((prevIndex) => (prevIndex === teachers.length - 1 ? 0 : prevIndex + 1))
	}

	const prevSlide = () => {
		setCurrentIndex((prevIndex) => (prevIndex === 0 ? teachers.length - 1 : prevIndex - 1))
	}

	const currentTeacher = teachers[currentIndex]

	return (
		<div className="flex flex-col gap-6 items-center mx-auto max-w-xl">
			<div className="flex flex-col items-center justify-center bg-white border-3 border-black rounded-xl shadow-black overflow-hidden">
				<div className="grid grid-cols-2">
					<p className="p-3 md:text-2xl font-semibold">{currentTeacher.description}</p>

					<div className="border-l-3 border-black overflow-hidden relative">
						<Image src={`${currentTeacher.image}`} alt={`Foto ${currentTeacher.name}`} className="!rounded-none !border-0 !shadow-none aspect-[3/4] md:aspect-square" />
					</div>

					<div className="px-3 pt-4 h-36 flex flex-col gap-2 col-span-2 border-t-3 border-black">
						<h3 className="font-medium text-xl">{currentTeacher.name}</h3>

						<a href={`https://instagram.com/${currentTeacher.instagram}`} className="flex items-center gap-2" target="_blank" rel="noopener noreferrer">
							<Icon className="!h-10 !w-10 mr-2">
								<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-instagram-icon lucide-instagram">
									<rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
									<path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
									<line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
								</svg>
							</Icon>
							<p className="text-blue-500 text-lg">@{currentTeacher.instagram}</p>
						</a>
					</div>
				</div>
			</div>

			{/* Navigation */}
			<div className="flex items-center justify-center mt-6 space-x-6">
				<Icon onClick={prevSlide} className="bg-white !w-10 !h-10">
					<ChevronLeft className="w-6 h-6 font-bold" />
				</Icon>

				<div className="flex items-center space-x-2">
					<span className="text-2xl font-bold">{String(currentIndex + 1).padStart(2, "0")}</span>
				</div>

				<Icon onClick={nextSlide} className="bg-white !w-10 !h-10">
					<ChevronRight className="w-6 h-6 font-bold" />
				</Icon>
			</div>
		</div>
	)
}
