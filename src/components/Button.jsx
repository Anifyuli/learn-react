import PropTypes from "prop-types";

export default function Button({
  color = "bg-blue-500",
  textValue = "Button",
  icon = ""
}) {
  return (
    <div className="my-5">
      <a href="https://react.dev" target="blank_">
        <button className={`h-15 px-8 py-2 ${color} rounded-full text-white`}>
          {textValue} {icon}
        </button>
      </a>
    </div>
  );
}

Button.propTypes = {
  color: PropTypes.string,
  textValue: PropTypes.string,
  icon: PropTypes.element
};
