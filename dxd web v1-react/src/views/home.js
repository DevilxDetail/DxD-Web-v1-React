import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import './home.css'

const Home = (props) => {
  return (
    <div className="home-container10">
      <Helmet>
        <title>exported project</title>
        <meta property="og:title" content="exported project" />
      </Helmet>
      <div className="home-container11">
        <div data-thq="thq-dropdown" className="home-thq-dropdown list-item">
          <div data-thq="thq-dropdown-toggle" className="home-dropdown-toggle1">
            <div data-thq="thq-dropdown-arrow" className="home-dropdown-arrow">
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
          <ul data-thq="thq-dropdown-list" className="home-dropdown-list">
            <li data-thq="thq-dropdown" className="home-dropdown1 list-item">
              <div
                data-thq="thq-dropdown-toggle"
                className="home-dropdown-toggle2"
              >
                <span className="home-my-account">My Account</span>
              </div>
            </li>
            <li data-thq="thq-dropdown" className="home-dropdown2 list-item">
              <div
                data-thq="thq-dropdown-toggle"
                className="home-dropdown-toggle3"
              >
                <span className="home-drops">Drops</span>
              </div>
            </li>
            <li data-thq="thq-dropdown" className="home-dropdown3 list-item">
              <div
                data-thq="thq-dropdown-toggle"
                className="home-dropdown-toggle4"
              >
                <span className="home-thoughts">Thoughts</span>
              </div>
            </li>
            <li data-thq="thq-dropdown" className="home-dropdown4 list-item">
              <div
                data-thq="thq-dropdown-toggle"
                className="home-dropdown-toggle5"
              >
                <span className="home-affinity">Affinity</span>
              </div>
            </li>
            <li data-thq="thq-dropdown" className="home-dropdown5 list-item">
              <div
                data-thq="thq-dropdown-toggle"
                className="home-dropdown-toggle6"
              >
                <span className="home-about-us">About Us</span>
              </div>
            </li>
          </ul>
        </div>
        <img
          alt="image"
          src="/icon%20-%20black-200h.png"
          className="home-icon-black"
        />
        <img
          alt="image"
          src="/logo%20text%20-%20black-200h.png"
          className="home-text-black"
        />
        <div className="home-container12">
          <span className="home-text10">About Us</span>
          <button type="button" className="home-button button">
            CONNECT
          </button>
        </div>
      </div>
      <div className="home-container13">
        <img
          alt="image"
          src="/header%20vintage%202-1500w.png"
          className="home-image1"
        />
        <div className="home-container14">
          <div className="home-container15">
            <img
              alt="image"
              src="/instc%202025-01-26%20105424.174-1200w.png"
              className="home-image2"
            />
            <div className="home-container16">
              <span className="home-text11">Collaboration</span>
              <span className="home-text12">Juice Bruns</span>
              <span className="home-text13">7/21/24</span>
              <span className="home-text14">
                Our first official collaborative drop was released in July of
                2024 and featured the artwork of visual artist and rapper Juice
                Bruns. Learn more about the artwork and the process of launching
                the first ever DxD artist collaboration.
              </span>
            </div>
          </div>
          <div className="home-container17">
            <img
              alt="image"
              src="/instc%202025-01-26%20105424.281-1200w.png"
              className="home-image3"
            />
            <div className="home-container18">
              <span className="home-text15">Collaboration</span>
              <span className="home-text16">Alex Mack</span>
              <span className="home-text17">9/21/24</span>
              <span className="home-text18">
                Drop 2, launched in September of 2024 featured Alex Mack, a
                multidisciplinary artist from Vancouver. Learn more about she
                combined her landscape photography with her talents in
                watercolor to create a unique piece for DxD.
              </span>
            </div>
          </div>
          <div className="home-container19">
            <img
              alt="image"
              src="/instc%202025-01-26%20111530.196-1200w.png"
              className="home-image4"
            />
            <div className="home-container20">
              <span className="home-text19">IRL</span>
              <span className="home-text20">Marfa, Tx</span>
              <span className="home-text21">11/15/2024</span>
              <span className="home-text22">
                Big love to our friends at Shillr for helping us host an
                unforgettable community event during ArtBlocks Marfa Weekend. We
                shared drinks with friends, gave away exclusive merch, and
                immersed ourselves in incredible art.
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="home-container21">
        <div className="home-container22">
          <div className="home-container23">
            <span className="home-text23">SOCIAL</span>
            <a
              href="https://x.com/devilxdetail"
              target="_blank"
              rel="noreferrer noopener"
              className="home-text24"
            >
              Twitter (X)
            </a>
            <a
              href="https://instagram.com/devilxdetail"
              target="_blank"
              rel="noreferrer noopener"
              className="home-link"
            >
              Instagram
            </a>
          </div>
          <div className="home-container24">
            <span className="home-text25">HELP</span>
            <Link to="/faq" className="home-navlink1">
              FAQ
            </Link>
            <span className="home-text26">Contact Us</span>
          </div>
          <div className="home-container25">
            <span className="home-text27">COMPANY</span>
            <Link to="/privacy-policy" className="home-navlink2">
              Privacy Policy
            </Link>
            <Link to="/terms-of-service" className="home-navlink3">
              Terms of Service
            </Link>
          </div>
        </div>
        <span className="home-text28">© 2025 Devil x Detail</span>
      </div>
    </div>
  )
}

export default Home
