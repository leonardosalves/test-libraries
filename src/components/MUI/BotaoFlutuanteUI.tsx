import React from "react";
import {AppBar,Chip, Divider, Fab, Tab, TableBody, Tabs, Typography, Zoom } from '@mui/material'
import { styled } from "@stitches/react"; 
import { FaArrowUp, FaEdit, FaFacebook, FaPlus } from "react-icons/fa";
import { Dangerous } from "@mui/icons-material";
import SwipeableViews from "react-swipeable-views";
import { Box, SxProps } from "@mui/system";
import { useTheme } from '@mui/material/styles';
import { styled as styledUI } from '@mui/material/styles';


const Root = styledUI('div')(({ theme })=>({
  ...theme.typography.body2,
  '& > :not(style) + :not(style)' : {
      marginTop: theme.spacing(2)
  },
  width: "calc(var(--vw, 1vw) * 75)",
  paddingTop: '1rem',
  paddingBottom: '1rem'
}))
interface TabPanelProps {
    children?: React.ReactNode;
    dir?: string;
    index: number;
    value: number;
  }
  
  function TabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;
  
    return (
      <Typography
        component="div"
        role="tabpanel"
        hidden={value !== index}
        id={`action-tabpanel-${index}`}
        aria-labelledby={`action-tab-${index}`}
        {...other}
      >
        {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
      </Typography>
    );
  }
  
  function a11yProps(index: any) {
    return {
      id: `action-tab-${index}`,
      'aria-controls': `action-tabpanel-${index}`,
    };
  }
  
  const fabStyle = {
    position: 'absolute',
    bottom: 16,
    right: 16,
  };
  
  const fabGreenStyle = {
    color: 'common.white',
    bgcolor: 'green',
    '&:hover': {
      bgcolor: 'gray',
    },
  };

const BotaoFlutuanteUI = () =>{
    const theme = useTheme();
    const [value, setValue] = React.useState(0);
    
    const DivBotaoFlutuante = styled('div', {
      paddingTop: '10px',
      width: '100%',
      alignItems: "start"
    })
    const handleChange = (event: unknown, newValue: number) => {
        setValue(newValue);
    };
    

  const handleChangeIndex = (index: number) => {
    setValue(index);
  };

  const transitionDuration = {
    enter: theme.transitions.duration.enteringScreen,
    exit: theme.transitions.duration.leavingScreen,
  };

  const fabs = [
    {
      color: 'primary' as 'primary',
      sx: fabStyle as SxProps,
      icon: <FaPlus />,
      label: 'Add',
    },
    {
      color: 'secondary' as 'secondary',
      sx: fabStyle as SxProps,
      icon: <FaEdit />,
      label: 'Edit',
    },
    {
      color: 'inherit' as 'inherit',
      sx: { ...fabStyle, ...fabGreenStyle } as SxProps,
      icon: <FaArrowUp />,
      label: 'Expand',
    },
  ];
    return(
        <DivBotaoFlutuante>
          <Root>
            <Divider>
              <Chip label="Botão Flutuante - Normal" color="primary"></Chip>
            </Divider>
          </Root>
            <TableBody key="Botoes" sx={{ '& button': { m: 1 } }}>
                <Fab color="primary" aria-label="add">
                    <FaPlus />
                    </Fab>
                    <Fab color="secondary" aria-label="edit">
                        <FaEdit />
                    </Fab>
                    <Fab variant="extended">
                        <Dangerous sx={{ mr: 1 }} />
                        Perigo!
                    </Fab>
                    <Fab disabled aria-label="like">
                        <FaFacebook />
                </Fab>
                
        
                <Root>
                  <Divider>
                    <Chip label="Botão Flutuante - Efeitos" color="primary"></Chip>
                  </Divider>
                </Root>
                <Box
                    sx={{
                        bgcolor: 'background.paper',
                        width: 500,
                        position: 'relative',
                        minHeight: 200,
                    }}
                    >
                    <AppBar position="static" color="default">
                        <Tabs
                        value={value}
                        onChange={handleChange}
                        indicatorColor="primary"
                        textColor="primary"
                        variant="fullWidth"
                        aria-label="action tabs example"
                        >
                        <Tab label="Item One" {...a11yProps(0)} />
                        <Tab label="Item Two" {...a11yProps(1)} />
                        <Tab label="Item Three" {...a11yProps(2)} />
                        </Tabs>
                    </AppBar>
                    <SwipeableViews
                        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                        index={value}
                        onChangeIndex={handleChangeIndex}
                    >
                        <TabPanel value={value} index={0} dir={theme.direction}>
                        Item One
                        </TabPanel>
                        <TabPanel value={value} index={1} dir={theme.direction}>
                        Item Two
                        </TabPanel>
                        <TabPanel value={value} index={2} dir={theme.direction}>
                        Item Three
                        </TabPanel>
                    </SwipeableViews>
                    {fabs.map((fab, index) => (
                        <Zoom
                        key={fab.color}
                        in={value === index}
                        timeout={transitionDuration}
                        style={{
                            transitionDelay: `${value === index ? transitionDuration.exit : 0}ms`,
                        }}
                        unmountOnExit
                        >
                        <Fab sx={fab.sx} aria-label={fab.label} color={fab.color}>
                            {fab.icon}
                        </Fab>
                        </Zoom>
                    ))}
                </Box>
            </TableBody>
        </DivBotaoFlutuante>
    )
}

export default BotaoFlutuanteUI