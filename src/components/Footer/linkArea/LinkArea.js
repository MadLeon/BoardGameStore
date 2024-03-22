import { Stack, Typography, Box, TextField, Button } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import CallIcon from "@mui/icons-material/Call";
import MailOutlineIcon from "@mui/icons-material/MailOutline";

import SocialMediaStack from "./SocialMediaStack";

function LinkArea() {
  return (
    <Box display="flex" justifyContent="space-between" gap={3} sx={{ p: 5 }}>
      <Stack spacing={1} display="flex" justifyContent="space-between">
        <Typography variant="h6" color="white">
          SHOP
        </Typography>
        <Typography variant="body2" color="white">
          New Arrivals
        </Typography>
        <Typography variant="body2" color="white">
          Hand crafted models
        </Typography>
        <Typography variant="body2" color="white">
          Top 100 Board Games
        </Typography>
      </Stack>
      <Stack spacing={1} display="flex" justifyContent="space-between">
        <Typography variant="h6" color="white">
          INFORMATION
        </Typography>
        <Typography variant="body2" color="white">
          FAQs
        </Typography>
        <Typography variant="body2" color="white">
          About Us
        </Typography>
        <Typography variant="body2" color="white">
          Blogs
        </Typography>
      </Stack>
      <Stack spacing={1} display="flex" justifyContent="space-between">
        <Typography variant="h6" color="white">
          CONTACT US
        </Typography>
        <Stack display="flex" alignItems="center" direction="row" gap={1}>
          <HomeIcon sx={{ color: "white" }} />
          <Typography variant="body2" color="white">
            Address: 32 Agincourt Dr
          </Typography>
        </Stack>
        <Stack display="flex" alignItems="center" direction="row" gap={1}>
          <CallIcon sx={{ color: "white" }} />
          <Typography variant="body2" color="white">
            647 889 1987
          </Typography>
        </Stack>
        <Stack display="flex" alignItems="center" direction="row" gap={1}>
          <MailOutlineIcon sx={{ color: "white" }} />
          <Typography variant="body2" color="white">
            MistZone@gmail.com
          </Typography>
        </Stack>
      </Stack>
      <Stack spacing={1} gap={2}>
        <Typography variant="h6" color="white">
          NEWSLETTER SIGN UP
        </Typography>
        <Typography variant="body2" color="white">
          Sign up for exclusive updates, new arrivals & insider only discounts
        </Typography>
        <Stack direction="row" gap={3}>
          <TextField
            variant="outlined"
            size="small"
            placeholder="Email"
            fullWidth
            sx={{
              "& .MuiOutlinedInput-root": {
                "&:hover fieldset": {
                  borderColor: "#B2BAC2",
                },
                "&.Mui-focused fieldset": {
                  borderColor: "#B2BAC2",
                },
                backgroundColor: "white",
              },
            }}
          />
          <Button variant="contained">Subscribe</Button>
        </Stack>
        <SocialMediaStack />
      </Stack>
    </Box>
  );
}

export default LinkArea;
