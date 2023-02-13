import { useState } from "react";
import FullCalendar, { formatDate } from "@fullcalendar/react"
import dayGridPlugin from "@fullcalendar/daygrid"
import timeGridPlugin from "@fullcalendar/timegrid"
import listPlugin from "@fullcalendar/list"
import interactionPluguin from "@fullcalendar/interaction"
import { tokens } from "../../theme";
import {
    Box,
    List,
    ListItem,
    ListItemText,
    Typography,
    useTheme,
} from "@mui/material"
import Header from "../../components/Header";
import { Token } from "../../theme"

const Calendar = () => {
    const theme = useTheme()
    const colors = tokens(theme.palette.mode)
    const [currentEvents, setCurrentEvents] = useState([])

    const handleDataClick = (selected) => {
        const title = prompt("Please enter a new title for your event ")
        const calendarApi = selected.view.Calendar
        calendarApi.unselect()

        if (title) {
            calendarApi.addEvent({
                id: `${selected.dateStr}-${title}`,
                title,
                start: selected.startStr,
                end: selected.endStr,
                allDay: selected.allDay,
            })
        }
    }
const handleEventClick= (selected) => {
    if (
        window.confirm(
            `Are you sure you want to delete the event '${selected.event.title}'`
        )
    ){
        selected.event.remove()
    }
}
return <Box m="20px">
<Header title="CALENDAR" 
</Box>

}

export default Calendar