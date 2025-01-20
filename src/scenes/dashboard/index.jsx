import { Box, Button, TextField, Typography, useTheme } from "@mui/material";
import { tokens } from "../../theme";
import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";
import Header from "../../components/Header";

const Dashboard = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box m="20px">
      {/* HEADER */}
      <Box display="flex" justifyContent="space-between" alignItems="center" mb="20px">
        <Header title="DASHBOARD" subtitle="Welcome to your dashboard" />

        <Button
          sx={{
            backgroundColor: colors.blueAccent[700],
            color: colors.grey[100],
            fontSize: "14px",
            fontWeight: "bold",
            padding: "10px 20px",
            ":hover": {
              backgroundColor: colors.blueAccent[600],
            },
          }}
        >
          <DownloadOutlinedIcon sx={{ mr: "10px" }} />
          Download Reports
        </Button>
      </Box>

      {/* SCAMIFY INTRO */}
      <Box textAlign="center" mb="30px">
        <Typography
          variant="h1"
          fontWeight="bold"
          color={colors.blueAccent[500]}
        >
          SCAMIFY
        </Typography>
        <Typography
          variant="subtitle1"
          color={colors.grey[200]}
          mt="7px"
          sx={{ fontSize: "1.1rem" }}
        >
          A powerful tool to detect phishing websites and protect your data.
        </Typography>
        <Typography
          variant="subtitle1"
          color={colors.grey[200]}
        >
          Simply enter a URL to evaluate its authenticity.
        </Typography>
      </Box>

      {/* URL Input Box */}
      <Box
        mt="20px"
        p="30px"
        borderRadius="12px"
        bgcolor={colors.grey[800]}
        boxShadow="0px 6px 18px rgba(0, 0, 0, 0.2)"
        textAlign="center"
      >
        <Typography
          variant="h6"
          color={colors.grey[100]}
          mb="15px"
          fontWeight="bold"
        >
          Insert a website URL below to detect if it's a phishing site.
        </Typography>
        <Box display="flex" justifyContent="center" alignItems="center">
          <TextField
            variant="outlined"
            placeholder="Enter website URL here"
            aria-label="Enter website URL"
            sx={{
              input: { color: colors.grey[100] },
              backgroundColor: colors.grey[700],
              borderRadius: "6px",
              width: "75%",
              marginRight: "12px",
            }}
          />
          <Button
            variant="contained"
            sx={{
              backgroundColor: colors.blueAccent[700],
              color: colors.grey[100],
              padding: "12px 24px",
              textTransform: "none",
              fontWeight: "bold",
              fontSize: "16px",
              ":hover": {
                backgroundColor: colors.blueAccent[600],
              },
            }}
          >
            Check
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default Dashboard;
