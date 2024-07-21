

const Hero = ({ title, titleStyles, subtitle, subtitleStyles }: { title: string, titleStyles: string, subtitle: string, subtitleStyles: string }) => {
    return (
        <section>
            <div>
                <h1 className={titleStyles}>{title}</h1>
                <h2 className={subtitleStyles}>
                    {subtitle}
                </h2>
            </div>
        </section>
    )
}

export default Hero