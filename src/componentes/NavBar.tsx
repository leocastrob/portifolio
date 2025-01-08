import { AppBar, MenuItem, Toolbar, styled } from "@mui/material";

const NavBar = () => {
  const StyledToobar = styled(Toolbar)(() => ({
    display: "flex",
    justifyContent: "space-evenly",
    width: "100vw",
    overflowX: "hidden",
  }));

  return (
    <>
      <AppBar position="absolute">
        <StyledToobar>
          <MenuItem component="a" href="#sobre">Sobre</MenuItem>
          <MenuItem component="a" href="#skills">Skills</MenuItem>
          <MenuItem component="a" href="#projetos">Projetos</MenuItem>
        </StyledToobar>
      </AppBar>
    </>
  );
};

export default NavBar;
