import DashboardSidebar from "../pages/dashboad/DashboardSidebar";

import { Outlet } from "react-router-dom";
import "./Dashboard.css";
import { Container } from "react-bootstrap";

const Dashboard = () => {

  return (
    <Container style={{ padding: "0px" }}>
      <div className="dashboard-parent">
        <div className="dashboard-side-bar">
          <DashboardSidebar></DashboardSidebar>
        </div>
        <div className="dashboard-content">
          <Outlet></Outlet>
        </div>
      </div>
    </Container>
  );
};

export default Dashboard;
