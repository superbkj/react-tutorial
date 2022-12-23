import clsx from "clsx";

export default function Input(props) {
  const {placeholder, type, className, required, ...rest} = props;
  const classes = clsx({
    input: true
  }, className);

  return (
    <label className="label">
      Text box name here
      {required && <span className="input-required">*</span>}
      <div>
        <input className={classes} type={type ? type : "text"} placeholder={placeholder} {...rest} />
      </div>
    </label>
  );
}