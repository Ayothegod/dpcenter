import {
  AuthPage,
  Authenticated,
  ErrorComponent,
  Refine,
} from "@refinedev/core";
import { RefineKbar, RefineKbarProvider } from "@refinedev/kbar";

import routerBindings, {
  CatchAllNavigate,
  DocumentTitleHandler,
  NavigateToResource,
  UnsavedChangesNotifier,
} from "@refinedev/react-router-v6";
import { dataProvider, liveProvider } from "@refinedev/supabase";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import authProvider from "./authProvider";
import { supabaseClient } from "./utility";
import Homepage from "./pages/homepage/Homepage";
import Login from "./pages/auth/login/Login";
import Dashboard from "./pages/dashboard/dashboard";
import Register from "./pages/auth/register/Register";
import Create from "./pages/create/Create";

function App() {
  return (
    <BrowserRouter>
      <RefineKbarProvider>
        <Refine
          dataProvider={dataProvider(supabaseClient)}
          liveProvider={liveProvider(supabaseClient)}
          authProvider={authProvider}
          routerProvider={routerBindings}
        >
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/create" element={<Create />} />
          </Routes>

          {/* <RefineKbar /> */}
          {/* <UnsavedChangesNotifier /> */}
          {/* <DocumentTitleHandler /> */}
        </Refine>
      </RefineKbarProvider>
    </BrowserRouter>
  );
}

export default App;
