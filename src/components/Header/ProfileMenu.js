import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import MenuIcon from '@mui/icons-material/Menu';
import "./styles.css"
import { borderBottom } from '@mui/system';
export default function PositionedMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <div
        id="demo-positioned-button"
        aria-controls={open ? 'demo-positioned-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        className="menu-usermenu"

    >
      <MenuIcon/>
       <AccountCircleIcon/>
      </div>

      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
//        style={{
//        borderRadius:"10rem",
//    }}
sx={{".MuiPaper-root":{borderRadius:"1rem",backgroundColor:"#F7F7F7",color:"gray",}}}
        //        anchorOrigin={{
        //   vertical: 'top',
        //   horizontal: 'left',
        // }}
        // transformOrigin={{
        //   vertical: 'top',
        //   horizontal: 'left',
        // }}
      >
        
        <MenuItem  onClick={handleClose}>Login</MenuItem>
        <MenuItem onClick={handleClose}>Signup</MenuItem>
        <div style={{borderBottom:"3px solid lightgray",}}> </div>
        <MenuItem onClick={handleClose}>Airbun Your Home</MenuItem>
        <MenuItem onClick={handleClose}>Host your experience</MenuItem>
        <MenuItem onClick={handleClose}>Help</MenuItem>
      </Menu>
    </div>
 
  );
}