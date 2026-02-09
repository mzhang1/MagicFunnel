type NavbarButtonOptions = {
    title: string
}

const NavbarButton = ( { title } : NavbarButtonOptions ) => {
    return <button>
        { title }
    </button>
};

export default NavbarButton;
