function DropdownMenu({
  value, onChange, options = [], className
}) {
  return (
    <select
      className={`m-0.5 p-0.5 rounded-md border border-cornflower-blue font-sans focus:border-pastel-green ${className}`}
      value={value}
      onChange={onChange}
    >
      {options.map((o, i) => (
        <option
          className={o.className || ''}
          key={`options-${i}`}
          label={o.label || ''}
          value={o.value}
        />
      ))}
    </select>
  );
}

export default DropdownMenu;
