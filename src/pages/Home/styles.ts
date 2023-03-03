import { Column, Row, Text } from "@app/src/components";
import { styled } from "@app/stitches.config";
import { CSSProperties } from "@stitches/react";
import Image from "next/image";

export const SectionContainer = styled("div", {
  maxWidth: "1500px",
  justifyContent: "space-between",
  width: "100%",
});

export const YellowContainer = styled("div", {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  // minHeight: "70vh",
  width: "100%",
  zIndex: -100,
  backgroundColor: "$yellow",
});

export const MiddleContainer = styled("div", {
  minHeight: "100px",
  paddingTop: "100px",
  paddingBottom: "100px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  // minHeight: "70vh",
  width: "100%",
  backgroundColor: "$yellow",
});

export const SpacingContainer = styled("div", {
  paddingTop: "200px",
  paddingBottom: "100px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  // minHeight: "70vh",
  width: "100%",
});


export const BonkzText = styled(Text, {
  position: "relative",
  top: "6vw",
  fontSize: "14vw !important",
  animation: "1s ease-out 0s 1 slideInTop",
});

export const BlueContainer = styled(YellowContainer, {
  backgroundColor: "$blueJean",
  clipPath: "ellipse(200% 100% at 50% 100%)",
  textAlign: "center",
  paddingTop: "100px",
});

export const BlueBottomBonk = styled(Image, {
  bottom: 42,
  position: "relative",
});

export const BurnColumn = styled(Column, {
  marginTop: "200px",
  marginBottom: "150px",
});

export const BurnNumberRow = styled(Row, {
  height: "auto",
  padding: "80px 0",
});

export const WhatColumn = styled(Column, {
  maxWidth: "430px",
  margin: "auto",
  animation: "1s ease-out 0s 1 slideInRight",
});

export const BonkzHeaderColumn = styled(Column, {
  maxWidth: "auto",
  margin: "auto",
  zIndex: 0,
  marginBottom: "clamp(-50px, -2vw, -75px)",
});

export const largeBonkImageStyles: CSSProperties = {
  zIndex: 1,
  animation: "1s ease-out 0s 1 slideInBottom",
  width: "45vw",
  maxWidth: "411px",
  height: "auto",
};

export const BurnImage = styled("img", {
  position: "absolute",
  width: "15vw",
  right: "7vw",
  display: "inline-flex",
  marginBottom: "-12vw",
  zIndex: -1,
});

export const WhatIsThisText = styled(Text, {
  fontSize: "2.7rem !important",
  lineHeight: "3.5rem !important",
});
