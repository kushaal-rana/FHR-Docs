import "./App.css";
import Navbar from "./components/Navbar";
import Sidebar1 from "./components/Sidebar";
import { BrowserRouter ,Route,Routes, } from "react-router-dom";
import MarkdownDisplay from "./components/MarkdownDisplay";

function App() {
  return (
    <BrowserRouter basename="/FHR-Docs">
    <div className="App">
      <Navbar />
      <Sidebar1 />
        <Routes>
          <Route
            path="/child_birthweight"
            element={<MarkdownDisplay markdownPath="child_birthweight.md" />}
          />
          <Route
            path="/child_diagnosis"
            element={<MarkdownDisplay markdownPath="child_diagnosis.md" />}
          />
          <Route
            path="/child_labs"
            element={<MarkdownDisplay markdownPath="child_labs.md" />}
          />
          <Route
            path="/child_procedures"
            element={<MarkdownDisplay markdownPath="child_procedures.md" />}
          />
          <Route
            path="/child_vitals"
            element={<MarkdownDisplay markdownPath="child_vitals.md" />}
          />
          <Route
            path="/fhr_signals"
            element={<MarkdownDisplay markdownPath="fhr_signals.md" />}
          />
          <Route
            path="/fhr_vitals"
            element={<MarkdownDisplay markdownPath="fhr_vitals.md" />}
          />
          <Route
            path="/help"
            element={<MarkdownDisplay markdownPath="help.md" />}
          />
          <Route
            path="/mother_apgar"
            element={<MarkdownDisplay markdownPath="mother_apgar.md" />}
          />
          <Route
            path="/mother_child_link"
            element={<MarkdownDisplay markdownPath="mother_child_link.md" />}
          />
          <Route
            path="/mother_diagnosis"
            element={<MarkdownDisplay markdownPath="mother_diagnosis.md" />}
          />
          <Route
            path="/mother_labs"
            element={<MarkdownDisplay markdownPath="mother_labs.md" />}
          />
          <Route
            path="/mother_prenatal_delivery"
            element={
              <MarkdownDisplay markdownPath="mother_prenatal_delivery.md" />
            }
          />
          <Route
            path="/About/sources/powerChart"
            element={
              <MarkdownDisplay markdownPath="About/sources/powerChart.md" />
            }
          />
          <Route
            path="/About/acknowledgements"
            element={
              <MarkdownDisplay markdownPath="About/acknowledgements.md" />
            }
          />
          <Route
            path="/About/glossary"
            element={
              <MarkdownDisplay markdownPath="About/glossary.md" />
            }
          />
          <Route
            path="/fhr/about/tutorials/queries"
            element={
              <MarkdownDisplay markdownPath="fhr/about/tutorials/queries.md" />
            }
          />
          <Route
            path="/fhr/about/datatypes"
            element={
              <MarkdownDisplay markdownPath="fhr/about/datatypes.md" />
            }
          />
          <Route
            path="/fhr/about/identifiers"
            element={
              <MarkdownDisplay markdownPath="fhr/about/identifiers.md" />
            }
          />
          <Route
            path="/fhr/about/io"
            element={
              <MarkdownDisplay markdownPath="fhr/about/io.md" />
            }
          />
          <Route
            path="/fhr/about/schema"
            element={
              <MarkdownDisplay markdownPath="fhr/about/schema.md" />
            }
          />
          <Route
            path="/fhr/about/time"
            element={
              <MarkdownDisplay markdownPath="fhr/about/time.md" />
            }
          />
          <Route
            path="/fhr/tutorials/queries"
            element={
              <MarkdownDisplay markdownPath="fhr/tutorials/queries.md" />
            }
          />
          <Route
            path="/gettingstarted/querybuilder"
            element={
              <MarkdownDisplay markdownPath="gettingstarted/querybuilder.md" />
            }
          />
        </Routes>
    </div>
      </BrowserRouter>
  );
}

export default App;
