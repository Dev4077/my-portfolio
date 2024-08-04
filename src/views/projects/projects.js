import { React, useEffect } from "react";
import {
  Box,
  SimpleGrid,
  Flex,
  Text,
  useColorModeValue
} from "@chakra-ui/react";
import routes from "../../routes";
import Navbar from "../../components/Navbar/Navbar";
import ProjectCard from "../../components/ProjectCard/ProjectCard";
import videoPlayer from "../../assets/projects/videoPlayer.png";
import cardisplay from "../../assets/projects/carservies.png";
import lovecook from '../../assets/projects/love-cooking.png'
import ToneStudio from "../../assets/projects/tonestudio.png";
import dashboradAdmin from "../../assets/projects/dashboradAdmin.png";
import AdminDashboardV2 from "../../assets/projects/AdminDashboardV2.png";
import eeg from "../../assets/projects/eeg_500x300.jpg";
import mtrans from "../../assets/projects/mt_500x300.jpg";
import steg from "../../assets/projects/steg_500x300.jpeg";

export default function Projects() {
  const textColorPrimary = useColorModeValue(
    "secondaryGray.900",
    "lightpeach.100"
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
      <Box pt={{ base: "20px", md: "40px", xl: "40px" }}>
        <Flex
          direction="row"
          justifyContent="center"
          alignItems="center"
          mb="40px"
        ></Flex>
        <SimpleGrid
          columns={{ base: 1, md: 3 }}
          gap="25px"
          alignItems="center"
          justifyContent="center"
        >
          <ProjectCard
            projectImage={videoPlayer}
            projectName={"User based VideoPlayer Website"}
            aboutProject={"This project aims to replicate the core functionalities of YouTube, allowing users to upload, view, like, comment, and interact with videos."}
            techStack={"EXPRESS JS, NODE JS, REACT JS, MONGODB, FIREBASE"}
            projectLiveLink="https://videoplayer-9bb8.onrender.com"
            projectLink="https://github.com/Dev4077/VideoPlayer"
          />

          <ProjectCard
            projectImage={lovecook}
            projectName={"Love Cooking"}
            aboutProject={"UI focus food ordering Website"}
            techStack={"REDUX JS, NODE JS, REACT JS, TAILWIND CSS"}
            projectLiveLink="https://love-cooking.netlify.app/"
            projectLink="https://github.com/Dev4077/love-cooking"
          />
          <ProjectCard
            projectImage={AdminDashboardV2}
            projectName={"AdminDashboardV2"}
            aboutProject={
              "AdminDashboardV2 is a fully-featured, multi-purpose admin template built with React. It is designed to be clean, modern, and highly customizable to fit various administrative purposes it updated version of AdminDashboardV2 with lasy loading."
            }
            techStack={"REDUX JS, NODE JS, REACT JS, BOOTSTRAP SASS"}
            projectLiveLink="https://admin-panel-skote.netlify.app/"
            projectLink="https://github.com/anupmaurya1994/AdminDashboardV3.ReactJS"
          />
          <ProjectCard
            projectImage={ToneStudio}
            projectName={"Tone Studio"}
            aboutProject={"A Music Website with All Control"}
            techStack={"HTML, CSS, JAVASCRIPT"}
            projectLiveLink="https://spaceboy.netlify.app"
            projectLink="https://github.com/Dev4077/Music_Player_Web"
          />
          <ProjectCard
            projectImage={cardisplay}
            projectName={"AKME CARS"}
            aboutProject={
              "An Advanced Car maintenance Application To servie Reports For new cars And accessrios"
            }
            techStack={
              "REACT JS, NODE JS, MONGODB, HTML, BOOTSTRAP, CSS"
            }
            projectLiveLink="https://anupmaurya1994.github.io/team-acme-web-page/"
            projectLink="https://github.com/Dev4077/car-display"
          />
          <ProjectCard
            projectImage={dashboradAdmin}
            projectName={"Admin Panel Version-1"}
            aboutProject={
              "Admin Panel for any CRUD oparetion based Websites"
            }
            techStack={
              "EXPRESS JS, NODE JS, REACT JS, MONGODB, FIREBASE"
            }
            projectLink="https://github.com/Dev4077/admin-panel-v1"
          />

        </SimpleGrid>
        {/* <Flex
          direction="row"
          justifyContent="center"
          alignItems="Center"
          mt="40px"
          mb="40px"
        >
          <Text color={textColorPrimary} fontSize="2em" textAlign="center">
            {"<BLOGS/>"}
          </Text>
        </Flex>
        <SimpleGrid
          columns={{ base: 1, md: 2 }}
          gap="50px"
          alignItems="center"
          justifyContent="center"
        >
          <ProjectCard
            projectImage={steg}
            projectName={"Steganography Blog Part 1"}
            aboutProject={"This blog is about hiding text inside an Image"}
            projectLink="https://rahul1582.medium.com/steganography-6c9af950cbb3"
          />
          <ProjectCard
            projectImage={steg}
            projectName={"Steganography Blog Part 2"}
            aboutProject={"This Blog is about hiding an Image inside an Image"}
            projectLink="https://rahul1582.medium.com/steganography-part-2-ad7452a3ff1"
          />
        </SimpleGrid> */}
      </Box>
    </Box>
  );
}
