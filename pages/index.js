import React, { useEffect, useState } from 'react';
import Head from 'next/head'

import MultipleOptionsComponent from '../components/multiple_select'; 
import NFLDropdownComponent from '../components/dropdown'; 

const Home = (props) => {

  const [metric, setMetric] = useState('');

  const handleMetricChange = (selectedMetric) => {
    setMetric(selectedMetric);
  };


  return (
    <>
      <div className="home-container">
        <Head>
          <title>Dashboard Template</title>
          <meta
            name="description"
            content="This is a Next JS dashboard using plotly."
          />
          <meta property="og:title" content="Dashboard Template" />
          <meta
            property="og:description"
            content="This is a Next JS dashboard using plotly."
          />
        </Head>
        <header data-thq="thq-navbar" className="home-navbar-interactive">
          <h1 className="home-text">Dashboard Template</h1>
          <div data-thq="thq-navbar-nav" className="home-desktop-menu">
            <div className="home-buttons">
              <button className="home-register button">Github</button>
            </div>
          </div>
          <div data-thq="thq-burger-menu" className="home-burger-menu">
            <svg viewBox="0 0 1024 1024" className="home-icon">
              <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
            </svg>
          </div>
          <div data-thq="thq-mobile-menu" className="home-mobile-menu">
            <div className="home-nav">
              <div className="home-top">
                <h1 className="home-text01">Dashboard Template</h1>
                <div data-thq="thq-close-menu" className="home-close-menu">
                  <svg viewBox="0 0 1024 1024" className="home-icon02">
                    <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                  </svg>
                </div>
              </div>
              <nav className="home-links"></nav>
              <div className="home-buttons1">
                <button className="button home-register1">Github</button>
              </div>
            </div>
            <div>
              <svg viewBox="0 0 950.8571428571428 1024" className="home-icon04">
                <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
              </svg>
              <svg viewBox="0 0 877.7142857142857 1024" className="home-icon06">
                <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
              </svg>
              <svg viewBox="0 0 602.2582857142856 1024" className="home-icon08">
                <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
              </svg>
            </div>
          </div>
        </header>
        <div className="home-container01">
          <span className="home-text02">
            <span className="home-text03">
              This is a
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <span className="home-text04">template dashboard web app</span>
            <span className="home-text05">
               made with Next JS. The plots are made with Plotly JS. I wanted to
              find a way to make dashboards that had more flexibility beyond for
              instance, Streamlit and Dash. The basic structure of the app is
              made in TeleportHQ. Everything else and plotly plots are added
              with code. The whole point is to maximize both the
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <span className="home-text06">speed</span>
            <span className="home-text07">
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <span className="home-text08">
              and
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <span className="home-text09">flexibility</span>
            <span className="home-text10">
              {' '}
              allowed in making dashboard apps. I am still experimenting with
              this strategy. Check out the github repo for updates!
            </span>
            <br></br>
            <br></br>
            <span>    - Denis E.</span>
            <br></br>
          </span>
        </div>
        <div className="home-container02">
          <div className="home-container03">
            <div className="home-container04"></div>
            <div className="home-container05"></div>
            <div className="home-container06"></div>
          </div>
          <div className="home-container07"></div>
        </div>
        <div className="home-container08">
          <div className="home-container09">
            <div className="home-container10"></div>
            <div className="home-container11"></div>
          </div>
          <div className="home-container12"></div>
        </div>
      </div>
      <style jsx>
        {`
          .home-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
          .home-navbar-interactive {
            width: 100%;
            display: flex;
            align-items: center;
            padding-top: var(--dl-space-space-twounits);
            padding-left: var(--dl-space-space-threeunits);
            padding-right: var(--dl-space-space-threeunits);
            padding-bottom: var(--dl-space-space-twounits);
            justify-content: space-between;
          }
          .home-text {
            color: rgb(82, 185, 141);
          }
          .home-desktop-menu {
            flex: 1;
            display: flex;
            justify-content: flex-end;
          }
          .home-buttons {
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .home-register {
            color: var(--dl-color-gray-white);
            border-radius: var(--dl-radius-radius-radius8);
            background-color: var(--dl-color-primary-greenish);
          }
          .home-burger-menu {
            display: none;
          }
          .home-icon {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
          }
          .home-mobile-menu {
            top: 0px;
            left: 0px;
            width: 100%;
            height: 100vh;
            display: none;
            padding: 32px;
            z-index: 100;
            position: absolute;
            flex-direction: column;
            justify-content: space-between;
            background-color: #fff;
          }
          .home-nav {
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-top {
            width: 100%;
            display: flex;
            align-items: center;
            margin-bottom: var(--dl-space-space-threeunits);
            justify-content: space-between;
          }
          .home-text01 {
            color: rgb(82, 185, 141);
          }
          .home-close-menu {
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .home-icon02 {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
          }
          .home-links {
            flex: 0 0 auto;
            border: 2px dashed rgba(120, 120, 120, 0.4);
            display: flex;
            align-self: flex-start;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-buttons1 {
            display: flex;
            margin-top: var(--dl-space-space-unit);
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .home-icon04 {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
            margin-right: var(--dl-space-space-twounits);
          }
          .home-icon06 {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
            margin-right: var(--dl-space-space-twounits);
          }
          .home-icon08 {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
          }
          .home-container01 {
            flex: 0 0 auto;
            width: 100%;
            height: auto;
            display: flex;
            padding: var(--dl-space-space-oneandhalfunits);
            align-items: flex-start;
            justify-content: flex-start;
          }
          .home-text02 {
            font-weight: 300;
          }
          .home-text03 {
            font-style: normal;
          }
          .home-text04 {
            color: var(--dl-color-primary-greenish);
            font-style: normal;
          }
          .home-text05 {
            font-style: normal;
          }
          .home-text06 {
            color: var(--dl-color-primary-greenish);
            font-weight: 500;
          }
          .home-text07 {
            font-weight: 500;
          }
          .home-text08 {
            font-style: normal;
          }
          .home-text09 {
            color: var(--dl-color-primary-greenish);
            font-weight: 500;
          }
          .home-text10 {
            font-style: normal;
          }
          .home-container02 {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: flex-start;
            justify-content: flex-start;
          }
          .home-container03 {
            flex: 0 0 auto;
            width: 25%;
            height: var(--dl-size-size-xxlarge);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .home-container04 {
            flex: 0 0 auto;
            width: 100%;
            border: 2px dashed rgba(120, 120, 120, 0.4);
            height: 33.33%;
            display: flex;
            align-items: flex-start;
          }
          .home-container05 {
            flex: 0 0 auto;
            width: 100%;
            border: 2px dashed rgba(120, 120, 120, 0.4);
            height: 33.33%;
            display: flex;
            align-items: flex-start;
          }
          .home-container06 {
            flex: 0 0 auto;
            width: 100%;
            border: 2px dashed rgba(120, 120, 120, 0.4);
            height: 33.33%;
            display: flex;
            align-items: flex-start;
          }
          .home-container07 {
            flex: 0 0 auto;
            width: 75%;
            border: 2px dashed rgba(120, 120, 120, 0.4);
            height: var(--dl-size-size-xxlarge);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-container08 {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: flex-start;
            justify-content: flex-start;
          }
          .home-container09 {
            flex: 0 0 auto;
            width: 50%;
            height: var(--dl-size-size-xlarge);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .home-container10 {
            flex: 0 0 auto;
            width: 100%;
            border: 2px dashed rgba(120, 120, 120, 0.4);
            height: 20%;
            display: flex;
            align-items: flex-start;
          }
          .home-container11 {
            flex: 0 0 auto;
            width: 100%;
            border: 2px dashed rgba(120, 120, 120, 0.4);
            height: 80%;
            display: flex;
            align-items: flex-start;
          }
          .home-container12 {
            flex: 0 0 auto;
            width: 50%;
            border: 2px dashed rgba(120, 120, 120, 0.4);
            height: var(--dl-size-size-xlarge);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          @media (max-width: 767px) {
            .home-navbar-interactive {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
            .home-text {
              font-size: 1.5em;
            }
            .home-desktop-menu {
              display: none;
            }
            .home-burger-menu {
              display: flex;
              align-items: center;
              justify-content: center;
            }
            .home-text01 {
              font-size: 1.5em;
            }
            .home-register1 {
              color: #ffffff;
              background-color: var(--dl-color-primary-greenish);
            }
            .home-container02 {
              flex-direction: column;
            }
            .home-container03 {
              width: 100%;
              height: var(--dl-size-size-xlarge);
            }
            .home-container07 {
              width: 100%;
              height: var(--dl-size-size-xlarge);
            }
            .home-container08 {
              flex-direction: column;
            }
            .home-container09 {
              width: 100%;
            }
            .home-container12 {
              width: 100%;
            }
          }
          @media (max-width: 479px) {
            .home-navbar-interactive {
              padding: var(--dl-space-space-unit);
            }
            .home-mobile-menu {
              padding: 16px;
            }
            .home-register1 {
              color: #ffffff;
              border-radius: var(--dl-radius-radius-radius8);
              background-color: var(--dl-color-primary-greenish);
            }
          }
        `}
      </style>
    </>
  )
}

export default Home
