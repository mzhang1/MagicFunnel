import { useState } from "react";
import { Color } from "@/enums";
import { HashMap } from "@/utils/hashmap";

export default function useManaColors(colorToggle: HashMap<Color, boolean>) :
[
    HashMap<Color, boolean>,
    Function
]
{
    const [colorState, setColorState] = useState(colorToggle);
    const setUniqueColorState: Function = (color: Color, newStatus: boolean) => {
        let newColorState: HashMap<Color, boolean> = colorState;
        newColorState.set(color, newStatus);
        setColorState(newColorState);
    }

    return [
        colorState,
        setUniqueColorState
    ];
}
