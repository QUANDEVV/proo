import styled from "styled-components";
// import { Colors } from "../Theme";

const Colors = {
  Primary: "#1199FA",
  Link: "#93d2fd",
  PrimaryDark: "#0F1C39",
  PrimaryDisable: "#1e3f6f",
  Background: "#0B1426",
  White: "#FEFEFE",
  Black: "#212121",
  Border: "#e3e3e3",
  Gray: "rgb(148, 155, 164)",
  GrayBG: "#f7f9fa",
  Gradients: { PrimaryToSec: ["#1199FA", "#10C0E9"] },
};


const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  background: linear-gradient(
    to right,
    ${Colors.Gradients.PrimaryToSec[0]},
    ${Colors.Gradients.PrimaryToSec[1]}
  );
  padding: 0.5rem 1.5rem;
  font-weight: 500;
  color: ${Colors.White};
  border: none;
  border-radius: ${(p) => (p.round ? "50px" : "5px")};
  width: max-content;
`;



export default Button;
