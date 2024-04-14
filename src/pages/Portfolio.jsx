import { Button } from "flowbite-react";
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Badge from '@mui/material/Badge';
import { Link } from "react-router-dom";
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import FolderOpenIcon from '@mui/icons-material/FolderOpen';
import LocalPostOfficeIcon from '@mui/icons-material/LocalPostOffice';

const Portfolio = () => {
  return (
    <Box sx={{ backgroundColor: '#2d3748', margin: 'auto' }}>
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }} className="theme-dark section-selector-1">
        <Box sx={{ marginTop: "3%", maxWidth: "1350px" }}>
          <Typography sx={{ fontSize: "48px", color: "#00ADB5", fontFamily: 'Roboto, sans-serif', marginBottom: "1%", }} >Portfolio</Typography>
          <Typography sx={{
            fontSize: "35px",
            color: "#cbd4d8", fontFamily: 'Roboto, sans-serif', lineHeight: "1.6"
          }}>
            Below you can see a selection of my web design and front-end development projects.
          </Typography>
        </Box>

        <Box sx={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '5%', marginTop: "5%", marginBottom: "25%"
        }} className="flex-cols-3 cols-gap-4">
          <Box sx={{ display: 'flex', flexDirection: 'column', maxWidth: "450px", gap: "5px" }} className="col-3">
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

          <Box sx={{ display: 'flex', flexDirection: 'column', maxWidth: "450px", gap: "5px" }} className="col-3">
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
          <Box sx={{ display: 'flex', flexDirection: 'column', maxWidth: "450px", gap: "5px" }} className="col-3">
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


          <Box sx={{ display: 'flex', flexDirection: 'column', maxWidth: "450px", gap: "5px" }} className="col-3">
            <Box sx={{ overflow: 'hidden', paddingBottom: "2%" }} className="photos-zoom photos-brightness">
              <a href="https://clarisse78.github.io/WebDesignPortfolio/portfolio/project-multi-column/index.html">
                <img src="images/project-multi-col.png" alt="Placeholder image" />
              </a>
            </Box>
            <Typography variant="h3" className="text-white" sx={{ fontSize: "25px", fontWeight: "700", fontFamily: 'Roboto, sans-serif' }}>Multi-column Layouts</Typography>
            <Typography variant="body1" className="text-white" sx={{ fontSize: "20px", overflowWrap: "break-word", flexGrow: "1", fontFamily: 'Roboto, sans-serif' }}>A gallery of multi-column, reponsive layouts.</Typography>
            <Button variant="solid" color="soft" href="https://clarisse78.github.io/WebDesignPortfolio/portfolio/project-multi-column/index.html" style={{ backgroundColor: 'white', color: 'black', border: '1px solid black', width: "fit-content", fontWeight: "bold", marginTop: "2%" }}>
              <Typography sx={{ fontSize: "18px", fontWeight: "600" }}>View project</Typography>
              <ArrowRightAltIcon sx={{ paddingLeft: "2%" }}></ArrowRightAltIcon>
            </Button>
          </Box>


          <Box sx={{ display: 'flex', flexDirection: 'column', maxWidth: "450px", gap: "5px" }} className="col-3">
            <Box sx={{ overflow: 'hidden', paddingBottom: "2%" }} className="photos-zoom photos-brightness">
              <a href="https://clarisse78.github.io/WebDesignPortfolio/portfolio/project-hero/index-1.html">
                <img src="images/project-hero.png" alt="Placeholder image" />
              </a>
            </Box>
            <Typography variant="h3" className="text-white" sx={{ fontSize: "25px", fontWeight: "700", fontFamily: 'Roboto, sans-serif' }}>Hero Block Gallery</Typography>
            <Typography variant="body1" className="text-white" sx={{ fontSize: "20px", overflowWrap: "break-word", flexGrow: "1", fontFamily: 'Roboto, sans-serif' }}>A gallery of hero block elements with split-screen layouts and duotone images.</Typography>
            <Button variant="solid" color="soft" href="https://clarisse78.github.io/WebDesignPortfolio/portfolio/project-hero/index-1.html" style={{ backgroundColor: 'white', color: 'black', border: '1px solid black', width: "fit-content", fontWeight: "bold", marginTop: "2%" }}>
              <Typography sx={{ fontSize: "18px", fontWeight: "600" }}>View project</Typography>
              <ArrowRightAltIcon sx={{ paddingLeft: "2%" }}></ArrowRightAltIcon>
            </Button>
          </Box>

          <Box sx={{ display: 'flex', flexDirection: 'column', maxWidth: "450px", gap: "5px" }} className="col-3">
            <Box sx={{ overflow: 'hidden', paddingBottom: "2%" }} className="photos-zoom photos-brightness">
              <a href="https://clarisse78.github.io/WebDesignPortfolio/crypto-wallet/index.html">
                <img src="images/project-crypto-wallet.jpg" alt="Placeholder image" />
              </a>
            </Box>
            <Typography variant="h3" className="text-white" sx={{ fontSize: "25px", fontWeight: "700", fontFamily: 'Roboto, sans-serif' }}>Crypto Wallet</Typography>
            <Typography variant="body1" className="text-white" sx={{ fontSize: "20px", overflowWrap: "break-word", flexGrow: "1", fontFamily: 'Roboto, sans-serif' }}>A dark-themed responsive single-page website for a fictitious crypto wallet.</Typography>
            <Button variant="solid" color="soft" href="https://clarisse78.github.io/WebDesignPortfolio/crypto-wallet/index.html" style={{ backgroundColor: 'white', color: 'black', border: '1px solid black', width: "fit-content", fontWeight: "bold", marginTop: "2%" }}>
              <Typography sx={{ fontSize: "18px", fontWeight: "600" }}>View project</Typography>
              <ArrowRightAltIcon sx={{ paddingLeft: "2%" }}></ArrowRightAltIcon>
            </Button>
          </Box>


          <Box sx={{ display: 'flex', flexDirection: 'column', maxWidth: "450px", gap: "5px" }} className="col-3">
            <Box sx={{ overflow: 'hidden', paddingBottom: "2%" }} className="photos-zoom photos-brightness">
              <a href="https://clarisse78.github.io/WebDesignPortfolio/portfolio/smoothies/index.html">
                <img src="images/project-smoothie.jpg" alt="Placeholder image" />
              </a>
            </Box>
            <Typography variant="h3" className="text-white" sx={{ fontSize: "25px", fontWeight: "700", fontFamily: 'Roboto, sans-serif' }}>Smooth Smoothies</Typography>
            <Typography variant="body1" className="text-white" sx={{ fontSize: "20px", overflowWrap: "break-word", flexGrow: "1", fontFamily: 'Roboto, sans-serif' }}>A multi-column, flexbox-based page layout and hero image with a tinted overlay.</Typography>
            <Button variant="solid" color="soft" href="https://clarisse78.github.io/WebDesignPortfolio/portfolio/smoothies/index.html" style={{ backgroundColor: 'white', color: 'black', border: '1px solid black', width: "fit-content", fontWeight: "bold", marginTop: "2%" }}>
              <Typography sx={{ fontSize: "18px", fontWeight: "600" }}>View project</Typography>
              <ArrowRightAltIcon sx={{ paddingLeft: "2%" }}></ArrowRightAltIcon>
            </Button>
          </Box>

          <Box sx={{ display: 'flex', flexDirection: 'column', maxWidth: "450px", gap: "5px" }} className="col-3">
            <Box sx={{ overflow: 'hidden', paddingBottom: "2%" }} className="photos-zoom photos-brightness">
              <a href="https://clarisse78.github.io/WebDesignPortfolio/portfolio/fashion/index.html">
                <img src="images/project-fashion.jpg" alt="Placeholder image" />
              </a>
            </Box>
            <Typography variant="h3" className="text-white" sx={{ fontSize: "25px", fontWeight: "700", fontFamily: 'Roboto, sans-serif' }}>Snazzy Fashion</Typography>
            <Typography variant="body1" className="text-white" sx={{ fontSize: "20px", overflowWrap: "break-word", flexGrow: "1", fontFamily: 'Roboto, sans-serif' }}>A web page for a fashion retailer with a background video that plays in a continuous loop.</Typography>
            <Button variant="solid" color="soft" href="https://clarisse78.github.io/WebDesignPortfolio/portfolio/fashion/index.html" style={{ backgroundColor: 'white', color: 'black', border: '1px solid black', width: "fit-content", fontWeight: "bold", marginTop: "2%" }}>
              <Typography sx={{ fontSize: "18px", fontWeight: "600" }}>View project</Typography>
              <ArrowRightAltIcon sx={{ paddingLeft: "2%" }}></ArrowRightAltIcon>
            </Button>
          </Box>
          <Box sx={{ display: 'flex', flexDirection: 'column', maxWidth: "450px", gap: "5px" }} className="col-3">
            <Box sx={{ overflow: 'hidden', paddingBottom: "2%" }} className="photos-zoom photos-brightness">
              <a href="https://clarisse78.github.io/WebDesignPortfolio/store/index.html">
                <img src="images/store.png" alt="Placeholder image" />
              </a>
            </Box>
            <Typography variant="h3" className="text-white" sx={{ fontSize: "25px", fontWeight: "700", fontFamily: 'Roboto, sans-serif' }}>Online Store</Typography>
            <Typography variant="body1" className="text-white" sx={{ fontSize: "20px", overflowWrap: "break-word", flexGrow: "1", fontFamily: 'Roboto, sans-serif' }}>An online store offering books on web design with affiliate links to Amazon.</Typography>
            <Button variant="solid" color="soft" href="https://clarisse78.github.io/WebDesignPortfolio/store/index.html" style={{ backgroundColor: 'white', color: 'black', border: '1px solid black', width: "fit-content", fontWeight: "bold", marginTop: "2%" }}>
              <Typography sx={{ fontSize: "18px", fontWeight: "600" }}>View project</Typography>
              <ArrowRightAltIcon sx={{ paddingLeft: "2%" }}></ArrowRightAltIcon>
            </Button>
          </Box>
        </Box>

      </Box>
    </Box >
  );
};

export default Portfolio;
