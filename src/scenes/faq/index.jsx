import { Box, Typography, useTheme } from "@mui/material"
import Header from "../../components/Header"
import Accordion from "@mui/material/Accordion"
import AccordionSummary from "@mui/material/AccordionSummary"
import AccordionDetails from "@mui/material/AccordionDetails"
import ExpandMoreIcon from "@mui/icons-material/ExpandMore"
import { tokens } from "../../theme"

const FAQ = () => {
    const theme = useTheme()
    const colors = tokens(theme.palette.mode)



    return (
        <Box m="20px">
            <Header title="FAQ" subtitle="Frequently Asked Questions Page" />
            <Accordion defaultExpanded>
                <AccordionSummary expandIcon={<ExpandMoreIcon />} >
                    <Typography color={colors.greenAccent[500]} variant="h5">
                        Another importan question
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Dolor ea do proident aute elit exercitation id proident labore nulla sit consectetur ea.
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion defaultExpanded>
                <AccordionSummary expandIcon={<ExpandMoreIcon />} >
                    <Typography color={colors.greenAccent[500]} variant="h5">
                        Your  importan question
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Dolor ea do proident aute elit exercitation id proident labore nulla sit consectetur ea.
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion defaultExpanded>
                <AccordionSummary expandIcon={<ExpandMoreIcon />} >
                    <Typography color={colors.greenAccent[500]} variant="h5">
                        final importan question
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Dolor ea do proident aute elit exercitation id proident labore nulla sit consectetur ea.
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion defaultExpanded>
                <AccordionSummary expandIcon={<ExpandMoreIcon />} >
                    <Typography color={colors.greenAccent[500]} variant="h5">
                        importan question
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Dolor ea do proident aute elit exercitation id proident labore nulla sit consectetur ea.
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion defaultExpanded>
                <AccordionSummary expandIcon={<ExpandMoreIcon />} >
                    <Typography color={colors.greenAccent[500]} variant="h5">
                        Good importan question
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Dolor ea do proident aute elit exercitation id proident labore nulla sit consectetur ea.
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion defaultExpanded>
                <AccordionSummary expandIcon={<ExpandMoreIcon />} >
                    <Typography color={colors.greenAccent[500]} variant="h5">
                        Last importan question
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Dolor ea do proident aute elit exercitation id proident labore nulla sit consectetur ea.
                    </Typography>
                </AccordionDetails>
            </Accordion>



        </Box>
    )
}

export default FAQ 