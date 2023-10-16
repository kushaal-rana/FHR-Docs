// Sidebar.js
import React from "react";
import { Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import "./sidebar.css";
import { Link } from "react-router-dom";
import Homepage from "./Homepage";

function Sidebar1() {
  return (
    <div style={{ display: "flex" }} className="sidebarDiv">
      <Sidebar className="sidebar">
        <Menu>
          <MenuItem className="menu1">
            <h3>
              <Link to="/">Docs</Link>
            </h3>
            <hr className="line" />
          </MenuItem>
          <MenuItem>
            <Link to="/help"> Help </Link>
          </MenuItem>
          <SubMenu label="About">
            <MenuItem>
              <Link to="/About/acknowledgements">Acknowledgements</Link>
            </MenuItem>
            <SubMenu label="Sources">
              <MenuItem>
                <Link to="/About/sources/powerChart">PowerChart</Link>{" "}
              </MenuItem>
            </SubMenu>
            <MenuItem>
              <Link to="/About/glossary">Glossary</Link>
            </MenuItem>
          </SubMenu>
          <SubMenu label="Getting Started">
            <MenuItem>
              <Link to="/gettingstarted/querybuilder">QueryBuilder</Link>
            </MenuItem>
          </SubMenu>
          <SubMenu label="FHR">
            <SubMenu label="About">
              <MenuItem>
                <Link to="/fhr/about/datatypes">Data</Link>
              </MenuItem>
              <MenuItem>
                <Link to="/fhr/about/identifiers">Patient Identifiers</Link>
              </MenuItem>
              <MenuItem>
                <Link to="/fhr/about/io">Inputs & Output</Link>
              </MenuItem>
              <MenuItem>
                <Link to="/fhr/about/time">Times</Link>
              </MenuItem>
              <MenuItem>
                <Link to="/fhr/about/schema">Schema</Link>
              </MenuItem>
            </SubMenu>
            <SubMenu label="Tables">
              <MenuItem>
                <Link to="/child_birthweight">child_birthweight</Link>
              </MenuItem>
              <MenuItem>
                <Link to="/child_diagnosis">child_diagnosis</Link>
              </MenuItem>
              <MenuItem>
                <Link to="/child_labs">child_labs</Link>
              </MenuItem>
              <MenuItem>
                <Link to="/child_procedures">child_procedures</Link>
              </MenuItem>
              <MenuItem>
                <Link to="/child_vitals">child_vitals</Link>
              </MenuItem>
              <MenuItem>
                <Link to="/fhr_signals">fhr_signals</Link>
              </MenuItem>
              <MenuItem>
                <Link to="/fhr_vitals">fhr_vitals</Link>
              </MenuItem>
              <MenuItem>
                <Link to="/mother_apgar">mother_apgar</Link>
              </MenuItem>
              <MenuItem>
                <Link to="/mother_child_link">mother_child_link</Link>
              </MenuItem>
              <MenuItem>
                <Link to="/mother_diagnosis">mother_diagnosis</Link>
              </MenuItem>
              <MenuItem>
                <Link to="/mother_labs">mother_labs</Link>
              </MenuItem>
              <MenuItem>
                <Link to="/mother_prenatal_delivery">
                  mother_prenatal_delivery
                </Link>
              </MenuItem>
            </SubMenu>
            <SubMenu label="Tutorials">
              <MenuItem>
                <Link to="/fhr/tutorials/queries">Postgres queries</Link>
              </MenuItem>
            </SubMenu>
          </SubMenu>
        </Menu>
      </Sidebar>
    </div>
  );
}

export default Sidebar1;
