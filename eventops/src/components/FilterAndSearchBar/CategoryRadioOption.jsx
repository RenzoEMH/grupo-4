const CategoryRadioOption = ({
  categoria,
  selectedValue,
  setSelectedValue,
}) => {
  return (
    <>
      <input
        type="radio"
        id={`radio${categoria}`}
        name="radioCategory"
        value={categoria}
        checked={selectedValue === categoria}
        onChange={(e) => setSelectedValue(e.target.value)}
      />
      <label htmlFor={`radio${categoria}`}>{categoria} </label>
    </>
  );
};

export default CategoryRadioOption;
