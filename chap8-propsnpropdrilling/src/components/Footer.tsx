
type FooterProps = {
  items: number,
}

const Footer = ({items}: FooterProps) => {
  const today: Date = new Date()
  return (
    <footer>
      {
        items > 1 ? <p>Items: {items}</p> : <p>Item: {items}</p>
      }
      
      <p>Copyright &copy; {today.getFullYear()}</p>
    </footer>
  )
}

export default Footer