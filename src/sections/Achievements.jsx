import { ChevronDown } from "lucide-react"
import Section from "../components/Section"
import SectionTitle from "../components/SectionTitle"
import Image from "../components/Image"
import { useState } from "react"
import Accordion from "../components/Accordion"
import AchievementsData from "../data/achievements.json"

export default function Achievements() {
	const [activeIndex, setActiveIndex] = useState(0)

	const toggleAchievement = (index) => {
		if (activeIndex === index) return

		setActiveIndex(index)
	}

	return (
		<Section id={"achievements"} className={"bg-yellow"}>
			<SectionTitle title={"Milestone Tracker"} description={"Lihatlah jejak gemilang yang telah kami ukir! Setiap pencapaian adalah milestone yang menginspirasi kami untuk terus berinovasi dan meraih lebih banyak lagi."} className={"lg:w-4/6"} />

			<div className="flex flex-col gap-6 md:flex-row">
				<Image src={`./${AchievementsData[activeIndex].image}`} className={`aspect-[4/3] w-full`} alt="Foto Prestasi" />

				<div className="flex flex-col gap-4">
					{AchievementsData.map((data, index) => (
						<Accordion key={index} title={data.title} description={data.description} isActive={activeIndex === index} onClick={() => toggleAchievement(index)} />
					))}
				</div>
			</div>
		</Section>
	)
}
