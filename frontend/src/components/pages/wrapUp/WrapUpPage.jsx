import RangeInput from "../journeyPlanner/RangeInput";

const WrapUpPage = () => {
  return (
    <div className="page">
      WrapUpPage
      <RangeInput
        question={"Hvordan likte du det?"}
        minValue={0}
        maxValue={10}
        optionLabel={"hei"}
      />
    </div>
  );
};

export default WrapUpPage;
