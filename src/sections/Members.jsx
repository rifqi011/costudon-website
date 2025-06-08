import MemberCard from "../components/MemberCard";
import Section from "../components/Section";
import SectionTitle from "../components/SectionTitle";

export default function Members() {
    return (
		<Section id={"members"} className={"bg-light-yellow"}>
            <SectionTitle title={"Anggota"} description={"Kenali talenta Costudon! Inilah kumpulan individu unik, masing-masing dengan skill dan passion yang siap di-deploy. Mereka adalah building block utama dari union keren ini."} align={"center"} />
            
            <MemberCard />
		</Section>
	)
}