import { React, useState, useEffect } from "react";
import {
  Flex,
  Box,
  Text,
  Grid,
  useColorModeValue,
  useStyleConfig,
  Skeleton
} from "@chakra-ui/react";
import "react-lazy-load-image-component/src/effects/blur.css";
import Navbar from "../../components/Navbar/Navbar";
import routes from "../../routes";
import dashboardimg from "../../assets/dashboard.gif";
import axios from "axios";
import Typewriter from "typewriter-effect";
import { LazyLoadImage } from "react-lazy-load-image-component";

export default function Dashboard() {
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");
  const [loadedDashboardimg, setloadedDashboardimg] = useState(false);
  const styles = useStyleConfig("Card");
  let highlightTextColor = useColorModeValue("lightblue.100", "lightpeach.100");
  let textColor = useColorModeValue("gray.700", "white");

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  // useEffect(() => {
  //   axios
  //     .get("https://programming-quotesapi.vercel.app/api/random")
  //     .then((response) => {
  //       console.log("----->quote", response.data.quote)
  //       console.log("----->author", response.data.author)
  //       // response => response.json()
  //       let content = response.data.quote;
  //       let author = response.data.author;
  //       setQuote(content);
  //       setAuthor(author);
  //     })

  //     .catch((error) => {
  //       setQuote("");
  //       console.error("Error fetching quote:", error);
  //     });
  // }, []);

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    setQuote(quotes[randomIndex].quote);
    setAuthor(quotes[randomIndex].author);
  }, []);

  const quotes = [
    {
      "author": "Tim Berners-Lee",
      "quote": "The Web does not just connect machines, it connects people."
    },
    {
      "author": "Jeffrey Zeldman",
      "quote": "Content precedes design. Design in the absence of content is not design, it's decoration."
    },
    {
      "author": "Ethan Marcotte",
      "quote": "The web’s perfect for a flexible design, it's just waiting for us to figure out how to use it."
    },
    {
      "author": "Steve Krug",
      "quote": "Don't make me think."
    },
    {
      "author": "Paul Cookson",
      "quote": "Websites promote you 24/7: No employee will do that."
    },
    {
      "author": "John Allsopp",
      "quote": "The control which designers know in the print medium, and often desire in the web medium, is simply a function of the limitation of the printed page. We should embrace the fact that the web doesn't have the same constraints, and design for this flexibility."
    },
    {
      "author": "Vitaly Friedman",
      "quote": "Responsive Web Design is not a technique, it's an approach."
    },
    {
      "author": "Karen McGrane",
      "quote": "On the Web, content is a very fragile thing."
    },
    {
      "author": "Andy Clarke",
      "quote": "A great idea is just the beginning."
    },
    {
      "author": "Brad Frost",
      "quote": "There’s a massive amount of information being created and shared every second, and we all have an opportunity and responsibility to make something from it."
    },
    {
      "author": "Jason Fried",
      "quote": "Good design is all about making other designers feel like idiots because the idea wasn’t theirs."
    },
    {
      "author": "Jeff Atwood",
      "quote": "Any application that can be written in JavaScript, will eventually be written in JavaScript."
    },
    {
      "author": "John Maeda",
      "quote": "Simplicity is about subtracting the obvious and adding the meaningful."
    },
    {
      "author": "Douglas Crockford",
      "quote": "The web is a technology service industry that should be protecting its users’ data and privacy."
    },
    {
      "author": "Eric Meyer",
      "quote": "On the Web, usability is a necessary condition for survival."
    },
    {
      "author": "Zeldman",
      "quote": "Design must reflect the practical and aesthetic in business but above all... good design must primarily serve people."
    },
    {
      "author": "Jeremy Keith",
      "quote": "Design is the art of gradually applying constraints until an elegant solution remains."
    }
  ]

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
      <Box pt={{ base: "60px", md: "80px", xl: "10px" }}>
        <Flex direction="row" justifyContent="center" alignItems="center">
          <Grid
            templateColumns={{
              base: "1fr",
              lg: "1fr 1fr"
            }}
            templateRows={{
              base: "repeat(2, 0.5fr)",
              lg: "1fr"
            }}
            gap={{ xl: "20px" }}
          >
            <Box
              pt={{ xl: "100px" }}
              pl="10px"
              textAlign="center"
              fontSize={{ sm: "1.5em", md: "3em", xl: "2.5em" }}
            >
              <Flex
                direction="column"
                justifyContent="center"
                alignItems="center"
              >
                <Box __css={styles} border="none">
                  <Text
                    fontFamily="Lobster Two"
                    fontWeight="bold"
                    color={textColor}
                  >
                    Hello Everyone!! 🙋🏻‍♂️
                  </Text>

                  <Text
                    fontFamily="Lobster Two"
                    fontWeight="bold"
                    color={textColor}
                    mt="20px"
                  >
                    This is{" "}
                    <Text display="inline-flex" color={highlightTextColor}>
                      Dev Sakarsawala
                    </Text>
                  </Text>
                  <Text
                    fontFamily="Lobster Two"
                    fontWeight="bold"
                    color={textColor}
                    mt="20px"
                  >
                    I am a{" "}
                    <Text display="inline-flex" color={highlightTextColor}>
                      Web Developer
                    </Text>
                  </Text>
                </Box>
              </Flex>
            </Box>
            <Flex
              direction="column"
              justifyContent="center"
              alignItems="center"
            >
              <Skeleton
                height={loadedDashboardimg ? "100%" : "50%"}
                isLoaded={loadedDashboardimg}
                color="white"
                fadeDuration={1}
              >
                <LazyLoadImage
                  src={dashboardimg}
                  alt="dashboard"
                  effect="blur"
                  onLoad={() => setloadedDashboardimg(true)}
                />
              </Skeleton>
            </Flex>
          </Grid>
        </Flex>

        {/* <Flex direction="column" justifyContent="center" alignItems="center">
          <Box
            __css={styles}
            border="none"
            textAlign="center"
            cursor="default"
            mt="20px"
          >
            Random Quote
            <Box
              fontSize={{ sm: "1em", md: "1.3em", xl: "1.3em" }}
              color={highlightTextColor}
              cursor="default"
            >
              {quote ? (
                <Typewriter
                  onInit={(typewriter) => {
                    typewriter.typeString(quote).start();
                  }}
                />
              ) : (
                <span>|</span>
              )}
            </Box>
          </Box>
        </Flex> */}
        <Flex direction="column" justifyContent="center" alignItems="center">
          <Box
            __css={styles}
            border="none"
            textAlign="center"
            cursor="default"
            mt="20px"
          >
            Quote
            <Box
              fontSize={{ sm: "1em", md: "1.3em", xl: "1.3em" }}
              color={highlightTextColor}
              cursor="default"
            >
              {quote ? (
                <Typewriter
                  onInit={(typewriter) => {
                    typewriter.typeString(quote).start();
                  }}
                />
              ) : (
                <span>|</span>
              )}
            </Box>
            <Box
              fontSize={{ sm: "0.8em", md: "1em", xl: "1em" }}
              color={highlightTextColor}
              textAlign="right"
              mt="10px"
            >
              {quote ? (
                <Typewriter
                  onInit={(typewriter) => {
                    typewriter.typeString("by " + author).start();
                  }}
                />
              ) : (
                <span>|</span>
              )}
            </Box>
          </Box>
        </Flex>
      </Box>
    </Box>
  );
}
