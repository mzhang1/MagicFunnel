import Navbar from "@/components/navbar/Navbar";
import Section1Content from "@/components/mainpagesection/Section1Content";
import Section2Content from "@/components/mainpagesection/Section2Content";

import type { SectionData } from "@/components/mainpagesection/types";

const MainPage = () => {
    const sectionList: SectionData[] = [
        {
            id: "section1",
            component: <Section1Content />
        },
        {
            id: "section2",
            component: <Section2Content />
        }
    ];

    return <div className="overflow-x-hidden overflow-y-scroll">
        <Navbar />
        {
            sectionList.map((singleSection: SectionData, index: React.Key) => {
                return singleSection.component;
            });
        }
    </div>
} 

export default MainPage;
