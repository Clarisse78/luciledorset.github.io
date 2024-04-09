import { Button } from "flowbite-react";
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Badge from '@mui/material/Badge';
import { Link } from "react-router-dom";

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
              <Button variant="contained" sx={{ backgroundColor: '#00ADB5' }}>
                <Link to="/portfolio" style={{ color: 'white', textDecoration: 'none' }}>View my work</Link>
              </Button>
              <Button variant="outlined" sx={{ backgroundColor: '#00ADB5' }} >
                <Link to="/contact">Get in touch</Link>
              </Button>
            </Box>
          </Box>
          <Box sx={{ flex: '1' }}>
            <picture>
              <source media="(min-width: 768px)" srcSet="../public/images/lucile_cri_petit-min.png" />
              <source media="(max-width: 767px)" srcSet="../public/images/android-chrome-192x192.png" />
              <img className="main-img" src="../public/images/lucile_cri_petit-min.png" alt="Lucile Pelou" />
            </picture>
          </Box>
        </Box>
      </div>
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '1356px' }} className="theme-dark section-selector-1">
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '820px' }} className="col-1 text-center">
          <Typography variant="h2">Recent projects</Typography>
          <Typography variant="h3">
            Below you can see some examples of my recent work. Check out my complete portfolio of
            <Link to="/portfolio">web design</Link> projects. Have a project you would like to discuss?
            <Link to="/contact">Let's make something great together!</Link>
          </Typography>
        </Box>

        <Box sx={{ display: 'flex', justifyContent: 'space-between', width: '100%' }} className="flex-cols-3 cols-gap-4">
          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }} className="col-3">
            <Box sx={{ overflow: 'hidden' }} className="photos-zoom photos-brightness">
              <Link to="https://clarisse78.github.io/Lexia/">
                <img src="assets/img/project-dev-portfolio-min.png" alt="Placeholder image" />
              </Link>
            </Box>
            <Typography variant="h3">Development Portfolio</Typography>
            <Typography variant="body1">An another website Portfolio for my development projects.</Typography>
            <Button variant="solid" color="soft" href="https://clarisse78.github.io/Lexia/">
              View project
            </Button>
          </Box>

          {/* Repeat the above Box for other projects... */}
        </Box>
      </Box>
    </Box>
  );
};

export default Home;