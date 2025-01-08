import { Box, Container, Grid, styled, Typography } from "@mui/material";
import Botao from "../../../../componentes/Botao";
import { AnimatedBackground } from "../../../../componentes/AnimatedBackground";

const StyleProjects = styled("div")(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  width: "100vw",
  padding: "4rem 0",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledCard = styled("div")(({ theme }) => ({
  backgroundColor: theme.palette.primary.contrastText,
  color: theme.palette.text.primary,
  borderRadius: "10px",
  overflow: "hidden",
  boxShadow: theme.shadows[5],
  transition: "transform 0.3s ease",
  display: "flex",
  flexDirection: "column",

  "&:hover": {
    transform: "scale(1.05)",
  },
}));

const StyledImage = styled("img")({
  width: "100%",
  height: "200px",
  objectFit: "cover",
});

const projects = [
  {
    title: "Project Exemple",
    date: "Jul 2023 - Dez 2023",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras porta semper velit vel rutrum.",
    image: "https://via.placeholder.com/300x200.png?text=Project+Image",
    technologies: "JavaScript, HTML, CSS, Canvas Graphics",
    projectLink: "#",
    codeLink: "#",
  },
  {
    title: "Project Exemple",
    date: "Jul 2023 - Dez 2023",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras porta semper velit vel rutrum.",
    image: "https://via.placeholder.com/300x200.png?text=Project+Image",
    technologies: "JavaScript, HTML, CSS, Canvas Graphics",
    projectLink: "#",
    codeLink: "#",
  },
];

const PortfolioSection = () => {
  return (
    <StyleProjects>
      <Container maxWidth="lg">
        <Typography variant="h2" color="primary.contrastText" textAlign="center" gutterBottom>
          Projects
        </Typography>
        <Grid container spacing={4} justifyContent="center">
          {projects.map((project, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <StyledCard>
                <StyledImage src={project.image} alt={project.title} />
                <Box padding={2}>
                  <Typography variant="h6" gutterBottom>
                    {project.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {project.date}
                  </Typography>
                  <Typography variant="body2" my={2}>
                    {project.description}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Technologies: {project.technologies}
                  </Typography>
                </Box>
                <Box display="flex" justifyContent="space-between" p={2}>
                  <Botao href={project.projectLink} target="_blank">
                    Ver Projeto
                  </Botao>
                  <Botao href={project.codeLink} target="_blank">
                    Ver Código
                  </Botao>
                </Box>
              </StyledCard>
            </Grid>
          ))}
        </Grid>
      </Container>
    </StyleProjects>
  );
};

export default PortfolioSection;
