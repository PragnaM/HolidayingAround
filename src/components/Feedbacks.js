import React, { useEffect, useState } from "react";
import "../css/Destinations.scss";
import axios from "axios";

function Feedbacks() {
  const [feedbacks, setFeedbacks] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3001/feedbacks")
      .then((res) => {
        console.log(res.data);
        setFeedbacks(res.data);
      })
      .catch((err) => {
        if (err.response.status === 500) {
          console.log("There was a problem with the server");
        } else {
          console.log(err.response.data.msg);
        }
      });
  }, []);

  return (
    <div className="content">
      <p style={{ fontSize: "40px" }}>
        <u> Other's feedbacks and experiences</u>
      </p>
      <table>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Feedback</th>
        </tr>
        {feedbacks.map((fb) => (
          <tr>
            <td>{fb.name}</td>
            <td>{fb.email}</td>
            <td>{fb.feedback}</td>
          </tr>
        ))}
      </table>
    </div>
  );
}

export default Feedbacks;
