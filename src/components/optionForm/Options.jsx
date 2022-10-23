import React from "react";
import PropTypes from "prop-types";
import { Select } from "@chakra-ui/react";

function OptionForm({ options }) {
  return <Select>Hola</Select>;
}

OptionForm.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string),
};

OptionForm.defaultProps = {
  options: {
    select: "",
  },
};

export default OptionForm;
