type NavbarButtonOptions = {
    title: string,
    disabled?: boolean,
    onClick?: () => {},
    onHover?: () => {}
}

const NavbarButton = ( { title, disabled, onClick, onHover } : NavbarButtonOptions ) => {
    const buttonStatus: string = !disabled ? "cursor-pointer" : "";

    return <button className={"h-full p-3 " + buttonStatus} onClick={onClick} onMouseOver={onHover}>
        { title }
    </button>
};

export default NavbarButton;
