import Section from "../components/Section"
import SectionTitle from "../components/SectionTitle"
import TeacherCard from "../components/TeacherCard"

export default function Teachers() {
	return (
		<Section id={"teahcers"} className={"bg-light-yellow"}>
            <SectionTitle title={"Our Mentors"} description={"Mereka bukan sekadar pengajar, tapi juga lead developer dalam perjalanan intelektual kami. Dengan pengalaman dan passion, para guru Costudon jadi pengarah sekaligus inspirator di tiap sprint kehidupan kelas ini."} align={"center"} />
            
            <TeacherCard />
        </Section>
	)
}
