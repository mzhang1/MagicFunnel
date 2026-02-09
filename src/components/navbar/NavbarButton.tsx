type NavbarButtonOptions = {
    title: string,
    disabled: boolean,
    onClick: () => {}
}

const NavbarButton = ( { title, disabled, onClick } : NavbarButtonOptions ) => {
    const buttonStatus: string = !disabled ? "cursor-pointer" : "";

    return <button className={"h-full " + buttonStatus} onClick={onClick}>
        { title }
    </button>
};

export default NavbarButton;
