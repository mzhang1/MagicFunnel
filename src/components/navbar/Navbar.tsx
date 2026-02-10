import NavbarButton from "@/components/navbar/NavbarButton";
import NavbarDropdown from "@/components/navbar/NavbarDropdown";

const Navbar = () => {
    const blockClassList = "h-full flex gap-1 p-0";

    return <nav className="w-full h-14 bg-primary flex justify-between text-primary-font">
        <ul className={blockClassList}>
            <NavbarButton title="Button 1" />
            <NavbarButton title="Button 2" />
        </ul>
        <ul className={blockClassList}>
            <NavbarButton title="Button right 1" />
            <NavbarButton title="Button right 2" />
        </ul>
    </nav>;
}

export default Navbar;
