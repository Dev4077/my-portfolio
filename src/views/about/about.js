import { React, useState, useEffect } from "react";
import {
  Box,
  Flex,
  SimpleGrid,
  Grid,
  useStyleConfig,
  Text,
  useColorModeValue,
  useColorMode,
  Icon,
  Button,
  Link,
  Skeleton
} from "@chakra-ui/react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { MdFlightTakeoff } from "react-icons/md";
import { TbCricket } from "react-icons/tb";
import { MdMovieFilter } from "react-icons/md";
import Navbar from "../../components/Navbar/Navbar";
import routes from "../../routes";
import TechStackCard from "../../components/techStackCard/techStackCard";
import AboutMeInfo from "../../components/aboutMeInfo/aboutMeInfo";
import angular from "../../assets/icons/angular.svg";
import typescript from "../../assets/icons/typescript.svg";
import node from "../../assets/icons/nodejs.svg";
import mongo from "../../assets/icons/mongodb.svg";
import js from "../../assets/icons/javascript.svg";
import react from "../../assets/icons/react.svg";
import html from "../../assets/icons/html.svg";
import css from "../../assets/icons/css3.svg";
import git from "../../assets/icons/git.svg";
import Python from "../../assets/icons/Python.png";
import DSA from "../../assets/icons/DSA.jpg";
import express from "../../assets/icons/express.svg";
import myphoto from "../../assets/aboutme.jpg";
import GitHubCalendar from "react-github-calendar";

export default function About() {
  const [loadedProfileimg, setloadedProfileimg] = useState(false);
  const [loadedgithubimg, setloadedgithubimg] = useState(false);
  const styles = useStyleConfig("Card");
  const { colorMode } = useColorMode();
  const textColorPrimary = useColorModeValue("lightblue.100", "lightpeach.100");
  const cardShadow = useColorModeValue(
    "0px 18px 40px rgba(112, 144, 176, 0.12)",
    "unset"
  );

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
      <Box pt={{ base: "40px", md: "80px", xl: "80px" }}>
        <Flex
          direction="row"
          justifyContent="center"
          alignItems="center"
          mb="40px"
        >
          {/* <TypeAnimation
            sequence={["ABOUT ME", 500, "ABOUT", 500, "ABOUT ME", 500]}
            style={{ fontSize: "3em" }}
            cursor={false}
          /> */}
          <Grid
            templateColumns={{
              base: "1fr",
              lg: "1.34fr 1.62fr"
            }}
            templateRows={{
              lg: "1fr"
            }}
            gap={{ base: "20px", xl: "20px" }}
          >
            <Box
              position="relative"
              w={{ base: "100%", "3xl": "100%" }}
              h={{ base: "100%", "3xl": "407px" }}
              borderRadius="20px"
              p="20px"
              overflow="hidden"
            >
              <Box
                __css={styles}
                position="absolute"
                top="0"
                left="0"
                width="100%"
                height="100%"
                bg={textColorPrimary}
                transform="rotate(4deg)"
              // zIndex="-1"
              />
              <Skeleton
                height="100%"
                isLoaded={loadedProfileimg}
                color="white"
                fadeDuration={1}
              >
                <LazyLoadImage
                  src={myphoto}
                  width="100%"
                  height="100%"
                  alt="Image Alt"
                  effect="blur"
                  style={{ height: "100%" }}
                  onLoad={() => setloadedProfileimg(true)}
                />
              </Skeleton>
            </Box>
            <Flex
              direction="column"
              alignItems="center"
              justifyContent="center"
            >
              <Box __css={styles} border="none" bg="transparent">
                <Text
                  color={textColorPrimary}
                  fontSize="2xl"
                  mb="40px"
                  textAlign="center"
                >
                  {"<GENERAL INFORMATION/>"}
                </Text>
                <SimpleGrid columns="2" gap="20px">
                  <AboutMeInfo
                    boxShadow={cardShadow}
                    title="Current Organization"
                    value="Constantsys"
                  />
                  <AboutMeInfo
                    boxShadow={cardShadow}
                    title="Designation"
                    value="Web Development Engineer"
                  />
                  <AboutMeInfo
                    boxShadow={cardShadow}
                    title="Location"
                    value="Surat, Gujarat"
                  />
                  <AboutMeInfo
                    boxShadow={cardShadow}
                    title="Education"
                    value="SCET(GTU), Surat"
                  />
                  <AboutMeInfo
                    boxShadow={cardShadow}
                    title="Degree"
                    value="Bachelors"
                  />
                  <AboutMeInfo
                    boxShadow={cardShadow}
                    title="Languages"
                    value="English, Hindi, Gujarati"
                  />
                </SimpleGrid>
              </Box>
            </Flex>
          </Grid>
        </Flex>

        <Flex
          direction="row"
          justifyContent="center"
          alignItems="center"
          mb="40px"
        >
          <Text color={textColorPrimary} fontSize="2em" textAlign="center">
            {"<MY SKILLSET/>"}
          </Text>
        </Flex>
        <SimpleGrid
          columns={{ base: 2, md: 2, lg: 3, xl: 6, "2xl": 6 }}
          gap="20px"
          mb="20px"
          align={{ base: "center", xl: "center" }}
          justify={{ base: "center", xl: "center" }}
        >
          <TechStackCard imagepath={react} />
          <TechStackCard imagepath={angular} />
          <TechStackCard imagepath={js} />
          <TechStackCard imagepath={typescript} />
          <TechStackCard imagepath={DSA} />
          <TechStackCard imagepath={node} />
          <TechStackCard imagepath={mongo} />
          <TechStackCard imagepath={express} background="white" />
          <TechStackCard imagepath={git} />
          <TechStackCard imagepath={Python} />
          <TechStackCard imagepath={html} />
          <TechStackCard imagepath={css} />
        </SimpleGrid>

        <Flex
          direction="row"
          justifyContent="center"
          alignItems="center"
          mb="40px"
          mt="40px"
        >
          <Text color={textColorPrimary} fontSize="2em" textAlign="center">
            {"<MY GITHUB CONTRIBUTIONS/>"}
          </Text>
        </Flex>
        <Box display="flex" justifyContent="center" alignItems="center">
          <GitHubCalendar
            username="Dev4077"
            colorScheme={colorMode === "light" ? "light" : "dark"}
            year="last"
          />
        </Box>
        <Flex justifyContent="center" alignItems="center" mt="20px">
          <Skeleton
            height="100%"
            isLoaded={loadedgithubimg}
            color="white"
            fadeDuration={1}
          >
            <LazyLoadImage
              src={
                colorMode === "light"
                  ? "https://github-readme-streak-stats.herokuapp.com?user=Dev4077&theme=whatsapp-light&hide_border=true&border_radius=5.8&date_format=j%20M%5B%20Y%5D"
                  : "https://github-readme-streak-stats.herokuapp.com?user=Dev4077&theme=calm-pink&hide_border=true&border_radius=5.8&date_format=j%20M%5B%20Y%5D"
              }
              alt="GitHub Streak"
              effect="blur"
              onLoad={() => setloadedgithubimg(true)}
            />
          </Skeleton>
        </Flex>
        <Flex justifyContent="center" alignItems="center" mt="20px">
          <Link href="https://github.com/Dev4077" target="blank">
            <Button variant="darkBrand" fontSize="sm" fontFamily="DM Sans">
              Visit Github
            </Button>
          </Link>
        </Flex>
        <Flex
          direction="row"
          justifyContent="center"
          alignItems="center"
          mb="40px"
          mt="40px"
        >
          <Text color={textColorPrimary} fontSize="2em" textAlign="center">
            {"<MY INTERESTS AND HOBBIES/>"}
          </Text>
        </Flex>
        <SimpleGrid
          columns={{ base: 1, xl: 3, "2xl": 3 }}
          gap="20px"
          mb="20px"
          align={{ base: "center", xl: "center" }}
          justify={{ base: "center", xl: "center" }}
        >
          <Box __css={styles}>
            <Box textAlign="center">
              <Icon
                as={MdMovieFilter}
                width="30px"
                height="30px"
                color="inherit"
              />
            </Box>
            <Text textAlign="center">Watching Movies</Text>
            <Text color={textColorPrimary} textAlign="center" mt="5px">
              Watching movies is a favorite hobby that provides entertainment and relaxation. It allows you to explore diverse cultures, stories, and perspectives. Whether it's an action-packed thriller, a heartwarming drama, or a thought-provoking documentary, movies offer an escape from reality and a chance to experience various emotions, either alone or with friends and family.
            </Text>
          </Box>
          <Box __css={styles}>
            <Box textAlign="center">
              <Icon
                as={MdFlightTakeoff}
                width="30px"
                height="30px"
                color="inherit"
              />
            </Box>
            <Text textAlign="center">Travelling & Exploring</Text>
            <Text color={textColorPrimary} textAlign="center" mt="5px">
              I am passionate about traveling and exploring new places. Whether
              it's uncovering hidden gems in my own backyard or embarking on
              exciting adventures, I thrive on the thrill of discovering new
              cultures, cuisines, and landscapes. Traveling not only broadens my
              horizons but also provides me with valuable life experiences and a
              deep appreciation for the diversity of our world!!
            </Text>
          </Box>
          <Box __css={styles}>
            <Box textAlign="center">
              <Icon
                as={TbCricket}
                width="30px"
                height="30px"
                color="inherit"
              />
            </Box>
            <Text textAlign="center">Playing Cricket</Text>
            <Text color={textColorPrimary} textAlign="center" mt="5px">
              Playing cricket is a beloved hobby that combines physical activity with strategic thinking. It offers a chance to improve fitness, teamwork, and coordination. Whether batting, bowling, or fielding, cricket provides excitement and camaraderie. This sport can be enjoyed competitively or casually with friends and family, making it a versatile and engaging pastime for enthusiasts of all ages.
            </Text>
          </Box>
        </SimpleGrid>
      </Box>
    </Box>
  );
}
