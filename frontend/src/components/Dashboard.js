import React from "react";
import { Box, Typography, IconButton, Paper, Grid, Button } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import DownloadIcon from "@mui/icons-material/Download";
import ShareIcon from "@mui/icons-material/Share";
import SettingsIcon from "@mui/icons-material/Settings";
import AddIcon from "@mui/icons-material/Add";
import { useNavigate } from "react-router-dom";

const files = [
  { name: "documento.pdf" },
  { name: "immagine.png" }
];

export default function Dashboard() {
  const navigate = useNavigate();
  return (
    <Box sx={{ display: "flex", minHeight: "100vh", bgcolor: "grey.50" }}>
      <Box sx={{ width: 220, bgcolor: "grey.200", p: 2 }}>
        <Button
          startIcon={<AddIcon />}
          fullWidth
          variant="contained"
          sx={{ mb: 2 }}
          onClick={() => navigate("/add-file")}
        >
          Aggiungi File
        </Button>
        <Button
          startIcon={<SettingsIcon />}
          fullWidth
          variant="outlined"
          onClick={() => navigate("/settings")}
        >
          Impostazioni
        </Button>
      </Box>
      <Box sx={{ flexGrow: 1, p: 4 }}>
        <Typography variant="h4" gutterBottom>Dashboard</Typography>
        <Grid container spacing={2}>
          {files.map((file, i) => (
            <Grid item xs={12} md={6} lg={4} key={i}>
              <Paper sx={{ p: 2, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                <Typography>{file.name}</Typography>
                <Box>
                  <IconButton><DownloadIcon /></IconButton>
                  <IconButton><ShareIcon /></IconButton>
                  <IconButton color="error"><DeleteIcon /></IconButton>
                </Box>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
}