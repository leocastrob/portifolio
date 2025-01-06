import { styled } from "@mui/material"
import theme from "../tema"
import { ReactNode } from "react"

interface StylebuttonProps {
  children: ReactNode
  onClick : () => void
}

const Stylebutton: React.FC<StylebuttonProps> = ({ children, onClick }) => {

    const Stylebutton = styled("button")(()=> ({
        backgroundColor: "transparent",
        border: `1px solid ${theme.palette.primary.contrastText}`,
        borderRadius : "3px",
        padding: "5px 15px",
        width: "100%",
        color: theme.palette.primary.contrastText,
        display: "inline-flex",
        alignItems : "center",
        justifyContent: "center",
        gap: "10px",
        '&:hover': {
            backgroundColor: theme.palette.secondary.light
        }
         
     }))

    return (
      <>
      <Stylebutton onClick={onClick}>
        {children}
      </Stylebutton>
      </>
    )
  }
  
  export default Stylebutton
  