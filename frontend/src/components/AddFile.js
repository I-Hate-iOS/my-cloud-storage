import React from "react";
import { Box, Typography, Paper } from "@mui/material";

export default function AddFile() {
  return (
    <Box sx={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center" }}>
      <Paper elevation={3} sx={{ p: 4, minWidth: 320 }}>
        <Typography variant="h5" gutterBottom>Aggiungi File</Typography>
        {/* Qui aggiungerai la logica di upload */}
      </Paper>
    </Box>
  );
}