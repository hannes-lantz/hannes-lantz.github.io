import logo from "./assets/HL.jpg";
import github_logo from "./assets/github-mark-white.svg";
import linkedin_logo from "./assets/linkedin_white.svg";
import cv from "./assets/cv.pdf";
import background from "./assets/background.jpg";
import Pacman from "./components/pacman";
import "./App.css";

function App() {
  return (
    <div
      className="App"
      style={{
        backgroundImage: `url(${background})`,
        backgroundRepeat: "no-repeat",
        maxWidth: "100%",
        maxHeight: "100%",
        backgroundSize: "cover",
      }}
    >
      <Pacman /> {/* Include the Pacman component here */}
      <div className="Sidebar">
        <div className="Front-img-container">
          <img src={logo} alt="Me" />
        </div>
        <div className="Links">
          <a href="https://www.linkedin.com/in/hannes-lantz-2974411a1/">
            <img src={linkedin_logo} alt="Linked In" />
          </a>
          <a href="https://github.com/hannes-lantz">
            <img src={github_logo} alt="GitHub" />
          </a>
          <div className="Button">
            <a href={cv} download>
              {" "}
              Download my CV
            </a>
          </div>
        </div>
      </div>
      <div className="App-container">
        <section>
          <div className="Welcometext">
            <h1>Hello,</h1>
            <h1>
              I'm{" "}
              <span
                style={{
                  color: "limegreen",
                }}
              >
                Hannes Lantz
              </span>
            </h1>
            <h1>Software Engineer</h1>
          </div>
          <div className="Description">
            <p>
              Civilingenjörsexamen i Datateknik / Master of Science in
              Engineering, Computer Science and Engineering.
            </p>
            <p>
              <a href="https://www.lth.se/utbildning/datateknik300/">
                Studied Computer Science
              </a>{" "}
              at <a href="https://www.lu.se/">Lund University</a>.
            </p>
          </div>
        </section>
        <section>
          <h1>About</h1>
        </section>
      </div>
    </div>
  );
}

export default App;
