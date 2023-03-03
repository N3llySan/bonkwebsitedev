import { FC } from "react";
import Image from "next/image";

import { Text } from "@app/src/components";

import { RepCard, bonkImageStyles, RepDescription } from "./styles";

interface BonkzCardProps {
  handle: string;
  description: string;
  bio: string;
}

const BonkzCard: FC<BonkzCardProps> = ({ handle, description, bio,  }) => {
  return (
    <div>
      <Image
        src="/images/nikki.png"
        alt="Bonkz"
        width={166}
        height={166}
        style={bonkImageStyles}
      />
      <RepCard>
        <Text size="h2" color="blue" weight="bold" style={{ marginBottom: 10 }}>
          {handle}
        </Text>
        <Text align="center"> {description}</Text>
      </RepCard>
      <RepDescription>
        <Text align="center"> {bio}</Text>
      </RepDescription>
    </div>
  );
};

export default BonkzCard;
