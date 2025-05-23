import Image from "../components/Image"
import Section from "../components/Section"
import SectionTitle from "../components/SectionTitle"

export default function About() {
    return (
		<Section id={"about"} className={"bg-light-yellow"}>
			<SectionTitle title={"Tentang Kami"} description={`Cool Student Union atau lebih dikenal dengan sebutan Costudon adalah sebuah julukan untuk kelas PPLG 1 Angkatan 26 SMK Negeri 1 Purwokerto. Di sini, setiap siswa adalah seorang contributor, ide adalah pull request yang siap di-merge, dan pembelajaran adalah branch yang tak pernah berhenti berinovasi.`} />

			<div className="grid grid-cols-2 gap-4">
				<Image src={"./images/about/1.jpg"} className={"col-span-2"} alt="Fotbar Studio" />
				<Image src={"./images/about/2.jpg"} className={"aspect-square"} alt="Fotbar Studio" />
				<Image src={"./images/about/3.jpg"} className={"aspect-square"} alt="Fotbar Studio" />
			</div>
		</Section>
	)
}