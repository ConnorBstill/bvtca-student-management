interface InputProps {
  placeholder: string;
  type: string;
}

const Input = ({ placeholder, type }: InputProps) => {
  
  return (
    <input placeholder={placeholder} type={type} />
  )
}

export default Input;
