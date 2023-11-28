import React, { useState, Suspense } from "react";
import "./App.css";
import { createRoot } from "react-dom/client";

import ReactLogo from "../assets/react.svg";
import ViteLogo from "../assets/vite.svg";
import WebpackLogo from "../assets/webpack.svg";
import AngularLogo from "../assets/angular.svg";
import VueLogo from "../assets/vue.svg";

// import { Button } from "viteRemote/Button";
// import Sett from "settings_user/Settings";
// import { ProfileReactComponent } from "profile_user/ProfileReactComponent";
// import { List } from "remote_vue/List";
import { Button } from "mf_design_system";

// import ErrorBoundary from "./ErrorBoundary";

// const ExampleRemote = React.lazy(() =>
//   import("viteRemote/Button")
//     .then((module) => {
//       console.log("Module loaded successfully:", module?.Button);
//       return module;
//     })
//     .catch((error) => {
//       console.log("An error occurred while loading the module:", error);
//       throw error;
//     })
// );

// const Error = () => <div>Component no loaded</div>;
// const Loading = () => <div>Loading ...</div>;

// export const Example: React.FC = ({}) => {
//   return (
//     <ErrorBoundary customError={<Error />}>
//       <Suspense fallback={<Loading />}>
//         <ExampleRemote />
//       </Suspense>
//     </ErrorBoundary>
//   );
// };

// const Button = React.lazy(() => import("viteRemote/Button"));
// const ProfileReactComponent = React.lazy(
//   () => import("profile_user/ProfileReactComponent")
// );
// const List = React.lazy(() => import("remote_vue/List"));

interface EventProfile {
  name: string;
  email: string;
}

const App = () => {
  // const Settings = new Sett();
  const [state, setState] = useState<EventProfile>({
    name: "",
    email: "",
  });
  const [Comp, setComp] = useState(<div />);

  // const handleProfileReactComponent = (e: EventProfile) => {
  //   setState(e);
  // };

  const handleBtn = () => {
    // import("viteRemote/Button")
    //   .then((v) => {
    //     console.log("Success viteRemote/Button", v);
    //     setComp(v);
    //   })
    //   .catch((error) => {
    //     console.log(
    //       "An error occurred while importing 'viteRemote/Button':",
    //       error
    //     );
    //   });
    console.log("xxxx", { Button });
    // import("mf_design_system/Button")
    //   .then((v) => {
    //     console.log("Success viteRemote/Button", v);
    //     setComp(v);
    //   })
    //   .catch((error) => {
    //     console.log(
    //       "An error occurred while importing 'viteRemote/Button':",
    //       error
    //     );
    //   });
  };

  return (
    <div className="container">
      <Button onClick={handleBtn} />
      {/* <table>
        <thead>
          <tr>
            <td>Technologies</td>
            <td>Logos</td>
            <td>Component</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>React + Webpack</td>
            <td>
              <a href="https://webpack.js.org/" target="_blank">
                <WebpackLogo />
              </a>
              <a href="https://reactjs.org" target="_blank">
                <ReactLogo />
              </a>
              XXXX
            </td>
            <td>
              {`Name: ${state.name}`}
              <br />
              {`Email: ${state.email}`}
              <ProfileReactComponent />
            </td>
          </tr>
          <tr>
            <td>Vite + React + Webpack</td>
            <td>
              <a href="https://vitejs.dev" target="_blank">
                <ViteLogo />
              </a>
              <a href="https://webpack.js.org/" target="_blank">
                <WebpackLogo />
              </a>
              <a href="https://reactjs.org" target="_blank">
                <ReactLogo />
              </a>
            </td>
            <td>
              <Button />
            </td>
          </tr>
          <tr>
            <td>Angular + Webpack</td>
            <td>
              <a href="https://angular.io" target="_blank">
                <AngularLogo />
              </a>
            </td>
            <td>XXXXX</td>
          </tr>
          <tr>
            <td>Vue + Webpack</td>
            <td>
              <a href="https://vuejs.org/" target="_blank">
                <VueLogo />
              </a>
            </td>
            <td>
              <List />
              <Settings />
            </td>
          </tr>
        </tbody>
      </table> */}
    </div>
  );
};

const container = document.getElementById("app");
const root = createRoot(container!); // createRoot(container!) if you use TypeScript
root.render(<App />);
