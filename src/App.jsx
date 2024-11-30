import React, { useState } from 'react';
import profile from "./assets/profile.jpg";
import './App.css';  // Import CSS file

// Import constant data
import { NAV_ITEMS, ABOUT_DATA, SERVICES, PORTFOLIO_ITEMS, CONTACT, FOOTER_TEXT } from './data';

// Import FontAwesome for icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const openMenu = () => setMenuOpen(true);
  const closeMenu = () => setMenuOpen(false);

  const openTab = (event, tabname) => {
    const tabLinks = document.getElementsByClassName('tab-links');
    const tabContents = document.getElementsByClassName('tab-contents');
    for (let tabLink of tabLinks) {
      tabLink.classList.remove("active-link");
    }
    for (let tabContent of tabContents) {
      tabContent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
  };

  return (
    <div className="App">
      {/* HEADER */}
      <div id="header">
        <div className="container">
          <nav>
            <h1 className="logo">Awdhesh</h1>
            <ul className="nav-links" id="sidemenu" style={{ right: menuOpen ? '0' : '-200px' }}>
              {NAV_ITEMS.map((item, index) => (
                <li key={index}>
                  <a className='navLinks' href={item.link}>{item.name}</a>
                </li>
              ))}
              <FontAwesomeIcon className='toggle' icon={faTimes} onClick={closeMenu} />
            </ul>
            <FontAwesomeIcon className='toggle' icon={faBars} onClick={openMenu} />
          </nav>
          <div className="header-text">
            <p>Web Developer</p>
            <h1>Hi I'm <span>Awdhesh</span><br /> Gaund From India</h1>
          </div>
        </div>
      </div>

      {/* ABOUT */}
      <div id="about">
        <div className="container">
          <div className="row">
            <div className="about-col-1">
              <img src={profile} alt="Profile" />
            </div>
            <div className="about-col-2">
              <h1 className="subtitle">About me</h1>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit...</p>
              <div className="tab-titles">
                <p onClick={(event) => openTab(event, 'skill')} className="tab-links active-link">Skills</p>
                <p onClick={(event) => openTab(event, 'experience')} className="tab-links">Experience</p>
                <p onClick={(event) => openTab(event, 'education')} className="tab-links">Education</p>
              </div>
              <div className="tab-contents active-tab" id="skill">
                <ul>
                  {ABOUT_DATA.skills.map((skill, index) => (
                    <li key={index}><span>{skill.title}</span><br />{skill.description}</li>
                  ))}
                </ul>
              </div>
              <div className="tab-contents" id="experience">
                <ul>
                  {ABOUT_DATA.experience.map((exp, index) => (
                    <li key={index}><span>{exp.title}</span><br />{exp.company}</li>
                  ))}
                </ul>
              </div>
              <div className="tab-contents" id="education">
                <ul>
                  {ABOUT_DATA.education.map((edu, index) => (
                    <li key={index}><span>{edu.title}</span><br />{edu.institution}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Services */}
      <div id="services">
        <div className="container">
          <h2>My Services</h2>
          <div className="services-list">
            {SERVICES.map((service, index) => (
              <div key={index}>
                <h2>{service.title}</h2>
                <p>{service.description}</p>
                <a href="#">Learn More</a>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Portfolio */}
      <div id="portfolio">
        <div className="container">
          <h1 className="sub-title">My Work</h1>
          <div className="work-list">
            {PORTFOLIO_ITEMS.map((item, index) => (
              <div className="work" key={index}>
                <img src={item.image} alt={item.title} />
                <div className="layer">
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                  <a href={item.link}>Go</a>
                </div>
              </div>
            ))}
          </div>
          <a href="#" className="btn">MORE</a>
        </div>
      </div>

      {/* CONTACT */}
      <div id="contact">
        <div className="container">
          <div className="row">
            <div className="contact-left">
              <h1>Contact Me</h1>
              <p>{CONTACT.email}</p>
              <p>{CONTACT.phone}</p>
              <div className="social-icons">
                {CONTACT.socialLinks.map((social, index) => (
                  <a href={social.link} key={index}>{social.name}</a>
                ))}
              </div>
              <a href={CONTACT.resumeLink} download className="btn">Download CV</a>
            </div>
            <div className="contact-right">
              <form>
                <input type="text" name="Name" placeholder="Your Name...." required />
                <input type="text" name="Email" placeholder="Your Email...." required />
                <textarea name="Message" rows="6" placeholder="Your Messages...." required></textarea>
                <input type="submit" className="btn" />
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="copyright">
        <p>{FOOTER_TEXT}</p>
      </div>
    </div>
  );
}

export default App;
