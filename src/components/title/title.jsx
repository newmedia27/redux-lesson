import React, { useContext } from "react";
import PropTypes from "prop-types";

import "./title.css";
import { ctx } from "../../containers/todo-context/CreateContyext";

// const Title = ({ title }) => (
//   <h1 className="title">{title}</h1>
// );
const Title = () => {
  const { title } = useContext(ctx);
  return <h1 className="title">{title}</h1>;
};

Title.propTypes = {
  title: PropTypes.string,
};

Title.defaultProps = {
  title: "Simple title",
};

export default Title;
