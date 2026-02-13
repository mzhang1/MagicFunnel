import type { NavbarLinkData } from '@/components/navbar/NavbarLink';

export const Button2Dropdown = () => {
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

    return <div className='w-sm'>
        {links.map((singleLink: NavbarLinkData) => {
            return <a href={singleLink.href}>{singleLink.text}</a>
        })}
    </div>
}
