import React from 'react';
import { Link } from 'react-router-dom';
import contactData from '../../data/contact.json';
import useScreenSize from '../../hooks/useScreenSize';
import config from '../../config/config';

const ContactSubtitle = () => {
  const contactText = '“i bow to all that you\'ve given me. thank you for staying while we learn to find our resonance where we do connect” — björk.';

  return (
    <span className="
    CONTACT-SUBTITLE
    w-[calc(100vw*(56/100))] lg:w-full
    text-sunglowMuted lg:text-right text-lg lg:text-2xl tracking-[-0.06em]"
    >
      {contactText}
    </span>
  );
};

const ContactBanner = () => {
  const contactArray = Object.entries(contactData);
  const screenSize = useScreenSize();
  const screenWidth = screenSize.width;
  const laptopBreakpoint = config.screenBreakpoints.laptop;

  return (
    <section className="
    CONTACT-SECTION
    flex flex-col-reverse lg:flex-row justify-end lg:justify-between items-center
    gap-12 lg:gap-0
    pt-10 lg:pt-0
    min-h-screen"
    >
      {screenWidth < laptopBreakpoint && <ContactSubtitle />}
      <div className="
      CONTACT-LINKS
      flex flex-col justify-between gap-16
      lg:w-[calc(100vw*(36.08/100))]"
      >
        {contactArray.map(([category, links]) => (
          <div
            key={category}
            className="
            CONTACT-LINKS-CATEGORY-GROUP"
          >
            <span className="
            CONTACT-CATEGORY
            HEADLINE-TEXT
            flex justify-between
            text-2xl
            mb-2"
            >
              {[...category].map((letter, index) => (
                <span key={`${letter}-${index}`}>{letter}</span>
              ))}
            </span>
            <ul className="
            CONTACT-LINKS-LIST
            flex flex-col gap-1 tracking-tight
            text-center"
            >
              {links.map((link) => (
                <li
                  key={link.url}
                  title={link.name}
                  className="
                  CONTACT-LINK
                  font-light text-2xl
                  hover:underline"
                >
                  <Link
                    to={link.url}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="
      CONTACT-TITLE
      h-fit
      flex flex-col justify-center items-center lg:items-end
      w-full lg:w-[calc(100vw*(36.08/100))]"
      >
        <span className="
        CONTACT-TITLE
        HEADLINE-TEXT
        lg:text-end
        italic font-bold
        text-[2.6rem] 2xs:text-5xl xs:text-[3.5rem] md:text-8xl lg:text-[10.375rem]"
        >
          contact & links
        </span>
        {screenWidth >= laptopBreakpoint && <ContactSubtitle />}
      </div>
    </section>
  );
};

export default ContactBanner;
