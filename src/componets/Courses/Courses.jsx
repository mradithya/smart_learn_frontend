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
import Online from "../../assets/images/Online.jpg";

// Single Course Component

const Course = ({
  views,
  title,
  imageSrc,
  id,
  addToPlayListHandler,
  creater,
  description,
  lectureCount,
}) => {
  return (
    <VStack
      className="course"
      alignItems="center"
      boxShadow="lg"
      p={6}
      borderRadius="2xl"
      spacing={4}
      w={["full", "300px"]}
      bg="white"
      _hover={{ transform: "scale(1.02)", transition: "0.3s" }}
    >
      <Image
        src={Online}
        alt={title}
        boxSize="180px"
        objectFit="cover"
        borderRadius="lg"
      />

      <Heading
        textAlign="center"
        fontFamily="sans-serif"
        noOfLines={2}
        size="md"
      >
        {title}
      </Heading>

      <Text textAlign="center" fontSize="sm" noOfLines={2} color="gray.600">
        {description}
      </Text>

      <VStack spacing={1}>
        <Text fontWeight="bold" textTransform="uppercase">
          {creater}
        </Text>
        <Text fontSize="sm" color="gray.600">
          Lectures – {lectureCount}
        </Text>
        <Text fontSize="sm" color="gray.600">
          Views – {views}
        </Text>
      </VStack>

      <HStack spacing={4} pt={2}>
        <Link to={`/course/${id}`}>
          <Button colorScheme="yellow" size="sm">
            Watch Now
          </Button>
        </Link>
        <Button
          variant="ghost"
          colorScheme="yellow"
          size="sm"
          onClick={() => addToPlayListHandler(id)}
        >
          Add To Playlist
        </Button>
      </HStack>
    </VStack>
  );
};

const Courses = () => {
  const [keyword, setKeyword] = useState("");
  const [category, setCategory] = useState("");

  const addToPlayListHandler = (id) => {
    console.log("Added to playlist:", id);
  };

  const categories = [
    "Web Development",
    "Artificial Intelligence",
    "Datastructure & Algorithm",
    "App Development",
    "Data Science",
    "Game Development",
  ];

  return (
    <Container minH="95vh" maxW="container.xl" py={8}>
      <Heading mb={8} textAlign="center">
        All Courses
      </Heading>

      <Center>
        <Input
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
          placeholder="Search a Course..."
          type="text"
          focusBorderColor="yellow.500"
          maxW="400px"
        />
      </Center>

      <HStack
        overflowX="auto"
        py={6}
        spacing={4}
        justifyContent="center"
        flexWrap="wrap"
      >
        {categories.map((item, index) => (
          <Button
            key={index}
            onClick={() => setCategory(item)}
            colorScheme={category === item ? "yellow" : "gray"}
            variant={category === item ? "solid" : "outline"}
          >
            {item}
          </Button>
        ))}
      </HStack>

      <Stack
        direction="row"
        flexWrap="wrap"
        justifyContent="center"
        alignItems="flex-start"
        spacing={8}
        mt={6}
      >
        <Course
          title="Sample Course"
          description="This is a short sample course description."
          views={23}
          imageSrc="https://via.placeholder.com/200"
          creater="Sample Instructor"
          lectureCount={2}
          addToPlayListHandler={addToPlayListHandler}
        />
      </Stack>
    </Container>
  );
};

export default Courses;
