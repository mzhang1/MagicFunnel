import type { MouseEventHandler } from "react";

export type NavbarLinkData = {
    text: string,
    href?: string,
    onClick?: MouseEventHandler
}

const NavbarLink = ({ text, href, onClick } : NavbarLinkData) => {
    return <a href={href} className="text-dark-blue-link" onClick={onClick}>
        {text}
    </a>
}

export default NavbarLink;
