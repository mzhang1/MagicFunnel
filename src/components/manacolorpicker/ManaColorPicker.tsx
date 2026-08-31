import { useEffect, type ReactElement } from 'react';
import type { ManaColorToggle } from '@/hooks/useManaColors';
import useManaColors from '@/hooks/useManaColors';
import { Color } from "@/enums";

import WhiteManaSymbol from '@images/mana/w.svg';
import BlueManaSymbol from '@images/mana/u.svg';
import BlackManaSymbol from '@images/mana/b.svg';
import RedManaSymbol from '@images/mana/r.svg';
import GreenManaSymbol from '@images/mana/g.svg';

type ManaColorPickerProps = {
    defaultManaColorConfig: ManaColorToggle
}

let manaColorMap: Map<Color, string> = new Map();
manaColorMap.set(Color.White, WhiteManaSymbol);
manaColorMap.set(Color.Blue, BlueManaSymbol);
manaColorMap.set(Color.Black, BlackManaSymbol);
manaColorMap.set(Color.Red, RedManaSymbol);
manaColorMap.set(Color.Green, GreenManaSymbol);

export default function ManaColorPicker(props: ManaColorPickerProps){
    const [
        colorState,
        setColorState
    ] = useManaColors(props.defaultManaColorConfig);

    const handleColorChange: Function = (event: MouseEvent, color: Color) => {

    }

    const ColorSymbols: ReactElement[] = [];
    manaColorMap.forEach((urlLink, color) => {
        ColorSymbols.push(<img src={urlLink} onClick={(event) => handleColorChange(event, color)} />)
    });

    return <div className="h-10 flex flex-row gap-0.5">
    </div>
}
