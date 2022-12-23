import React from "react";
import { useState } from "react";
import rainylake from "../images/RainyLakePortrait.JPG";
import mtrainier from "../images/MtRainierPortrait.jpg";
import hurricaneridge from "../images/HurricaneRidgePortrait.jpg";
import "../css/Mainsection-style.scss";
import axios from "axios";

function MainSection() {
  const [unhide, setUnhide] = useState(false);
  const [fileErr, setFileErr] = useState(false);
  const [errMsg, setErrMsg] = useState("");
  const [file, setFile] = useState("");
  const [images, setImages] = useState([]);

  //File input type validation
  const checkfileinput = (e) => {
    setFile(e.target.files[0]);
    setFileErr(false);
    setErrMsg("");
    let fileInput = document.getElementById("myfile");
    let filePath = fileInput.value;

    // Allowing file type
    let allowedExtensions = /(\.jpg|\.jpeg|\.png)$/i;
    if (!allowedExtensions.exec(filePath)) {
      setFileErr(true);
      setErrMsg(
        "Invalid file type. Please enter files with png,jpeg,jpg extensions only"
      );
      fileInput.value = "";
    }
  };

  const feedbackvalidate = (e) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.target).entries());
    let email = data.email;
    let firstname = data.firstname;
    let feedback = data.feedback;
    if (firstname === "")
      return alert("First name cannot be null. Please Enter something.");
    if (feedback === "")
      return alert("Feedback cannot be null. Please Enter something.");
    if (email === "") alert("Email id cannot be null. Please Enter something.");
    if (
      // eslint-disable-next-line
      !/^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/.test(email)
    )
      alert("You have entered an invalid email address!");
    axios
      .post("http://localhost:3001/feedback", {
        firstname,
        email,
        feedback,
      })
      .then((res) => {
        console.log(res.statusText);
        alert("Feedback sent successfully");
        data.firstname = "";
        data.email = "";
        data.feedback = "";
      })
      .catch((err) => {
        if (err.response.status === 500) {
          console.log("There was a problem with the server");
        } else {
          console.log(err.response.data.msg);
        }
      });
  };

  const uploadfile = (e) => {
    e.preventDefault();
    const formData = new FormData();
    if (!file) return alert("Please select a file to upload");
    formData.append("file", file);
    let fileInput = document.getElementById("myfile");
    axios
      .post("http://localhost:3001/upload", formData, {})
      .then((res) => {
        console.log(res.statusText);
        alert("File uploaded successfully");
        setFile("");
        fileInput.value = "";
        setImages([...images, res.data]);
      })
      .catch((err) => {
        if (err.response.status === 500) {
          console.log("There was a problem with the server");
        } else {
          console.log(err.response.data.msg);
        }
      });
  };

  return (
    <div className="mainitem">
      <p className="welcomemsg" id="welcomemsg">
        Welcome to my travel blog!
      </p>
      <div className="mainimgs">
        <div className="mainimg">
          <img
            src={mtrainier}
            alt="Mt. Rainier Portrait"
            height="400"
            width="320"
          />
          <div>
            <p>Mt. Rainier</p>
          </div>
        </div>
        <div className="mainimg">
          <img
            src={rainylake}
            alt="Rainy Lake Portrait"
            height="400"
            width="320"
          />
          <div>
            <p>Rainy Lake</p>
          </div>
        </div>
        <div className="mainimg">
          <img
            src={hurricaneridge}
            alt="Hurricane Ridge Portrait"
            height="400"
            width="320"
          />
          <div>
            <p>Hurricane Ridge</p>
          </div>
        </div>
      </div>
      <div className="feedback-form">
        <label style={{ fontSize: "40px" }}>
          Want to share your experiences with me?
        </label>
        <p style={{ fontSize: "30px" }}>
          <button onClick={() => setUnhide(true)}>
            <i
              id="thumb"
              style={{ fontSize: "60px", color: "black" }}
              class="fa-solid fa-thumbs-up"
            ></i>
          </button>
          Click Here to get started!
          <br />
          {unhide ? (
            <form onSubmit={uploadfile} style={{ padding: "20px" }}>
              <label style={{ fontSize: "30px" }}>Upload an image</label>
              <br />
              <label for="myfile" style={{ fontSize: "25px", padding: "20px" }}>
                Select a file:
              </label>
              <input
                type="file"
                id="myfile"
                name="myfile"
                onChange={checkfileinput}
              />
              <br />
              {fileErr ? errMsg : ""}
              <br />
              <button
                type="button"
                onClick={uploadfile}
                style={{
                  backgroundColor: "#008CBA",
                  borderRadius: "4px",
                  padding: "10px",
                }}
              >
                Upload
              </button>
              <div>
                <p>Uploaded images: </p>
                {/* Retrive images from server */}
                {images.map((image) => (
                  <img
                    src={`http://localhost:3001/images/${image.filename}`}
                    alt="uploaded file"
                    height="200"
                    width="200"
                  />
                ))}
              </div>
            </form>
          ) : (
            <>
              <div className="hide">
                <p>Click again</p>
              </div>
            </>
          )}
        </p>
      </div>
      <div
        className="feedback-form"
        id="feedback-form"
        style={{ paddingTop: "20px" }}
      >
        <form onSubmit={feedbackvalidate}>
          <label style={{ fontSize: "30px" }}> Your Feedback </label>
          <div style={{ paddingTop: "10px" }}>
            <label for="firstname"> Name: </label>
            <input
              className="feedback-form-input"
              type="text"
              id="firstname"
              name="firstname"
            />
          </div>
          <div style={{ paddingTop: "10px" }}>
            <label for="email"> Email ID: </label>
            <input
              className="feedback-form-input"
              type="text"
              id="email"
              name="email"
            />
          </div>
          <div style={{ paddingTop: "10px" }}>
            <label for="feedback"> Your Feedback: </label>
            <input
              className="feedback-form-input"
              type="text"
              id="feedback"
              name="feedback"
            />
          </div>
          <div style={{ paddingTop: "10px" }}>
            <input
              className="feedback-form-submit"
              type="submit"
              value="Submit"
            />
          </div>
        </form>
      </div>
    </div>
  );
}

export default MainSection;
