import "./JobCard.css";

const JobCard = ({ title, company, location, salary, type }) => {
  return (
    <div className="job-card">
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start",
          marginBottom: "1rem"
        }}
      >
        <h3>{title}</h3>

        <span
          style={{
            background: "#D1BB9E",
            color: "#3C2F2F",
            padding: "4px 12px",
            borderRadius: "20px",
            fontSize: "0.85rem",
            fontWeight: "600"
          }}
        >
          {type}
        </span>
      </div>

      <p className="company">{company}</p>
      <p> Location: {location}</p>
      <p> Salary: {salary}</p>

      <button className="detail-btn">
        View Details & Apply
      </button>
    </div>
  );
};

export default JobCard;