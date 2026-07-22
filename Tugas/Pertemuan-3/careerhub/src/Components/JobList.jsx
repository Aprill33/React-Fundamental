import "./JobList.css";
import JobCard from './JobCard';

const JobList = () => {
  const jobs = [
    {
      title: "Frontend Developer",
      company: "PT. TechVision Indonesia",
      location: "Jakarta ",
      salary: "Rp 12.000.000",
      type: "Full-time"
    },
    {
      title: "Backend Developer",
      company: "PT. Digital Nusantara",
      location: "Bandung",
      salary: "Rp 10.000.000",
      type: "Full-time"
    },
    {
      title: "UI/UX Designer",
      company: "PT. Creative Studio",
      location: "Yogyakarta",
      salary: "Rp 8.500.000",
      type: "Hybrid"
    },
    {
      title: "Mobile Developer",
      company: "PT. Smart Solution",
      location: "Surabaya",
      salary: "Rp 11.000.000",
      type: "Remote"
    },
    {
      title: "Data Analyst",
      company: "PT. Data Insight",
      location: "Bekasi",
      salary: "Rp 9.500.000",
      type: "Full-time"
    },
    {
      title: "DevOps Engineer",
      company: "PT. Cloud Technology Indonesia",
      location: "Semarang",
      salary: "Rp 13.000.000",
      type: "Hybrid"
    }
  ];
  return (
    <section className="job-list" id="job-list">
      <h2>Latest Job Vacancies</h2>

      <div className="jobs-container">
        {jobs.map((job, index) => (
          <JobCard
            key={index}
            title={job.title}
            company={job.company}
            location={job.location}
            salary={job.salary}
            type={job.type}
          />
        ))}
      </div>
    </section>
  );
};

export default JobList;