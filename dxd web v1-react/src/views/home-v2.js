import React from 'react'

import { Helmet } from 'react-helmet'

import './home-v2.css'

const HomeV2 = (props) => {
  return (
    <div className="home-v2-container10">
      <Helmet>
        <title>Home-v2 - exported project</title>
        <meta property="og:title" content="Home-v2 - exported project" />
      </Helmet>
      <div className="home-v2-container11">
        <div data-thq="thq-dropdown" className="home-v2-thq-dropdown list-item">
          <div
            data-thq="thq-dropdown-toggle"
            className="home-v2-dropdown-toggle1"
          >
            <div
              data-thq="thq-dropdown-arrow"
              className="home-v2-dropdown-arrow"
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
          <ul data-thq="thq-dropdown-list" className="home-v2-dropdown-list">
            <li data-thq="thq-dropdown" className="home-v2-dropdown1 list-item">
              <div
                data-thq="thq-dropdown-toggle"
                className="home-v2-dropdown-toggle2"
              >
                <span className="home-v2-my-account">My Account</span>
              </div>
            </li>
            <li data-thq="thq-dropdown" className="home-v2-dropdown2 list-item">
              <div
                data-thq="thq-dropdown-toggle"
                className="home-v2-dropdown-toggle3"
              >
                <span className="home-v2-drops">Drops</span>
              </div>
            </li>
            <li data-thq="thq-dropdown" className="home-v2-dropdown3 list-item">
              <div
                data-thq="thq-dropdown-toggle"
                className="home-v2-dropdown-toggle4"
              >
                <span className="home-v2-thoughts">Thoughts</span>
              </div>
            </li>
            <li data-thq="thq-dropdown" className="home-v2-dropdown4 list-item">
              <div
                data-thq="thq-dropdown-toggle"
                className="home-v2-dropdown-toggle5"
              >
                <span className="home-v2-affinity">Affinity</span>
              </div>
            </li>
            <li data-thq="thq-dropdown" className="home-v2-dropdown5 list-item">
              <div
                data-thq="thq-dropdown-toggle"
                className="home-v2-dropdown-toggle6"
              >
                <span className="home-v2-about-us">About Us</span>
              </div>
            </li>
          </ul>
        </div>
        <img
          alt="image"
          src="/icon%20-%20black-200h.png"
          className="home-v2-icon-black"
        />
        <img
          alt="image"
          src="/logo%20text%20-%20black-200h.png"
          className="home-v2-text-black"
        />
        <div className="home-v2-container12">
          <span className="home-v2-text10">About Us</span>
          <button type="button" className="home-v2-button button">
            CONNECT
          </button>
        </div>
      </div>
      <img alt="image" src="/banner-1500w.png" className="home-v2-image1" />
      <div className="home-v2-container13">
        <div className="home-v2-container14">
          <img
            alt="image"
            src="/juice%20kitchen-1500w.png"
            className="home-v2-image2"
          />
          <div className="home-v2-container15">
            <span className="home-v2-text11">Collaboration</span>
            <span className="home-v2-text12">Juice Bruns</span>
            <span className="home-v2-text13">7/21/24</span>
            <span className="home-v2-text14">
              Our first official collaborative drop was released in July of 2024
              and featured the artwork of visual artist and rapper Juice Bruns.
              Learn more about the artwork and the process of launching the
              first ever DxD artist collaboration.
            </span>
          </div>
        </div>
        <div className="home-v2-container16">
          <img
            alt="image"
            src="/alex%20collab-1500w.png"
            className="home-v2-image3"
          />
          <div className="home-v2-container17">
            <span className="home-v2-text15">Collaboration</span>
            <span className="home-v2-text16">Alex Mack</span>
            <span className="home-v2-text17">9/21/24</span>
            <span className="home-v2-text18">
              Drop 2, launched in September of 2024 featured Alex Mack, a
              multidisciplinary artist from Vancouver. Learn more about she
              combined her landscape photography with her talents in watercolor
              to create a unique piece for DxD.
            </span>
          </div>
        </div>
        <div className="home-v2-container18">
          <img
            alt="image"
            src="/alex%20collab-1500w.png"
            className="home-v2-image4"
          />
          <div className="home-v2-container19">
            <span className="home-v2-text19">Event</span>
            <span className="home-v2-text20">Marfa Vibe Sesh</span>
            <span className="home-v2-text21">11/15/24</span>
            <span className="home-v2-text22">
              Drop 2, launched in September of 2024 featured Alex Mack, a
              multidisciplinary artist from Vancouver. Learn more about she
              combined her landscape photography with her talents in watercolor
              to create a unique piece for DxD.
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomeV2
