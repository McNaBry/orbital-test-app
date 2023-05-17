function About() {
  return (
    <>
      <h1 className="about-header"> About GrindTogether </h1>
      <div className="motivation">
        <div className="motivation-section">
          <h2 className="header"> Our motivation </h2>
          <div className="motivation-text">
            <p>
              {" "}
              Have you ever felt so lost in a certain module with very few
              friends to ask for help for this module? Well, many of us have
              certainly felt that way before and we all know how tough and
              demanding certain modules are. The thought of having to tackle a
              module alone, especially if it has a reputation of being
              difficult, is truly very frightening. We might also feel a bit
              lonely studying by ourselves.{" "}
            </p>

            <p>
              It would be comforting and beneficial if someone coping better
              with the module could offer their help and moral support, be it a
              senior with past experience or a fellow mod-taker. At least by
              finding people doing the same module we can learn from one another
              and find solace in each other. In university, where people come
              and go and everyone is busy with academics, it is hard for many of
              us to connect with others and moreover, find people to study with.
              Wouldn’t it be great if there existed a way (without the initial
              “approaching others in real life”) to see if others in NUS are
              willing to offer their help, or if you’re feeling kind, find those
              who need it?{" "}
            </p>

            <p>
              {" "}
              Our project wants to make it easier for everyone by providing a
              multifunctional platform, GrindTogether, which can be used to find
              groups of friends with similar modules to study together or even
              find study date partners (you never know what can happen...
              &#128064 &#128527).
            </p>
          </div>
        </div>
        <div className="motivation-pic">
          <img src="images/motivation-pic.png" alt="motivation picture"></img>
        </div>
      </div>

      <div className="mission">
        <h2 className="mission header"> Our mission </h2>
        <p>
          {" "}
          We want to help fellow students in NUS have a better study experience
          and possibly even increase chances of finding a relationship in
          university by creating a platform where people can connect with each
          other and create their own study groups.
        </p>
      </div>

      <div className="brains-container">
        <h2 className="header"> The brains behind the operation </h2>
        <div className="creators">
          <div className="card" style={{ width: "18rem" }}>
            <img className="card-img-top" src="..." alt="Brain #1" />
            <div className="card-body">
              <h5 className="card-title"> Choo Tze Jie </h5>
              <p className="card-text">
                {" "}
                Year 1 noob Computer Science student at NUS{" "}
              </p>
            </div>
          </div>
          <div className="card" style={{ width: "18rem" }}>
            <img className="card-img-top" src="..." alt="Brain #2" />
            <div className="card-body">
              <h5 className="card-title"> Bryan Lee Jek Yan </h5>
              <p className="card-text">
                {" "}
                Year 1 top gae boi Computer Science student at NUS{" "}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="tech-stacks">
        <p className="header"> This web app is powered by </p>
        <div className="tech-container">
          <a
            target="_blank"
            href="https://developer.mozilla.org/en-US/docs/Web/HTML"
            id="html-logo"
            className="logo"
          >
            <img src="images/html5-logo.png" alt="HTML 5" />
          </a>

          <a
            target="_blank"
            href="https://reactjs.org"
            id="react-logo"
            className="logo"
          >
            <img src="images/react-logo.png" alt="React JS" />
          </a>

          <a
            target="_blank"
            href="https://getbootstrap.com/"
            id="bootstrap-logo"
            className="logo"
          >
            <img src="images/bootstrap-logo.png" alt="BootStrap 5" />
          </a>

          <a
            target="_blank"
            href="https://nodejs.org/en/about"
            id="nodejs-logo"
            className="logo"
          >
            <img src="images/nodejs-logo.png" alt="Node JS" />
          </a>

          <a
            target="_blank"
            href="https://firebase.google.com/"
            id="firebase-logo"
            className="logo"
          >
            <img src="images/firebase-logo.png" alt="Firebase" />
          </a>

          <a
            target="_blank"
            href="https://www.netlify.com/"
            id="netlify-logo"
            className="logo"
          >
            <img src="images/netlify-logo.png" alt="Netlify" />
          </a>
        </div>
      </div>
    </>
  );
}

export default About;