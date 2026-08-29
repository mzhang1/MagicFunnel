import { useState } from "react";

enum Color {
    White,
    Blue,
    Black,
    Red,
    Green
}

export type ManaColorToggle = {
    White: boolean,
    Blue: boolean,
    Black: boolean,
    Red: boolean,
    Green: boolean,
    Colorless: boolean
}

export default function useManaColors(colorToggle?: ManaColorToggle)
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

    const colorHash: object = {
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
