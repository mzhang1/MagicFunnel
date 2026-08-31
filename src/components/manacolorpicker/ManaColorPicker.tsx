import { useEffect } from 'react';
import type { ManaColorToggle } from '@/hooks/useManaColors';
import useManaColors from '@/hooks/useManaColors';

import WhiteManaSymbol from '@images/mana/w.svg';
import BlueManaSymbol from '@images/mana/u.svg';
import BlackManaSymbol from '@images/mana/b.svg';
import RedManaSymbol from '@images/mana/r.svg';
import GreenManaSymbol from '@images/mana/g.svg';

type ManaColorPickerProps = {
    defaultManaColorConfig: ManaColorToggle
}

export default function ManaColorPicker(props: ManaColorPickerProps){
    const [
        colorState,
        setColorState
    ] = useManaColors(props.defaultManaColorConfig);
    
    return <div className="h-10 flex flex-row gap-0.5">
        <img src={WhiteManaSymbol} alt="White"/>
        <img src={BlueManaSymbol} alt="Blue"/>
        <img src={BlackManaSymbol} alt="Black"/>
        <img src={RedManaSymbol} alt="Red"/>
        <img src={GreenManaSymbol} alt="Green"/>
    </div>
}
