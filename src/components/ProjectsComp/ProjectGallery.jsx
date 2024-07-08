const ProjectGallery = (props) => {
  const { project } = props;

  return (
    <div className="
    PROJECT-GALLERY
    min-h-screen
    flex flex-col
    pb-10"
    >
      <div className="
      GALLERY-HEADLINE
      HEADLINE-TEXT
      flex flex-row justify-between
      text-5xl
      pb-4"
      >
        {[...'gallery'].map((letter, index) => (
          // eslint-disable-next-line react/no-array-index-key
          <span key={`gallery-${index}`}>{letter}</span>
        ))}
      </div>
      <div className="
      GALLERY-CONTAINER
      self-center
      sm:w-[80%]
      mt-5"
      >
        <ul className="
        PROJECT-IMAGES-LIST
        flex flex-row flex-wrap justify-center
        gap-16"
        >
          {project?.images?.map((img) => (img.file ? (
            <li
              key={img.file}
              className="
              PROJECT-IMAGE-ITEM
              flex flex-col
              w-[90%] sm:w-[80%]"
            >
              <img
                src={require(`../../assets/images/project_gallery/${img.file}`)}
                alt={img.caption}
              />
              <h1 className="text-xl text-sunglowMuted mt-2 mb-1">
                <span className="HEADLINE-TEXT">&#9650;</span>
                <span className="ml-2">{img.name}</span>
              </h1>
              <p className="pb-4 border-b-[1px] border-sunglowMuted">{img.caption}</p>
            </li>
          ) : (
            <div className="text-2xl text-sunglowMuted italic">
              This projects doesn&#39;t have images.
            </div>
          )))}
        </ul>
      </div>
    </div>
  );
};

export default ProjectGallery;
