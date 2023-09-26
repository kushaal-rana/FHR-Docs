// Sidebar.js
import React from "react";
import { Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import "./sidebar.css";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import MarkdownDisplay from "./MarkdownDisplay";

function Sidebar1() {
  return (
    <div style={{ display: "flex", height: "100vh" }} className="sidebarDiv">
      <Sidebar className="sidebar">
        <Menu>
          <MenuItem className="menu1">
            <h3>
              <a href="#">Docs</a>
            </h3>
            <hr className="line" />
          </MenuItem>
          <MenuItem> Help </MenuItem>
          <SubMenu label="About">
            <MenuItem>Acknowledgements</MenuItem>
            <SubMenu label="Sources">
              <MenuItem> PowerChart </MenuItem>
            </SubMenu>
            <MenuItem>Glossary</MenuItem>
          </SubMenu>
          <SubMenu label="Getting Started">
            <MenuItem>QueryBuilder</MenuItem>
          </SubMenu>
          <SubMenu label="FHR">
            <SubMenu label="About">
              <MenuItem>Data</MenuItem>
              <MenuItem>Patient Identifiers</MenuItem>
              <MenuItem>Inputs & Output</MenuItem>
              <MenuItem>Times</MenuItem>
              <MenuItem>Schema</MenuItem>
            </SubMenu>
            <SubMenu label="Tables">
              <MenuItem>child_birthweight</MenuItem>
              <MenuItem>child_diagnosis</MenuItem>
              <MenuItem>child_labs</MenuItem>
              <MenuItem>child_procedures</MenuItem>
              <MenuItem>child_vitals</MenuItem>
              <MenuItem>fhr_signals</MenuItem>
              <MenuItem>fhr_vitals</MenuItem>
              <MenuItem>mother_apgar</MenuItem>
              <MenuItem>mother_child_link</MenuItem>
              <MenuItem>mother_diagnosis</MenuItem>
              <MenuItem>mother_labs</MenuItem>
              <MenuItem>mother_prenatal_delivery</MenuItem>
            </SubMenu>
            <SubMenu label="Tutorials">
              <MenuItem>Postgres queries</MenuItem>
            </SubMenu>
          </SubMenu>
        </Menu>
      </Sidebar>
      <Router>
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
            path="/mother_peternal_delivery"
            element={
              <MarkdownDisplay markdownPath="mother_peternal_delivery.md" />
            }
          />
        </Routes>
      </Router>
    </div>
  );
}

export default Sidebar1;
