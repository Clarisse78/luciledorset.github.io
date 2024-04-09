import { Button, Navbar } from "flowbite-react";
import { Link } from "react-router-dom";
import EmailIcon from '@mui/icons-material/Email';
import Box from '@mui/material/Box';

function NavbarApp() {

  return (
    <Navbar fluid className="bg-custom-blue text-white">
      <Navbar.Brand>
        <Link to="/" className="pl-10">
          <img
            src="../public/images/logo3-min.png"
            className="logo-main"
            alt="Sample website logo"
          />
        </Link>
      </Navbar.Brand>
      <div className="flex md:order-2">
        <Button className="bg-white text-black">
          <Box display="flex" alignItems="center" justifyContent="center" sx={{ gap: 1 }}>
            <Link to="/contact" className="text-navButton font-roboto font-semibold">Contact</Link>
            <EmailIcon />
          </Box>
        </Button>
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <Navbar.Link>
          <Link to="/" className="text-white text-navLink font-roboto hover:underline" active sx={{
            '&:hover': {
              textDecoration: 'underline',
              textDecorationThickness: '2px',
              textUnderlineOffset: '7px',
            }
          }}
          >
            Home
          </Link>
        </Navbar.Link>
        <Navbar.Link>
          <Link to="/portfolio" className="text-white text-navLink font-roboto hover:underline" sx={{
            '&:hover': {
              textDecoration: 'underline',
              textDecorationThickness: '2px',
              textUnderlineOffset: '7px',
            }
          }}
          >
            Portfolio</Link>
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavbarApp;
