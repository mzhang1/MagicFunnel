import type { NavbarLinkData } from '@/components/navbar/NavbarLink';

export const Button1Dropdown = () => {
    const links: NavbarLinkData[] = [
        {
            text: "Link1",
            href: ""
        },
        {
            text: "Link2",
            href: "",
        },
        {
            text: "Link3",
            href: ""
        }
    ];

    return <div className="w-sm bg-white">
        <a className="text-dark-blue-link">Link 1</a>
        <a className="text-dark-blue-link">Link 2</a>
        <a className="text-dark-blue-link">Link 3</a>
    </div>
}
