import { useState, useEffect } from "react"
import Section from "../components/Section"
import SectionTitle from "../components/SectionTitle"
import Image from "../components/Image"

export default function Gallery() {
	const [imageSpans, setImageSpans] = useState({})
	const images = ["./images/gallery/1.jpg", "./images/gallery/2.jpg", "./images/gallery/3.jpg", "./images/gallery/4.jpg", "./images/gallery/5.jpg", "./images/gallery/6.jpg", "./images/gallery/7.jpg", "./images/gallery/8.jpg", "./images/gallery/9.jpg", "./images/gallery/10.jpg", "./images/gallery/11.jpg", "./images/gallery/12.jpg"]

	useEffect(() => {
		images.forEach((image, index) => {
			const img = new window.Image()
			img.src = image

			img.onload = () => {
				const aspectRatio = img.height / img.width
				const spans = Math.ceil(aspectRatio * 20)

				setImageSpans((prev) => ({
					...prev,
					[index]: spans,
				}))
			}
		})
	}, [])

	return (
		<Section id="gallery" className={"bg-yellow"}>
			<SectionTitle title={"Commits of Memories"} description={"Selami visualisasi perjalanan PPLG 1 '26! Di sini, setiap foto dan video adalah commit yang menceritakan kisah, proyek, dan momen kebersamaan kami. Jelajahi memori yang kami bangun bersama!"} />

			<div className="columns-2 gap-4 [&>div]:mb-4">
				{images.map((image, index) => (
					<div
						key={index}
						style={{
							breakInside: "avoid",
						}}
					>
						<Image src={image} className="w-full !rounded-xl" />
					</div>
				))}
			</div>
		</Section>
	)
}
