/* eslint-disable react/no-array-index-key */
import { Link } from 'react-router-dom';
import contactData from '../../data/contact.json'

const Contact = () => {
  const contactArray = Object.entries(contactData);

  const contactText = '“i bow to all that you\'ve given me. thank you for staying while we learn to find our resonance where we do connect” — björk.';

  return (
    <section className="
    CONTACT-SECTION
    flex flex-col-reverse lg:flex-row justify-end lg:justify-between items-center
    gap-16 lg:gap-0
    h-screen"
    >
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
      w-[calc(100vw*(76/100))] md:w-[calc(100vw*(56/100))] lg:w-[calc(100vw*(36.08/100))]"
      >
        <span className="
        CONTACT-TITLE
        HEADLINE-TEXT
        lg:text-end
        italic font-bold text-8xl md:text-9xl lg:text-[10.375rem]"
        >
          contact & links
        </span>
        <span className="
        CONTACT-SUBTITLE
        text-sunglowMuted lg:text-right text-lg lg:text-2xl tracking-[-0.06em]"
        >
          {contactText}
        </span>
      </div>
    </section>
  );
};

export default Contact;
