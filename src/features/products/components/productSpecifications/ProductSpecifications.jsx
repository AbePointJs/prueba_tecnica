import React from "react";
import PropTypes from "prop-types";
import { TableContainer, Table as TableComp, Thead, Tbody, Td, Tr, Th } from "@chakra-ui/react";

function ProductSpecifications({ content, headers, variant, colorScheme, className }) {
  return (
    <TableContainer className={className}>
      <TableComp variant={variant} colorScheme={colorScheme}>
        <Thead>
          <Tr>
            {headers.map((h) => (
              <Th key={h}>{h}</Th>
            ))}
          </Tr>
        </Thead>
        <Tbody>
          {Object.keys(content).map((key) => {
            // Return array of elements for strings and arrays
            const elem = [].concat(content[key]).flat();
            // Parse to add spaces and all to lower case
            const title = key.replace(/[A-Z ]+/, ` $&`).toLowerCase();
            return (
              <Tr key={key}>
                <Td>
                  <strong>{title}</strong>
                </Td>
                <Td>
                  {elem.map((e) => (
                    <div key={e}>{e}</div>
                  ))}
                </Td>
              </Tr>
            );
          })}
        </Tbody>
      </TableComp>
    </TableContainer>
  );
}

ProductSpecifications.propTypes = {
  content: PropTypes.objectOf(PropTypes.oneOfType([PropTypes.string, PropTypes.array])),
  headers: PropTypes.arrayOf(PropTypes.string),
  variant: PropTypes.string,
  className: PropTypes.string,
  colorScheme: PropTypes.string,
};

ProductSpecifications.defaultProps = {
  content: {},
  headers: [""],
  variant: "striped",
  className: "",
  colorScheme: "red",
};

export default ProductSpecifications;
