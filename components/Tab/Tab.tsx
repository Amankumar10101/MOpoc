"use client";
import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { styled } from "@mui/material";
import "./tab.css";
import { ThemeProvider } from "@mui/material/styles";
import theme from "@/app/styles/theme";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

const StyledTab = styled("div")({
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",
  padding: "0px",
  position: "absolute",
  width: "825px",
  height: "32px",
  left: "70px",
  top: "128px",
  
});

const TabsStyle = styled(Tabs)({
  fontSize: '0.875rem',
  fontFamily: 'Roboto',
  fontWeight: '700',
  lineHeight: '1.25rem',
 
  '& .MuiTabs-indicator': {
    height: '3px',
    backgroundColor: '#00B7FD',
  },
})

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
      className="tab-child-components"
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography
            sx={{
              fontStyle: "normal",
              fontWeight: theme.typography.fontWeightBold,
              fontSize: "14px",
              lineHeight: "20px",
              color: "rgba(88, 88, 88, 0.7)",
            }}
          >
            {children}
          </Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

interface BasicTabsProps {
  tabs: { label: string; component: React.ReactNode }[];
}

export default function BasicTabs(props: BasicTabsProps) {
  const { tabs } = props;
  const [value, setValue] = React.useState(0);

  const handleChange: any = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <ThemeProvider theme={theme}>
    <StyledTab>
      <Box sx={{ width: "100%" }}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <TabsStyle
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
          >
            {tabs.map((tab, index) => (
              <Tab key={index} label={tab.label} {...a11yProps(index)} />
            ))}
          </TabsStyle>
        </Box>
        {tabs.map((tab: any, index: number) => (
          <TabPanel key={index} value={value} index={index}>
            {tab.component}
          </TabPanel>
        ))}
      </Box>
    </StyledTab>
    </ThemeProvider>
  );
}
