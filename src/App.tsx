import React, { Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import MyProjects from "./pages/MyProjects";
import MainComponent from "./components/MainComponent";
import { minorProjects, majorProjects } from "./data/routes";
import ErrorBoundary from "./components/ErrorBoundary";

// const loadComponent = (path: string) =>
//   React.lazy(() => import(`./components/MinorProjects/${path}`));

const componentMap: Record<string, React.LazyExoticComponent<any>> = {
  "Accordion": React.lazy(() => import("./components/MinorProjects/accordion")),
  "RandomColor": React.lazy(() => import("./components/MinorProjects/random-color")),
};

const loadComponent = (componentName: string) => componentMap[componentName];

const App: React.FC = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/my-projects" element={<MyProjects />}>
            {/* Nested Routes for Minor Projects */}
            {/* <Route path="minor-projects/*" element={<MainComponent />}>
              {minorProjects.map(({ path, component, props }) => {
                const Component = loadComponent(component);
                return (
                  <Route
                    key={path}
                    path={path}
                    element={
                      <ErrorBoundary>
                        <Suspense fallback={<div>Loading...</div>}>
                          <Component {...(props || {})} />
                        </Suspense>
                      </ErrorBoundary>
                    }
                  />
                );
              })}
            </Route> */}

            {/* Nested Routes for Major Projects */}
            {/* <Route path="major-projects" element={<MainComponent />}>
              {majorProjects.map(({ path, component, props }) => {
                const Component = loadComponent(component);
                return (
                  <Route
                    key={path}
                    path={path}
                    element={
                      <ErrorBoundary>
                        <Suspense fallback={<div>Loading...</div>}>
                          <Component {...(props || {})} />
                        </Suspense>
                      </ErrorBoundary>
                    }
                  />
                );
              })}
            </Route> */}
          </Route>
          <Route path="minor-projects" element={<MainComponent />}>
              {minorProjects.map(({ path, component, props }) => {
                const Component = loadComponent(component);
                return (
                  <Route
                    key={path}
                    path={path}
                    element={
                      <ErrorBoundary>
                        <Suspense fallback={<div>Loading...</div>}>
                          <Component {...(props || {})} />
                        </Suspense>
                      </ErrorBoundary>
                    }
                  />
                );
              })}
            </Route>
          <Route path="major-projects" element={<MainComponent />}>
              {majorProjects.map(({ path, component, props }) => {
                const Component = loadComponent(component);
                return (
                  <Route
                    key={path}
                    path={path}
                    element={
                      <ErrorBoundary>
                        <Suspense fallback={<div>Loading...</div>}>
                          <Component {...(props || {})} />
                        </Suspense>
                      </ErrorBoundary>
                    }
                  />
                );
              })}
            </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
