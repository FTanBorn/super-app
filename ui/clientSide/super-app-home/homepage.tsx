"use client";

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
import { useState } from "react";

export default function HomePageDialog() {
  const [dialogOpen, setDialogOpen] = useState<boolean>(false);

  return (
    <>
      <Box>
        <Button variant="contained" color="info" onClick={() => setDialogOpen(!dialogOpen)}>
          Dialog Open
        </Button>
      </Box>
      <Dialog
        open={dialogOpen}
        onClose={() => setDialogOpen(!dialogOpen)}
        aria-labelledby="test-diaglog"
        aria-describedby="alert-diaglog-description"
        fullWidth
        maxWidth="sm"
      >
        <DialogTitle>Title</DialogTitle>
        <DialogContent>
          <Card>
            <CardHeader title={"Card"} />
          </Card>
        </DialogContent>
        <DialogActions>
          <Button variant="contained" color="primary">
            {"Apply"}
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
