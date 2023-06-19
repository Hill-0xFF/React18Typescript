import {FaLaptop, FaTabletAlt, FaMobileAlt } from 'react-icons/fa'
import useWindowSize from '../hooks/useWindowSize'

type HeaderProps = {
  title: string,
}

const Header = ({title}: HeaderProps) => {
  // const { width } = useContext<T_HeaderContext>(DataContext)
  const { width } = useWindowSize()

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