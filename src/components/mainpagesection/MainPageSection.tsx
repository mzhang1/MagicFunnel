const MainPageSection = ({ additionalClasses, children } : { additionalClasses?: string, children: React.ReactNode }) => {
    return <section className="w-full h-1/2">
        {children}
    </section>
}

export default MainPageSection;
