import {
  Container,
  Heading,
  HStack,
  Input,
  Button,
  Text,
  Stack,
  VStack,
  Image,
  Center,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { Link } from "react-router-dom";
// main functional component for courses page

const Course = ({
  views,
  title,
  imageSrc,
  id,
  addToPlayListHandler,
  creater,
  dicription,
  lectureCount,
}) => {
  return (
    <VStack
      className="course"
      alignItems={["center", "flex-start"]}
      boxShadow={"lg"}
      p="8"
      borderRadius={"8"}

    >
      <Image src={imageSrc} boxSize={"60"} objectFit={"contain"} />
      <Heading
        textAlign={"Center"}
        maxW={"200px"}
        fontFamily={"sans-serif"}
        noOfLines={3}
        children={title}
        size={"sm"}
      />
      <Text children={dicription} noOfLines={2} />
      <HStack>
        <Text
          fontWeight={"bold"}
          textTransform={"uppercase"}
          children={creater}
          noOfLines={2}
        />
        <Text
          fontFamily={"body"}
          textTransform={"uppercase"}
          children={creater}
          noOfLines={2}
        />
      </HStack>
      <Heading
        textAlign={"center"}
        size="xs"
        children={"Lectures - ${lectureCount}"}
        textTransform={"uppercase"}
      />
      <Heading
        size="xs"
        children={"Views - ${Views}"}
        textTransform={"uppercase"}
      />
      <Stack direction={["column", "row"]} alignItems={"center"}>
        <Link to={`/course/${id}`}>
          <Button colorScheme={"yellow"}>Watch Now</Button>
        </Link>
        <Button
          variant={"ghost"}
          colorScheme={"yellow"}
          onClick={() => addToPlayListHandler(id)}
          addToPlayListHandler={addToPlayListHandler}

        >
          Add To Playlist
        </Button>
      </Stack>
    </VStack>
  );
};

const Courses = () => {
  const [keyword, setKeyword] = useState("");
  const [category, setCategory] = useState("");

    const addToPlayListHandler = (id) => {
    console.log("Added to playlist");
  } 

  const categories = [
    "Web Development",
    "Artificial Intelligence",
    "Dtastructure & Algorithm",
    "App Development",
    "Data Science",
    "Game Development",
  ];

  return (
    <Container minH={"95vh"} maxW={"container.lg"} padding={"8"}>
      <Heading children="All Courses" m={"8"} />
      <Input
        value={keyword}
        onChange={(e) => setKeyword(e.target.value)}
        placeholder="Search a Course..."
        type="text"
        focusBorderColor="yellow.500"
      />

      <HStack overflowX={"auto"} paddingY={"8"}>
        {categories.map((item, index) => (
          <Button key={index} onClick={() => setCategory(item)} minW={"60"}>
            <Text children={item} />
          </Button>
        ))}
      </HStack>

      <Stack
        direction={["column", "row"]}
        flexWrap={"wrap"}
        justifyContent={["flex-start", "space-evenly"]}
        alignItems={["center", "flex-start"]}
      >
        <Course
          title="Sample"
          dicription="Sample description"
          views={23}
          imageSrc="https://via.placeholder.com/150"
          creater="Sample Boy"
          lectureCount={2}
        />
      </Stack>
    </Container>
  );
};

export default Courses;
