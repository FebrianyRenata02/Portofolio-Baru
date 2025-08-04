import React from "react";
import "./JobSnapCard.css";

type JobProps = {
  fileName: string;
  position: string;
  company: string;
  period: string;
  responsibilities: string;
  status: string;
};

const JobSnapCard: React.FC<JobProps> = ({
  fileName,
  position,
  company,
  period,
  responsibilities,
  status,
}) => {
  return (
    <div className="job-card">
      <div className="job-card-header">{fileName}</div>
      <code className="job-card-body">
        <div>{"> $ cat/etc/profile"}</div>
        <div>{`> POSITION="${position}"`}</div>
        <div>{`> COMPANY="${company}"`}</div>
        <div>{`> PERIOD="${period}"`}</div>
        <div>{"> RESPONSIBILITIES=("}</div>
        <div className="job-indent">{`> "${responsibilities}"`}</div>
        <div>{"> )"}</div>
        <div>{`> STATUS="${status}"`}</div>
      </code>
    </div>
  );
};

export default JobSnapCard;
