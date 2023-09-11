function FormInput({
  value, label, id, name, onChange, number = false, min, max
}) {
  return (
    <label
      className="row w-full my-2 justify-between items-center"
      htmlFor={name || id}
    >
      <span>
        {label}
      </span>
      <input
        className="p-1 rounded-md border border-cornflower-blue font-sans focus:border-pastel-green"
        type={number ? 'number' : 'text'}
        min={min}
        max={max}
        value={value}
        id={id || name}
        name={name || id}
        onChange={onChange}
      />
      <span>
        px
      </span>
    </label>
  );
}

export default FormInput;
