import { useState, useEffect } from "react";

import NavbarButton from "@/components/navbar/NavbarButton";
import NavbarDropdown from "@/components/navbar/NavbarDropdown";

const Navbar = () => {
    let [currentHoveredButton, updateHoveredButton] = useState("");

    useEffect(() => {
        console.log(currentHoveredButton);

        return () => {
            currentHoveredButton = "";
        }
    }, [currentHoveredButton])

    const blockClassList = "h-full flex gap-1 p-0";

    return <nav className="w-full h-14 bg-primary flex justify-center text-primary-font">
        <ul className={blockClassList}>
            <NavbarButton title="Button 1" onHover={() => updateHoveredButton("Button 1")} />
            <NavbarButton title="Button 2" onHover={() => updateHoveredButton("Button 2")} />
            <NavbarButton title="Button 3" onHover={() => updateHoveredButton("Button 3")} />
            <NavbarButton title="Button 4" onHover={() => updateHoveredButton("Button 4")} />
        </ul>
    </nav>;
}

export default Navbar;
