import {FaLaptop, FaTabletAlt, FaMobileAlt } from 'react-icons/fa'

type HeaderProps = {
  title: string,
  width: number,
}

const Header = ({title, width}: HeaderProps) => {
  return (
    <header>
      <h1>{title}</h1>
      {
        width < 768 ? <FaMobileAlt />
        : width < 992 ? <FaTabletAlt />
        : <FaLaptop /> 
      }
    </header>
  )
}

export default Header