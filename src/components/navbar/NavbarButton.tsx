type NavbarButtonOptions = {
    title: string,
    disabled: boolean
}

const NavbarButton = ( { title, disabled } : NavbarButtonOptions ) => {
    return <button className="h-full">
        { title }
    </button>
};

export default NavbarButton;
