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

export default function ManaColorPicker(props :ManaColorPickerProps){
    return <div></div>
}
