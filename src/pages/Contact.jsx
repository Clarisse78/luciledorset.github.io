import { Button, TextField, Container, Typography } from '@mui/material';
import { Box } from '@mui/system';

const Contact = () => {
  return (
    <Box sx={{
      backgroundColor: '#2d3748', margin: 'auto', alignItems: "center", display: "flex", flexDirection: 'column',
    }} >
      <Container className="container-text ">
        <Typography variant="h1" sx={{
          fontFamily: 'Roboto, sans-serif', fontSize: '80px', color: "#00ADB5",
          marginTop: "4%"
        }}>Get in touch</Typography>
        <Typography variant="h2"
          component="div"
          sx={{ fontFamily: 'Roboto, sans-serif', fontSize: '32px', marginTop: '2%', marginBottom: '5%', color: "white", maxWidth: "1250px" }}>
          Have a project you would like to discuss? Let's make something great together! Email me at{' '}
          <a href="mailto:Clarisse787878@gmail.com?subject=Mail from my Personal Website">
            Clarisse787878@gmail.com
          </a>{' '}
          or use the form below to let me know a little more about your objectives and I'll get back to you.
        </Typography>
      </Container>


      <Box className="theme-dark section-selector-1 flex flex-row" sx={{ marginBottom: "5%" }} >
        <Box className="col-2 col-visual">
          <figure>
            <img width="80%" src="https://lunevedy.com/ui/assets/img/800x900-typing.jpg" alt="Placeholder image" />
          </figure>
        </Box>

        <Box className="col-2 col-text">
          <form id="email-form" name="email-form" charset="utf-8" method="post" action="https://formspree.io/f/mnqepbpr">
            <Box className="form-row" width="350px" sx={{ marginBottom: "2%" }}>
              <Typography sx={{ color: "white" }}>Full name</Typography>
              <TextField name="full_name" id="full_name" sx={{ backgroundColor: "white", borderRadius: "5px" }} required />
            </Box>

            <Box className="form-row" width="350px" sx={{ marginBottom: "2%" }}>
              <Typography sx={{ color: "white" }}>Email</Typography>
              <TextField type="email" name="email_address" id="email_address" sx={{ backgroundColor: "white", borderRadius: "5px" }} required />
            </Box>

            <Box className="form-row" width="350px" sx={{ marginBottom: "2%" }}>
              <Typography sx={{ color: "white" }}>How can I help you?</Typography>
              <TextField multiline rows={3} name="form_message" id="form_message" sx={{ backgroundColor: "white", borderRadius: "5px" }} required />
            </Box>

            <Box className="form-footer">
              <Button variant="contained" sx={{ backgroundColor: '#00ADB5' }} id="btn-submit" className="btn-solid" type="submit" aria-label="Send message">
                Send
              </Button>
            </Box>
          </form>
        </Box>
      </Box>
    </Box >
  );
};

export default Contact;