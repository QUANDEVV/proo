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
const TabEl = styled.article`
  border-radius: 10px;
  background-color: ${Colors.GrayBG};
  border: 1px solid ${Colors.Border};
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${Colors.Gray};
  padding: 50px;
`;


export default function Tab({ children }) {
  if (children) return <>{children}</>;
  else return <TabEl>Nothing to show 🤷🏻‍♂️</TabEl>;
}
