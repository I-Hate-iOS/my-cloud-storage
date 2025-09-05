import React, { useState } from "react";
import { Box, Button, TextField, Typography, Paper, Tabs, Tab } from "@mui/material";

export default function AuthScreen({ setIsAuthenticated }) {
  const [tab, setTab] = useState(0);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Qui chiamerai la tua API per login/signup
    setIsAuthenticated(true); // Simulazione login
  };

  return (
    <Box sx={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", bgcolor: "grey.100" }}>
      <Paper elevation={4} sx={{ p: 4, minWidth: 320 }}>
        <Typography variant="h5" align="center" mb={2}>Benvenuto!</Typography>
        <Tabs value={tab} onChange={(_, val) => setTab(val)} centered sx={{ mb: 2 }}>
          <Tab label="Login" />
          <Tab label="Sign Up" />
        </Tabs>
        <form onSubmit={handleSubmit}>
          <TextField
            label="Email"
            fullWidth
            margin="normal"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
          <TextField
            label="Password"
            type="password"
            fullWidth
            margin="normal"
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
          <Button type="submit" variant="contained" color="primary" fullWidth sx={{ mt: 2 }}>
            {tab === 0 ? "Login" : "Sign Up"}
          </Button>
        </form>
      </Paper>
    </Box>
  );
}