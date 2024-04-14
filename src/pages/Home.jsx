import { Button } from "flowbite-react";
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Badge from '@mui/material/Badge';
import { Link } from "react-router-dom";
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import FolderOpenIcon from '@mui/icons-material/FolderOpen';
import LocalPostOfficeIcon from '@mui/icons-material/LocalPostOffice';

const Home = () => {
  return (
    <Box sx={{ backgroundColor: '#2d3748', margin: 'auto' }}>
      <div className="flex justify-center pt-20">
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <Box sx={{ margin: 'auto', flex: '1' }}>
            <Badge sx={{
              backgroundColor: 'white',
              color: 'black',
              fontFamily: 'Roboto, sans-serif',
              padding: '10px',
              fontWeight: 700,
              marginBottom: '5%',
            }}>WELCOME</Badge>
            <Typography variant="h1" component="div" sx={{ fontFamily: 'Anta, sans-serif', fontSize: '80px', color: "#00ADB5" }}>Lucile Pelou</Typography>
            <Typography
              variant="h2"
              component="div"
              sx={{ fontFamily: 'Roboto, sans-serif', fontSize: '20px', color: 'white', marginTop: '5%', marginBottom: '5%' }}
            >
              I am an innovative IT student who loves to learn new things and build creatives interfaces.
            </Typography>
            <Box sx={{ display: 'flex', gap: '1rem', flex: '1' }}>
              <Button variant="contained" className="button-cus" sx={{ backgroundColor: '#00ADB5' }}>
                <Link to="/portfolio" style={{ color: 'white', textDecoration: 'none' }}>View my work</Link>
                <FolderOpenIcon sx={{ marginLeft: "10px" }}></FolderOpenIcon>
              </Button>
              <Button variant="outlined" sx={{ backgroundColor: '#00ADB5' }} >
                <Link to="/contact">Get in touch</Link>
                <LocalPostOfficeIcon sx={{ marginLeft: "10px" }}></LocalPostOfficeIcon>
              </Button>
            </Box>
          </Box>
          <Box sx={{ flex: '1' }}>
            <picture>
              <source media="(min-width: 768px)" srcSet="images/lucile_cri_petit-min.png" />
              <source media="(max-width: 767px)" srcSet="images/android-chrome-192x192.png" />
              <img className="main-img" src="images/lucile_cri_petit-min.png" alt="Lucile Pelou" />
            </picture>
          </Box>
        </Box>
      </div>
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }} className="theme-dark section-selector-1">
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }} className="col-1 text-center">
          <Typography variant="h2" sx={{ fontSize: "42px", color: "white", fontFamily: 'Roboto, sans-serif', marginBottom: "1%" }}>Recent projects</Typography>
          <Typography variant="h3" sx={{
            fontSize: "28px", marginLeft: "20%", marginRight: "20%",
            color: "#cbd4d8", fontFamily: 'Roboto, sans-serif', lineHeight: "1.6"
          }}>
            Below you can see some examples of my recent work. Check out my complete portfolio of {" "}
            <Link to="/portfolio" style={{ textDecoration: 'underline', textUnderlineOffset: '0.2em', color: "Highlight" }}>web design</Link> projects. Have a project you would like to discuss? {""}
            <Link to="/contact" style={{ textDecoration: 'underline', color: "Highlight", textUnderlineOffset: '0.2em' }}>Let's make something great together!</Link>
          </Typography>
        </Box>

        <Box sx={{ display: 'flex', justifyContent: 'space-between', width: '100%', padding: "5%" }} className="flex-cols-3 cols-gap-4">
          <Box sx={{ display: 'flex', flexDirection: 'column', maxWidth: "400px", gap: "5px" }} className="col-3">
            <Box sx={{ overflow: 'hidden', paddingBottom: "2%" }} className="photos-zoom photos-brightness">
              <a href="https://clarisse78.github.io/Lexia/">
                <img src="images/project-dev-portfolio-min.png" alt="Placeholder image" />
              </a>
            </Box>
            <Typography variant="h3" className="text-white" sx={{ fontSize: "25px", fontWeight: "700", fontFamily: 'Roboto, sans-serif' }}>Development Portfolio</Typography>
            <Typography variant="body1" className="text-white" sx={{ fontSize: "20px", overflowWrap: "break-word", flexGrow: "1", fontFamily: 'Roboto, sans-serif' }}>An another website Portfolio for my development projects.</Typography>
            <Button variant="solid" color="soft" href="https://clarisse78.github.io/Lexia/" style={{ backgroundColor: 'white', color: 'black', border: '1px solid black', width: "fit-content", fontWeight: "bold", marginTop: "2%" }}>
              <Typography sx={{ fontSize: "18px", fontWeight: "600" }}>View project</Typography>
              <ArrowRightAltIcon sx={{ paddingLeft: "2%" }}></ArrowRightAltIcon>
            </Button>
          </Box>

          <Box sx={{ display: 'flex', flexDirection: 'column', maxWidth: "400px", gap: "5px" }} className="col-3">
            <Box sx={{ overflow: 'hidden', paddingBottom: "2%" }} className="photos-zoom photos-brightness">
              <a href="https://godmelcorp.github.io/">
                <img src="images/project-proxima-min.png" alt="Placeholder image" />
              </a>
            </Box>
            <Typography variant="h3" className="text-white" sx={{ fontSize: "25px", fontWeight: "700", fontFamily: 'Roboto, sans-serif' }}>Proxima's Quest</Typography>
            <Typography variant="body1" className="text-white" sx={{ fontSize: "20px", overflowWrap: "break-word", flexGrow: "1", fontFamily: 'Roboto, sans-serif' }}>The Website of a video games project made in C# with Unity. It present the game and the creators.</Typography>
            <Button variant="solid" color="soft" href="https://clarisse78.github.io/Lexia/" style={{ backgroundColor: 'white', color: 'black', border: '1px solid black', width: "fit-content", fontWeight: "bold", marginTop: "2%" }}>
              <Typography sx={{ fontSize: "18px", fontWeight: "600" }}>View project</Typography>
              <ArrowRightAltIcon sx={{ paddingLeft: "2%" }}></ArrowRightAltIcon>
            </Button>
          </Box>
          <Box sx={{ display: 'flex', flexDirection: 'column', maxWidth: "400px", gap: "5px" }} className="col-3">
            <Box sx={{ overflow: 'hidden', paddingBottom: "2%" }} className="photos-zoom photos-brightness">
              <a href="https://clarisse78.github.io/WebDesignPortfolio/portfolio/js/index.html">
                <img src="images/project-javascript-min.png" alt="Placeholder image" />
              </a>
            </Box>
            <Typography variant="h3" className="text-white" sx={{ fontSize: "25px", fontWeight: "700", fontFamily: 'Roboto, sans-serif' }}>Javascript Projects</Typography>
            <Typography variant="body1" className="text-white" sx={{ fontSize: "20px", overflowWrap: "break-word", flexGrow: "1", fontFamily: 'Roboto, sans-serif' }}>A selection of my recent JavaScript projects.</Typography>
            <Button variant="solid" color="soft" href="https://clarisse78.github.io/Lexia/" style={{ backgroundColor: 'white', color: 'black', border: '1px solid black', width: "fit-content", fontWeight: "bold", marginTop: "2%" }}>
              <Typography sx={{ fontSize: "18px", fontWeight: "600" }}>View project</Typography>
              <ArrowRightAltIcon sx={{ paddingLeft: "2%" }}></ArrowRightAltIcon>
            </Button>
          </Box>
        </Box>
      </Box>
    </Box >
  );
};

export default Home;