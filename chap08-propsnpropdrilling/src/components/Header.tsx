type HeaderProps = {
  title: string;
  user?: string;
};

const Header = ({ title }: HeaderProps) => {
  const headerStyle = {
    backgroundColor: 'mediumblue',
    color: '#fff',
  };
  return (
    <header style={headerStyle}>
      <h1>{title}</h1>
    </header>
  );
};

Header.defaultProps = {
  title: 'Grocery System v.0.0.1',
}

export default Header;
