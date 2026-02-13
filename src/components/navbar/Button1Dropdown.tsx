import type { NavbarLinkData } from '@/components/navbar/NavbarLink';
import NavbarLink from '@/components/navbar/NavbarLink';

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

    return <>
        {links.map((singleLink: NavbarLinkData) => {
            return <NavbarLink {...singleLink}></NavbarLink>
        })}
    </>
}
