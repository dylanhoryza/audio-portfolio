import React, { useState, ReactNode } from 'react';
import {
  AppBar,
  IconButton,
  Toolbar,
  Drawer,
  List,
  ListItemIcon,
  ListItemText,
  ListItemButton,
  Typography
} from '@mui/material';
import { Link } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import HomeIcon from '@mui/icons-material/Home';
import LibraryMusicOutlinedIcon from '@mui/icons-material/LibraryMusicOutlined';
import VideoCameraBackIcon from '@mui/icons-material/VideoCameraBack';
import FeedIcon from '@mui/icons-material/Feed';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import QueueMusicOutlinedIcon from '@mui/icons-material/QueueMusicOutlined';
import GraphicEqOutlinedIcon from '@mui/icons-material/GraphicEqOutlined';

interface MobileNavProps {
  children?: ReactNode;
}

const MobileNav: React.FC<MobileNavProps> = ({ children }) => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <>
      <AppBar position='fixed' sx={{ backgroundColor: 'black' }}>
        <Toolbar>
          <IconButton
            edge='start'
            color='inherit'
            aria-label='open drawer'
            onClick={handleDrawerToggle}
            sx={{
              mr: 2,
              display: {
                sm: 'block',
                xs: 'block',
                lg: 'block',
                xl: 'block',
                zIndex: 2,
              },
            }}
          >
            <MenuIcon sx={{ color: 'white', zIndex: 10 }} />
          </IconButton>

          <Typography variant='h6' noWrap sx={{ color: 'white'}}>
            Sounds by Dylan
          </Typography>
          <img
            // src={StarkLogo}
            style={{ width: '250px', position: 'fixed', top: -97, zIndex: 0 }}
          />
          {/* <IconButton></IconButton> */}
          {/* <Box sx={{ width: '10%'}}>
          <img src={StarkLogo} style={{ width:'250px'}}/>
          </Box> */}
        </Toolbar>
      </AppBar>

      <Drawer
        variant='temporary'
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true,
        }}
        sx={{
          display: { xs: 'block', sm: 'block', lg: 'block', xl: 'block' },
          '& .MuiDrawer-paper': {
            boxSizing: 'border-box',
            width: 240,
            backgroundColor: 'black',
          },
        }}
      >
        <Toolbar>
          <List>
            <Link
              to='/'
              onClick={() => window.scrollTo(0, 0)}
              style={{ textDecoration: 'none', color: 'inherit' }}
            >
              <ListItemButton onClick={handleDrawerToggle}>
                <ListItemIcon>
                  <HomeIcon sx={{ color: 'white' }} />
                </ListItemIcon>
                <ListItemText primary='Home' sx={{ color: 'white' }} />
              </ListItemButton>
            </Link>
            <Link
              to='/services'
              style={{ textDecoration: 'none', color: 'inherit' }}
              onClick={() => window.scrollTo(0, 0)}
            >
              <ListItemButton onClick={handleDrawerToggle}>
                <ListItemIcon>
                  <FeedIcon sx={{ color: 'white' }} />
                </ListItemIcon>
                <ListItemText primary='Services' sx={{ color: 'white' }} />
              </ListItemButton>
            </Link>
            <Link
              to='/music'
              style={{ textDecoration: 'none', color: 'inherit' }}
              onClick={() => window.scrollTo(0, 0)}
            >
              <ListItemButton onClick={handleDrawerToggle}>
                <ListItemIcon>
                  <LibraryMusicOutlinedIcon sx={{ color: 'white' }} />
                </ListItemIcon>
                <ListItemText primary='Music' sx={{ color: 'white' }} />
              </ListItemButton>
            </Link>
            <Link
              to='/films'
              style={{ textDecoration: 'none', color: 'inherit' }}
              onClick={() => window.scrollTo(0, 0)}
            >
              <ListItemButton onClick={handleDrawerToggle}>
                <ListItemIcon>
                  <VideoCameraBackIcon sx={{ color: 'white' }} />
                </ListItemIcon>
                <ListItemText primary='Films' sx={{ color: 'white' }} />
              </ListItemButton>
            </Link>
            <Link
              to='/songwriting'
              style={{ textDecoration: 'none', color: 'inherit' }}
              onClick={() => window.scrollTo(0, 0)}
            >
              <ListItemButton onClick={handleDrawerToggle}>
                <ListItemIcon>
                  <QueueMusicOutlinedIcon sx={{ color: 'white' }} />
                </ListItemIcon>
                <ListItemText primary='Songwriting' sx={{ color: 'white' }} />
              </ListItemButton>
            </Link>
            <Link
              to='/redesigns'
              style={{ textDecoration: 'none', color: 'inherit' }}
              onClick={() => window.scrollTo(0, 0)}
            >
              <ListItemButton onClick={handleDrawerToggle}>
                <ListItemIcon>
                  <GraphicEqOutlinedIcon sx={{ color: 'white' }} />
                </ListItemIcon>
                <ListItemText primary='Redesigns' sx={{ color: 'white' }} />
              </ListItemButton>
            </Link>
            <Link
              to='/contact'
              style={{ textDecoration: 'none', color: 'inherit' }}
              onClick={() => window.scrollTo(0, 0)}
            >
              <ListItemButton onClick={handleDrawerToggle}>
                <ListItemIcon>
                  <ContactMailIcon sx={{ color: 'white' }} />
                </ListItemIcon>
                <ListItemText primary='Contact' sx={{ color: 'white' }} />
              </ListItemButton>
            </Link>
          </List>
        </Toolbar>
      </Drawer>

      <div
        style={{
          marginLeft: mobileOpen ? 240 : 0,
        }}
      >
        {children}
      </div>
    </>
  );
};

export default MobileNav;
