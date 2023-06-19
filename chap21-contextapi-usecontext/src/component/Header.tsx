import { useContext } from 'react'
import DataContext from '../context/DataContext'
import {FaLaptop, FaTabletAlt, FaMobileAlt } from 'react-icons/fa'

type HeaderProps = {
  title: string,
}

const Header = ({title}: HeaderProps) => {
  const { width } = useContext(DataContext)

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