const Caret = () => {
    const classNames: string = `
        w-0 
        h-0 
        border-10 
        border-x-transparent 
        border-t-transparent 
        border-b-white 
        z-1
        ml-auto
        mr-auto
    `;

    return <div className={classNames}></div>
}

const NavbarDropdown = ({ children }: { children: React.ReactNode }) => {
    return <div className="absolute -translate-x-4/10 top-9">
        <Caret />
        <div className="rounded-lg p-2 bg-white w-2xs flex flex-col gap-1.5">
            {children}
        </div>
    </div>
}

export default NavbarDropdown;
