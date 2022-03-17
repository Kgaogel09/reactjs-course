import PropTypes from "prop-types"

function Button({ label, version, type, isDisabled }) {
  return (
    <button type={type} disabled={isDisabled} className={`btn btn-${version}`}>
      {label}
    </button>
  )
}

Button.defaultProps = {
  label: "Submit",
  version: "primary",
  type: "submit",
  isDisabled: false,
}

Button.propType = {
  label: PropTypes.string.isRequired,
  version: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  isDisabled: PropTypes.bool.isRequired,
}

export default Button
