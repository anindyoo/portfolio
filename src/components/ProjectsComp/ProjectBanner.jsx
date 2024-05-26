const ProjectBanner = () => {
  console.log()

  return (
    <div className="
    PROJECT-BANNER
    flex flex-row justify-between items-center gap-8
    h-screen"
    >
      <div className="
      PROJECT-BANNER-DESCRIPTION
      before:bg-timeline_gradient_rtl
      relative before:absolute before:inset-0
      flex flex-col justify-between
      w-[50%] h-[60%]
      px-5 py-10 before:p-px
      before:rounded-e-[5rem]
      before:pointer-events-none"
      >
        <div className="
        DESCRIPTION-DETAIL
        flex flex-col gap-9"
        >
          <div className="
          TOP-SECTION
          flex flex-col"
          >
            <span className="TITLE text-[4rem] italic">TITLE HERE</span>
            <span className="DATE text-base font-medium">DATE HERE</span>
          </div>
          <div className="
          MIDDLE-SECTION
          flex flex-col text-base"
          >
            <span className="SHORT-DESCRIPTION font-light">SHORT DESCRIPTION HERE</span>
            <div className="ROLE-STATUS
            flex flex-row justify-between"
            >
              <div className="
              ROLE-CONTAINER
              flex flex-row gap-1
              w-[50%]"
              >
                <span className="font-medium">Role:</span>
                <span>THE ROLE</span>
              </div>
              <div className="
              STATUS-CONTAINER
              flex flex-row gap-1
              w-[50%]"
              >
                <span className="font-medium">Status:</span>
                <span>THE STATUS</span>
              </div>
            </div>
            <div className="
            TAGS
            flex flex-row flex-wrap gap-2.5
            text-sm"
            >
              <span className="px-2 py-1 bg-gray-300 rounded-full">the tags</span>
              <span className="px-2 py-1 bg-gray-300 rounded-full">the tags</span>
              <span className="px-2 py-1 bg-gray-300 rounded-full">the tags</span>
              <span className="px-2 py-1 bg-gray-300 rounded-full">the tags</span>
              <span className="px-2 py-1 bg-gray-300 rounded-full">the tags</span>
              <span className="px-2 py-1 bg-gray-300 rounded-full">the tags</span>
            </div>
          </div>
        </div>
        <div className="
        DESCRIPTION-LINKS
        flex flex-row flex-wrap gap-6
        text-xl"
        >
          <span>VIEW WEBSITE</span>
          <span>VIEW CODE</span>
          <span>DOWNLOAD APP</span>
        </div>
      </div>
      <div className="PROJECT-BANNER-THUMBNAIL
      flex justify-center
      w-[50%] h-[60%]"
      >
        <img
          src="https://i.scdn.co/image/ab67616d0000b2731572698fff8a1db257a53599"
          alt="alt"
          className="
          TIMELINE-IMAGE
          w-full h-full
          object-cover"
        />
      </div>
    </div>
  )
}

export default ProjectBanner;
