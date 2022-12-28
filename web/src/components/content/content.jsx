import "./content.css";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { useState, useEffect } from "react";

const firebaseConfig = {
  apiKey: "AIzaSyBdbX2P4j86OW9KPKQ75hMh9xj-No5l-Dg",
  authDomain: "intern-web123.firebaseapp.com",
  projectId: "intern-web123",
  storageBucket: "intern-web123.appspot.com",
  messagingSenderId: "858891071444",
  appId: "1:858891071444:web:06836b3ff6fd9202403041",
  measurementId: "G-CYTCV8FNMS",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

function App() {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const savePost = async (e) => {
    e.preventDefault();

    console.log("userName: ", userName);
    console.log("email: ", email);
    console.log("phone: ", phone);
    console.log("message: ", message);

    try {
      const docRef = await addDoc(collection(db, "users"), {
        userName: userName,
        userEmail: email,
        userPhone: phone,
        userMessage: message,
      });
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };
  return (
    <div>
      <div className="container content">
        <header className="container-head">
          <nav className="navbar navbar-expand-lg">
            <div className="container-fluid">
              <a className="navbar-brand" href="#">
                <img
                  src="https://logobam.com/wp-content/uploads/2015/08/designcrawl-logo-main.jpg"
                  alt=""
                  height={"60px"}
                />
              </a>
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div
                className="collapse navbar-collapse"
                id="navbarSupportedContent"
              >
                <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                  <li className="nav-item">
                    <a
                      className="nav-link active mx-4 my-3"
                      aria-current="page"
                      href="#"
                    >
                      Home
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link active mx-4 my-3" href="#">
                      About
                    </a>
                  </li>

                  <li className="nav-item">
                    <a className="nav-link active mx-4 my-3">Services</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link active mx-4 my-3">Link</a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </header>
        {/* ====================================================================================== */}
        <div className="c-main">
          <div
            id="carouselExampleDark"
            className="carousel carousel-dark slide"
            data-bs-ride="carousel"
          >
            <div className="carousel-indicators">
              <button
                type="button"
                data-bs-target="#carouselExampleDark"
                data-bs-slide-to="0"
                className="active"
                aria-current="true"
                aria-label="Slide 1"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleDark"
                data-bs-slide-to="1"
                aria-label="Slide 2"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleDark"
                data-bs-slide-to="2"
                aria-label="Slide 3"
              ></button>
            </div>
            <div className="carousel-inner">
              <div className="carousel-item active" data-bs-interval="10000">
                <img
                  src="https://soliloquywp.com/wp-content/uploads/2018/03/slider-placement-featured.jpg"
                  className="d-block w-100"
                  alt="..."
                />
                <div className="carousel-caption d-none d-md-block">
                  {/* <h5>First slide label</h5> */}
                  {/* <p>
                  Some representative placeholder content for the first slide.
                </p> */}
                </div>
              </div>
              <div className="carousel-item" data-bs-interval="2000">
                <img
                  src="https://images.unsplash.com/photo-1532716377393-5ffbea548d05?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8c2xpZGVyfGVufDB8fDB8fA%3D%3D&w=1000&q=80"
                  className="d-block w-100"
                  alt="..."
                />
                <div className="carousel-caption d-none d-md-block">
                  {/* <h5>Second slide label</h5> */}
                </div>
              </div>
              <div className="carousel-item">
                <img
                  src="https://images.unsplash.com/photo-1499750310107-5fef28a66643?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80"
                  className="d-block w-100"
                  alt="..."
                />
                <div className="carousel-caption d-none d-md-block">
                  {/* <h5>Third slide label</h5> */}
                </div>
              </div>
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleDark"
              data-bs-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleDark"
              data-bs-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>

        {/* ======================================================================================= */}

        <div className="container contact-form ">
          <form onSubmit={savePost} className="contact" action="#">
            <h1>Let`s have a chat</h1>
            <div className="input-group mb-3">
              <input
                type="text"
                name="Username"
                className="form-control my-2"
                placeholder="Username"
                onChange={(e) => {
                  setUserName(e.target.value);
                }}
              />
            </div>

            <div className="input-group ">
              <input
                type="email"
                className="form-control  my-3"
                placeholder="Email"
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
              <input
                type="number"
                className="form-control mx-3 my-3"
                placeholder="Phone"
                onChange={(e) => {
                  setPhone(e.target.value);
                }}
              />
            </div>

            <div className="input-group">
              <textarea
                className="form-control my-3"
                aria-label="With textarea"
                placeholder="Message"
                onChange={(e) => {
                  setMessage(e.target.value);
                }}
              ></textarea>
            </div>
            <div>
              <button
                type="submit"
                className="btn my-3"
                // onClick={(e) => {
                //   e.preventDefault();
                // }}
              >
                Send Message
              </button>
            </div>
          </form>

          {/* =================================================================================================================================================== */}

          {/* ======================================== card one ========================================= */}

          <div className="container">
            <div className="row">
              <h2 className="title my-3 success">
               <i> Successful teachers successful students</i>
              </h2>
              <div className="col br-img my-5">
                <div className="card-deck">
                  <div className="card my-2 border-out" id="style">
                    <img
                      className="card-img-top"
                      src="https://avatars.githubusercontent.com/u/14273842?v=4"
                      alt="..."
                    />
                    <div className="card-body">
                      <h5 className="card-title text-center"><strong> Sir Inzamam Malik</strong></h5>
                      {/* <p className="card-text">Teacher</p> */}
                    </div>
                  </div>
                </div>
              </div>
              {/* ======================================== card two ========================================= */}

              <div className="col br-img my-5">
                <div className="card-deck">
                  <div className="card my-2 border-out" id="style">
                    <img
                      className="card-img-top"
                      src="https://avatars.githubusercontent.com/u/16886138?v=4"
                      alt="..."
                    />
                    <div className="card-body">
                      <h5 className="card-title text-center"><strong> Sir Salman Zafar</strong></h5>
                      {/* <p className="card-text">Associate</p> */}
                    </div>
                  </div>
                </div>
              </div>
              {/* ======================================== card two ========================================= */}

              <div className="col br-img my-5">
                <div className="card-deck">
                  <div className="card my-2 border-out" id="style">
                    <img
                      className="card-img-top"
                      src="https://avatars.githubusercontent.com/u/52074642?v=4"
                      alt="..."
                    />
                    <div className="card-body">
                      <h5 className="card-title text-center"><strong> Sir Saad Ahmed</strong></h5>
                      {/* <p className="card-text">Associate</p> */}
                    </div>
                  </div>
                </div>
              </div>
              {/* ======================================== card two ========================================= */}

              <div className="col br-img my-5">
                <div className="card-deck">
                  <div className="card my-2 border-out" id="style">
                    <img
                      className="card-img-top"
                      src="https://scontent.fkhi6-1.fna.fbcdn.net/v/t39.30808-6/315999424_2959968277481078_322405202990417951_n.jpg?stp=c0.58.526.526a_dst-jpg_p526x296&_nc_cat=102&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeEhqvLNcnUvjm9R4Nwe_FWDZEQMrG1VJlxkRAysbVUmXLJ8tyqPg3Eav5R7Rl5JrZSBsNJA_BtXb9t1K1IHCAcW&_nc_ohc=JVAr3T2tTfsAX-S7n9M&tn=pcrp0IbjxmO64Hr2&_nc_ht=scontent.fkhi6-1.fna&oh=00_AfCpN_1tBD2XZvGYkE5tZQwF_krkwMBSfqrHWE5iT45eGw&oe=63B0F7A1"
                      alt="..."
                    />
                    <div className="card-body">
                      <h5 className="card-title text-center"><strong> Sir Siddique</strong></h5>
                      {/* <p className="card-text">Associate</p> */}
                    </div>
                  </div>
                </div>
              </div>
              {/* ======================================== card two ========================================= */}
              <div className="copyright">
                <p className="text-center center my-3">
                  <i>
                    <strong>
                      <q>Teachers is a backbone of your success</q>
                    </strong>
                  </i>
                </p>
              </div>
            </div>
          </div>

          {/* =========================================================================================================================================================== */}
        </div>
        <div className="container footer">
          <div className="row">
            <div className="col md-5">
              <div className="card">
                <img
                  src="https://logobam.com/wp-content/uploads/2015/08/designcrawl-logo-main.jpg"
                  className="card-img-top"
                  alt="..."
                />
                <div className="card-body">
                  <p className="card-text">Cloud Nine Web Design,LLC.©2022</p>
                  <a href="#">Privacy Policy | Terms & Conditions</a>
                </div>
              </div>
            </div>
            <div className="col md-12 list">
              <ul className="list-group list-group-flush">
                <h3 className="card-title">Services</h3>
                <li className="list-group-item">Web Design</li>
                <li className="list-group-item">Care Plans</li>
                <li className="list-group-item">Hosting</li>
                <li className="list-group-item">Uptime Status</li>
              </ul>
            </div>
            <div className="col md-12">
              <ul className="list-group list-group-flush">
                <h3 className="card-title">Contact</h3>
                <p className="list-group-item">
                  249 E.US. Rout 6,Unit #213 Morris, IL 60450
                </p>
                <p className="list-group-item">
                  390 S.main St. Roseville, IL 60450
                </p>
                <li className="list-group-item">(851) 585-4800</li>
              </ul>
            </div>
            <div className="col md-5">
              <div className="text-center">
                <img src="./Capture.PNG" className="rounded" alt="..." />
              </div>
            </div>
            <div className="btn-footer my-3">
              <a href="#"><button className="btn footer-btn">Get Quote</button></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;