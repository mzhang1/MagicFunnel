type NavbarLinkData = {
    text: string,
    href: string
}

const NavbarLink = ({ text, href } : NavbarLinkData) => {
    return <a href={href} className="text-dark-blue-link">{text}</a>
}

export default NavbarLink;
