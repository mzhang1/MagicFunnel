import Navbar from "@/components/navbar/Navbar";
import Section1Content from "@/components/mainpagesection/Section1Content";
import Section2Content from "@/components/mainpagesection/Section2Content";

import type { SectionData } from "@/components/mainpagesection/types";

const MainPage = () => {
    const sectionList: React.ReactElement[] = [
        <Section1Content />,
        <Section2Content />
    ];

    return <div className="overflow-x-hidden overflow-y-scroll">
        <Navbar />
        {
            sectionList.map((singleSection: React.ReactElement) => {
                return singleSection;
            })
        }
    </div>
} 

export default MainPage;
