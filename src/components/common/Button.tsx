

const Button = ({ onClick, children }: any) => {


  return (
    <button onClick={() => onClick()}>{children}</button>
  )
}

export default Button;