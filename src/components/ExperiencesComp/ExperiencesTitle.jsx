import React from 'react';
const ExperiencesTitle = (props) => {
  const {
    isOdd,
  } = props;

  return (
    <div
      className="
      EXPERIENCES-TITLE
      absolute
      box-border"
    >
      <div className={`
      EXPERIENCES-TITLE-CONTENT
      HEADLINE-TEXT
      flex justify-between
      h-fit w-[37.5rem]
      ${isOdd ? 'skew-y-[15deg]' : '-skew-y-[15deg]'}`}
      >
        {[...'experiences • experiences • '].map((letter, index) => (
          <span key={`exp-title-span-letter-${index}`}>{letter}</span>
        ))}
      </div>
    </div>
  );
};

export default ExperiencesTitle;
