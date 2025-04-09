const HeaderContainer: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return (
        <header>
          { children }
        </header>
    )
}

const Logo: React.FC<{ children: React.ReactNode}> = ({ children }) => {
    return <>{children}</>
};

const Cover: React.FC<{ children: React.ReactNode}> = ({ children }) => {
    return <>{children}</>;
};

const Heading: React.FC<{ children: React.ReactNode}> = ({ children }) => {
    return <>{children}</>;
};

type HeaderComponent = React.FC<{ children: React.ReactNode}> & {
    Logo: React.FC<{ children: React.ReactNode}>
    Cover: React.FC<{ children: React.ReactNode}>
    Heading: React.FC<{ children: React.ReactNode}>
};

const Header = HeaderContainer as HeaderComponent
Header.Logo = Logo
Header.Cover = Cover
Header.Heading = Heading

export default Header