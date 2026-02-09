import NavbarButton from "@/components/navbar/NavbarButton";

const Navbar = () => {
    const blockClassList = "h-full flex gap-1 p-8";

    return <div className="w-full h-16 bg-primary flex justify-between text-primary-font">
        <div className={blockClassList}>
            <NavbarButton title="Button 1" />
            <NavbarButton title="Button 2" />
        </div>
        <div className={blockClassList}>
            <NavbarButton title="Button right 1" />
            <NavbarButton title="Button right 2" />
        </div>
    </div>;
}

export default Navbar;
