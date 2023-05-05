interface InputProps {
  type: string;
  placeholder: string;
  required: boolean;
  disabled: boolean;
  value: string;
}

const InputBox: React.FC<InputProps> = ({
  type,
  placeholder,
  required,
  value,
  disabled,
}) => {
  return (
    <input
      type={type}
      value={value}
      placeholder={placeholder}
      required={required}
      disabled={disabled}
      className="h-[2.5em] bg-transparent rounded-t-md px-5 pl-1 w-[100%] border-0 outline-none border-b-2 border-[yellow] placeholder:text-black placeholder:font-bold text-black font-bold "
    />
  );
};

export default InputBox;
