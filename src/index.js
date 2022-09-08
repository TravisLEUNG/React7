import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const page = (
  <div id="container">
    <img src="./logo512.png" alt="Logo" width={40} height={40} />
    <h1>Fun facts about React</h1>
    <ul>
      <li>Was first released in 2013</li>
      <li>Was originally created by Jordan Walke</li>
      <li>Has well over 100K stars on GitHub</li>
      <li>Is maintained by Facebook</li>
      <li>Powers thousands of enterprise apps, including mobile apps</li>
    </ul>
  </div>
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(page);

// Same result
function TemporaryPage() {
  return (
    <div id="container">
      <img src="./logo512.png" alt="Logo" width={40} height={40} />
      <h1>Fun facts about React</h1>
      <ul>
        <li>Was first released in 2013</li>
        <li>Was originally created by Jordan Walke</li>
        <li>Has well over 100K stars on GitHub</li>
        <li>Is maintained by Facebook</li>
        <li>Powers thousands of enterprise apps, including mobile apps</li>
      </ul>
    </div>
  );
}

root.render(<TemporaryPage />);

// React: Parent/Child
function Header() {
  return (
    <header>
      <nav>
        <img src="./logo512.png" alt="Logo" width="40px" />
      </nav>
    </header>
  );
}

function Footer() {
  return (
    <footer>
      <small>© 2022 Travis development. All rights reserved.</small>
    </footer>
  );
}

function Content() {
  return (
    <React.Fragment>
      <h1>Reasons I'm excited to learn React</h1>
      <ol>
        <li>
          It's a popular library, so I'll be able to fit in with the cool kids!
        </li>
        <li>I'm more likely to get a job as a developer if I know React</li>
      </ol>
    </React.Fragment>
  );
}

function Page() {
  return (
    <div id="container">
      <Header />
      <Content />
      <Footer />
    </div>
  );
}

root.render(<Page />);
