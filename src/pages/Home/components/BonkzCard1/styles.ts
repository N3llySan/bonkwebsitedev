import { Card } from "@app/src/components";
import { styled } from "@app/stitches.config";
import { CSSProperties } from "@stitches/react";

export const RepCard = styled(Card, {

  maxWidth: "270px",
  margin: "20px ",
  paddingTop: "80px",
  boxShadow: "3px 4px 0px rgba(0, 0, 0, 0.25) !important",
  borderRadius: "6px",
});

export const RepDescription = styled(Card, {
  minHeight: "500px",
  maxWidth: "270px",
  margin: "20px ",
  boxShadow: "3px 4px 0px rgba(0, 0, 0, 0.25) !important",
  borderRadius: "6px",
});

export const bonkImageStyles: CSSProperties = {
  bottom: "-90px",
  position: "relative",
};
