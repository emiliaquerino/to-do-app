import { useEffect, useState } from "react";
import { Box, Flex, Text, useColorMode } from "@chakra-ui/react";
import lightBackgroundImage from "./assets/bg-desktop-light.jpg";
import darkBackgroundImage from "./assets/bg-desktop-dark.jpg";

function App() {
  const { colorMode, toggleColorMode } = useColorMode();

  return  <>
    <Box
     backgroundImage={
      colorMode === "light" ? lightBackgroundImage : darkBackgroundImage
    }
    backgroundSize={"cover"}
    h={"40vh"}
  >
      <Box w={{ base: "80%", md: "60%", lg: "40%" }} p="4em 0" m="auto">
          <Header colorMode={colorMode} toggleColorMode={toggleColorMode} />
          {/* <InputButton
            colorMode={colorMode}
            todo={todo}
            setTodo={setTodo}
            addTodo={handleAddTodo}
          /> */}
      </Box>
    </Box>
    </>;
}

export default App
