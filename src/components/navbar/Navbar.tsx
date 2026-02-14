import { useState } from "react";

import NavbarDropdown from "@/components/navbar/NavbarDropdown";
import { Button1Dropdown } from "@/components/navbar/Button1Dropdown";
import { Button2Dropdown } from "@/components/navbar/Button2Dropdown";
import { Button3Dropdown } from "@/components/navbar/Button3Dropdown";
import { Button4Dropdown } from "@/components/navbar/Button4Dropdown";

import type { NavbarButtonData } from "@/components/navbar/types";

const Navbar = () => {
    let [currentHoveredButton, updateHoveredButton] = useState<string>("");

    const buttonList: NavbarButtonData[] = [
        {
            id: "Button1",
            text: "Button 1",
            component: <Button1Dropdown />
        },
        {
            id: "Button2",
            text: "Button 2",
            component: <Button2Dropdown />
        },
        {
            id: "Button3",
            text: "Button 3",
            component: <Button3Dropdown />
        },
        {
            id: "Button4",
            text: "Button 4",
            component: <Button4Dropdown />
        }
    ];

    return <nav 
        className="w-full h-14 bg-primary flex justify-center text-primary-font" 
        onMouseLeave={() => updateHoveredButton("")}>
        <ul className="h-full flex gap-1 p-0">
            {
                buttonList.map((singleButton: NavbarButtonData, index: React.Key) => {
                    return <li key={index} 
                        className="w-40 flex justify-center items-center cursor-pointer" 
                        onMouseOver={() => updateHoveredButton(singleButton.id)}
                    >
                        <>{singleButton.text}</>
                        {
                            currentHoveredButton == singleButton.id ?
                            <NavbarDropdown>
                                {singleButton.component}
                            </NavbarDropdown>
                            : <></>
                        }
                    </li>
                })
            }
        </ul>
    </nav>;
}

export default Navbar;
