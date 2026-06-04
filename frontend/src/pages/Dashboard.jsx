import { useEffect, useState } from "react";
import api from "../services/api";

function Dashboard() {
  const [stats, setStats] = useState({
    totalFlags: 0,
    resolvedCount: 0,
    flaggedCount: 0,
  });

  useEffect(() => {
    fetchDashboard();
  }, []);

  const fetchDashboard = async () => {
    try {
      const res = await api.get("/dashboard");
      setStats(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="container">
      <h1 className="dashboard-title">
  PDF Evaluation & Quality Review System
</h1>

      <div className="stats-container">
        <div className="stat-card">
          <h2>📄 Total Flags</h2>
          <p>{stats.totalFlags}</p>
        </div>

        <div className="stat-card">
          <h2>✅ Resolved</h2>
          <p>{stats.resolvedCount}</p>
        </div>
<div className="stat-card">
  <h2>🔍 Blur</h2>
  <p>{stats.blurCount}</p>
</div>

<div className="stat-card">
  <h2>🔄 Rotated</h2>
  <p>{stats.rotatedCount}</p>
</div>

<div className="stat-card">
  <h2>📑 Missing Page</h2>
  <p>{stats.missingPageCount}</p>
</div>

        <div className="stat-card">
          <h2>🚩 Flagged</h2>
          <p>{stats.flaggedCount}</p>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;