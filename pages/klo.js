import styled from "styled-components";
import Image from "next/image";
import { Colors, Devices } from "./Theme";
import { useTheme } from 'next-themes';
import images from '../assets';
import { BsHeart } from "react-icons/bs";


import { BsInstagram, BsFillPatchCheckFill } from "react-icons/bs";
import { GrTwitter, GtTwitter } from "react-icons/gr";
import NFTCard from "./styled/NFTCard.styled";
import Grid from "./styled/Grid.styled";
import Head from "next/head";
import Tabs from "./styled/Tabs.styled";
import Tab from "./styled/Tab.styled";
// import { NFTs } from "./Info";
const ProfileEl = styled.article`
  background-color: ${Colors.White};
  color: ${Colors.Black};
  display: flex;
  flex-direction: column;
`;
const Cover = styled.div`
  position: relative;
  width: 100%;
  overflow: hidden;
  height: 250px;

  @media ${Devices.Laptop} {
    height: 300px;
  }
`;
const Content = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 2rem;
  gap: 0rem;

  @media ${Devices.Laptop} {
    flex-direction: row;
  }
`;
const Info = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position:relative;

  @media ${Devices.Laptop} {
    max-width: 25vw;
    align-items: flex-start;
  }
`;

const Avatar = styled.span`
  transform: translateY(-50%);
  border: 5px solid ${Colors.White};
  border-radius: 50%;
  overflow: hidden;
  width: 150px;
  height: 150px;
`;

const Username = styled.div`
  display: flex;
  align-items: center;
  font-weight: 500;
  font-size: 1.1rem;
  margin-top: -4rem;

  > svg {
    font-size: 1.5rem;
    color: ${Colors.Primary};
    margin-right: 0.5rem;
  }
`;

const Bio = styled.p`
  white-space: pre-wrap;
  font-size: 0.95rem;
  margin-bottom: 1rem;
`;
const Socials = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  font-size: 1.5rem;
  margin-bottom: 1rem;

  @media ${Devices.Laptop} {
    justify-content: flex-start;
  }
`;
const Stats = styled.div`
  width: 100%;
  border-top: 1px solid ${Colors.Border};
  border-bottom: 1px solid ${Colors.Border};
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  align-items: center;
  justify-content: center;
`;
const StatItem = styled.div`
  padding: 0.1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.25rem;
`;
const StatTitle = styled.span`
  color: ${Colors.Gray};
`;
const StatValue = styled.span`
  font-weight: 500;
`;


// HAPA TUMEEKA PROPERTIES ZA NFTS CARDDDDDD

// 122-223

const NFTCardEl = styled.article`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Card = styled.div`
  border-radius: 15px;
  overflow: hidden;
  z-index: 2;
  background-color: ${Colors.White};
  color: ${Colors.Black};
  position: relative;
  display: flex;
  flex-direction: column;
  box-shadow: 0 4px 40px rgb(0 0 0/10%);
`;

const BadgeEl = styled.span`
  position: absolute;
  left: 1rem;
  top: 1rem;
  z-index: 3;
  background: linear-gradient(
    to right,
    ${Colors.Gradients.PrimaryToSec[0]},
    ${Colors.Gradients.PrimaryToSec[1]}
  );
  padding: 0.5rem 1rem;
  border-radius: 30px;
  font-weight: 500;
  color: ${Colors.White};
`;

const ItemImage = styled.div``;
const InfoSection = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem 1.5rem;
  flex: 1;
  gap: 0.5rem;
`;
const TSection = styled.div`
  display: flex;
  justify-content: space-between;
`;
const EditionEl = styled.span`
  font-weight: 500;
`;
const StockEl = styled.span`
  color: ${Colors.Primary};
  font-weight: 600;
`;
const ItemTitle = styled.h2`
  font-size: 1.4rem;
`;
const PriceSection = styled.div``;
const BottomSection = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  margin-top: 1rem;
`;
const AvatarEl = styled.span`
  overflow: hidden;
  border-radius: 50%;
  display: flex;
  height: 50px;
  width: 50px;
  margin-right: 0.5rem;
`;

const AuthorEl = styled.span``;
const LikesEl = styled.span`
  margin-left: auto;
  display: flex;
  align-items: center;
  font-size: 1.2rem;
  gap: 0.5rem;

  > svg {
    cursor: pointer;
  }
`;

const Bar1 = styled.span`
  width: 93%;
  height: 0.7rem;
  background-color: ${Colors.White};
  border-radius: 0 0 50px 50px;
  box-shadow: inset 0 4px 5px rgb(0 0 0 /10%);
  z-index: 1;
  /* filter: brightness(0.7); */
  transform: translateY(-30%);
`;
const Bar2 = styled(Bar1)`
  width: 88%;
  transform: translateY(-60%);
  /* filter: brightness(0.5); */
  z-index: 0;
`;



 const NFTs = [
  {
    Id: 1,
    Badge: "Total Sale: $82,571",
    ImageUrl: "/images/nft/bking.png",
    Edition: 371,
    Stock: 128,
    Title: "KING BITCOIN",
    Price: "$10M",
    Avatar: "/images/avatar/newk3d.png",
    Author: "newk3d",
    Likes: 652,
  },
  {
    Id: 2,
    Badge: "Total Sale: $82,571",
    ImageUrl: "/images/nft/bking.png",
    Edition: 371,
    Stock: 128,
    Title: "KING BITCOIN",
    Price: "$10M",
    Avatar: "/images/avatar/newk3d.png",
    Author: "newk3d",
    Likes: 1600,
  },
  {
    Id: 3,
    Badge: "Total Sale: $82,571",
    ImageUrl: "/images/nft/bking.png",
    Edition: 371,
    Stock: 128,
    Title: "KING BITCOIN",
    Price: "$10M",
    Avatar: "/images/avatar/newk3d.png",
    Author: "newk3d",
    Likes: 652,
  },
  {
    Id: 4,
    Badge: "Total Sale: $82,571",
    ImageUrl: "/images/nft/bking.png",
    Edition: 371,
    Stock: 128,
    Title: "KING BITCOIN",
    Price: "$10M",
    Avatar: "/images/avatar/newk3d.png",
    Author: "newk3d",
    Likes: 652,
  },
  {
    Id: 5,
    Badge: "Total Sale: $82,571",
    ImageUrl: "/images/nft/bking.png",
    Edition: 371,
    Stock: 128,
    Title: "KING BITCOIN",
    Price: "$10M",
    Avatar: "/images/avatar/newk3d.png",
    Author: "newk3d",
    Likes: 652,
  },
  {
    Id: 6,
    Badge: "Total Sale: $82,571",
    ImageUrl: "/images/nft/bking.png",
    Edition: 371,
    Stock: 128,
    Title: "KING BITCOIN",
    Price: "$10M",
    Avatar: "/images/avatar/newk3d.png",
    Author: "newk3d",
    Likes: 652,
  },
];






const AllTabs = [
  {
    Id: 1,
    Title: "Collectibles",
    Content: (
      <Grid>
        {NFTs.map((nft) => {
          return <NFTCard key={nft.Id} item={nft} />;
        })}
      </Grid>
    ),
  },


];

export default function klo({ item }) {
  
  return (
    <ProfileEl>
   
     <Cover>
       <Image
        src={images.vara2}
          // width="1440"
          // height="480"
          
        layout="fill"
      />
    </Cover>
    <Content>
      <Info>
        <Avatar>
          <Image
            src={images.vara3}
            layout="fill"
            //   width="150"
            //   height="150"
          />
        </Avatar>
  
        <Username>
          <BsFillPatchCheckFill />
          0varabiii
        </Username>
        <Bio>
          {`0avarabi i an instagram model`}
        </Bio>
        <Socials>
          <a href="#">
            <GrTwitter />
          </a>
          <a href="#">
            <BsInstagram />
          </a>
        </Socials>
        <Stats>
          <StatItem>
            <StatTitle>Likes</StatTitle>
            <StatValue>3.8K</StatValue>
          </StatItem>
          <StatItem>
            <StatTitle>Views</StatTitle>
            <StatValue>84K</StatValue>
          </StatItem>
          <StatItem>
            <StatTitle>Created</StatTitle>
            <StatValue>12</StatValue>
          </StatItem>
          <StatItem>
            <StatTitle>Minted</StatTitle>
            <StatValue>1.2K</StatValue>
          </StatItem>
        </Stats>
      </Info>
      {/* Tabs */}
      <Tabs data={AllTabs} mt="2rem" />

    </Content>
    </ProfileEl>
  );
}


