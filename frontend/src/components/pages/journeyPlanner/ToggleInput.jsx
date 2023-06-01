const ToggleInput = ({ question, name, defaultChecked }) => {
  return (
    <div>
      <h3>{question}</h3>
      <input
        name={name}
        type="checkbox"
        defaultChecked={defaultChecked}
      ></input>
    </div>
  );
};

export default ToggleInput;
