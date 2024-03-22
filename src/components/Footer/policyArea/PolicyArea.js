import { Stack, Typography, Box, Divider } from "@mui/material";

function PolicyArea() {
  return (
    <Box display="flex" justifyContent="space-between" sx={{ p: 3 }}>
      <Stack spacing={1} direction="row">
        <Typography color="white">Refund Policy</Typography>
        <Divider
          orientation="vertical"
          variant="middle"
          flexItem
          sx={{ borderColor: "rgba(236, 236, 236, 0.3)" }}
        />
        <Typography color="white">Privacy Policy</Typography>
        <Divider
          orientation="vertical"
          variant="middle"
          flexItem
          sx={{ borderColor: "rgba(236, 236, 236, 0.3)" }}
        />
        <Typography color="white">Terms of Service</Typography>
      </Stack>
      <Stack spacing={1} direction="row">
        <Typography color="white">English</Typography>

        <Divider
          orientation="vertical"
          variant="middle"
          flexItem
          sx={{ borderColor: "rgba(236, 236, 236, 0.3)" }}
        />
        <Typography color="white">CAD</Typography>
      </Stack>
    </Box>
  );
}

export default PolicyArea;
