import "../styles/globals.css";
import type { AppProps } from "next/app";

import { Toaster } from "react-hot-toast";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { useRouter } from "next/router";

import { useState } from "react";

function MyApp({ Component, pageProps }: AppProps) {
    const [queryClient] = useState(
        () =>
            new QueryClient({
                defaultOptions: {
                    queries: {
                        cacheTime: 0,
                    },
                },
            })
    );

    const router = useRouter();
    const path = router.pathname;
    return (
        <div>
            <title>Jumpy</title>
            <Component {...pageProps} />
            <Toaster />
        </div>
    );
}

export default MyApp;
