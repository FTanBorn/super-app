import {
  Box,
  Button,
  Card,
  CardHeader,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@mui/material";
import Image from "next/image";
import HomePageDialog from "../../../ui/clientSide/super-app-home/homepage";

export default function Home() {
  return (
    <Box
      sx={{
        justifyContent: "center",
        alignItems: "center",
        display: "flex",
      }}
    >
      <HomePageDialog />
    </Box>
  );
}
