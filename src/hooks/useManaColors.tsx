import React, { useState } from "react";
import { Color } from "@/enums"

export type ManaColorToggle = {
    White: boolean,
    Blue: boolean,
    Black: boolean,
    Red: boolean,
    Green: boolean,
    Colorless: boolean
}

export default function useManaColors(colorToggle?: ManaColorToggle) :
[
    ManaColorToggle,
    Function
]
{
    const [colorState, setColorState] = useState<ManaColorToggle>(
        colorToggle ?? {
            White: true,
            Blue: true,
            Black: true,
            Red: true,
            Green: true,
            Colorless: true
        }
    );

    const setUniqueColorState: Function = (color: Color) => {

    }

    return [
        colorState,
        setUniqueColorState
    ];
}
