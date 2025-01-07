import { Box, Container, Grid, styled, Typography, Paper } from "@mui/material";
import theme from "../../../../tema";
const Sobre = () => {
  const StyleSobre = styled("div")(({ theme }) => ({
    backgroundColor: theme.palette.background.default,
    padding: "50px 0",
    margin: "10px",
    alignItems: "center",
    minHeight: "100vh",
    color: theme.palette.text.primary,
    overflow: "hidden"
  }));

  const SectionTitle = styled(Typography)(({ theme }) => ({
    color: theme.palette.primary.main,
    marginBottom: "20px",
    textAlign: "center",
  }));

  const TextContent = styled(Typography)(({ theme }) => ({
    lineHeight: 1.6,
    textAlign: "center",
    marginBottom: "20px",
  }));

  const InfoCard = styled(Paper)(({ theme }) => ({
    padding: "20px",
    textAlign: "center",
    height:"210px",
    boxShadow: theme.shadows[3],
  }));

  const SkillButton = styled(Box)(({ theme }) => ({
    border: `1px solid ${theme.palette.primary.main}`,
    borderRadius: "5px",
    padding: "10px 20px",
    textAlign: "center",
    color: theme.palette.primary.main,
    fontWeight: "bold",
    cursor: "pointer",
    transition: "all 0.3s ease",
    '&:hover': {
      backgroundColor: theme.palette.primary.main,
      color: theme.palette.primary.contrastText,
    },
  }));

  return (
    <StyleSobre>
      <Container maxWidth="lg" style={{ padding: "0 20px", overflowX: "hidden" }}>
        
        <SectionTitle variant="h2">Sobre</SectionTitle>
        <Grid container spacing={3} justifyContent="center" pb={5}>
          <Grid item xs={12} md={5}>
            <InfoCard>
              <Typography variant="h6" gutterBottom>
                Experiencia
              </Typography>

              <Typography variant="body1">1+ anos, Desenvolvedor Front-End</Typography>

              <Typography variant="body2">Experiência no desenvolvimento de interfaces de usuário atraentes e acessíveis, com foco em melhorar a experiência do usuário. Trabalho com práticas modernas de desenvolvimento, como versionamento com Git, design responsivo e uso de metodologias ágeis para entrega de projetos eficientes e de alta qualidade.</Typography>

            </InfoCard>
          </Grid>
          <Grid item xs={12} md={5}>
            <InfoCard>
              <Typography variant="h6" gutterBottom>
                Educação
              </Typography>
              <Typography variant="body1">Cursando Analise e Desenvolvimento de Sistemas</Typography>
              <Typography variant="body2">Faculdade UFBRA
              Atualmente desenvolvendo habilidades em computação, algoritmos, estruturas de dados e desenvolvimento de software, com foco em construir soluções tecnológicas modernas e escaláveis.</Typography>
            </InfoCard>
          </Grid>
        </Grid>

        {/* Description */}
        <TextContent variant="h6">
        Olá! Meu nome é Leonardo Castro e sou um desenvolvedor Front-End apaixonado por criar experiências digitais únicas e envolventes. Tenho experiência sólida em HTML, CSS, JavaScript e frameworks modernos como React, Angular e Vue.js. Além disso, possuo um profundo interesse em aprimorar minhas habilidades em back-end, bancos de dados e integração de APIs para me tornar um desenvolvedor Full Stack. Meu objetivo é transformar ideias criativas em interfaces intuitivas e funcionais, sempre com foco em inovação e qualidade.
        </TextContent>

        {/* Skills Section */}
        <SectionTitle variant="h3">Skills</SectionTitle>
        <Grid container spacing={3} justifyContent="center">
          {["Javascript", "Typescript", "React","Angular","Vue.js", "Next", "Git", "HTML", "CSS", "Tailwind CSS","Bootstrap", "Material UI", "Figma"].map((skill, index) => (
            <Grid item key={index}>
              <SkillButton>{skill}</SkillButton>
            </Grid>
          ))}
        </Grid>
      </Container>
    </StyleSobre>
  );
};

export default Sobre;
