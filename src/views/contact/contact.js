import { React, useState, useEffect } from "react";
import {
  Box,
  Flex,
  Icon,
  Image,
  SimpleGrid,
  Text,
  useColorModeValue,
  useStyleConfig,
  Skeleton
} from "@chakra-ui/react";
import routes from "../../routes";
import Navbar from "../../components/Navbar/Navbar";
import contactimg from "../../assets/contact.png";
import contactimg1 from "../../assets/contact1.png";
import { AiFillPhone, AiOutlineMail } from "react-icons/ai";
import { FaLocationDot } from "react-icons/fa6";
import { Link } from "react-router-dom";

export default function Contact() {
  const [loadedimage1, setloadedimage1] = useState(false);
  const [loadedimage2, setloadedimage2] = useState(false);
  const styles = useStyleConfig("Card");
  const textColorPrimary = useColorModeValue("lightblue.100", "lightpeach.100");

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  const getActiveRoute = (routes) => {
    for (let i = 0; i < routes.length; i++) {
      if (window.location.href.indexOf(routes[i].path) !== -1) {
        return routes[i].navbarDisplayName;
      }
    }
  };
  return (
    <Box>
      <Navbar displayText={getActiveRoute(routes)} />
      <Box pt="30px">
        <Flex justifyContent="center" alignItems="center">
          <Box>
            <Skeleton
              isLoaded={loadedimage1}
              color="white"
              fadeDuration={1}
              height={"100%"}
            >
              <Image
                src={contactimg}
                onLoad={() => setloadedimage1(true)}
              ></Image>
            </Skeleton>
          </Box>
          <Box>
            <Skeleton
              isLoaded={loadedimage2}
              color="white"
              fadeDuration={1}
              width={"100%"}
              height={"100%"}
            >
              <Image
                src={contactimg1}
                onLoad={() => setloadedimage2(true)}
              ></Image>
            </Skeleton>
          </Box>
        </Flex>

        <SimpleGrid
          columns={{ base: 1, xl: 3, "2xl": 3 }}
          gap="20px"
          mt={{ sm: "20px", xl: "0" }}
          mb="20px"
          align={{ base: "center", xl: "center" }}
          justify={{ base: "center", xl: "center" }}
        >
          <Flex
            direction="column"
            justifyContent="center"
            alignItems="center"
            textAlign="center"
          >
            <Box __css={styles}>
              <Box textAlign="center">
                <Link
                  to="#"
                  onClick={(e) => {
                    window.location.href = "https://www.google.com/maps/dir/21.227164,72.8286142/constantsys/@21.2086185,72.7631014,13z/data=!3m1!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x3be049da33645d89:0x29b391726abc5bc1!2m2!1d72.7831994!2d21.1872351?entry=ttu";
                    e.preventDefault();
                    target = "blank"
                  }}
                >
                  <Icon
                    as={FaLocationDot}
                    width="30px"
                    height="30px"
                    color="inherit"
                  />
                </Link>
              </Box>
              <Text textAlign="center">FIND ME @</Text>
              <Text color={textColorPrimary} textAlign="center" mt="5px">
                Constantsys
              </Text>
            </Box>
          </Flex>
          <Flex
            direction="column"
            justifyContent="center"
            alignItems="center"
            textAlign="center"
          >
            <Box __css={styles}>
              <Box textAlign="center">
                <Link
                  to="#"
                  onClick={(e) => {
                    window.location.href = "mailto:dev.h.sakarsawala@gmail.com";
                    e.preventDefault();
                  }}
                >
                  <Icon
                    as={AiOutlineMail}
                    width="30px"
                    height="30px"
                    color="inherit"
                    cursor="pointer"
                  />
                </Link>
              </Box>

              <Text textAlign="center">EMAIL ME @</Text>

              <Text color={textColorPrimary} textAlign="center" mt="5px">
                dev.h.sakarsawala@gmail.com
              </Text>
            </Box>
          </Flex>
          <Flex
            direction="column"
            justifyContent="center"
            alignItems="center"
            textAlign="center"
          >
            <Box __css={styles}>
              <Box textAlign="center">
                <Icon
                  as={AiFillPhone}
                  width="30px"
                  height="30px"
                  color="inherit"
                />
              </Box>
              <Text textAlign="center">CALL ME @</Text>
              <Text color={textColorPrimary} textAlign="center" mt="5px">
                (+91)-7801803673
              </Text>
            </Box>
          </Flex>
        </SimpleGrid>
      </Box>
    </Box>
  );
}
