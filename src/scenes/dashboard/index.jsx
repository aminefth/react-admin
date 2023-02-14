import { Box, Button, IconButton, typography, useTheme } from "@mui/material"
import Header from "../../components/Header"
import { tokens } from "../../theme"
import { mockTransations } from "../../data/mockData"
import DownloadOutlinedIcon from "@mui/icons-material/DownloadDoneOutlined"
import EmailIcon from "@mui/icons-material/Email"
import PointOfSaleIcon from "@mui/icons-material/PointOfSale"
import PersonAddIcon from "@mui/icons-material/PersonAdd"
import TrafficIcon from "@mui/icons-material/Traffic"
import LineChart from "../../components/LineChart"
import BarChart from "../../components/BarChart"
import GeographyChart from "../../components/GeographyChart"
import StateBox from "../../components/StateBox"
import ProgressCercle from "../../components/ProgressCercle"






const Dashboard = () => {
    const theme = useTheme()
    const colors = tokens(theme.palette.mode)

    return (
        <Box m="20px">
            <Box display='flex' justifyContent="space-between" alignItems="center">
                <Header title="DASHBOARD" subtitle="Welcome to your dashboard" />

                <Box>
                    <Button
                        sx={{
                            backgroundColor: colors.blueAccent[700],
                            color: colors.grey[100],
                            fontSize: "14px",
                            fontWeight: "bold",
                            padding: "10px 20px",
                        }}
                    >
                        <DownloadOutlinedIcon sx={{ ml: "10px" }} />
                        Download Reports
                    </Button>
                </Box>
            </Box>
            {/* GRIS SYSTEM DASH */}
            <Box
                display="grid"
                gridTemplateColumns="repeat(12, 1fr)"
                gridAutoRows="140px"
                gap="20px"
            >
                {/* ROW 1 */}
                <Box gridColumn="span 3" backgroundColor={colors.primary[400]} display="flex" alignItems="center" justifyContent="center">
                    <StateBox
                        title="12,361"
                        subtitle="Email Sent"
                        progress="0.75"
                        increase="+14%"
                        icon={
                            <EmailIcon
                                sx={{
                                    color: colors.greenAccent[600], fontSize: "26px"
                                }}
                            />
                        }
                    />
                </Box>


                <Box gridColumn="span 3" backgroundColor={colors.primary[400]} display="flex" alignItems="center" justifyContent="center">
                    <StateBox
                        title="4321,361"
                        subtitle="Sales Obtained"
                        progress="0.5"
                        increase="+23%"
                        icon={
                            <PointOfSaleIcon
                                sx={{
                                    color: colors.greenAccent[600], fontSize: "26px"
                                }}
                            />
                        }
                    />
                </Box>


                {/* ROW 1 */}
                <Box gridColumn="span 3" backgroundColor={colors.primary[400]} display="flex" alignItems="center" justifyContent="center">
                    <StateBox
                        title="32,441"
                        subtitle="New Client"
                        progress="0.55"
                        increase="+34%"
                        icon={
                            <PersonAddIcon
                                sx={{
                                    color: colors.greenAccent[600], fontSize: "26px"
                                }}
                            />
                        }
                    />
                </Box>

                {/* ROW 1 */}
                <Box gridColumn="span 3" backgroundColor={colors.primary[400]} display="flex" alignItems="center" justifyContent="center">
                    <StateBox
                        title="12,361"
                        subtitle="Traffic Inbound"
                        progress="0.75"
                        increase="+14%"
                        icon={
                            <TrafficIcon
                                sx={{
                                    color: colors.greenAccent[600], fontSize: "26px"
                                }}
                            />
                        }
                    />
                </Box>
                {/* Row 2 */}

            </Box>


        </Box>
    )
}

export default Dashboard