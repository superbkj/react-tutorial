import clsx from "clsx";

export default function Button(props) {
  const {outline, className, ...rest} = props;
  const classes = clsx({
    btn: true,
    "btn-outline": outline,
    "btn-default": !outline
  }, className)

  return (
    <button className={classes} {...rest}>
      {props.children}
    </button>
  );
}