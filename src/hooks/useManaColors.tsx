import { useState } from "react";

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

    return [
        colorState,
        setColorState,
    ];
}
