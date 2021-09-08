import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import {I18nextProvider} from "react-i18next";
import i18next from "i18next";

import common_de from "./translations/de/common.json";
import common_en from "./translations/en/common.json";
import common_ur from "./translations/ur/common.json";
import common_ch from "./translations/ch/common.json";

i18next.init({    //initializing
    lng: 'de',      // set default language to use
    resources: {    //resources obj has all languages that we have
        en: {
            common: common_en               // 'common' is our custom namespace
        },
        de: {
            common: common_de
        },
        ur: {
            common: common_ur
        },
        ch: {
            common: common_ch
        }
    },
});

ReactDOM.render(
    <React.StrictMode>
        <I18nextProvider i18n={i18next}>
            <App/>
        </I18nextProvider>
    </React.StrictMode>,

    document.getElementById('root')
);
