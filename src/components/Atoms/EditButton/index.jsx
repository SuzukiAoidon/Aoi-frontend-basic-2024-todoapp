import React from "react";
// import styled from "styled-components";
import pencil from "../../../assets/svg/pencil.svg";
import COLOR from "../../../variables/color";

export const Button = () => {
  return (
    <button>
      <img onMouseEnter={() => COLOR.LIGHT_GRAY} src={pencil} />
    </button>
  );
};
