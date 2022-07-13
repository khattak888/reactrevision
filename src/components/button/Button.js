import "./Button.css";
const Button = (props) => {
  return (
    <>
      <button className="button" style={props.style}>
        {props.title || "SUBMIT"}
      </button>
    </>
  );
};

export default Button;
