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
            White: false,
            Blue: false,
            Black: false,
            Red: false,
            Green: false,
            Colorless: false
        }
    );

    return [
        colorState,
        setColorState,
    ];
}
