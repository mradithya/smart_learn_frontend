import React from "react";
import { ColorModeSwitcher } from "../../../ColorModeSwitcher";
import {
  Button,
  Drawer,
  DrawerBody,
  HStack,
  useDisclosure,
  VStack,
} from "@chakra-ui/react";
import { RiDashboardFill, RiLoginBoxLine, RiMenu5Fill } from "react-icons/ri";
import { DrawerOverlay, DrawerContent, DrawerHeader } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const LinkButton = ({ url = "/", title = "Home",onClose }) => (
  <Link onClick={onClose} to={url}>
    <Button variant="ghost">{title}</Button>
  </Link>
);

const Header = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const isAuthenticated = true; 
  const user = {
    role:"admin"
};
    const logoutHandler = () => {
        console.log("Logout");
        onClose();
    };

  return (
    <>
      <ColorModeSwitcher />
      <Button
        onClick={onOpen}
        colorScheme="yellow"
        width={"12"}
        height={"12"}
        rounded={"full"}
        position={"fixed"}
        top={"6"}
        left={"6"}
      >
        <RiMenu5Fill />
      </Button>
      <Drawer placement="left" isOpen={isOpen} onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader borderBottomWidth={"1px"}>Smart Learn</DrawerHeader>
          <DrawerBody>
            <VStack spacing={"4"} alignItems={"flex-start"}>
              <LinkButton onClose={onClose} url="/" title="Home" />
              <LinkButton onClose={onClose} url="/courses" title="Browse All Courses" />
              <LinkButton onClose={onClose} url="/request" title="Request a Course" />
              <LinkButton onClose={onClose} url="/contact" title="Contact Us" />
              <LinkButton onClose={onClose} url="/about" title="About" />

              <HStack
                justifyContent={"space-evenly"}
                position={"absolute"}
                bottom={"2rem"}
                width={"80%"}
              >
                {isAuthenticated ? (
                  <>
                    <VStack>
                      <HStack>
                        <Link to="/profile" onClick={onClose}>
                          <Button veriant={"ghost"} colorScheme="yellow">
                            Profile
                          </Button>
                        </Link>
                        <Button veriant={"ghost"} onClick={{logoutHandler}}>
                            <RiLoginBoxLine />
                            Logout
                          </Button>
                      </HStack>
                        {
                            user && user.role === "admin" && <Link onClick={onClose} to="/admin/dashboard">
                            <Button colorScheme="purple" veriant={"ghost"}>
                                <RiDashboardFill  style={{margin:"4px"}}/>
                              Dashbord 
                            </Button>
                            </Link>
                        }

                    </VStack>
                  </>
                ) : (
                  <>
                    <Link to="/login" onClick={onClose}>
                      <Button colorScheme="yellow">Login</Button>
                    </Link>

                    <p>OR</p>

                    <Link to="/register" onClick={onClose}>
                      <Button colorScheme="yellow">Sign Up</Button>
                    </Link>
                  </>
                )}
              </HStack>
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default Header;
