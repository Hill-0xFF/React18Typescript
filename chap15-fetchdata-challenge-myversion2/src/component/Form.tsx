import Header from './Header'

type FormProps = {
  reqType: string,
  setReqType: React.Dispatch<React.SetStateAction<string | undefined>>,
}

const Form = ({reqType, setReqType}: FormProps) => {

  return (
    <form onSubmit={(evt) => evt.preventDefault()}>
      <Header reqType={reqType} setReqType={setReqType}/>
    </form>
  )
}

export default Form