import React from 'react'

import { Helmet } from 'react-helmet-async'

import './home-v1.css'

const HomeV1 = (props) => {
  return (
    <div className="home-v1-container1">
      <Helmet>
        <title>Home-v1 - exported project</title>
        <meta property="og:title" content="Home-v1 - exported project" />
      </Helmet>
      <div className="home-v1-container2">
        <div data-thq="thq-dropdown" className="home-v1-thq-dropdown list-item">
          <div
            data-thq="thq-dropdown-toggle"
            className="home-v1-dropdown-toggle1"
          >
            <div
              data-thq="thq-dropdown-arrow"
              className="home-v1-dropdown-arrow"
            >
              <svg width="24" height="24" viewBox="0 0 24 24">
                <path
                  d="M3 5h18M3 12h18M3 19h18"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
              </svg>
            </div>
          </div>
          <ul data-thq="thq-dropdown-list" className="home-v1-dropdown-list">
            <li data-thq="thq-dropdown" className="home-v1-dropdown1 list-item">
              <div
                data-thq="thq-dropdown-toggle"
                className="home-v1-dropdown-toggle2"
              >
                <span className="home-v1-my-account">My Account</span>
              </div>
            </li>
            <li data-thq="thq-dropdown" className="home-v1-dropdown2 list-item">
              <div
                data-thq="thq-dropdown-toggle"
                className="home-v1-dropdown-toggle3"
              >
                <span className="home-v1-drops">Drops</span>
              </div>
            </li>
            <li data-thq="thq-dropdown" className="home-v1-dropdown3 list-item">
              <div
                data-thq="thq-dropdown-toggle"
                className="home-v1-dropdown-toggle4"
              >
                <span className="home-v1-thoughts">Thoughts</span>
              </div>
            </li>
            <li data-thq="thq-dropdown" className="home-v1-dropdown4 list-item">
              <div
                data-thq="thq-dropdown-toggle"
                className="home-v1-dropdown-toggle5"
              >
                <span className="home-v1-affinity">Affinity</span>
              </div>
            </li>
            <li data-thq="thq-dropdown" className="home-v1-dropdown5 list-item">
              <div
                data-thq="thq-dropdown-toggle"
                className="home-v1-dropdown-toggle6"
              >
                <span className="home-v1-about-us">About Us</span>
              </div>
            </li>
          </ul>
        </div>
        <img
          alt="image"
          src="/icon%20-%20black-200h.png"
          className="home-v1-icon-black"
        />
        <img
          alt="image"
          src="/logo%20text%20-%20black-200h.png"
          className="home-v1-text-black"
        />
        <div className="home-v1-container3">
          <span className="home-v1-text1">About Us</span>
          <button type="button" className="home-v1-button button">
            CONNECT
          </button>
        </div>
      </div>
      <div className="home-v1-container4">
        <img
          alt="image"
          src="/img_2271%20cropped-1500w.png"
          className="home-v1-image1"
        />
        <div className="home-v1-container5">
          <div className="home-v1-container6">
            <img
              alt="image"
              src="/juice%20kitchen-1500w.png"
              className="home-v1-image2"
            />
            <div className="home-v1-container7">
              <span className="home-v1-text2">Collaboration</span>
              <span className="home-v1-text3">Juice Bruns</span>
              <span className="home-v1-text4">7/21/24</span>
              <span className="home-v1-text5">
                Our first official collaborative drop was released in July of
                2024 and featured the artwork of visual artist and rapper Juice
                Bruns. Learn more about the artwork and the process of launching
                the first ever DxD artist collaboration.
              </span>
            </div>
          </div>
          <div className="home-v1-container8">
            <img
              alt="image"
              src="/alex%20collab-1500w.png"
              className="home-v1-image3"
            />
            <div className="home-v1-container9">
              <span className="home-v1-text6">Collaboration</span>
              <span className="home-v1-text7">Alex Mack</span>
              <span className="home-v1-text8">9/21/24</span>
              <span className="home-v1-text9">
                Drop 2, launched in September of 2024 featured Alex Mack, a
                multidisciplinary artist from Vancouver. Learn more about she
                combined her landscape photography with her talents in
                watercolor to create a unique piece for DxD.
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomeV1
