type LogoProps = {
    src: string
    alt: string
}


const Logo: React.FC<LogoProps> = ({ src, alt }) => {
    return <>
        <img src={src} alt={alt} />
    </>
};

export default Logo