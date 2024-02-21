const styles = {
    boxWidth: "xl:max-w-[1280px] w-full",

    heading2: "font-poppins font-semibold xs:text-[48px] text-[40px] text-white xs:leading-[76.8px] leading-[66.8px]",
    paragraph: "font-poppins font-normal text-dimWhite text-[20px] leading-[30.8px]",

    flexCenter: "flex justify-center items-center",
    flexStart: "flex justify-center items-start",

    paddingX: "sm:px-16 px-6",
    paddingY: "sm:py-16 py-6",
    padding: "sm:px-16 px-6 sm:py-12 py-4",
    padding_p_am: "sm:px-8 sm:py-3",

    paragraphMargin: {
        margin: '20px',
      },
    paragraphPadding: {
        padding: '10px',
    },

    marginX: "sm:mx-16 mx-6",
    marginY: "sm:my-16 my-6",

    fadeInScaleUp: "animation-class-names-here",

    navBackground: "px-6 py-4 flex justify-center bg-gradient-to-r from-gray-500 to-gray-700",
    albumDetailBackground: "from-gray-500 to-gray-700 bg-gradient-to-r ",
    aboutMeBackground: "from-gray-500 to-gray-600 bg-gradient-to-r ",
    mainContentBackground: "flex justify-center items-start bg-gradient-to-r from-gray-500 to-gray-800",

    albumDetailContainer: "bg-gradient-to-r from-gray-500 to-gray-800 flex flex-col items-center justify-center",
    mainImageContainer: "w-full max-w-[900px] max-h-[1000px] overflow-hidden",
    mainImage: "max-w-full max-h-full object-contain",
    thumbnailContainer: "flex overflow-x-auto py-2.5 max-w-90vw",
    thumbnailImage: "w-[150px] h-[75px] cursor-pointer",
    arrowButton: "text-2xl text-white p-2 cursor-pointer select-none",
    selfieContainer: "flex justify-center items-center w-full",
    selfieStyle: "w-full max-w-[800px] h-auto border-4 border-solid border-white rounded-full",
};

export const ctaButton = {
    padding: '10px 20px',
    backgroundColor: '#FFD700', // Golden color, adjust based on your design
    color: 'white',
    borderRadius: '5px',
    textTransform: 'uppercase',
    fontWeight: 'bold',
    boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
    transition: 'all 0.3s ease',
    cursor: 'pointer',
    textDecoration: 'none', // Remove underline from links if applied as a link
    display: 'inline-block', // To apply padding and margin correctly
    marginTop: '20px', // Add some space above the CTA button
};

// Adjust values as necessary to fit your design


export const layout = {
    section: `flex md:flex-row flex-col ${styles.paddingY}`,
    sectionReverse: `flex md:flex-row flex-col-reverse ${styles.paddingY}`,
    sectionImgReverse: `flex-1 flex ${styles.flexCenter} md:mr-10 mr-0 md:mt-0 mt-10 relative`,
    sectionImg: `flex-1 flex ${styles.flexCenter} md:ml-10 ml-0 md:mt-0 mt-10 relative`,
    sectionInfo: `flex-1 ${styles.flexStart} flex-col`,
    albumMainImage: `flex-1 ${styles.flexCenter} ${styles.mainImageContainer}`,
    albumThumbnails: `flex-1 ${styles.flexCenter} ${styles.thumbnailContainer}`,
};

export default styles;
