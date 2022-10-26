import { CircularProgress, CssBaseline, ThemeProvider } from "@mui/material";
import { APP_ROUTES, theme } from "./utils";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import ErrorBoundary from "./layouts/ErrorBoundaries";
import { FeatureContextProvider } from "contexts/FeatureContext";
import { lazy, Suspense } from "react";

const Home = lazy(() => import("./containers/Home"));
const Product = lazy(() => import("./containers/Product"));
const Checkout = lazy(() => import("./containers/Checkout"));
const NotFoundPage = lazy(() => import("./containers/NotFoundPage"));
const BaseLayout = lazy(() => import("./layouts/BaseLayout"));

function App() {
  return (
    <ErrorBoundary>
      <Suspense fallback={<CircularProgress />}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <BrowserRouter>
            <Routes>
              <Route path={APP_ROUTES.HOME} element={<BaseLayout />}>
                <Route index element={<Home />} />
                <Route path={APP_ROUTES.NOT_FOUND} element={<NotFoundPage />} />
              </Route>

              <Route element={<FeatureContextProvider />}>
                <Route path={APP_ROUTES.PRODUCT} element={<Product />} />
                <Route path={APP_ROUTES.CHECKOUT} element={<Checkout />} />
              </Route>
            </Routes>
          </BrowserRouter>
        </ThemeProvider>
      </Suspense>
    </ErrorBoundary>
  );
}

export default App;
