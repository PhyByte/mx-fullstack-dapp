import { ChakraProvider, theme } from "@chakra-ui/react";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

import {
  NotificationModal,
  SignTransactionsModals,
  TransactionsToastList,
} from "@multiversx/sdk-dapp/UI";
import { DappProvider } from "@multiversx/sdk-dapp/wrappers";

import { HelmetProvider } from "react-helmet-async";
import { BrowserRouter } from "react-router-dom";
import { MVX_NETWORK } from "./utils/mvx/constants";

const rootElement = document.getElementById("root");
if (!rootElement) {
  throw new Error("Root element not found");
}
try {
  ReactDOM.createRoot(rootElement).render(
    <React.StrictMode>
      <ChakraProvider theme={theme}>
        <DappProvider
          environment={MVX_NETWORK}
          customNetworkConfig={{
            name: "customConfig",
            apiTimeout: 6000,
          }}
        >
          <TransactionsToastList />
          <NotificationModal />
          <SignTransactionsModals />
          <BrowserRouter>
            <HelmetProvider>
              <App />
            </HelmetProvider>
          </BrowserRouter>
        </DappProvider>
      </ChakraProvider>
    </React.StrictMode>
  );
} catch (error) {
  console.error("Error rendering app", error);
}
