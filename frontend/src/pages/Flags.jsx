import { useEffect, useState } from "react";
import api from "../services/api";

function Flags() {
  const [flags, setFlags] = useState([]);

  const [formData, setFormData] = useState({
    documentId: "",
    pageNumber: "",
    issueType: "",
    note: "",
    createdBy: "",
  });

  const getFlags = async () => {
    try {
      const response = await api.get("/flags");
      setFlags(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getFlags();
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await api.post("/flags", formData);

      alert("Flag Created Successfully");

      setFormData({
        documentId: "",
        pageNumber: "",
        issueType: "",
        note: "",
        createdBy: "",
      });

      getFlags();
    } catch (error) {
      console.log(error);
    }
  };

  const resolveFlag = async (id) => {
    try {
      await api.put(`/flags/${id}`, {
        status: "Resolved",
      });

      alert("Flag Resolved");
      getFlags();
    } catch (error) {
      console.log(error);
    }
  };

  const deleteFlag = async (id) => {
    try {
      await api.delete(`/flags/${id}`);

      alert("Flag Deleted");
      getFlags();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container">
       <h1 className="flags-title">All Flags</h1>

      <div className="form-container">
        <form onSubmit={handleSubmit}>
          <input
            name="documentId"
            placeholder="Document ID"
            value={formData.documentId}
            onChange={handleChange}
            required
          />

          <input
            name="pageNumber"
            placeholder="Page Number"
            value={formData.pageNumber}
            onChange={handleChange}
            required
          />

          <select
            name="issueType"
            value={formData.issueType}
            onChange={handleChange}
            required
          >
            <option value="">Select Issue Type</option>
            <option value="Blur">Blur</option>
            <option value="Cut-off">Cut-off</option>
            <option value="Rotated">Rotated</option>
            <option value="Missing Page">Missing Page</option>
          </select>

          <input
            name="note"
            placeholder="Note"
            value={formData.note}
            onChange={handleChange}
            required
          />

          <input
            name="createdBy"
            placeholder="Created By"
            value={formData.createdBy}
            onChange={handleChange}
            required
          />

          <button type="submit">Create Flag</button>
        </form>
      </div>

      <table>
        <thead>
          <tr>
            <th>Document ID</th>
            <th>Page</th>
            <th>Issue Type</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {flags.map((flag) => (
            <tr key={flag._id}>
              <td>{flag.documentId}</td>
              <td>{flag.pageNumber}</td>
              <td>{flag.issueType}</td>

              <td>
                <span
                  className={
                    flag.status === "Resolved"
                      ? "status-resolved"
                      : "status-flagged"
                  }
                >
                  {flag.status}
                </span>
              </td>

              <td>
                <button
                  onClick={() => resolveFlag(flag._id)}
                  style={{
                    marginRight: "10px",
                    background: "green",
                    color: "white",
                    border: "none",
                    padding: "8px",
                    borderRadius: "5px",
                    cursor: "pointer",
                  }}
                >
                  Resolve
                </button>

                <button
                  onClick={() => deleteFlag(flag._id)}
                  style={{
                    background: "red",
                    color: "white",
                    border: "none",
                    padding: "8px",
                    borderRadius: "5px",
                    cursor: "pointer",
                  }}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Flags;