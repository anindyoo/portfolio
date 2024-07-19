import { useEffect } from 'react';
import ContactBanner from '../../components/ContactBanner/ContactBanner';

const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = 'about — muhammad anindyo poetra mufatyta';
  }, []);

  return (
    <div className="
    CONTACT-PAGE
    min-h-screen"
    >
      <ContactBanner />
    </div>
  );
};

export default Contact;
