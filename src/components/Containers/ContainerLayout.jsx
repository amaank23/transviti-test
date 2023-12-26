import { PropTypes } from "prop-types";


const ContainerLayout = ({ children }) => {
  return (
    <div className="max-w-[1192px] 2xl:max-w-[1600px] mx-auto">{children}</div>
  )
}

ContainerLayout.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ]).isRequired
  }

export default ContainerLayout