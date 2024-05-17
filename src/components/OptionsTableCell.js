//To run the component on the client side instead of server side
"use client";
import { TableCell } from "@mui/material";
import React, { useState } from "react";

function OptionsTableCell({ types }) {
  const [selectedType, setSelectedType] = useState(null);
  const [showOptions, setShowOptions] = useState(false);

  const handleCellClick = () => {
    setShowOptions(!showOptions);
  };

  const handleOptionClick = (type) => {
    setSelectedType(type);
    setShowOptions(false);
  };

  return (
    <TableCell onClick={types.length > 1 ? handleCellClick : undefined}>
      {/* conditional rendering for multiple type cases */}
      {types.length > 1 ? (
        <>
          {showOptions && (
            <>
              {types.map((type, index) => (
                <span key={index}>
                  {index > 0 && " | "}
                  <span
                    style={{ cursor: "pointer" }}
                    onClick={() => handleOptionClick(type)}
                  >
                    {type}
                  </span>
                </span>
              ))}
            </>
          )}
          {!showOptions && (
            <>
              {selectedType ? (
                selectedType
              ) : (
                <>
                  {types[0]} <span>*</span>
                </>
              )}
            </>
          )}
        </>
      ) : (
        types[0]
      )}
    </TableCell>
  );
}

export default OptionsTableCell;
