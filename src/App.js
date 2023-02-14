import { ColorModeContext, useMode } from "./theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { Routes, Route } from "react-router-dom";
import Dashbord from "./scenes/dashboard"
import Sidebar from "./scenes/global/Sidebar"
import Topbar from "./scenes/global/Topbar"
import Team from "./scenes/team"
import Invoices from "./scenes/invoices"
import Contacts from "./scenes/contacts"
import Bar from "./scenes/bar"
import Form from "./scenes/form"
import Line from "./scenes/line"
import Pie from "./scenes/pie"
import FAQ from "./scenes/faq"
import Geography from "./scenes/geography"
import Calendar from "./scenes/calendar" 


function App() {
  const [theme, colorMode] = useMode();


  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <Sidebar />
          <main className="content">
            <Topbar />
            <Routes>
              <Route exact path="/" element={<Dashbord />} />
              <Route exact path="/team" element={<Team />} />
              <Route exact path="/contacts" element={<Contacts />} />
              <Route exact path="/Invoices" element={<Invoices />} />
              <Route exact path="/bar" element={<Bar />} /> 
              <Route exact path="/form" element={<Form />} />
              <Route exact path="/line" element={<Line />} /> 
              <Route exact path="/pie" element={<Pie />} /> 
              <Route exact path="/faq" element={<FAQ />} /> 
                 <Route exact path="/geography" element={<Geography />} /> 
              <Route exact path="/calendar" element={<Calendar />} />
            </Routes>
          </main>

        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>

  );
}

export default App;
