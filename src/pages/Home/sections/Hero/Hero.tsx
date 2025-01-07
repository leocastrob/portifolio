import { Box, Container, Grid, styled, Typography } from "@mui/material"
import Avatar from "../../../../assets/imagens/Foto perfil.jpeg"
import DownloadIcon from '@mui/icons-material/Download';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import Botao from "../../../../componentes/Botao";
import theme from "../../../../tema";
import { AnimatedBackground } from "../../../../componentes/AnimatedBackground";

const Hero = () => {

    const Stylehero = styled("div")(({ theme }) => ({
        backgroundColor: theme.palette.primary.main,
        minHeight: "100vh", 
        width: "100vw", 
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        overflowX: "hidden",
      }));
      

    const Styleimg = styled("img")(({ theme }) => ({
        width: "100%",
        maxWidth: "320px",
        borderRadius: "50%",
        border: `1px solid ${theme.palette.primary.contrastText}`,
    }));


    return (
      <>
       <Stylehero>
       <Container maxWidth="lg">
                    <Grid container spacing={2}>
                        <Grid item xs={12} md={5}>
                            <Box position="relative">
                                <Box position="absolute" width={"150%"} top={-150} right={-100}>
                                    <AnimatedBackground />
                                </Box>
                                <Box position="relative" textAlign="center">
                                    <Styleimg src={Avatar} />
                                </Box>
                            </Box>
                        </Grid>
                        <Grid item xs={12} md={7}>
                            <Typography color="primary.contrastText" variant="h1" textAlign="center" pb={2}>Leonardo Castro</Typography>
                            <Typography color="primary.contrastText" variant="h2" textAlign="center" marginBottom={5}>Dev Front-End</Typography>
                            <Grid container display="flex" justifyContent="center" spacing={3} pt={3}>
                                <Grid item xs={12} md={4} display="flex" justifyContent="center">
                                    <Botao onClick = {()=> console.log("Download CV")}>
                                        <DownloadIcon />
                                        <Typography>
                                            Download CV
                                        </Typography>
                                    </Botao>
                                </Grid>
                                <Grid item xs={12} md={4} display="flex" justifyContent="center">
                                    <Botao onClick = {()=> console.log("Email")}>
                                        <MailOutlineIcon />
                                        <Typography>
                                            Entre em contato
                                        </Typography>
                                    </Botao>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Container>
        
       </Stylehero>
      </>
    )
  }
  
  export default Hero
  