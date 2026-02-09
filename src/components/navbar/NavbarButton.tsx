type NavbarButtonOptions = {
    title: string
}

const NavbarButton = ( { title } : NavbarButtonOptions ) => {
    return <button className="h-full">
        { title }
    </button>
};

export default NavbarButton;
