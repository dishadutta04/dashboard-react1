import React from "react";
import { Box, Button, TextField, Typography, useTheme } from "@mui/material";
import { tokens } from "../../theme";
import { useNavigate } from "react-router-dom";

const LoginSignup = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/dashboard"); // Navigate to dashboard after login
  };

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      height="100vh"
      bgcolor={colors.grey[900]}
    >
      <Box
        p="30px"
        borderRadius="12px"
        bgcolor={colors.grey[800]}
        boxShadow="0px 6px 18px rgba(0, 0, 0, 0.2)"
        textAlign="center"
        width="400px"
      >
        <Typography
          variant="h4"
          fontWeight="bold"
          color={colors.blueAccent[700]}
          mb="20px"
        >
          Login / Signup
        </Typography>
        <TextField
          fullWidth
          variant="outlined"
          placeholder="Enter Username"
          sx={{
            input: { color: colors.grey[100] },
            backgroundColor: colors.grey[700],
            borderRadius: "6px",
            mb: "15px",
          }}
        />
        <TextField
          fullWidth
          type="password"
          variant="outlined"
          placeholder="Enter Password"
          sx={{
            input: { color: colors.grey[100] },
            backgroundColor: colors.grey[700],
            borderRadius: "6px",
            mb: "20px",
          }}
        />
        <Button
          variant="contained"
          fullWidth
          onClick={handleLogin}
          sx={{
            backgroundColor: colors.blueAccent[700],
            color: colors.grey[100],
            padding: "12px",
            textTransform: "none",
            fontWeight: "bold",
            fontSize: "16px",
            ":hover": {
              backgroundColor: colors.blueAccent[600],
            },
          }}
        >
          Login
        </Button>
      </Box>
    </Box>
  );
};

export default LoginSignup;
