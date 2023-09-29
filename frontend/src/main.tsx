import { ChakraProvider } from "@chakra-ui/react";
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
import { MVX_NETWORK } from "./utils/mvx/constants.ts";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ChakraProvider>
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
