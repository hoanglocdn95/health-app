interface Props {
  label: string;
  action: () => void;
}

const Button = ({ label, action, ...rest }: Props) => {
  return (
    <button className="buttonStyle" onClick={action} {...rest}>
      {label}
    </button>
  );
};

export default Button;
