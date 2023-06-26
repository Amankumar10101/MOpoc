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

  // position: "absolute",
  // width: "825px",
  // height: "32px",
  // left: "70px",
  // top: "8px",
});

const TabsStyle = styled(Tabs)({

  "& .MuiTabs-scroller .MuiTabs-flexContainer .MuiButtonBase-root": {
    color: '#B4B4B4',
    fontSize: '1.75rem',
    // fontFamily: 'Roboto',
    textTransform: 'unset',
    borderBottom: '2px solid #74777A',
  },
  "& .MuiTabs-scroller .MuiTabs-flexContainer .MuiButtonBase-root.Mui-selected": {
    color: '#00B7FD',
    fontWeight: '700',
  },
  "& .MuiTabs-scroller .MuiTabs-indicator": {
    backgroundColor: '#00B7FD',
    height: '3px',
  }

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

        <Box className="tab-box" sx={{ p: 3, width: "100%", }}>

          {children}

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
  isClicked: number,
  setIsClicked: React.Dispatch<React.SetStateAction<number>>,
  tabs: { label: string; component: React.ReactNode }[];
  width?: string,
  className?: string,
}

export default function BasicTabs(props: BasicTabsProps) {
  const { isClicked, setIsClicked, className, width, tabs } = props;
  const [value, setValue] = React.useState(0);


  const handleChange: any = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
    console.log(newValue);
  };
  React.useEffect(() => {
    if (isClicked && (value < tabs.length - 1)) {
      setValue(value + 1);
      console.log(isClicked);
      setIsClicked(0);
    }
    else { setIsClicked(0); }
  }, [isClicked]);
  return (
    <ThemeProvider theme={theme}>
      <>

        <StyledTab sx={{ width: "100%" }} >
          <Box className="signUp-tab-box" sx={{ width: "100%" }}>
            <Box
            // sx={{ borderBottom: 2, borderColor: "#74777A" }}

            >
              <TabsStyle
                className={className}
                value={value}
                onChange={handleChange}
                aria-label="basic tabs example"
              >
                {tabs.map((tab, index) => (
                  <Tab key={index} label={tab.label} {...a11yProps(index)} />
                ))}
              </TabsStyle>
            </Box>

          </Box>

        </StyledTab>
        {tabs.map((tab: any, index: number) => (
          <TabPanel key={index} value={value} index={index}>
            {tab.component}
          </TabPanel>
        ))}

      </>
    </ThemeProvider>
  );
}
