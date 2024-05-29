/* eslint-disable max-len */
const ProjectDescription = () => {
  console.log()

  return (
    <div className="
    PROJECT-DESCRIPTION
    flex flex-col gap-16 border
    min-h-screen
    py-16"
    >
      <div className="
      THE-STORY
      flex flex-row justify-between
      text-5xl"
      >
        {[...'the story'].map((letter, index) => (
          // eslint-disable-next-line react/no-array-index-key
          <span key={`the-story-${index}`}>{letter}</span>
        ))}
      </div>
      <div className="
      PROJECT-DESCRIPTION-CONTENT
      flex justify-center"
      >
        <p className="
        DESCRIPTION-PARAGRAPH
        max-w-[calc(100vw*37.64/100)]
        text-base font-normal leading-7"
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare lorem ipsum, at consectetur ipsum aliquet eget. Quisque nec laoreet felis, nec suscipit urna. Nunc mauris dolor, vehicula ut tellus et, condimentum scelerisque massa. Fusce tempus malesuada hendrerit. Pellentesque id luctus mi. Quisque ac mi luctus, vulputate purus quis, luctus arcu. Sed cursus nisi pellentesque ligula tincidunt convallis. Mauris vehicula ut quam ut vestibulum. In hac habitasse platea dictumst. Vestibulum at neque mauris. Duis vitae ligula dolor. Integer non ipsum diam. Nunc porta tincidunt volutpat. Maecenas scelerisque ligula ut mi dignissim mattis. Nullam fermentum justo leo.
          <br />
          <br />
          Integer id arcu vel purus pretium volutpat sit amet eu sem. Mauris a rhoncus elit. Sed facilisis pretium sapien, consequat rhoncus sem vehicula nec. Nunc sed consectetur eros. Pellentesque quis urna lacus. Quisque fermentum risus a dui pretium, eget egestas erat rhoncus. Integer lobortis commodo fringilla. Nunc elit arcu, consequat ac arcu sed, faucibus sollicitudin lacus. Cras sit amet feugiat nibh, a pulvinar massa. Sed commodo nibh nec ligula blandit cursus sed vel erat. Morbi ultricies placerat eros, dignissim elementum diam pulvinar et. Ut interdum ultricies massa nec viverra. Proin nec porttitor eros. Cras sed leo et elit sodales cursus at non erat.
          <br />
          <br />
          Phasellus tempus felis non porttitor facilisis. Vestibulum a nisl nisi. Duis ut dignissim felis, et blandit lacus. Sed posuere neque vel arcu porta pretium. Mauris euismod urna erat, vitae vestibulum urna condimentum et. Sed magna odio, tempor non nisi vitae, suscipit consectetur est. Sed non lacus aliquet, varius nulla vehicula, semper ipsum. Nam efficitur nibh odio, ut accumsan lectus sodales ac. Ut cursus risus ac luctus fringilla.
        </p>
      </div>
    </div>
  )
}

export default ProjectDescription;
