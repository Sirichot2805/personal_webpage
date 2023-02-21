import { Box } from "./layout_box";
import { Nav } from "./navbar/navbar";

export const Layout = () => {
  return (
    <>
      <Box
        css={{
          maxW: "100%",
        }}
      >
        <Nav/>
      </Box>
    </>
  );
};
