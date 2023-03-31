import { useState, Component, Suspense } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { useTranslation, withTranslation, Trans } from "react-i18next";

class LegacyWelcomeClass extends Component {
  render() {
    const { t } = this.props;
    return <h2>{t("title")}</h2>;
  }
}

const Welcome = withTranslation()(LegacyWelcomeClass);

function MyComponent() {
  return (
    <Trans i18nKey="description.part">
      Edit <code>src/App.jsx</code> and save to test HMR
    </Trans>
  );
}

// function Page() {

//   return

// }

function App() {
  const [count, setCount] = useState(0);

  const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="App">
      {/* <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1> */}

      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>{t("nameGreeting", { username: "Joe" })}</p>

        <p>{t("description.part1")}</p>

        <p>{t("description.part2")}</p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>

      <p>
        <MyComponent />
      </p>
      <button type="button" onClick={() => changeLanguage("en")}>
        En
      </button>

      <button type="button" onClick={() => changeLanguage("de")}>
        De
      </button>
    </div>
  );
}

export default App;
