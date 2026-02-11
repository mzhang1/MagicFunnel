import { useState, useEffect } from "react";

import NavbarButton from "@/components/navbar/NavbarButton";
import NavbarDropdown from "@/components/navbar/NavbarDropdown";
import { Button1Dropdown } from "@/components/navbar/Button1Dropdown";
import { Button2Dropdown } from "@/components/navbar/Button2Dropdown";
import { Button3Downdown } from "@/components/navbar/Button3Dropdown";
import { Button4Downdown } from "@/components/navbar/Button4Dropdown";

import type { NavbarButtonData } from "./types";

const Navbar = () => {
    let [currentHoveredButton, updateHoveredButton] = useState<string>("");

    const buttonList: NavbarButtonData[] = [
        { 
            text: "Button 1",
            component: <Button1Dropdown />
        },
        {
            text: "Button 2",
            component: <Button2Dropdown />
        },
        {
            text: "Button 3",
            component: <Button3Downdown />
        },
        {
            text: "Button 4",
            component: <Button4Downdown />
        }
    ]

    useEffect(() => {
        console.log(currentHoveredButton);

        return () => {
            currentHoveredButton = "";
        }
    }, [currentHoveredButton])

    const blockClassList = "h-full flex gap-1 p-0";

    return <nav className="w-full h-14 bg-primary flex justify-center text-primary-font">
        <ul className={blockClassList}>
            <li>
                <NavbarButton title="Button 1" onHover={() => updateHoveredButton("Button 1")} />
            </li>
            <li>
                <NavbarButton title="Button 2" onHover={() => updateHoveredButton("Button 2")} />
            </li>
            <li>
                <NavbarButton title="Button 3" onHover={() => updateHoveredButton("Button 3")} />
            </li>
            <li>
                <NavbarButton title="Button 4" onHover={() => updateHoveredButton("Button 4")} />
            </li>
        </ul>
    </nav>;
}

export default Navbar;
