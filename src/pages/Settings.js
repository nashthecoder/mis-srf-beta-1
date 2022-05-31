import React, { useState } from "react";
import Layout from "../components/Layout";
import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Checkbox,
  Divider,
  FormControlLabel,
  Grid,
  Typography,
  TextField,
} from "@mui/material";

export default function Settings(props) {
  const [values, setValues] = useState({
    password: "",
    confirm: "",
  });

  const handleChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <Layout>
      <form {...props}>
        <Card>
          <CardHeader
            subheader="Manage the notifications"
            title="Notifications"
          />
          <Divider />
          <CardContent>
            <Grid container spacing={6} wrap="wrap">
              <Grid
                item
                md={4}
                sm={6}
                sx={{
                  display: "flex",
                  flexDirection: "column",
                }}
                xs={12}
              >
                <Typography color="textPrimary" gutterBottom variant="h6">
                  Notifications
                </Typography>
                <FormControlLabel
                  control={<Checkbox color="primary" defaultChecked />}
                  label="Email"
                />
                <FormControlLabel
                  control={<Checkbox color="primary" defaultChecked />}
                  label="Push Notifications"
                />
                <FormControlLabel
                  control={<Checkbox />}
                  label="Text Messages"
                />
                <FormControlLabel
                  control={<Checkbox color="primary" defaultChecked />}
                  label="Phone calls"
                />
              </Grid>
              <Grid
                item
                md={4}
                sm={6}
                sx={{
                  display: "flex",
                  flexDirection: "column",
                }}
                xs={12}
              >
                <Typography color="textPrimary" gutterBottom variant="h6">
                  Messages
                </Typography>
                <FormControlLabel
                  control={<Checkbox color="primary" defaultChecked />}
                  label="Email"
                />
                <FormControlLabel
                  control={<Checkbox />}
                  label="Push Notifications"
                />
                <FormControlLabel
                  control={<Checkbox color="primary" defaultChecked />}
                  label="Phone calls"
                />
              </Grid>
            </Grid>
          </CardContent>
          <Divider />
          <Box
            sx={{
              display: "flex",
              justifyContent: "flex-end",
              p: 2,
            }}
          >
            <Button color="primary" variant="contained">
              Save
            </Button>
          </Box>
        </Card>
        <Card>
          <CardHeader subheader="Update password" title="Password" />
          <Divider />
          <CardContent>
            <TextField
              fullWidth
              label="Password"
              margin="normal"
              name="password"
              onChange={handleChange}
              type="password"
              value={values.password}
              variant="outlined"
            />
            <TextField
              fullWidth
              label="Confirm password"
              margin="normal"
              name="confirm"
              onChange={handleChange}
              type="password"
              value={values.confirm}
              variant="outlined"
            />
          </CardContent>
          <Divider />
          <Box
            sx={{
              display: "flex",
              justifyContent: "flex-end",
              p: 2,
            }}
          >
            <Button color="primary" variant="contained">
              Update
            </Button>
          </Box>
        </Card>
      </form>
    </Layout>
  );
}
