import { Layout, Menu } from "antd";
import React, { useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import {
  MdOutlineWindow,
  MdOutlineMyLocation,
  MdReorder,
  MdVerified,
} from "react-icons/md";
import "./dash.css";
import Ahome from "./Ahome";
import Aservices from "./Aservices";

const { Sider, Content } = Layout;
const Dashboard = () => {
  const navigate = useNavigate();
  const [collapsed, setCollapsed] = useState(false);

  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };

  const items = [
    {
      key: "/api/dashboard/homes",
      icon: <MdOutlineWindow />,
      label: "Home Services",
    },

    {
      key: "/api/dashboard/services",
      icon: <MdOutlineMyLocation />,
      label: "Services",
    },
  ];

  return (
    <Layout>
      <Sider
        collapsedWidth={80}
        trigger={null}
        collapsed={collapsed}
        collapsible
        width={220}
        className="sidebar"
      >
        <div>
          <div className="hammenu">
            <MdReorder size={25} onClick={toggleCollapsed} />
          </div>
          {!collapsed && (
            <>
              <div className="name-icon">
                <h1>
                  Admin
                  <MdVerified
                    style={{
                      color: "#1DA1F2",
                      marginLeft: "5px",
                    }}
                  />
                </h1>
              </div>
            </>
          )}
          <Menu
            className="side-nav"
            onClick={(e) => {
              navigate(e.key);
            }}
            items={items}
          />
        </div>
      </Sider>
      <Content className="main-content">
        <Routes>
          <Route path="/api/dashboard" element={<Ahome />} />
          <Route path="/api/dashboard/homes" element={<Ahome />} />
          <Route path="/api/dashboard/services" element={<Aservices />} />
        </Routes>
      </Content>
    </Layout>
  );
};

export default Dashboard;
