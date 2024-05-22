import Header from "../Components/Header";
import BulbSVG from "../Icons Svg Components/bulbSVG";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import React from "react";

const BuildSurveyWithAi = () => {
  const objects = [
    {
      title: "Customer Satisfaction",
      description:
        "I work for a consulting firm and we're looking to gather feedback from our clients about their experience working with us. The survey should cover customer experience topics like the quality of our services, communication with our team, responsiveness to issues, overall satisfaction with our consulting firm, and whether they would recommend us to colleagues. We’d like to know the business industry and size for the respondents.",
    },
    {
      title: "Education",
      description:
      "Our university is conducting a survey on student satisfaction. We are interested in their opinions on the quality of teaching, research opportunities, various facilities like the libraries and dining halls, and student extracurricular activities. Include student demographics like year of graduation, gender, and age."
    },
    {
      title: "Employee Experience",
      description:
        "We need a survey for employee exit interviews. The survey should assess how the departing employee feels about various aspects of the company culture, such as diversity, equity, and inclusion, whether their work was meaningful, their opinion on working with their team and supervisor, and their reasons for leaving. Include questions on the employee’s level and department."
    },
    {
      title: "Event Feedback",
      description:
        "My company is hosting a webinar for the first time. We want to survey attendees after the event to get feedback on how it went. We’d like to know their overall impression, whether they would attend another webinar, and their opinions on how well the event was organized and the length. We also want feedback on the quality of the moderator and the speaker and whether the webinar was useful."
    },
    {
      title: "New 1",
      description:
        "I work for a consulting firm and we're looking to gather feedback from our clients about their experience working with us. The survey should cover customer experience topics like the quality of our services, communication with our team, responsiveness to issues, overall satisfaction with our consulting firm, and whether they would recommend us to colleagues. We’d like to know the business industry and size for the respondents.",
    },
    {
      title: "New 2",
      description:
        "I work for a consulting firm and we're looking to gather feedback from our clients about their experience working with us. The survey should cover customer experience topics like the quality of our services, communication with our team, responsiveness to issues, overall satisfaction with our consulting firm, and whether they would recommend us to colleagues. We’d like to know the business industry and size for the respondents.",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <div>
        <Header />
      </div>
      <div className="bg-[#F2FBFFCC]">
        <div className="flex ">
            <div className="w-full px-4 sm:px-32 mt-20 ">
            <p className="font-bold text-lg">Create a new Survey form With AI</p>
            <p className="mt-[1%] text-xs">
                Please provide an example prompt or create one yourself.
            </p>
            </div>
            <div></div>
        </div>
        <div className="flex justify-center mt-[3%] ">
            <BulbSVG />
        </div>
        <div>
            <p className="text-center  text-xs mt-[1%]">
            Would you like to try one of our sample prompts?
            </p>
            <div className="px-32 mt-8 h-[80%] space-x-11">
            <Slider {...settings}>
            {objects.map((obj, index) => (
                
                <div key={index} className="relative p-4 border-2 px-2  shadow-lg">
                    <div className="  rounded-lg h-80 p-4">
                        <h3 className="font-bold text-lg">{obj.title}</h3>
                        <p className="mt-2 text-sm">{obj.description}</p>
                        <button className="absolute bottom-4 left-1/2 transform -translate-x-1/2  px-2 bg-gray-200  text-black rounded">
                        Insert into prompt
                        </button>
                        
                    </div>
                </div>
            ))}
            
            </Slider>
            
        </div>
        <div className="text-center mt-8 font-bold">
            <p>what type of form do you want to create?</p>
        </div>
        <div className="px-32 mt-8 ">
            <p>Tell us what you want to build Survey Form with AI Prompt:</p>
        </div>
        <div className="mx-32 mt-8 h-40 mb-10 border-2 rounded-lg">
        </div>

        <div className="px-32">
            <p>Prompt Tips</p>
        </div>

        </div>
    </div>    
    </>
  );
};

export default BuildSurveyWithAi;
