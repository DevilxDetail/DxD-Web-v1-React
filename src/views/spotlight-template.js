import React, { Fragment } from 'react'

import { Helmet } from 'react-helmet-async'

import Header from '../components/header'
import './spotlight-template.css'

const SpotlightTemplate = (props) => {
  return (
    <div className="spotlight-template-container10">
      <Helmet>
        <title>Spotlight-Template - exported project</title>
        <meta
          property="og:title"
          content="Spotlight-Template - exported project"
        />
      </Helmet>
      <Header
        text={
          <Fragment>
            <span className="spotlight-template-text10">About Us</span>
          </Fragment>
        }
        drops={
          <Fragment>
            <span className="spotlight-template-text11">Drops</span>
          </Fragment>
        }
        button={
          <Fragment>
            <span className="spotlight-template-text12">CONNECT</span>
          </Fragment>
        }
        aboutUs={
          <Fragment>
            <span className="spotlight-template-text13">About Us</span>
          </Fragment>
        }
        affinity={
          <Fragment>
            <span className="spotlight-template-text14">Affinity</span>
          </Fragment>
        }
        thoughts={
          <Fragment>
            <span className="spotlight-template-text15">Thoughts</span>
          </Fragment>
        }
        myAccount={
          <Fragment>
            <span className="spotlight-template-text16">My Account</span>
          </Fragment>
        }
      ></Header>
      <div className="spotlight-template-body">
        <img
          alt="image"
          src="/header%20vintage%202-1500w.png"
          className="spotlight-template-image1"
        />
        <div className="spotlight-template-image-left">
          <div className="spotlight-template-container11">
            <img
              alt="image"
              src="https://play.teleporthq.io/static/svg/default-img.svg"
              className="spotlight-template-image2"
            />
            <span className="spotlight-template-text17">Text</span>
          </div>
          <span className="spotlight-template-text18">Text</span>
        </div>
        <div className="spotlight-template-image-right">
          <span className="spotlight-template-text19">Text</span>
          <div className="spotlight-template-container12">
            <img
              alt="image"
              src="https://play.teleporthq.io/static/svg/default-img.svg"
              className="spotlight-template-image3"
            />
            <span className="spotlight-template-text20">Text</span>
          </div>
        </div>
        <div className="spotlight-template-container13">
          <div className="spotlight-template-container14">
            <img
              alt="image"
              src="/instc%202025-01-26%20105424.174-1200w.png"
              className="spotlight-template-image4"
            />
            <div className="spotlight-template-container15">
              <span className="spotlight-template-text21">Collaboration</span>
              <span className="spotlight-template-text22">Juice Bruns</span>
              <span className="spotlight-template-text23">7/21/24</span>
              <span className="spotlight-template-text24">
                Our first official collaborative drop was released in July of
                2024 and featured the artwork of visual artist and rapper Juice
                Bruns. Learn more about the artwork and the process of launching
                the first ever DxD artist collaboration.
              </span>
            </div>
          </div>
          <div className="spotlight-template-container16">
            <img
              alt="image"
              src="/instc%202025-01-26%20105424.281-1200w.png"
              className="spotlight-template-image5"
            />
            <div className="spotlight-template-container17">
              <span className="spotlight-template-text25">Collaboration</span>
              <span className="spotlight-template-text26">Alex Mack</span>
              <span className="spotlight-template-text27">9/21/24</span>
              <span className="spotlight-template-text28">
                Drop 2, launched in September of 2024 featured Alex Mack, a
                multidisciplinary artist from Vancouver. Learn more about she
                combined her landscape photography with her talents in
                watercolor to create a unique piece for DxD.
              </span>
            </div>
          </div>
          <div className="spotlight-template-container18">
            <img
              alt="image"
              src="/instc%202025-01-26%20111530.196-1200w.png"
              className="spotlight-template-image6"
            />
            <div className="spotlight-template-container19">
              <span className="spotlight-template-text29">IRL</span>
              <span className="spotlight-template-text30">Marfa, Tx</span>
              <span className="spotlight-template-text31">11/15/2024</span>
              <span className="spotlight-template-text32">
                Big love to our friends at Shillr for helping us host an
                unforgettable community event during ArtBlocks Marfa Weekend. We
                shared drinks with friends, gave away exclusive merch, and
                immersed ourselves in incredible art.
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="spotlight-template-container20">
        <div className="spotlight-template-container21">
          <div className="spotlight-template-container22">
            <span className="spotlight-template-text33">SOCIAL</span>
            <a
              href="https://x.com/devilxdetail"
              target="_blank"
              rel="noreferrer noopener"
              className="spotlight-template-text34"
            >
              Twitter (X)
            </a>
            <a
              href="https://instagram.com/devilxdetail"
              target="_blank"
              rel="noreferrer noopener"
              className="spotlight-template-link"
            >
              Instagram
            </a>
          </div>
          <div className="spotlight-template-container23">
            <span className="spotlight-template-text35">HELP</span>
            <span className="spotlight-template-text36">FAQ</span>
            <span className="spotlight-template-text37">Contact Us</span>
          </div>
          <div className="spotlight-template-container24">
            <span className="spotlight-template-text38">COMPANY</span>
            <span className="spotlight-template-text39">Privacy Policy</span>
            <span className="spotlight-template-text40">Terms of Service</span>
          </div>
        </div>
        <span className="spotlight-template-text41">© 2025 Devil x Detail</span>
      </div>
    </div>
  )
}

export default SpotlightTemplate
