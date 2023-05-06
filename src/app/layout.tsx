"use client";

import { QueryClientProvider } from "@tanstack/react-query";

import { queryClient } from "../queries";

const AppLayout = (props) => {
  const { children } = props;

  return (
    <html>
      <body>
        <QueryClientProvider client={queryClient}>
          {children}
        </QueryClientProvider>
      </body>
    </html>
  );
};

export default AppLayout;
