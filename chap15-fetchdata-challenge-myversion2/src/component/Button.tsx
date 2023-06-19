import React from "react"

type ButtonProps = {
  buttonText: string,
  reqType: string,
  setReqType: React.Dispatch<React.SetStateAction<string | undefined>>,
}

const Button = ({buttonText, reqType, setReqType}: ButtonProps) => {
  return (
    <button className={buttonText === reqType ? 'selected' : undefined} type="button" onClick={() => setReqType(buttonText)}>{buttonText?.toUpperCase()}</button>
  )
}

export default Button