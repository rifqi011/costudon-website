import { ChevronDown } from "lucide-react"
import Section from "../components/Section"
import SectionTitle from "../components/SectionTitle"
import Image from "../components/Image"
import { useState } from "react"
import Accordion from "../components/Accordion"

const AchievementsData = [
	{
		id: 1,
		title: "Juara 1 ESport",
		description: "Pemenang Juara 1 di Esport SMK Negeri 1 Purwokerto pada Classmeet Desember 2024.",
	},
	{
		id: 2,
		title: "Juara 1 Kempit Sedotan",
		description: "Pemenang Juara 1 di Kempit Sedotan SMK Negeri 1 Purwokerto pada Classmeet Desember 2024.",
	},
	{
		id: 3,
		title: "Juara 3 Futsal Putra",
		description: "Pemenang Juara 1 di Futsal Putra SMK Negeri 1 Purwokerto pada Classmeet Desember 2024.",
	},
	{
		id: 4,
		title: "Juara 2 ESport",
		description: "Pemenang Juara 1 di Esport SMK Negeri 1 Purwokerto pada Classmeet Agustus 2024.",
	},
	{
		id: 5,
		title: "Juara 2 Vlog Job Fair",
		description: "Pemenang Juara 2 Vlog Job Fair SMK Negeri 1 Purwokerto tahun 2024",
	},
]

export default function Achievements() {
	const [activeIndex, setActiveIndex] = useState(0)

	const toggleAchievement = (index) => {
		if (activeIndex === index) return

		setActiveIndex(index)
	}

	return (
		<Section id={"achievements"} className={"bg-yellow"}>
			<SectionTitle title={"Milestone Tracker"} description={"Lihatlah jejak gemilang yang telah kami ukir! Setiap pencapaian adalah milestone yang menginspirasi kami untuk terus berinovasi dan meraih lebih banyak lagi."} />

			<div className="flex flex-col gap-6 md:flex-row">
				<Image src={`./images/achievements/${activeIndex + 1}.jpg`} className={`aspect-[4/3] w-full`} alt="Foto Prestasi" />

				<div className="flex flex-col gap-4">
					{AchievementsData.map((data, index) => (
						<Accordion key={index} title={data.title} description={data.description} isActive={activeIndex === index} onClick={() => toggleAchievement(index)} />
					))}
				</div>
			</div>
		</Section>
	)
}
