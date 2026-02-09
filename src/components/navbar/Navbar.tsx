import NavbarButton from "@/components/navbar/NavbarButton";

const Navbar = () => {
    return <div className="w-full h-16 bg-primary flex justify-between">
        <div className="h-full flex">
            <NavbarButton title="Button 1" />
            <NavbarButton title="Button 2" />
        </div>
        <div className="h-full flex">
            <NavbarButton title="Button right 1" />
            <NavbarButton title="Button right 2" />
        </div>
    </div>;
}

export default Navbar;
