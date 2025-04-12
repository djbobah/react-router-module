import { Settings } from "../types";

interface TextInputProps extends Settings {
  type?: string;
  name: string;
  value: string;
  onChange: ({ target }: { target: HTMLInputElement }) => void;
}

export const TextInput = (props: TextInputProps) => {
  const {
    name,
    value,
    onChange,
    type = "text",
    placeholder,
    label,
    description,
    withAsterisk,
    error,
    variant = "default",
    disabled,
    withIcon,
    radius,
    size,
    checked,
  } = props;

  const variantStyle: { [key: string]: string } = {
    default: "",
    outline: "",
    underline: " input-underline",
    filed: " input-filed",
  };

  return (
    <div className="textInput-block">
      <label htmlFor={type === "radio" ? `${name}-${value}` : name}>
        {label} {withAsterisk ? "*" : ""}
      </label>
      {description && (
        <span className="textInput-block__description">{description}</span>
      )}
      <div className={withIcon ? " input-with-icon" : " input-without-icon"}>
        <input
          id={type === "radio" ? `${name}-${value}` : name}
          name={name}
          type={type}
          value={value}
          onChange={onChange}
          className={
            (!!error ? "input-error " : "") +
            variantStyle[variant] +
            (!withIcon ? " input-without-icon" : "")
          }
          checked={checked}
          placeholder={placeholder}
          disabled={disabled}
          style={{ width: "100%", borderRadius: radius, height: size }}
          size={size}
        />
        {withIcon && <span className="icon">@</span>}
      </div>

      <span className="error">{error}</span>
    </div>
  );
};
