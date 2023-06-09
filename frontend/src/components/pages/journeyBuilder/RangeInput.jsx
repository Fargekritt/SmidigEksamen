const RangeInput = ({
  question,
  name,
  step,
  minValue,
  maxValue,
  defaultValue,
  optionLabel,
  onInput,
}) => {
  return (
    <div className="user-input range-input">
      <h3 className="heading">{question}</h3>
      <input
        name={name}
        type="range"
        min={minValue}
        max={maxValue}
        defaultValue={defaultValue}
        step={step}
        onInput={onInput}
      ></input>
      <label htmlFor={name}>{optionLabel}</label>
    </div>
  );
};

export default RangeInput;
