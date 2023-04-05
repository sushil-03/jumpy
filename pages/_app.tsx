import "../styles/globals.css";
import type { AppProps } from "next/app";

import { Toaster } from "react-hot-toast";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { useRouter } from "next/router";

import { configureChains, createClient, WagmiConfig } from "wagmi";
import { alchemyProvider } from "wagmi/providers/alchemy";
import { publicProvider } from "wagmi/providers/public";
import { Chain, localhost } from "wagmi/chains";
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

    const hyperspaceTestnet: Chain = {
        name: "Hyperspace Testnet",
        id: 3141,
        network: "hyperspace",
        // iconUrl: 'https://example.com/icon.svg',
        // iconBackground: '#fff',
        nativeCurrency: {
            decimals: 18,
            name: "Testnet FIL",
            symbol: "tFIL",
        },
        rpcUrls: {
            default: {
                http: ["https://api.hyperspace.node.glif.io/rpc/v1"],
            },
            public: {
                http: ["https://api.hyperspace.node.glif.io/rpc/v1"],
            },
        },
        blockExplorers: {
            default: {
                name: "FilScan",
                url: "https://explorer.glif.io/ethereum/",
            },
        },
        testnet: true,
    };

    const { chains, provider } = configureChains(
        [hyperspaceTestnet],
        // [localHost],
        [
            alchemyProvider({ apiKey: "_gg7wSSi0KMBsdKnGVfHDueq6xMB9EkC" }),
            publicProvider(),
        ]
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
