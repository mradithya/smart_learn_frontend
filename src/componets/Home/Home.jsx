import React from "react";
import {
  Button,
  Heading,
  Stack,
  VStack,
  Text,
  Image,
  Box,
  HStack,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import "./home.css";
import vg from "../../assets/images/smart.jpg";
import { CgGoogle, CgYoutube } from "react-icons/cg";
import { SiCoursera, SiUdemy } from "react-icons/si";
import { DiAws } from "react-icons/di";
import introVideo from "../../assets/videos/intro.mp4";

function Home() {
  return (
    <section className="home">
      <div className="container">
        <Stack
          direction={["column", "row"]}
          spacing={["16", "56"]}
          alignItems="center"
          justifyContent={["center", "space-between"]}
          height={"100%"}
        >
          <VStack
            width={"full"}
            alignItems={["center", "flex-end"]}
            spacing={"5"}
          >
            <Heading children="Welcome to Smart Learn" size={"2xl"} />
            <Text
              fontSize={"2xl"}
              fontFamily={"cursive"}
              textAlign={["center", "left"]}
              children="Your one-stop solution to all your learning needs"
            />
            <Link to="/courses">
              <Button size={"lg"} colorScheme="yellow">
                Explore Now
              </Button>
            </Link>
          </VStack>
          <Image
            className="vector-graphips"
            borderRadius={"5px"}
            boxSize={"md"}
            src={vg}
            objectFit={"contain"}
          />
        </Stack>
      </div>
      <Box padding={"8"} bg={"blackAlpha.900"}>
        <Heading
          textAlign={"center"}
          fontFamily="body"
          color={"yellow.400"}
          children="OUR BRANDS"
        />
        <HStack
          className="brandsBanner"
          justifyContent={"space-evenly"}
          marginTop={"4"}
        >
          <CgGoogle />
          <CgYoutube />
          <SiCoursera />
          <SiUdemy />
          <DiAws />
        </HStack>
      </Box>

      <div className="container2">
        <video
          autoPlay
          controls
          src={introVideo}
          controlsList="nodownload 
         noremoteplayback
          nofullscreen"
          disablePictureInPicture
          disableRemotePlayback
        ></video>
      </div>
    </section>
  );
}

export default Home;
