import config from '../../config/config';
import useScreenSize from '../../hooks/useScreenSize';

const ScrollToTopButton = () => {
  const handleScrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <span className="SCROLL-TO-THE-TOP flex lg:block">
      <button
        type="button"
        title="Scroll to the top"
        onClick={handleScrollTop}
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 10.5 12 3m0 0 7.5 7.5M12 3v18" />
        </svg>
      </button>
    </span>
  )
}

const Footer = () => {
  const screenSize = useScreenSize();
  const screenWidth = screenSize.width;
  const tabletBreakpoint = config.screenBreakpoints.tablet;

  return (
    <footer className="
    FOOTER
    flex
    px-7
    text-sunglowMuted"
    >
      <div className="
      FOOTER-CONTAINER
      bg-footerGradient
      flex flex-col justify-between
      gap-10 lg:gap-0
      w-full lg:h-[11.25rem]
      pt-3 pb-5 px-3"
      >
        <div className="
        FOOTER-MAIN
        flex flex-col lg:flex-row lg:justify-between
        gap-8 lg:gap-0"
        >
          <div className="
          FOOTER-TITLE
          flex flex-row justify-between lg:block
          text-4xl xs:text-5xl md:text-[4rem]
          tracking-tight"
          >
            <span className="HEADLINE-TEXT">
              talk to me nice.
            </span>
            {screenWidth <= tabletBreakpoint && <ScrollToTopButton />}
          </div>
          <div className="
          FOOTER-LINKS
          flex flex-col"
          >
            <span className="
            FOOTER-EMAIL
            pb-2
            border-b border-sunglowMuted
            mb-2"
            >
              {screenWidth <= tabletBreakpoint && 'email me: '}
              <a
                title="Email"
                href="mailto:anindyo0216@gmail.com"
                className="hover:text-orangePith hover:underline"
              >
                anindyo0216@gmail.com
              </a>
            </span>
            <ul className="
            FOOTER-SOCIALS
            flex flex-row justify-between
            mt-2"
            >
              <li>
                <a
                  title="LinkedIn"
                  href="https://www.linkedin.com/in/muhammad-anindyo-poetra-mufatyta-a1a8971b7"
                  target="_blank"
                  rel="noreferrer"
                >
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="fill-sunglowMuted hover:fill-orangePith"
                  >

                    <path
                      d="M12.677 10.7012V10.6641C12.6692 10.6766 12.661 10.6892 12.6528 10.
                      7012H12.677Z"
                    />

                    <path
                      d="M22.0858 0H1.76171C0.788934 0 0 0.770115 0 1.71925V22.2812C0 23.2299 0.788934 24 1.76171 24H22.0858C23.06 24 23.849 23.2294 23.849 22.2812V1.71925C23.849 0.769633 23.0596 0 22.0858 0ZM7.22876 20.091H3.62668V9.25393H7.22876V20.091ZM5.42796 7.77353H5.40384C4.19558 7.77353 3.41389 6.94117 3.41389 5.90132C3.41389 4.83831 4.21971 4.02911 5.45161 4.02911C6.68398 4.02911 7.44204 4.83831 7.46616 5.90132C7.46616 6.94117 6.6835 7.77353 5.42796 7.77353ZM20.2179 20.091H16.6159V14.292C16.6159 12.8357 16.0947 11.8417 14.7914 11.8417C13.7965 11.8417 13.2039 12.512 12.9429 13.1595C12.8478 13.3906 12.8246 13.7139 12.8246 14.0382V20.0906H9.22257C9.22257 20.0906 9.26985 10.2692 9.22257 9.25345H12.8246V10.7874C13.3033 10.0491 14.1593 8.99771 16.0716 8.99771C18.4413 8.99771 20.2184 10.5471 20.2184 13.8761L20.2179 20.091Z"
                    />
                  </svg>
                </a>
              </li>
              <li>
                <a
                  title="Github"
                  href="https://github.com/anindyoo"
                  target="_blank"
                  rel="noreferrer"
                >
                  <svg
                    width="25"
                    height="24"
                    viewBox="0 0 25 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="fill-sunglowMuted hover:fill-orangePith"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M12.3531 0C5.52214 0 0 5.49998 0 12.3042C0 17.7432 3.53823 22.3472 8.44668 23.9767C9.06037 24.0992 9.28516 23.7119 9.28516 23.3862C9.28516 23.1009 9.26493 22.1232 9.26493 21.1044C5.8286 21.8379 5.11302 19.6377 5.11302 19.6377C4.56078 18.2117 3.74253 17.8452 3.74253 17.8452C2.61783 17.0914 3.82446 17.0914 3.82446 17.0914C5.07206 17.1729 5.7267 18.3544 5.7267 18.3544C6.83093 20.2284 8.61028 19.6989 9.32612 19.3729C9.42827 18.5784 9.75572 18.0284 10.1034 17.7229C7.36269 17.4377 4.47911 16.3784 4.47911 11.6522C4.47911 10.3077 4.96965 9.20771 5.74693 8.35222C5.6243 8.04672 5.19469 6.78347 5.86982 5.09273C5.86982 5.09273 6.91285 4.76673 9.26468 6.35572C10.2716 6.08639 11.31 5.94938 12.3531 5.94823C13.3961 5.94823 14.4594 6.09098 15.4412 6.35572C17.7933 4.76673 18.8363 5.09273 18.8363 5.09273C19.5114 6.78347 19.0816 8.04672 18.959 8.35222C19.7567 9.20771 20.227 10.3077 20.227 11.6522C20.227 16.3784 17.3435 17.4172 14.5823 17.7229C15.0323 18.1099 15.4207 18.8432 15.4207 20.0044C15.4207 21.6544 15.4005 22.9787 15.4005 23.3859C15.4005 23.7119 15.6255 24.0992 16.239 23.9769C21.1474 22.3469 24.6857 17.7432 24.6857 12.3042C24.7059 5.49998 19.1635 0 12.3531 0Z"
                    />
                  </svg>
                </a>
              </li>
              <li>
                <a
                  title="Frontend Mentor"
                  href="https://www.frontendmentor.io/profile/anindyoo"
                  target="_blank"
                  rel="noreferrer"
                >
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="fill-sunglowMuted hover:fill-orangePith"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24ZM11.9479 6.35649C12.0192 6.28385 12.1161 6.24211 12.2179 6.24024C12.2695 6.23931 12.3208 6.24873 12.3687 6.26783C12.4166 6.28693 12.4603 6.31539 12.4971 6.35155C12.5339 6.38771 12.5632 6.43085 12.5831 6.47843C12.6031 6.52602 12.6133 6.57711 12.6133 6.62871V14.0117C12.6133 14.1147 12.5724 14.2134 12.4996 14.2863C12.4268 14.3591 12.328 14.4 12.225 14.4001C12.122 14.4001 12.0232 14.3592 11.9504 14.2863C11.8775 14.2135 11.8366 14.1147 11.8366 14.0117V6.62866C11.8366 6.52686 11.8765 6.42913 11.9479 6.35649ZM17.9474 8.48555C17.9936 8.46498 18.0434 8.45363 18.094 8.45212C18.1709 8.44996 18.2467 8.47056 18.3119 8.51142C18.377 8.55228 18.4286 8.61152 18.4602 8.68167C18.5018 8.77573 18.5046 8.88245 18.4678 8.97853C18.431 9.0746 18.3577 9.15223 18.2639 9.19446L15.7244 10.3282L18.2639 11.466C18.3453 11.5021 18.4118 11.5651 18.4523 11.6444C18.4927 11.7237 18.5047 11.8145 18.4862 11.9016C18.4678 11.9887 18.4199 12.0668 18.3507 12.1228C18.2815 12.1788 18.1952 12.2094 18.1062 12.2094C18.0514 12.2091 17.9973 12.1974 17.9474 12.175L14.6139 10.6821C14.5456 10.6514 14.4877 10.6015 14.4471 10.5387C14.4065 10.4758 14.3849 10.4025 14.3849 10.3277C14.3849 10.2528 14.4065 10.1796 14.4471 10.1167C14.4877 10.0538 14.5456 10.004 14.6139 9.97319L17.9474 8.48555ZM5.98229 11.1594C6.03644 11.1338 6.09578 11.121 6.15567 11.1222C6.2403 11.1238 6.32207 11.1531 6.38854 11.2054C6.45501 11.2578 6.50253 11.3305 6.52387 11.4124C6.93025 12.9697 7.84176 14.3482 9.11558 15.332C10.3894 16.3157 11.9536 16.8491 13.563 16.8486C13.666 16.8486 13.7648 16.8895 13.8377 16.9623C13.9105 17.0352 13.9514 17.134 13.9514 17.237C13.9514 17.34 13.9105 17.4388 13.8377 17.5116C13.7648 17.5845 13.666 17.6254 13.563 17.6254C9.89785 17.6254 6.69356 15.1506 5.77241 11.6076C5.75739 11.5497 5.75599 11.489 5.76833 11.4304C5.78067 11.3717 5.8064 11.3168 5.84352 11.2698C5.88064 11.2228 5.92813 11.185 5.98229 11.1594Z"
                    />
                  </svg>
                </a>
              </li>
              <li>
                <a
                  title="Instagram"
                  href="https://www.instagram.com/anindyo._"
                  target="_blank"
                  rel="noreferrer"
                >
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="fill-sunglowMuted hover:fill-orangePith"
                  >
                    <g
                      clipPath="url(#clip0_252_84)"
                    >
                      <path
                        d="M7.0301 0.0839251C5.7533 0.144165 4.88138 0.347925 4.11914 0.647445C3.33026 0.954885 2.66162 1.36745 1.99634 2.03513C1.33106 2.70281 0.921379 3.37193 0.616099 4.16201C0.320659 4.92593 0.120499 5.79857 0.0640995 7.07609C0.00769946 8.35361 -0.00478054 8.76425 0.00145946 12.023C0.00769946 15.2817 0.0220995 15.6902 0.0840195 16.9703C0.144979 18.2469 0.348019 19.1186 0.647539 19.881C0.955459 20.6699 1.36754 21.3383 2.03546 22.0038C2.70338 22.6694 3.37202 23.0781 4.16402 23.3838C4.92722 23.6788 5.8001 23.8799 7.07738 23.9358C8.35466 23.9918 8.76578 24.0047 12.0235 23.9985C15.2813 23.9922 15.6915 23.9778 16.9714 23.9171C18.2513 23.8564 19.1184 23.6519 19.8811 23.3538C20.67 23.0452 21.3389 22.6338 22.0039 21.9657C22.669 21.2975 23.0784 20.6279 23.3835 19.8374C23.6791 19.0742 23.88 18.2013 23.9355 16.925C23.9914 15.6441 24.0046 15.2351 23.9983 11.9769C23.9921 8.71865 23.9775 8.31017 23.9167 7.03049C23.856 5.75081 23.6527 4.88177 23.3535 4.11881C23.0451 3.32993 22.6335 2.66201 21.9658 1.99601C21.2981 1.33001 20.628 0.920805 19.8377 0.616485C19.074 0.321045 18.2016 0.119685 16.9243 0.0644851C15.6471 0.00928514 15.2359 -0.00487487 11.977 0.00136513C8.71802 0.00760513 8.31002 0.0215251 7.0301 0.0839251ZM7.17026 21.777C6.00026 21.7262 5.36498 21.5318 4.94162 21.369C4.38098 21.153 3.98162 20.8919 3.5597 20.4741C3.13778 20.0562 2.87858 19.6554 2.6597 19.096C2.4953 18.6726 2.2973 18.0381 2.24258 16.8681C2.18306 15.6035 2.17058 15.2238 2.16362 12.0201C2.15666 8.81633 2.1689 8.43713 2.22434 7.17209C2.27426 6.00305 2.46986 5.36705 2.63234 4.94393C2.84834 4.38257 3.1085 3.98393 3.5273 3.56225C3.9461 3.14057 4.3457 2.88089 4.90562 2.66201C5.3285 2.49689 5.96306 2.30057 7.13258 2.24489C8.3981 2.18489 8.7773 2.17289 11.9806 2.16593C15.1839 2.15897 15.564 2.17097 16.83 2.22665C17.9991 2.27753 18.6353 2.47121 19.0579 2.63465C19.6188 2.85065 20.0179 3.11009 20.4396 3.52961C20.8613 3.94913 21.1212 4.34729 21.3401 4.90841C21.5055 5.33009 21.7018 5.96441 21.757 7.13465C21.8172 8.40017 21.8309 8.77961 21.8367 11.9826C21.8424 15.1857 21.8311 15.5661 21.7757 16.8306C21.7246 18.0006 21.5307 18.6362 21.3677 19.06C21.1517 19.6204 20.8913 20.02 20.4723 20.4414C20.0532 20.8629 19.6541 21.1226 19.0939 21.3414C18.6715 21.5063 18.0363 21.7031 16.8677 21.7588C15.6022 21.8183 15.223 21.8308 12.0185 21.8378C8.81402 21.8447 8.43602 21.8318 7.1705 21.777M16.9529 5.58641C16.9534 5.87123 17.0383 6.14952 17.1969 6.38607C17.3556 6.62262 17.5808 6.80681 17.8442 6.91535C18.1075 7.02389 18.3971 7.05189 18.6764 6.99583C18.9556 6.93976 19.212 6.80214 19.413 6.60037C19.614 6.3986 19.7507 6.14174 19.8058 5.86228C19.8608 5.58283 19.8317 5.29333 19.7222 5.03039C19.6127 4.76746 19.4277 4.5429 19.1906 4.38512C18.9534 4.22735 18.6748 4.14344 18.39 4.14401C18.0082 4.14477 17.6423 4.29715 17.3728 4.56764C17.1033 4.83813 16.9523 5.20458 16.9529 5.58641ZM5.8385 12.0119C5.84522 15.4151 8.60906 18.1677 12.0115 18.1612C15.414 18.1547 18.1685 15.3911 18.162 11.9879C18.1555 8.58473 15.391 5.83145 11.988 5.83817C8.58506 5.84489 5.83202 8.60921 5.8385 12.0119ZM7.99994 12.0076C7.99837 11.2165 8.23144 10.4426 8.66968 9.78395C9.10791 9.12527 9.73162 8.61134 10.4619 8.30714C11.1923 8.00294 11.9964 7.92213 12.7726 8.07494C13.5489 8.22774 14.2624 8.6073 14.8229 9.16561C15.3834 9.72393 15.7658 10.4359 15.9217 11.2115C16.0776 11.9872 15.9999 12.7916 15.6986 13.5231C15.3973 14.2547 14.8859 14.8804 14.2289 15.3212C13.572 15.7621 12.7991 15.9982 12.0079 15.9998C11.4826 16.0009 10.9622 15.8985 10.4765 15.6984C9.99076 15.4984 9.54918 15.2046 9.17699 14.8339C8.8048 14.4632 8.50929 14.0228 8.30733 13.5378C8.10537 13.0529 8.00091 12.5329 7.99994 12.0076Z"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_252_84">
                        <rect
                          width="24"
                          height="24"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                </a>
              </li>
            </ul>
          </div>
          {screenWidth > tabletBreakpoint && <ScrollToTopButton />}
        </div>
        <div className="
        FOOTER-COPYRIGHT
        text-sm lg:text-base"
        >
          Designed & Coded by Muhammad Anindyo Poetra Mufatyta © 2024 All Rights Reserved
        </div>
      </div>
    </footer>
  )
};

export default Footer;
