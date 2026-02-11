import { useState, useEffect } from "react";

import NavbarButton from "@/components/navbar/NavbarButton";
import NavbarDropdown from "@/components/navbar/NavbarDropdown";
import { Button1Dropdown } from "@/components/navbar/Button1Dropdown";
import { Button2Dropdown } from "@/components/navbar/Button2Dropdown";
import { Button3Dropdown } from "@/components/navbar/Button3Dropdown";
import { Button4Dropdown } from "@/components/navbar/Button4Dropdown";

import type { NavbarButtonData } from "./types";

const Navbar = () => {
    let [currentHoveredButton, updateHoveredButton] = useState<string>("");

    useEffect(() => {
        console.log(currentHoveredButton);

        return () => {
            currentHoveredButton = "";
        }
    }, [currentHoveredButton]);

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
            component: <Button3Dropdown />
        },
        {
            text: "Button 4",
            component: <Button4Dropdown />
        }
    ];

    const blockClassList = "h-full flex gap-1 p-0";

    return <nav className="w-full h-14 bg-primary flex justify-center text-primary-font">
        <ul className={blockClassList}>
            {
                buttonList.map((singleButton: NavbarButtonData) => {
                    return <li>
                        <NavbarButton title={singleButton.text}></NavbarButton>
                        <NavbarDropdown>
                            {singleButton.component}
                        </NavbarDropdown>
                    </li>
                })
            }
        </ul>
    </nav>;
}

export default Navbar;
