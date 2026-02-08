import Navbar from "@/components/navbar/Navbar";

const MainPage = ({title}: {title: string}) => {
    return <>
        <Navbar />
        {title}
    </>
} 

export default MainPage;
