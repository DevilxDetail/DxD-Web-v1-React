import React from 'react'

import { Helmet } from 'react-helmet-async'

import './faq.css'

const FAQ = (props) => {
  return (
    <div className="faq-container10">
      <Helmet>
        <title>FAQ - exported project</title>
        <meta property="og:title" content="FAQ - exported project" />
      </Helmet>
      <div className="faq-container11">
        <div data-thq="thq-dropdown" className="faq-thq-dropdown list-item">
          <div data-thq="thq-dropdown-toggle" className="faq-dropdown-toggle1">
            <div data-thq="thq-dropdown-arrow" className="faq-dropdown-arrow">
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
          <ul data-thq="thq-dropdown-list" className="faq-dropdown-list">
            <li data-thq="thq-dropdown" className="faq-dropdown1 list-item">
              <div
                data-thq="thq-dropdown-toggle"
                className="faq-dropdown-toggle2"
              >
                <span className="faq-my-account">My Account</span>
              </div>
            </li>
            <li data-thq="thq-dropdown" className="faq-dropdown2 list-item">
              <div
                data-thq="thq-dropdown-toggle"
                className="faq-dropdown-toggle3"
              >
                <span className="faq-drops">Drops</span>
              </div>
            </li>
            <li data-thq="thq-dropdown" className="faq-dropdown3 list-item">
              <div
                data-thq="thq-dropdown-toggle"
                className="faq-dropdown-toggle4"
              >
                <span className="faq-thoughts">Thoughts</span>
              </div>
            </li>
            <li data-thq="thq-dropdown" className="faq-dropdown4 list-item">
              <div
                data-thq="thq-dropdown-toggle"
                className="faq-dropdown-toggle5"
              >
                <span className="faq-affinity">Affinity</span>
              </div>
            </li>
            <li data-thq="thq-dropdown" className="faq-dropdown5 list-item">
              <div
                data-thq="thq-dropdown-toggle"
                className="faq-dropdown-toggle6"
              >
                <span className="faq-about-us">About Us</span>
              </div>
            </li>
          </ul>
        </div>
        <img
          alt="image"
          src="/icon%20-%20black-200h.png"
          className="faq-icon-black"
        />
        <img
          alt="image"
          src="/logo%20text%20-%20black-200h.png"
          className="faq-text-black"
        />
        <div className="faq-container12">
          <span className="faq-text10">About Us</span>
          <button type="button" className="faq-button button">
            CONNECT
          </button>
        </div>
      </div>
      <div className="faq-container13">
        <div className="faq-container14">
          <div className="faq-container15">
            <span className="faq-text11">
              <span>FAQ</span>
              <br></br>
            </span>
            <div data-thq="accordion" className="faq-accordion1">
              <details data-thq="accordion-trigger" className="faq-trigger1">
                <summary data-thq="accordion-summary" className="faq-summary1">
                  <span className="faq-text14">
                    Is it possible to purchase a drop after the release window
                    has closed?
                  </span>
                  <div
                    data-thq="accordion-icon"
                    className="faq-icon-container1"
                  >
                    <svg width="32" height="32" viewBox="0 0 24 24">
                      <path d="m12 14l-4-4h8z" fill="currentColor"></path>
                    </svg>
                  </div>
                </summary>
              </details>
              <div data-thq="accordion-content">
                <div className="faq-container16">
                  <p className="faq-text15">
                    Unfortunately, once a drop window has closed, the release is
                    no longer available for direct purchase. Our limited-edition
                    pieces are established with the collaborator and are not
                    restocked. However, keep an eye out for future drops or
                    special collaborations for similar designs or inspirations.
                  </p>
                </div>
              </div>
            </div>
            <div data-thq="accordion" className="faq-accordion2">
              <details data-thq="accordion-trigger" className="faq-trigger2">
                <summary data-thq="accordion-summary" className="faq-summary2">
                  <span className="faq-text16">
                    Do I need a crypto wallet to receive my digital assets as
                    part of a drop?
                  </span>
                  <div
                    data-thq="accordion-icon"
                    className="faq-icon-container2"
                  >
                    <svg width="32" height="32" viewBox="0 0 24 24">
                      <path d="m12 14l-4-4h8z" fill="currentColor"></path>
                    </svg>
                  </div>
                </summary>
              </details>
              <div data-thq="accordion-content">
                <div className="faq-container17">
                  <p className="faq-text17">
                    No, you don't need to have a crypto wallet to receive your
                    digital assets. When you create an account with your email
                    or phone number, we create a crypto wallet for you. You
                    always have the option to export assets to a sovereign
                    wallet if you choose. For more information on wallet
                    management, check out our Blockchain Resources page.
                  </p>
                </div>
              </div>
            </div>
            <div data-thq="accordion" className="faq-accordion3">
              <details data-thq="accordion-trigger" className="faq-trigger3">
                <summary data-thq="accordion-summary" className="faq-summary3">
                  <span className="faq-text18">
                    What is the Devil x Detail Affinity Program?
                  </span>
                  <div
                    data-thq="accordion-icon"
                    className="faq-icon-container3"
                  >
                    <svg width="32" height="32" viewBox="0 0 24 24">
                      <path d="m12 14l-4-4h8z" fill="currentColor"></path>
                    </svg>
                  </div>
                </summary>
              </details>
              <div data-thq="accordion-content">
                <div className="faq-container18">
                  <p className="faq-text19">
                    Oh you are going to love it. The Affinity Program is the
                    loyalty program that we created on day 1. Fully onchain, you
                    own your Affinity Token and all of the perks that come with
                    it. To learn more, check out our Affinity Program page.
                  </p>
                </div>
              </div>
            </div>
            <div data-thq="accordion" className="faq-accordion4">
              <details data-thq="accordion-trigger" className="faq-trigger4">
                <summary data-thq="accordion-summary" className="faq-summary4">
                  <span className="faq-text20">
                    What does it mean when you say that an item is digitally
                    authenticated?
                  </span>
                  <div
                    data-thq="accordion-icon"
                    className="faq-icon-container4"
                  >
                    <svg width="32" height="32" viewBox="0 0 24 24">
                      <path d="m12 14l-4-4h8z" fill="currentColor"></path>
                    </svg>
                  </div>
                </summary>
              </details>
              <div data-thq="accordion-content">
                <div className="faq-container19">
                  <p className="faq-text21">
                    All limited edition Devil x Detail items have a NFC chip
                    attached to the piece. This chip, when scanned with an NFC
                    reader (like your phone), will bring you to a webpage
                    verifying the item&apos;s authenticity.
                  </p>
                </div>
              </div>
            </div>
            <div data-thq="accordion" className="faq-accordion5">
              <details data-thq="accordion-trigger" className="faq-trigger5">
                <summary data-thq="accordion-summary" className="faq-summary5">
                  <span className="faq-text22">
                    Can I pay for a drop with a credit card instead of crypto?
                  </span>
                  <div
                    data-thq="accordion-icon"
                    className="faq-icon-container5"
                  >
                    <svg width="32" height="32" viewBox="0 0 24 24">
                      <path d="m12 14l-4-4h8z" fill="currentColor"></path>
                    </svg>
                  </div>
                </summary>
              </details>
              <div data-thq="accordion-content">
                <div className="faq-container20">
                  <p className="faq-text23">
                    We will always attempt to allow for multiple payment options
                    for a drop including credit cards. If the drop is restricted
                    to a certain payment type, we will do our best to
                    communicate the limitations and explain why.
                  </p>
                </div>
              </div>
            </div>
            <div data-thq="accordion" className="faq-accordion6">
              <details data-thq="accordion-trigger" className="faq-trigger6">
                <summary data-thq="accordion-summary" className="faq-summary6">
                  <span className="faq-text24">
                    Are your artists and collaborators compensated for their
                    involvment in your drops?
                  </span>
                  <div
                    data-thq="accordion-icon"
                    className="faq-icon-container6"
                  >
                    <svg width="32" height="32" viewBox="0 0 24 24">
                      <path d="m12 14l-4-4h8z" fill="currentColor"></path>
                    </svg>
                  </div>
                </summary>
              </details>
              <div data-thq="accordion-content">
                <div className="faq-container21">
                  <p className="faq-text25">
                    Absolutely. We will never ask an artist to provide work for
                    &quot;exposure&quot;. Compensation varies by collaborator
                    but we will always ensure that our friends are taken care
                    of.
                  </p>
                </div>
              </div>
            </div>
            <div data-thq="accordion" className="faq-accordion7">
              <details data-thq="accordion-trigger" className="faq-trigger7">
                <summary data-thq="accordion-summary" className="faq-summary7">
                  <span className="faq-text26">
                    Will every drop include an accompanying digital asset?
                  </span>
                  <div
                    data-thq="accordion-icon"
                    className="faq-icon-container7"
                  >
                    <svg width="32" height="32" viewBox="0 0 24 24">
                      <path d="m12 14l-4-4h8z" fill="currentColor"></path>
                    </svg>
                  </div>
                </summary>
              </details>
              <div data-thq="accordion-content">
                <div className="faq-container22">
                  <p className="faq-text27">
                    Definitely. We will always ensure a digital intersection
                    with every physical item we release. For more information on
                    our Core Pillars, check out our About Us page.
                  </p>
                </div>
              </div>
            </div>
            <div data-thq="accordion" className="faq-accordion8">
              <details data-thq="accordion-trigger" className="faq-trigger8">
                <summary data-thq="accordion-summary" className="faq-summary8">
                  <span className="faq-text28">
                    I am an artist with a dope idea, are you open to new
                    collaborations?
                  </span>
                  <div
                    data-thq="accordion-icon"
                    className="faq-icon-container8"
                  >
                    <svg width="32" height="32" viewBox="0 0 24 24">
                      <path d="m12 14l-4-4h8z" fill="currentColor"></path>
                    </svg>
                  </div>
                </summary>
              </details>
              <div data-thq="accordion-content">
                <div className="faq-container23">
                  <p className="faq-text29">
                    We are always down to talk about new ideas. Our drops are
                    highly curated so there is no guarantee that the timing will
                    work out but please get in touch with us at
                    artists@devilxdetail.com or DM us on Twitter.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="faq-container24">
        <div className="faq-container25">
          <div className="faq-container26">
            <span className="faq-text30">SOCIAL</span>
            <a
              href="https://x.com/devilxdetail"
              target="_blank"
              rel="noreferrer noopener"
              className="faq-text31"
            >
              Twitter (X)
            </a>
            <a
              href="https://instagram.com/devilxdetail"
              target="_blank"
              rel="noreferrer noopener"
              className="faq-link"
            >
              Instagram
            </a>
          </div>
          <div className="faq-container27">
            <span className="faq-text32">HELP</span>
            <span className="faq-text33">FAQ</span>
            <span className="faq-text34">Contact Us</span>
          </div>
          <div className="faq-container28">
            <span className="faq-text35">COMPANY</span>
            <span className="faq-text36">Privacy Policy</span>
            <span className="faq-text37">Terms of Service</span>
          </div>
        </div>
        <span className="faq-text38">© 2025 Devil x Detail</span>
      </div>
    </div>
  )
}

export default FAQ
