import { CssBaseline, ThemeProvider } from "@mui/material";
import { APP_ROUTES, theme } from "./utils";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import Home from "./containers/Home";
import Product from "./containers/Product";
import Checkout from "./containers/Checkout";
import NotFoundPage from "./containers/NotFoundPage";
import BaseLayout from "./layouts/BaseLayout";
import ErrorBoundary from "./layouts/ErrorBoundaries";
import FeatureLayout from "./layouts/FeatureLayout.tsx/index";

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <BrowserRouter>
          <Routes>
            <Route path={APP_ROUTES.HOME} element={<BaseLayout />}>
              <Route index element={<Home />} />
              <Route path={APP_ROUTES.NOT_FOUND} element={<NotFoundPage />} />
            </Route>

            <Route element={<FeatureLayout />}>
              <Route path={APP_ROUTES.PRODUCT} element={<Product />} />
              <Route path={APP_ROUTES.CHECKOUT} element={<Checkout />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
