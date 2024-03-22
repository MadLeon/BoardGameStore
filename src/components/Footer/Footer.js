import { Box, Container, Divider } from "@mui/material";

import LinkArea from "./linkArea/LinkArea";
import PolicyArea from "./policyArea/PolicyArea";
import RightArea from "./rightArea/RightArea";

function Footer() {
  return (
    <Box sx={{ bgcolor: "#232323", p: 0 }}>
      <Container display="flex" sx={{ bgcolor: "#232323", py: 3 }}>
        <LinkArea />
        <Divider flexItem sx={{ borderColor: "rgba(236, 236, 236, 0.3)" }} />
        <PolicyArea />
        <Divider flexItem sx={{ borderColor: "rgba(236, 236, 236, 0.3)" }} />
        <RightArea />
      </Container>
    </Box>
  );
}

export default Footer;
