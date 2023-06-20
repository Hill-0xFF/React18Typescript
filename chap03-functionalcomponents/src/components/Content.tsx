
const Content = () => {
  const handleNameChange = (): string => {
    const name: string[] = ['Bob', 'Kevin', 'Dave']
    const int: number = Math.floor(Math.random() * 3)
    return name[int]
  }

  const handleClick = () => {
    console.log('You clicked'); 
  }

  const handleClick2 = (name:string): void => {
    console.log(`${name} was clicked!`); 
  }

  const handleClick3 = (evt: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    console.log(`currentTarget.outerHTML: ${evt.currentTarget.outerHTML}`);
    console.log('currentTarget: ', evt.currentTarget);
    console.log('target: ', evt.target);
    
  }

  const nm:string = handleNameChange()
  return (
    <div>
      <p>Hello {handleNameChange()}</p>
      <button onClick={handleClick}>Click Me</button>
      <button onClick={() => handleClick2(nm)}>Click Name</button>
      <button onClick={(e) => handleClick3(e)}>Click Event</button>
    </div>
  )
}

export default Content