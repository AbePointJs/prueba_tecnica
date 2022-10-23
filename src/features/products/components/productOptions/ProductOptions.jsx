import React from "react";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { Button, Stack, Select } from "@chakra-ui/react";
import { actionAddItemToCart } from "../../../../store/cart";

function ProductOptions({ id, options, className }) {
  const dispatch = useDispatch();

  const onSubmitHandler = (val) => {
    val.preventDefault();
    const colorCode = val.target[0].value;
    const storageCode = val.target[1].value;

    dispatch(actionAddItemToCart({ id, colorCode, storageCode }));
  };

  return (
    <form onSubmit={onSubmitHandler} className={className}>
      <Stack>
        {Object.keys(options).map((key) => {
          const elem = options[key];
          return (
            <Select key={key}>
              {elem.map((val) => (
                <option value={val.code} key={val.name}>
                  {val.name}
                </option>
              ))}
            </Select>
          );
        })}
        <Button type="submit">Submit</Button>
      </Stack>
    </form>
  );
}

ProductOptions.propTypes = {
  id: PropTypes.string,
  options: PropTypes.objectOf(PropTypes.arrayOf(PropTypes.object)),
  className: PropTypes.string,
};

ProductOptions.defaultProps = {
  id: "1",
  options: {},
  className: "",
};
export default ProductOptions;
