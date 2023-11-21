import React from 'react';
import { useState } from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import CloseIcon from '@mui/icons-material/Close';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
//import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { Link } from 'react-router-dom';
import './style.css';
import Contact from '../contact/contact';
import Logo from '../logo/logo';


const drawerWidth = 250;
//const navItems = ['Home', 'Mxnifesto', 'Articles', 'Shows', 'Info', 'Network', 'Gift Shop', 'Patreon'];

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  }),
);

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'top',
  justifyContent: 'flex-end',
}));

function Navbar() {

  const theme = useTheme();
  const [open, setOpen] = useState(false);


  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);

  };



  return (
    <Box sx={{ display: 'flex', backgroundColor: 'transparent', marginTop: '0', height: '0vh' }}>
      <CssBaseline />
      <AppBar position="fixed" open={open} style={{ height: '0vh', backgroundColor: "transparent", color: "transparent" }}>
        <Toolbar sx={{ backgroundColor: "transparent", opacity: "100%" }}>
          <IconButton
            color="transparent"
            hover="none"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{ mr: 2, ...(open && { display: 'none' }) }}
          >
            <MenuIcon />
          </IconButton>
          <Logo />
          <Contact />
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            backgroundColor: '#467367 ',
            opacity: '90%',
            boxSizing: 'border-box',

          },
        }}
        variant="temporary"
        anchor="left"
        open={open}
      >
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose} style={{ Color: 'grey' }}>
            {theme.direction === 'ltr' ? <CloseIcon className="icon" sx={{ marginTop: "20px" }} /> : <ChevronRightIcon className="icon" />}
          </IconButton>
        </DrawerHeader>
        <Logo id="drawerLogo" style={{ fontSize: "15px" }} />
        {/* this is where the menus start */}
        <List className='nav' style={{ backgroundColor: 'transparent', opacity: '80%' }}>
          <ListItem>
            <Link to="/biography" style={{ textDecoration: 'none', color: 'white' }} onClick={handleDrawerClose} >BIOGRAPHY</Link>
          </ListItem>
          <Divider />
          <ListItem>
            <Link to="/discography" style={{ textDecoration: 'none', color: 'white' }} onClick={handleDrawerClose} >DISCOGRAPHY</Link>
          </ListItem>
          <Divider />
          <ListItem>
            <Link to="/articles" style={{ textDecoration: 'none', color: 'white' }} onClick={handleDrawerClose} >NEWS</Link>
          </ListItem>
          <Divider />
          <ListItem>
            <Link to="/gallery" style={{ textDecoration: 'none', color: 'white' }} onClick={handleDrawerClose}>GALLERY</Link>
          </ListItem>
          <Divider />
          <ListItem>
            <Link to="/shows" style={{ textDecoration: 'none', color: 'white' }} onClick={handleDrawerClose}>SHOWS</Link>
          </ListItem>
          <Divider />
          <ListItem>
            <Link to="/videosMap" style={{ textDecoration: 'none', color: 'white' }} onClick={handleDrawerClose}>VIDEO</Link>
          </ListItem>
          <Divider />
          <ListItem>
            <Link to="/studio" style={{ textDecoration: 'none', color: 'white' }} onClick={handleDrawerClose}>STUDIO</Link>
          </ListItem>
          <Divider />
          <ListItem>
            <Link to="https://curlukfr.bandcamp.com/" style={{ textDecoration: 'none', color: 'white' }} onClick={handleDrawerClose}>SHOP</Link>
          </ListItem>
          <Divider />

        </List>
        {/* above is where the menus end */}
      </Drawer>
      <Main open={open}>
        <DrawerHeader />
      </Main>
    </Box>
  );
}

export default Navbar;


