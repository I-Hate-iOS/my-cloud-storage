import React from "react";
import { Box, Typography, Button, Paper } from "@mui/material";

export default function Settings() {
  return (
    <Box sx={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center" }}>
      <Paper elevation={3} sx={{ p: 4, minWidth: 320 }}>
        <Typography variant="h5" gutterBottom>Impostazioni</Typography>
        <Button variant="contained" color="primary" fullWidth>Cambia Password</Button>
        <Button variant="outlined" color="secondary" fullWidth sx={{ mt: 2 }}>Logout</Button>
      </Paper>
    </Box>
  );
}