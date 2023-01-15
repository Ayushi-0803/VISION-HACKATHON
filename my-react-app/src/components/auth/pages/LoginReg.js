import { Grid, Card, Typography, Tab, Tabs, Box } from "@mui/material";
import Pic1 from "../../images/Pic1.png";
import { useState } from "react";
import { Event } from "@mui/icons-material";
import UserLogin from "./UserLogin";
import Registartion from "./Registration";
const TabPanel = (props) => {
  const { children, value, index } = props;
  return (
    <div role="tabpanel" hidden={value !== index}>
      {value === index && <Box>{children}</Box>}
    </div>
  );
};
const LoginReg = () => {
  const [value, setValue] = useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <>
      <Grid container sx={{ height: "90vh", width: "95vw" }}>
        <Grid
          item
          lg={7}
          sm={5}
          sx={{
            backgroundImage: `url(${Pic1})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            beckgroundPosition: "center",
            display: { xs: "none", sm: "block" },
          }}
        ></Grid>

        <Grid item lg={5} sm={7} xs={12}>
          <Card sx={{ width: "100%", height: "100%" }}>
            <Box>
              <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                <Tabs
                  value={value}
                  textColor="secondary"
                  indicatorColor="secondary"
                  onChange={handleChange}
                >
                  <Tab
                    label="Login"
                    sx={{ textTransform: "none", fontWeight: "bold" }}
                  ></Tab>
                  <Tab
                    label="Registration"
                    sx={{ textTransform: "none", fontWeight: "bold" }}
                  ></Tab>
                </Tabs>
              </Box>
              <TabPanel value={value} index={0}>
                <UserLogin />
              </TabPanel>

              <TabPanel value={value} index={1}>
                <Registartion />
              </TabPanel>
            </Box>
          </Card>
        </Grid>
      </Grid>
    </>
  );
};
export default LoginReg;
