/* eslint-disable react/no-array-index-key */
import contactData from '../../data/contact.json'

const Contact = () => {
  const contactArray = Object.entries(contactData);

  const contactText = '“i bow to all that you\'ve given me. thank you for staying while we learn to find our resonance where we do connect” — björk.';

  return (
    <section className="
    CONTACT-SECTION
    flex flex-row justify-between items-center
    h-screen"
    >
      <div className="
      CONTACT-LINKS
      flex flex-col justify-between gap-16
      w-[calc(100vw*(36.08/100))]"
      >
        {contactArray.map(([category, links]) => (
          <div
            key={category}
            className="
            CONTACT-LINKS-CATEGORY-GROUP"
          >
            <span className="
            CONTACT-CATEGORY
            flex justify-between
            text-2xl text-gray-500
            mb-2"
            >
              {[...category].map((letter, index) => (
                <span key={`${letter}-${index}`}>{letter}</span>
              ))}
            </span>
            <ul className="
            CONTACT-LINKS-LIST
            flex flex-col gap-1 tracking-tight"
            >
              {links.map((link) => (
                <li
                  key={link.name}
                  className="
                  CONTACT-LINK
                  font-light text-2xl"
                >
                  {link.name}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="
      CONTACT-TITLE
      h-fit
      flex flex-col justify-center items-end
      w-[calc(100vw*(36.08/100))]"
      >
        <span className="
        CONTACT-TITLE
        italic font-bold text-[10.375rem]"
        >
          contact
        </span>
        <span className="
        CONTACT-SUBTITLE
        text-right
        text-2xl tracking-[-0.06em]"
        >
          {contactText}
        </span>
      </div>
    </section>
  );
};

export default Contact;
