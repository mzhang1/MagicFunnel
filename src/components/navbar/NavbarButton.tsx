type NavbarButtonOptions = {
    title: string,
    disabled: boolean
}

const NavbarButton = ( { title, disabled } : NavbarButtonOptions ) => {
    const buttonStatus: string = !disabled ? "cursor-pointer" : "";

    return <button className={"h-full " + buttonStatus}>
        { title }
    </button>
};

export default NavbarButton;
