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
    React.Dispatch<React.SetStateAction<ManaColorToggle>>,
    Record<string, Color>
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

    const colorHash: Record<string, Color> = {
        White: Color.White,
        Blue: Color.Blue,
        Black: Color.Black,
        Red: Color.Red,
        Green: Color.Green
    };

    return [
        colorState,
        setColorState,
        colorHash
    ];
}
