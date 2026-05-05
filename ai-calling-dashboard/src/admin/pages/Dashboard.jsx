import Card from "../components/Card";
import "./Dashboard.css";

const Dashboard = () => {
  return (
    <div>
      <h2>Dashboard</h2>

      <div className="cards">
        <Card title="Total Calls" value="1240" />
        <Card title="Active Calls" value="32" />
        <Card title="Success Rate" value="78%" />
        <Card title="Failed Calls" value="18%" />
      </div>
    </div>
  );
};

export default Dashboard;