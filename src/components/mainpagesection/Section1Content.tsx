import ManaColorPicker from "@/components/manacolorpicker/ManaColorPicker";
import type { ManaColorToggle } from '@/hooks/useManaColors';

const Section1Content = () => {
    const defaultManaColorPicked: ManaColorToggle = {
        White: true,
        Blue: true,
        Black: true,
        Red: true,
        Green: true,
        Colorless: true
    };

    return <section key="section1" className="w-full h-120">
        <ManaColorPicker defaultManaColorConfig={defaultManaColorPicked}>
        </ManaColorPicker>
    </section>
}

export default Section1Content;
