import { jsx as _jsx } from "react/jsx-runtime";
import React from 'react';
import ReactDOM from 'react-dom/client';
export default function renderShadeApp(App, props) {
    const style = document.createElement('style');
    style.appendChild(document.createTextNode(`
        :root {
            font-size: 62.5%;
            line-height: 1.5;
            -ms-text-size-adjust: 100%;
            -webkit-text-size-adjust: 100%;

            text-rendering: optimizeLegibility;
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale;
            -webkit-text-size-adjust: 100%;
        }

        html, body, #root {
            width: 100%;
            height: 100%;
            margin: 0;
            letter-spacing: unset;
        }
    `));
    document.head.appendChild(style);
    ReactDOM.createRoot(document.getElementById('root')).render(_jsx(React.StrictMode, { children: _jsx(App, { designSystem: { darkMode: false, fetchKoenigLexical: null }, framework: {
                externalNavigate: (link) => {
                    // Use the expectExternalNavigate helper to test this dummy external linking
                    window.location.href = `/external/${encodeURIComponent(JSON.stringify(link))}`;
                },
                ghostVersion: '5.x',
                sentryDSN: null,
                unsplashConfig: {
                    Authorization: '',
                    'Accept-Version': '',
                    'Content-Type': '',
                    'App-Pragma': '',
                    'X-Unsplash-Cache': false
                },
                onDelete: () => { },
                onInvalidate: () => { },
                onUpdate: () => { }
            }, ...props }) }));
}
