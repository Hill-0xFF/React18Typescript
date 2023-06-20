import { useState } from "react"

const Content = () => {
  const [name, setName] = useState<string>('InitialName')
  const [count, setCount] = useState<number>(0)

  const handleNameChange = (): void => {
    const name: string[] = ['Bob', 'Kevin', 'Dave']
    const int: number = Math.floor(Math.random() * 3)
    setName(name[int])
  }

  const handleClick = (): void => {
    setCount(count + 1)
    console.log('Count: ', count); 
  }

  const handleClick2 = ():void => {
    console.log(`Current Count State: ${count} was clicked!`); 
  }

  const handleClick3 = (evt: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    console.log(`currentTarget.outerHTML: ${evt.currentTarget.outerHTML}`);
    console.log('currentTarget: ', evt.currentTarget);
    console.log('target: ', evt.target);
    
  }

  return (
    <div>
      <p>Hello {name}</p>
      <button onClick={handleNameChange}>Change Name</button>
      <button onClick={handleClick}>Change Count</button>
      <p>Current Count State {count}</p>
      <button onClick={(e) => handleClick3(e)}>Click Event</button>
    </div>
  )
}

export default Content