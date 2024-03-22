import { Stack, Typography, Box, Divider } from "@mui/material";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

function PolicyArea() {
  return (
    <Box display="flex" justifyContent="space-between" sx={{ p: 3 }}>
      <Stack spacing={2} direction="row">
        <Typography variant="body2" color="white">
          Refund Policy
        </Typography>
        <Divider
          orientation="vertical"
          variant="middle"
          flexItem
          sx={{ borderColor: "rgba(236, 236, 236, 0.3)" }}
        />
        <Typography variant="body2" color="white">
          Privacy Policy
        </Typography>
        <Divider
          orientation="vertical"
          variant="middle"
          flexItem
          sx={{ borderColor: "rgba(236, 236, 236, 0.3)" }}
        />
        <Typography variant="body2" color="white">
          Terms of Service
        </Typography>
      </Stack>
      <Stack spacing={2} direction="row">
        <Stack spacing={1} direction="row" display="flex" alignItems="center">
          <Typography variant="body2" color="white">
            English
          </Typography>
          <ArrowDropDownIcon sx={{ color: "white" }} />
        </Stack>
        <Divider
          orientation="vertical"
          variant="middle"
          flexItem
          sx={{ borderColor: "rgba(236, 236, 236, 0.3)" }}
        />
        <Stack spacing={1} direction="row" display="flex" alignItems="center">
          <Typography variant="body2" color="white">
            CAD
          </Typography>
          <ArrowDropDownIcon sx={{ color: "white" }} />
        </Stack>
      </Stack>
    </Box>
  );
}

export default PolicyArea;
