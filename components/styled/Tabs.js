import styled from "styled-components";
import { useState } from "react";
// import { Colors, Devices } from "../Theme";
import GridTmp from "./Grid.styled";



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

const BreakPoints = {
  MobileS: "320px",
  MobileM: "375px",
  MobileL: "425px",
  Tablet: "768px",
  Laptop: "1024px",
  LaptopL: "1440px",
  Desktop: "2560px",
};

const Devices = {
  MobileS: `(min-width: ${BreakPoints.MobileS})`,
  MobileM: `(min-width: ${BreakPoints.MobileM})`,
  MobileL: `(min-width: ${BreakPoints.MobileL})`,
  Tablet: `(min-width: ${BreakPoints.Tablet})`,
  Laptop: `(min-width: ${BreakPoints.Laptop})`,
  LaptopL: `(min-width: ${BreakPoints.LaptopL})`,
  Desktop: `(min-width: ${BreakPoints.Desktop})`,
};



const TabsEl = styled.article`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: ${(p) => (p.mt ? p.mt : "")};
`;
const Headers = styled.div`
  display: flex;
  width: 100%;
  gap: 2rem;
  padding-bottom: 2rem;
`;


const Header = styled.span`
  font-weight: 500;
  cursor: pointer;
  position: relative;

  ::after {
    content: "";
    position: absolute;
    transition: all 0.3s ease-in-out;
    left: 0;
    bottom: 0;
    width: ${(p) => (p.active ? "100%" : "0")};
    height: 0.2rem;
    background: linear-gradient(
      to right,
      ${Colors.Gradients.PrimaryToSec[0]},
      ${Colors.Gradients.PrimaryToSec[1]}
    );
    border-radius: 20px;
    transform: translateY(500%);
  }
`;
const Content = styled.div`
  padding: 1rem;
`;


export default function Tabs({ data, mt }) {
  const [CurTab, setCurTab] = useState(data[0]);
  return (
    <TabsEl mt={mt}>
      <Headers>
        {data.map((d) => {
          return (
            <Header
              onClick={() => {
                if (CurTab.Id !== d.Id) setCurTab(d);
              }}
              key={d.Id}
              active={CurTab.Id === d.Id}
            >
              {d.Title}
            </Header>
          );
        })}
      </Headers>
      <Content>{CurTab.Content}</Content>
    </TabsEl>
  );
}
