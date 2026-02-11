const Caret = () => {
    const classNames: string = `
        w-0 
        h-0 
        border-10 
        border-x-transparent 
        border-t-transparent 
        border-b-white 
        z-1
    `;

    return <div className={classNames}></div>
}

const NavbarDropdown = ({ children }: { children: React.ReactNode}) => {
    return <div className="relative">
        <Caret />
        <div className="rounded-lg">
            {children}
        </div>
    </div>
}

export default NavbarDropdown;
