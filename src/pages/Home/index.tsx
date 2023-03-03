/* eslint-disable @next/next/no-img-element */
import React, { FC, useMemo } from "react";
import { map } from "lodash";

import { Row, Text, Footer, FlipNumber } from "@app/src/components";
import { useApiGet } from "@app/src/utils/useApiGet";

import {
  YellowContainer,
  BlueContainer,
  BurnColumn,
  WhatColumn,
  BlueBottomBonk,
  BonkzText,
  BonkzHeaderColumn,
  SectionContainer,
  BurnImage,
  largeBonkImageStyles,
  BurnNumberRow,
  WhatIsThisText,
  MiddleContainer,
  SpacingContainer,
} from "./styles";
import { BonkzCard1, BonkzCard2, BonkzCard3, BonkzCard4, } from "./components";
import {
  ADDED_BURNED_BONK,
  BONK_BURN_API,
  BONK_NUMBER_LENGTH,
} from "./constants";

interface HomeProps {}

const Home: FC<HomeProps> = () => {
  const { data: burnedBonk = 0 } = useApiGet(BONK_BURN_API);

  const renderBonkBurned = useMemo(() => {
    // fill array with numbers from 0 to 14 (15 numbers) with leading zeros
    const digits = ("" + (burnedBonk + ADDED_BURNED_BONK)).split("");
    const leadingZeros = Array(BONK_NUMBER_LENGTH - digits.length)
      .fill("0")
      .concat(digits);
    return map(leadingZeros, (digit, index) => {
      return (
        <FlipNumber digit={digit} index={index} key={index + digit} commasOn />
      );
    });
  }, [burnedBonk]);

  return (
    <>
      <YellowContainer>
        <SectionContainer>
          <Row justify="spaceBetween">
            <BonkzHeaderColumn align="center" className="bonk-header-column">
              <BonkzText size="h0" color="pink" weight="medium">
                BONKz
              </BonkzText>
              <img
                src="/images/bonkz-large.png"
                alt="Bonkz"
                style={largeBonkImageStyles}
              />
            </BonkzHeaderColumn>
            <WhatColumn>
              <WhatIsThisText color="pink" px={5} align="left" weight="bold">
                WHAT IS THIS?
              </WhatIsThisText>
              <Text px={5}>
                Christmas day and the Solana ecosystem is weathered and beaten. 
                The market is in the gutter, engagement at an all time low but then 
                from seemingly nowhere, we are blessed with a gift, a mysterious airdrop… 
                A meme coin called $BONK.
                <br /> <br />
                The ecosystem ignited, and began to unify around a common goal. We came 
                together when we couldn’t have been more divided. Not drawn together 
                because of greed, however in order to preserve $BONK, the Solana community 
                began to burn it, making the supply more scarce and theoretically more 
                valuable. In the arms race to demolish the supply, BONKz was created.
                <br /> <br />
                The cutest doggos on Solana, here to bring the like minded together.
              </Text>
            </WhatColumn>
          </Row>
        </SectionContainer>
      </YellowContainer>
      <BlueContainer>
        <SectionContainer>
          <Text
            size="h1"
            color="yellow"
            weight="bold"
            px={4}
            style={{ fontSize: "5vw !important" }}
          >
            MEET YOUR COMMUNITY REPRESENTATIVES
          </Text>
          <Row style={{ marginTop: "50px" }} justify="center">
            <BonkzCard1
              handle="@klibi16"
              description="Discord and Community Manager"
              bio="Klibi has worked in commercial management 
              for nine years across the broadcast media, IT, telecom, 
              and Retail sectors. Currently she works for Apple as a 
              Country Commercial Development Manager. In web3 Klibi is 
              the community manager and chief moderator for John Lé and his 
              discord. She also has volunteered as a community manager for 
              Bonkz to help support community initiatives that bring value and
              spread the BONKz culture in a positive way throughout solana."
            />
            <BonkzCard2
              handle="@IncenseStack"
              description="Discord Admin and Community Manager"
              bio=""
            />
            <BonkzCard3
              handle="@ItsNikkiBullock"
              description="Discord and Community Manager"
              bio="Nikki is a long time mod who has been in the DeFi and NFT space for a few years now. She enjoys talking to community members and working to build positive relationships with the communities she serves. Nikki is passionate about people and helping them to feel welcomed in this space. She especially enjoys onboarding new members to Web 3 because of all the amazing people who taught her so much when she first joined!
              "
            />
            <BonkzCard4
              handle="@JtbDefi"
              description="Community Bonkz and Moderator"
              bio="Jtb is a qualified biomedical engineer turned degen investor. He entered the NFT space in late 2021 and has since worked in the space as a community manager and alpha caller in OG projects such as Stoned Ape Crew. He devotes all of his time to the communities he is a part of with the aim of helping to elevate the status of NFTs to a legitimate industry to the masses. His hobbies are: Surfing, drumming, minting rugs and fighting fuds."
            />
          </Row>
          <SpacingContainer>
            <Text size="h1" color="yellow" px={5} align="center" weight="bold">
              COLLECTION DETAILS
              <br /> <br />
            </Text>
            <MiddleContainer>
              <Text px={5} style={{ maxWidth: "1000px" }} align="center">
                A 15,000 pfp collection to burn a portion of that free $BONK we 
                were all given, and unify behind the positive and funny doggo that 
                had lightened our hearts. BONKz was built for the community, it’s got 
                no roadmap, it has no team. The only purpose BONKz has is to be a net 
                positive for Solana. The community controls every aspect, what parties 
                are thrown, what decisions are made, what more can be done to benefit 
                the ecosystem. We will continue to be a positive force, empowering others 
                to do their best, we may be small, but we are mighty. 
                <br /> <br />
                In the spirit of $BONK all of the funds raised during the mint were burned, 
                reducing the supply thus making it more valuable in theory. Since launch we 
                have burned nearly half a million US dollars worth of $BONK, putting a larger 
                dent into the burning movement than any of the projects before us combined. 
                We have continued to burn $BONK from the royalties received from BONKz further 
                reducing the supply which in turn adds value to the token and the Solana Ecosystem 
                as a whole.  
              </Text>
            </MiddleContainer>
          </SpacingContainer>
          <BurnColumn align={"center"}>
            <Text size="h1" color="yellow" px={5} align="center" weight="bold">
              WATCH US BURN $BONK LIVE!
            </Text>
            <BurnNumberRow justify="center">
              {renderBonkBurned}
              <BurnImage src="/images/total-burned.png" alt="Bonkz" />
            </BurnNumberRow>
          </BurnColumn>
          <BlueBottomBonk
            src="/images/bonkz-small.png"
            alt="Bonkz"
            width={217}
            height={247}
          />
        </SectionContainer>
        <Footer>
          <Text color="pink" size="h1" px={1}>
            BONKz
          </Text>
          <Text align="center" px={5}>
            Project powered by OMNI Creative Studio and Artist Management Agency
            <br />
            Connecting Creatives with WEB3 Brands.
          </Text>
        </Footer>
      </BlueContainer>
    </>
  );
};

export default Home;
