import { useState } from "react";

import './tecnology-menu/TechnologyMenu.sass'
import './portfolio-items/portfolio-wrapper/PortfolioWrapper.sass'


import Promo from './promo/Promo'
import SectionHeader from './section-headers/SectionHeader'
import TechnologyItems from './tecnology-menu/TechnologyItems'
import TechnologyMenuList from './tecnology-menu/TechnologyMenuList'
import PortfolioText from './portfolio-text/PortfolioText'
import PortfolioTabs from './potfolio-tabs/PotfolioTabs'
import PortfolioItems from './portfolio-items/PortfolioItems'


/* Фото технологий */
import Html from './tecnology-img/Html'
import Css from './tecnology-img/Css'
import Less from './tecnology-img/Less'
import Sass from './tecnology-img/Sass'
import Bootstrap from './tecnology-img/Bootstrap'
import Bitrix from './tecnology-img/Bitrix'
import Bitrix24 from './tecnology-img/Bitrix24'
import Javascript from './tecnology-img/Javascript'
import Jquery from './tecnology-img/Jquery'
import Uix from './tecnology-img/Uix'
import Photoshop from './tecnology-img/Photoshop'
import Figma from './tecnology-img/Figma'

import Eng from '../img/icons/eng.png'
import Webpack from '../img/icons/webpack.png'



/* Фото Проектов */
import LandingPagePreview from '../img/devices-img/landing-page/preview.webp'
/* import InternetShopPreview from '../img/devices-img/shop/preview.webp' */
import TaxiPreview from '../img/devices-img/taxi/preview.webp'
import AutopartPreview from '../img/devices-img/autopart/preview.webp'
import SportBettingsPreview from '../img/devices-img/sport-bettings/preview.webp'
import PersonalAccountPreview from '../img/devices-img/personal-account/preview.webp'
import PersonalAccountCrmPreview from '../img/devices-img/personal-account-crm/preview.webp'
/* import SpecializedMachineryPreview from '../img/devices-img/specialized-machinery/preview.webp' */
import GrindingPreview from '../img/devices-img/grinding/preview.webp'
import DataUniversePreview from '../img/devices-img/datauniverse/preview.webp'
/* import Avexima from '../img/devices-img/avexima/preview.webp' */
import ArtificiailIntelligencePreview from '../img/devices-img/artificiail-intelligence/preview.webp'
import MedicalHospitalPreview from '../img/devices-img/medical-hospital(Grid)/preview.webp'
/* import WowPreview from '../img/devices-img/wow/preview.webp' */
/* import SpaceProjectPreview from '../img/devices-img/space-project/preview.mp4' */


/* Сертификаты */
import HtmlSertificates from '../img/sertificates/html-css.jpg'
import HtmlSertificatesGeeckbrains from '../img/sertificates/html-css-geekbrains.png'
import HtmlProfessionalSertificatesGeeckbrains from '../img/sertificates/professional-html-css-geekbrains.png'
import WebDeveloperSertificates from '../img/sertificates/web-dev.jpg'
import BootstrapSertificates from '../img/sertificates/bootstrap.png'
import FreecodecampSertificates from '../img/sertificates/freecodecamp.jpg'
import JavascriptBaseSertificatesGeekbrains from '../img/sertificates/js-base-geekbrains.png'
import BitrixSertificateContentManager from '../img/sertificates/bitrix-content-manager.jpg'
import BitrixSertificateSeoAndMarketing from '../img/sertificates/bitrix-seo-marketing.jpg'
import BitrixSertificateAdmin from '../img/sertificates/bitrix-admin.jpg'
import BitrixSertificateAdmin24 from '../img/sertificates/bitrix-admin-24.jpg'


/* Проекты ссылки на сайт */
/* Путь к файлу проекта где  /portfolio/ - начальная папка на хостинге */
const LandingPageUrl = '/portfolio/myprojects/html-css/landing-page/index.html'
const TaxiUrl = '/portfolio/myprojects/html-css/taxi/index.html'
const AutopartUrl = '/portfolio/myprojects/html-css/autopart/index.html'
const SportBettingsUrl = '/portfolio/myprojects/html-css/sport-bettings/index.html'
const PersonalAccountUrl = '/portfolio/myprojects/html-css/personal-account/index.html'
const PersonalAccountCrmUrl = '/portfolio/myprojects/html-css/personal-account-crm/index.html'
const GrindingUrl = '/portfolio/myprojects/html-css/grinding/index.html'
const DataUniverseUrl = '/portfolio/myprojects/html-css/datauniverse/index.html'
const AveximaUrl = '/portfolio/myprojects/html-css/avexima/index.html'
const ArtificiailIntelligenceUrl = '/portfolio/myprojects/html-css/artificiail-intelligence/index.html'
const MedicalHospitalUrl = '/portfolio/myprojects/html-css/medical-hospital(Grid)/index.html'
const WowUrl = '/portfolio/myprojects/bootstrap/wow/index.html'


/* Проекты ссылки на GitHub */
const LandingPageGitHub = 'https://github.com/tandrey1635/landing-page'
const TaxiGitHub = 'https://github.com/tandrey1635/taxi'
const AutopartGitHub = 'https://github.com/tandrey1635/autopart'
const SportBettingsGitHub = 'https://github.com/tandrey1635/sport-bettings'
const PersonalAccountGitHub = 'https://github.com/tandrey1635/personal-account'
const PersonalAccountCrmGitHub = 'https://github.com/tandrey1635/personal-account-crm'
const GrindingGitHub = 'https://github.com/tandrey1635/grinding'
const DataUniverseGitHub = 'https://github.com/tandrey1635/datauniverse'
const AveximaGitHub = 'https://github.com/tandrey1635/avexima'
const ArtificiailIntelligenceGitHub = 'https://github.com/tandrey1635/artificiail-intelligence'
const MedicalHospitalGitHub = 'https://github.com/tandrey1635/medical-hospital-Grid-'
const WowGitHub = 'https://github.com/tandrey1635/wow'











const Main = () =>  {
    const technology = {
        html: '95%',
        css: '95%', 
        bitrix: '50%',
        javascript: '80%',
        photoshop: '50%',
    }

    const [all, setAll] = useState(true)
    const [html, setHtml] = useState(false)
    const [bootstrap, setBootstrap] = useState(false)
    const [javascript, setJavascript] = useState(false)


    const showAllTabs = () =>{
        setAll(true)
        setHtml(false)
        setBootstrap(false)
        setJavascript(false)
    }

    const showHtmlTabs = () =>{
        setAll(false)
        setHtml(true)
        setBootstrap(false)
        setJavascript(false)
    }

    const showBootstrapTabs = () =>{
        setAll(false)
        setHtml(false)
        setBootstrap(true)
        setJavascript(false)
    }

    const showJavascriptTabs = () =>{
        setAll(false)
        setHtml(false)
        setBootstrap(false)
        setJavascript(true)
    }

    
    return(
        <>

            <section id="home" className="promo">
                <div className="container">
                    <Promo/>
                </div>
            </section>
            <section id="technology" className="technology">
                <div className="container">
                    <SectionHeader title={'Технологии'}/>
                    <TechnologyItems style={{'width': technology.html}} percent={technology.html} img={<Html/>}/>
                    <TechnologyItems style={{'width': technology.css}} percent={technology.css} img={
                        <>
                            <Css/>
                            <Less/>
                            <Sass/>
                            <Bootstrap/>
                        </>}
                    />
                    <TechnologyItems style={{'width': technology.bitrix}} percent={technology.bitrix} img={
                        <>
                            <Bitrix/>
                            <Bitrix24/>
                        </>}
                    />
                    <TechnologyItems style={{'width': technology.javascript}} percent={technology.javascript} img={
                        <>
                            <Javascript/>  
                            <Jquery/>      
                                
                        </>}
                    />
                    <TechnologyItems style={{'width': technology.photoshop}} percent={technology.photoshop} img={
                        <>
                            <Uix/>
                            <Photoshop/>
                            <Figma/>
                        </>}
                    />
                    <SectionHeader title={'Дополнительные технологии и навыки'} margin/>
                    <ul className="technology__menu">
                        <TechnologyMenuList img={<svg className="technology__additional__img technology__additional__img_git" version="1.0"
                            width="50" height="50" viewBox="0 0 586.000000 350.000000"
                            preserveAspectRatio="xMidYMid meet">
                            <title>GIT</title>
                            <g transform="translate(0.000000,350.000000) scale(0.100000,-0.100000)"
                            fill="" stroke="none">
                            <path d="M4480 3324 c-46 -20 -77 -50 -103 -99 -19 -35 -22 -56 -22 -160 0
                            -112 2 -124 27 -172 40 -75 85 -103 166 -103 147 0 223 113 209 310 -8 124
                            -51 195 -136 225 -54 19 -96 19 -141 -1z" fill="#fff"/>
                            <path d="M1235 3320 c-11 -5 -30 -17 -41 -27 -18 -15 -128 -160 -212 -280
                            l-23 -32 132 -180 131 -180 52 0 c121 2 187 -83 193 -245 2 -78 6 -94 30 -130
                            15 -23 30 -43 33 -46 3 -3 48 -63 99 -133 l93 -128 42 6 c123 18 226 -136 201
                            -302 -10 -71 -37 -123 -83 -165 -37 -34 -48 -38 -95 -38 -68 0 -113 30 -152
                            101 -27 49 -30 63 -32 156 l-1 101 -114 153 -113 154 -3 -429 -2 -428 34 -39
                            c47 -52 70 -131 64 -223 -9 -133 -86 -226 -187 -226 -53 0 -116 48 -150 115
                            -22 43 -26 63 -26 140 0 76 4 98 25 139 13 26 37 59 52 71 l28 24 0 441 0 441
                            -35 36 c-54 56 -78 131 -72 226 l5 78 -131 179 -131 178 -57 -76 c-31 -43
                            -185 -252 -342 -467 -157 -214 -295 -401 -306 -415 -34 -41 -54 -115 -49 -180
                            5 -75 -2 -64 350 -542 68 -91 208 -282 313 -425 104 -142 203 -276 220 -299
                            16 -22 75 -102 130 -177 107 -146 132 -165 199 -153 54 10 37 -11 423 516 43
                            58 117 159 165 225 143 194 265 361 368 500 53 72 116 157 140 190 24 33 50
                            75 56 95 17 45 17 125 0 170 -12 35 -139 212 -549 765 -32 44 -69 93 -80 109
                            -12 16 -120 163 -240 328 -120 164 -229 305 -242 314 -29 19 -84 26 -110 14z"/>
                            <path d="M5186 2971 c-24 -243 -101 -379 -238 -419 l-58 -17 0 -137 0 -138 84
                            0 84 0 4 -502 c5 -475 6 -507 26 -582 50 -182 147 -256 339 -256 89 0 159 14
                            243 48 95 38 142 69 136 90 -2 9 -16 70 -31 135 -25 109 -35 131 -50 108 -3
                            -5 -38 -17 -78 -26 -135 -31 -204 0 -226 103 -7 35 -11 198 -11 467 l0 415
                            170 0 170 0 0 155 0 155 -170 0 -170 0 0 235 0 235 -109 0 -108 0 -7 -69z" fill="#fff"/>
                            <path d="M3408 2529 c-92 -9 -203 -59 -264 -118 -220 -211 -229 -705 -16 -906
                            18 -16 32 -33 32 -37 0 -5 -34 -54 -77 -110 -42 -57 -84 -121 -94 -143 -43
                            -99 -32 -220 27 -285 19 -20 34 -41 34 -45 0 -4 -18 -36 -39 -70 -57 -89 -74
                            -158 -69 -269 9 -189 100 -286 315 -337 115 -27 342 -29 453 -4 215 48 356
                            179 406 377 21 81 15 301 -10 368 -49 131 -142 193 -339 225 -72 12 -401 44
                            -464 45 -19 0 -17 10 21 93 l34 75 59 -14 c173 -41 367 14 475 134 85 95 128
                            224 128 392 0 112 -15 187 -51 265 -12 25 -19 48 -16 51 2 3 48 10 101 16 l96
                            11 0 133 0 134 -225 0 c-123 0 -246 4 -272 9 -77 15 -162 19 -245 10z m218
                            -331 c59 -39 87 -106 92 -221 5 -112 -10 -165 -62 -225 -39 -45 -81 -62 -150
                            -62 -91 0 -139 28 -179 105 -30 58 -36 203 -11 281 21 66 75 128 126 143 53
                            17 144 6 184 -21z m-141 -1413 c268 -23 307 -39 307 -127 0 -57 -14 -89 -51
                            -121 -51 -43 -94 -52 -246 -52 -162 0 -219 15 -260 69 -34 45 -34 121 0 194
                            28 61 8 58 250 37z" fill="#fff"/>
                            <path d="M4271 2409 c-7 -67 -11 -122 -9 -124 2 -1 32 -17 68 -34 35 -18 68
                            -38 72 -44 4 -7 8 -236 8 -509 0 -567 10 -512 -94 -524 l-56 -7 0 -123 0 -124
                            325 0 326 0 -3 122 -3 123 -60 10 c-33 5 -66 14 -72 18 -10 6 -13 152 -13 673
                            l0 664 -239 0 -238 0 -12 -121z" fill="#fff"/>
                            </g>
                        </svg>}/>
                        <TechnologyMenuList img={<img className="technology__additional__img" title="WEBPACK" src={Webpack} alt="Webpack"></img>}/>
                        <TechnologyMenuList img={
                            <svg className="technology__additional__img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 496">
                                <title>CSS-IN-JS</title>
                                <circle cx="248" cy="248" r="220" fill="#20ade4"/>
                                <path fill="#f7df1e" d="M248 0C111 0 0 111 0 248s111 248 248 248 248-111 248-248S385 0 248 0zm0 248a96 96 0 0 0 0 192c-106 0-192-86-192-192S142 56 248 56a96 96 0 0 1 0 192z"/><path fill="#212322" d="M190.08 369.42l13.11-7.94a49.38 49.38 0 0 0 2.65 4.32 10.53 10.53 0 0 0 3 2.7 8.49 8.49 0 0 0 4.65 1.27q4.26 0 6.45-2.19c1.45-1.46 2.18-4.1 2.18-7.94v-54.75h16.11v55q0 12.09-6.44 18.18t-17.61 6.1q-17.18-.02-24.1-14.75zm68.16 10.24a29.26 29.26 0 0 1-11.22-12l13.12-7.6q6 9.78 15.87 9.78a12.94 12.94 0 0 0 7.94-2.24 6.86 6.86 0 0 0 3-5.7 7.05 7.05 0 0 0-1.61-4.6 12.16 12.16 0 0 0-3.62-3 92.07 92.07 0 0 0-6.5-3.05l-4-1.73q-9.56-4.14-14.44-9.6t-4.89-14.67a19.91 19.91 0 0 1 6.5-15.24q6.51-6 17.09-6a27.49 27.49 0 0 1 13.4 3 25 25 0 0 1 9.49 9.83l-12.54 8Q282 318 275.44 318a7.88 7.88 0 0 0-5.58 2 6.41 6.41 0 0 0-2.13 4.94 6.91 6.91 0 0 0 2.18 5.41 30.91 30.91 0 0 0 7.71 4.37l4 1.73q11.16 4.83 16.28 10.29t5.11 15q0 10.59-7.41 16.51t-19.27 5.93q-10.68-.03-18.09-4.52zM178.86 180.7q-11.67-11.44-11.68-28.7t11.62-28.64Q190.43 112 207.45 112q21 0 31.29 16l-12.31 8.74q-6.33-10.23-19-10.24-10.47 0-17.09 7.25T183.75 152q0 11 6.61 18.41a21.92 21.92 0 0 0 17.09 7.36 21.49 21.49 0 0 0 11.79-3 29.22 29.22 0 0 0 8.34-8.51l12.54 8.62q-11.06 17.27-32.67 17.26-16.92.01-28.59-11.44zm79.38 6.96a29.26 29.26 0 0 1-11.22-12l13.12-7.59q6 9.78 15.87 9.77a12.87 12.87 0 0 0 7.94-2.24 6.84 6.84 0 0 0 3-5.69 7 7 0 0 0-1.61-4.6 12.2 12.2 0 0 0-3.62-3 92.07 92.07 0 0 0-6.5-3.05l-4-1.73q-9.54-4.14-14.44-9.6t-4.89-14.67a19.92 19.92 0 0 1 6.5-15.24q6.51-6 17.09-6a27.61 27.61 0 0 1 13.4 3 25 25 0 0 1 9.49 9.83l-12.54 8.06Q282 126 275.44 126a8 8 0 0 0-5.58 2 6.42 6.42 0 0 0-2.13 5 6.86 6.86 0 0 0 2.19 5.4 30.31 30.31 0 0 0 7.7 4.37l4 1.73q11.16 4.83 16.28 10.29t5.12 15q0 10.58-7.42 16.51t-19.27 5.92q-10.68-.07-18.09-4.56zm61.76 0a29.26 29.26 0 0 1-11.22-12l13.11-7.59q6 9.78 15.88 9.77a12.89 12.89 0 0 0 7.94-2.24 6.84 6.84 0 0 0 3-5.69 7 7 0 0 0-1.61-4.6 12.24 12.24 0 0 0-3.63-3q-2-1.1-6.5-3.05l-4-1.73q-9.56-4.14-14.44-9.6t-4.89-14.67a19.92 19.92 0 0 1 6.5-15.24q6.5-6 17.08-6a27.62 27.62 0 0 1 13.41 3 25.08 25.08 0 0 1 9.49 9.83l-12.54 8.06q-3.8-6.91-10.37-6.91a8 8 0 0 0-5.58 2 6.41 6.41 0 0 0-2.12 5 6.85 6.85 0 0 0 2.18 5.4 30.6 30.6 0 0 0 7.71 4.37l4 1.73q11.16 4.83 16.28 10.29t5.12 15q0 10.58-7.42 16.51t-19.27 5.92q-10.67-.07-18.11-4.56z"/>
                            </svg>
                        }/>
                        <TechnologyMenuList img={
                            <svg className="technology__additional__img" xmlns="http://www.w3.org/2000/svg" viewBox="-11.5 -10.23174 23 20.46348">
                                <title>REACT</title>
                                <circle cx="0" cy="0" r="2.05" fill="#61dafb"/>
                                <g stroke="#61dafb" strokeWidth="1" fill="none">
                                <ellipse rx="11" ry="4.2"/>
                                <ellipse rx="11" ry="4.2" transform="rotate(60)"/>
                                <ellipse rx="11" ry="4.2" transform="rotate(120)"/>
                                </g>
                        </svg>}/>
                        <TechnologyMenuList img={
                            <svg className="technology__additional__img technology__additional__img_gulp" version="1.0"
                            width="50" height="50" viewBox="0 0 397.000000 460.000000"
                            preserveAspectRatio="xMidYMid meet">
                                <title>GULP</title>
                                <g transform="translate(0.000000,460.000000) scale(0.100000,-0.100000)"
                                fill="" stroke="none">
                                <path d="M1858 4468 c-18 -18 -69 -72 -113 -118 -44 -47 -142 -151 -218 -231
                                -76 -81 -146 -157 -155 -170 -9 -12 -39 -113 -67 -223 l-51 -201 -329 -6
                                c-446 -8 -763 -45 -851 -100 -40 -24 -42 -34 -12 -53 104 -66 452 -105 946
                                -106 322 0 527 10 707 36 131 19 274 59 282 80 20 54 -145 97 -495 129 -87 8
                                -84 -17 -26 212 l39 152 120 128 c365 387 365 388 365 410 0 22 -55 78 -87 87
                                -17 6 -30 -1 -55 -26z m-643 -1108 c8 -14 158 -13 172 1 13 13 33 4 33 -16 0
                                -29 -114 -44 -193 -26 -46 11 -51 15 -44 36 7 17 23 20 32 5z"/>
                                <path d="M55 3268 c5 -34 45 -388 52 -468 2 -25 11 -110 20 -190 9 -80 21
                                -191 27 -248 l11 -103 25 63 c71 182 184 324 303 382 48 24 65 28 104 22 115
                                -16 210 -155 138 -202 -25 -16 -27 -16 -51 7 -14 13 -30 35 -37 49 -7 13 -24
                                31 -39 38 -52 25 -126 -23 -198 -129 -125 -182 -195 -424 -142 -489 25 -31 59
                                -19 135 50 80 74 129 146 157 234 21 65 48 106 70 106 6 0 19 -9 29 -19 25
                                -25 20 -64 -20 -176 -34 -97 -84 -257 -94 -305 -12 -56 -44 -125 -65 -138 -15
                                -9 -22 -8 -36 5 -22 22 -14 74 32 227 5 17 0 15 -27 -11 -85 -80 -203 -125
                                -237 -91 -15 15 -15 20 3 -162 9 -80 20 -203 26 -275 20 -243 19 -237 64 -261
                                62 -34 225 -73 390 -95 283 -36 618 -20 861 41 145 36 202 62 208 92 5 27 32
                                255 51 443 8 72 19 169 25 217 16 125 15 128 -45 79 -88 -73 -156 -95 -219
                                -71 -33 12 -43 53 -23 94 8 17 45 69 81 115 67 85 79 111 51 111 -41 0 -104
                                -54 -157 -135 -33 -49 -103 -205 -154 -339 -39 -104 -61 -136 -93 -136 -47 0
                                -53 68 -13 152 11 24 35 75 52 113 18 39 37 79 43 90 7 14 1 12 -24 -9 -43
                                -37 -106 -65 -142 -66 -16 0 -38 10 -52 24 l-24 24 -47 -24 c-80 -41 -124 -25
                                -124 43 l0 35 -37 -36 c-67 -65 -169 -84 -212 -41 -35 34 -1 184 75 339 35 71
                                53 84 88 68 35 -16 33 -43 -10 -122 -35 -65 -65 -164 -57 -187 8 -23 38 -14
                                81 23 49 42 85 100 127 203 33 81 54 103 83 85 29 -19 25 -60 -17 -164 -62
                                -149 -54 -198 23 -151 23 15 37 37 54 83 13 35 28 72 32 83 5 11 35 85 66 165
                                129 334 131 338 179 326 52 -13 52 -13 -59 -281 -80 -191 -146 -361 -146 -375
                                0 -19 32 -10 78 22 92 63 129 106 157 178 30 79 57 110 83 94 9 -6 18 -23 20
                                -37 l3 -26 50 39 c57 45 106 58 150 40 79 -33 61 -117 -57 -259 -39 -47 -50
                                -67 -40 -69 20 -4 33 4 97 59 30 25 67 57 82 70 28 24 28 27 52 264 14 132 30
                                281 35 330 6 50 15 133 20 185 5 52 16 156 24 230 20 177 20 184 -1 175 -29
                                -13 -172 -44 -253 -55 -498 -70 -1390 -43 -1633 49 -39 15 -39 15 -32 -21z"/>
                                <path d="M2840 2135 l0 -215 25 0 25 0 0 215 0 215 -25 0 -25 0 0 -215z" fill="#fff"/>
                                <path d="M3500 2320 c0 -25 4 -30 25 -30 21 0 25 5 25 30 0 25 -4 30 -25 30
                                -21 0 -25 -5 -25 -30z" fill="#fff"/>
                                <path d="M2210 2223 c-50 -26 -75 -75 -75 -148 0 -105 45 -157 135 -157 40 0
                                57 5 77 23 l26 24 -6 -44 c-8 -61 -35 -86 -93 -86 -35 0 -50 5 -64 23 -10 12
                                -29 22 -44 22 -22 0 -24 -3 -17 -22 23 -65 144 -91 212 -45 50 33 58 69 58
                                255 l1 162 -25 0 c-17 0 -25 -6 -25 -17 0 -15 -2 -14 -20 2 -28 26 -98 30
                                -140 8z m117 -48 c76 -53 38 -215 -50 -215 -52 0 -80 36 -85 110 -4 55 -2 61
                                26 90 34 34 74 39 109 15z" fill="#fff"/>
                                <path d="M3085 2233 c-11 -3 -28 -12 -37 -21 -16 -14 -18 -14 -18 1 0 11 -8
                                17 -25 17 l-25 0 0 -215 0 -215 25 0 c24 0 25 2 25 77 0 75 0 76 20 58 29 -26
                                100 -31 144 -10 94 45 104 223 15 288 -27 19 -89 30 -124 20z m79 -54 c34 -16
                                61 -86 52 -135 -10 -53 -46 -84 -96 -84 -62 0 -90 35 -90 112 0 52 3 63 29 89
                                31 31 64 36 105 18z" fill="#fff"/>
                                <path d="M3694 2233 c-37 -7 -68 -49 -67 -90 1 -46 27 -66 102 -83 92 -20 121
                                -48 85 -84 -23 -23 -106 -21 -127 2 -10 10 -17 24 -17 30 0 7 -12 12 -26 12
                                -25 0 -26 -2 -20 -32 7 -37 36 -64 79 -72 105 -21 181 20 179 97 -1 39 -27 65
                                -76 78 -93 25 -126 40 -126 59 0 44 87 55 124 15 23 -25 66 -34 66 -15 0 6 -7
                                24 -15 40 -21 40 -86 58 -161 43z" fill="#fff"/>
                                <path d="M2501 2118 c0 -127 13 -176 49 -196 37 -19 115 -10 145 18 l25 23 0
                                -21 c0 -15 6 -22 20 -22 19 0 20 7 20 155 l0 155 -24 0 c-24 0 -24 -1 -28
                                -116 -3 -108 -5 -117 -27 -135 -26 -21 -90 -26 -109 -7 -8 8 -12 53 -12 135
                                l0 123 -30 0 -30 0 1 -112z" fill="#fff"/>
                                <path d="M3498 2038 c-3 -192 -3 -193 -25 -196 -15 -2 -23 -10 -23 -23 0 -15
                                7 -19 33 -19 63 0 67 13 67 233 l0 197 -25 0 -25 0 -2 -192z" fill="#fff"/>
                                <path d="M3350 1955 c0 -32 2 -35 30 -35 28 0 30 3 30 35 0 32 -2 35 -30 35
                                -28 0 -30 -3 -30 -35z" fill="#fff"/>
                                <path d="M379 1010 c66 -113 56 -57 90 -535 10 -138 23 -261 30 -273 68 -127
                                773 -153 1003 -36 55 28 55 27 62 179 3 61 12 214 20 341 l13 230 56 97 c31
                                53 52 97 47 97 -4 0 -37 -9 -72 -20 -140 -44 -417 -80 -613 -80 -206 0 -474
                                35 -618 80 -34 11 -65 20 -69 20 -3 0 20 -45 51 -100z"/>
                                </g>
                            </svg>}/>
                        <TechnologyMenuList img={<img className="technology__additional__img technology__additional__img_eng" title="Английский Pre-Intermediate" src={Eng} alt="Английский Pre-Intermediate"></img>}/>
                    </ul>
                </div>
            </section>
            <section id="portfolio" className="portfolio">
                <div className="container">
                    <SectionHeader title={'Мои работы'}/>
                    <PortfolioTabs all={showAllTabs} html={showHtmlTabs} bootstrap={showBootstrapTabs} javascript={showJavascriptTabs} />
                    <div className="portfolio__wrapper">
                    {all ?  
                        <>
                            <PortfolioItems project subheader={'Landing page'} text={'Самый первый проект на Figma'} alt={'Landing page'} preview={LandingPagePreview} url={LandingPageUrl} github={LandingPageGitHub}/>
                            <PortfolioItems project subheader={'Интернет магазин'} text={'Второй проект на Figma'} alt={'Интернет магазин'}/>
                            <PortfolioItems project subheader={'Такси'} text={'Сайт такси Psd макет'} alt={'Такси'} preview={TaxiPreview} url={TaxiUrl} github={TaxiGitHub}/>
                            <PortfolioItems project subheader={'Автозапчасти'} text={'Сайт автозапчастей Psd макет'} alt={'Автозапчасти'} preview={AutopartPreview} url={AutopartUrl} github={AutopartGitHub}/>
                            <PortfolioItems project subheader={'Ставки на спорт'} text={'Личный кабинет ставки на спорт'} alt={'Ставки на спорт'} preview={SportBettingsPreview} url={SportBettingsUrl} github={SportBettingsGitHub}/>
                            <PortfolioItems project subheader={'Рабочий аккаунт'} text={'Личный кабинет сотрудника'} alt={'Рабочий аккаунт'} preview={PersonalAccountPreview} url={PersonalAccountUrl} github={PersonalAccountGitHub}/>
                            <PortfolioItems project subheader={'Личный кабинет'} text={'Личный кабинет CRM система'} alt={'Личный кабинет'} preview={PersonalAccountCrmPreview} url={PersonalAccountCrmUrl} github={PersonalAccountCrmGitHub}/>
                            <PortfolioItems project subheader={'Аренда спецтехники'} text={'Сайт аренды спецтехники нативный js'} alt={'Аренда спецтехники'}/>
                            <PortfolioItems project subheader={'Заточка инструментов'} text={'Коммерческий проект на фрилансе'} alt={'Заточка инструментов'} preview={GrindingPreview} url={GrindingUrl} github={GrindingGitHub}/>
                            <PortfolioItems project subheader={'Data Universe'} text={'Cайт компании https://datauniverse.ru/'} alt={'Data Universe'} preview={DataUniversePreview} url={DataUniverseUrl} github={DataUniverseGitHub}/>
                            <PortfolioItems project subheader={'Avexima'} text={'Новый дизайн сайта https://avexima.ru/'} alt={'Avexima'} url={AveximaUrl} github={AveximaGitHub}/>
                            <PortfolioItems project subheader={'Искусственный интелект'} text={'Mobile First'} alt={'Искусственный интелект'} preview={ArtificiailIntelligencePreview} url={ArtificiailIntelligenceUrl} github={ArtificiailIntelligenceGitHub}/>
                            <PortfolioItems project subheader={'Медицинская клиника'} text={'Сайт на Grid layout (CSS Grid)'} alt={'Медицинская клиника'} preview={MedicalHospitalPreview} url={MedicalHospitalUrl} github={MedicalHospitalGitHub}/>
                            <PortfolioItems project subheader={'World of Warcraft'} text={'Проект на Bootstrap 4'} alt={'World of Warcraft'} url={WowUrl} github={WowGitHub}/>  
                            <PortfolioItems project subheader={'Космические Путешествия'} text={'Библиотека three.js 3д модели на сайте (только ПК версия)'} alt={'Космические Путешествия'}/>
                        </>
                    : null}    
                    {html ?  
                        <>
                            <PortfolioItems project subheader={'Landing page'} text={'Самый первый проект на Figma'} alt={'Landing page'} preview={LandingPagePreview} url={LandingPageUrl} github={LandingPageGitHub}/>
                            <PortfolioItems project subheader={'Интернет магазин'} text={'Второй проект на Figma'} alt={'Интернет магазин'}/>
                            <PortfolioItems project subheader={'Такси'} text={'Сайт такси Psd макет'} alt={'Такси'} preview={TaxiPreview} url={TaxiUrl} github={TaxiGitHub}/>
                            <PortfolioItems project subheader={'Автозапчасти'} text={'Сайт автозапчастей Psd макет'} alt={'Автозапчасти'} url={AutopartUrl} preview={AutopartPreview} github={AutopartGitHub}/>
                            <PortfolioItems project subheader={'Ставки на спорт'} text={'Личный кабинет ставки на спорт'} alt={'Ставки на спорт'} preview={SportBettingsPreview} url={SportBettingsUrl} github={SportBettingsGitHub}/>
                            <PortfolioItems project subheader={'Рабочий аккаунт'} text={'Личный кабинет сотрудника'} alt={'Рабочий аккаунт'} preview={PersonalAccountPreview} url={PersonalAccountUrl} github={PersonalAccountGitHub}/>
                            <PortfolioItems project subheader={'Личный кабинет'} text={'Личный кабинет CRM система'} alt={'Личный кабинет'} preview={PersonalAccountCrmPreview} url={PersonalAccountCrmUrl} github={PersonalAccountCrmGitHub}/>
                            <PortfolioItems project subheader={'Аренда спецтехники'} text={'Сайт аренды спецтехники нативный js'} alt={'Аренда спецтехники'}/>
                            <PortfolioItems project subheader={'Заточка инструментов'} text={'Коммерческий проект на фрилансе'} alt={'Заточка инструментов'} preview={GrindingPreview} url={GrindingUrl} github={GrindingGitHub}/>
                            <PortfolioItems project subheader={'Data Universe'} text={'Cайт компании https://datauniverse.ru/'} alt={'Data Universe'} preview={DataUniversePreview} url={DataUniverseUrl} github={DataUniverseGitHub}/>
                            <PortfolioItems project subheader={'Avexima'} text={'Новый дизайн сайта https://avexima.ru/'} alt={'Avexima'} url={AveximaUrl} github={AveximaGitHub}/>
                            <PortfolioItems project subheader={'Искусственный интелект'} text={'Mobile First'} alt={'Искусственный интелект'} preview={ArtificiailIntelligencePreview} url={ArtificiailIntelligenceUrl} github={ArtificiailIntelligenceGitHub}/>
                            <PortfolioItems project subheader={'Медицинская клиника'} text={'Сайт на Grid layout (CSS Grid)'} alt={'Медицинская клиника'} preview={MedicalHospitalPreview} url={MedicalHospitalUrl} github={MedicalHospitalGitHub}/>
                        </>
                    : null}    
                        {bootstrap ? <PortfolioItems project subheader={'World of Warcraft'} text={'Проект на Bootstrap 4'} alt={'World of Warcraft'} url={WowUrl} github={WowGitHub}/>: null}     
                        {javascript ?  <PortfolioItems project subheader={'Космические Путешествия'} text={'Библиотека three.js 3д модели на сайте (только ПК версия)'} alt={'Космические Путешествия'}/>: null} 
                    </div>
                </div>
            </section>
            <section id="about" className="about">
                <div className="container">
                    <SectionHeader title={'Обо мне'}/>
                    <PortfolioText text={'Меня зовут Андрей мне 33 года. Заинтересовался Frontend разработкой и начал изучать верстку в октябре 2020 года. Прошел 6 курсов верстки, 4 курса по JavaScript и один по Bootstrap 4 на различных платформах. На данный момент изучаю React, в дальнейшем планирую изучать Typescript.'}/>
                    <PortfolioTabs all={showAllTabs} html={showHtmlTabs} bootstrap={showBootstrapTabs} javascript={showJavascriptTabs}/>
                    <div className="about__wrapper">
                        <PortfolioItems subheader={'Начальный курс верстки Udemy'} text={'Курс базовой верстки для новичков с нуля от Udemy'} alt={'Курс базовой верстки для новичков с нуля от Udemy'} preview={HtmlSertificates} />
                        <PortfolioItems subheader={'Интерактивный курс верстки Geekbrains'} text={'Курс базовой верстки от Geekbrains'} alt={'Курс базовой верстки от Geekbrains'} preview={HtmlSertificatesGeeckbrains} />
                        <PortfolioItems subheader={'Профессиональная верстка Geekbrains'} text={'Курс профессиональной верстки от Geekbrains'} alt={'Курс профессиональной верстки от Geekbrains'} preview={HtmlProfessionalSertificatesGeeckbrains}/>
                        <PortfolioItems subheader={'Freecodecamp'} text={'Responsive Web Design'} alt={'Responsive Web Design'} preview={FreecodecampSertificates}/>
                        <PortfolioItems subheader={'Web разработчик от Ивана Петриченко'} text={'Курс Web разработчик по верстке и немного Jquery от Ивана Петриченко'} preview={WebDeveloperSertificates}/>
                        <PortfolioItems subheader={'Bootstrap Beonmax'} text={'Курс от Beonmax по Bootstrap'} alt={'Курс от Beonmax по Bootstrap'} preview={BootstrapSertificates}/>
                        <PortfolioItems subheader={'JavaScript Geekbrains'} text={'Курс от Geekbrains по базовому JavaScript'} alt={'Курс от Geekbrains по базовому JavaScript'} preview={JavascriptBaseSertificatesGeekbrains}/>
                        <PortfolioItems subheader={'1С-Битрикс: Управление сайтом'} text={'Контент менеджер'} alt={'1С-Битрикс: Управление сайтом - Контент менеджер'} preview={BitrixSertificateContentManager}/>
                        <PortfolioItems subheader={'1С-Битрикс: Управление сайтом'} text={'Продвижение сайта и Маркетинг'} alt={'1С-Битрикс: Управление сайтом - Продвижение сайта и Маркетинг'} preview={BitrixSertificateSeoAndMarketing}/>
                        <PortfolioItems subheader={'1С-Битрикс: Управление сайтом'} text={'Администратор. Базовый'} alt={'1С-Битрикс: Управление сайтом - Администратор. Базовый'} preview={BitrixSertificateAdmin}/>
                        <PortfolioItems subheader={'Битрикс 24 (коробочная версия)'} text={'Администратор Битрикс 24'} alt={'Битрикс 24 (коробочная версия) - Администратор Битрикс24'} preview={BitrixSertificateAdmin24}/>
                    </div>
                </div>
            </section>
           
        </>
    )
}


export default Main