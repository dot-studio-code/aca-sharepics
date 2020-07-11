import CTAIcon from "../components/svg/CTAIcon";
import DemandIcon from "../components/svg/demandIcon";
import InformationIcon from "../components/svg/informationIcon";
import NewsletterIcon from "../components/svg/newsletterIcon";
import OpinionIcon from "../components/svg/opinionIcon";
import QuestionIcon from "../components/svg/questionIcon";
import React from "react";
import SaveTheDateIcon from "../components/svg/saveTheDateIcon";

export default ({ type, width = 20, ...props }) => {
  switch (type) {
    case "question": {
      return <QuestionIcon width={width} {...props} />;
    }
    case "demand": {
      return <DemandIcon width={width} {...props} />;
    }
    case "cta": {
      return <CTAIcon width={width} {...props} />;
    }
    case "opinion": {
      return <OpinionIcon width={width} {...props} />;
    }
    case "newsletter": {
      return <NewsletterIcon width={width} {...props} />;
    }
    case "saveTheDate": {
      return <SaveTheDateIcon width={width} {...props} />;
    }
    case "information": {
      return <InformationIcon width={width} {...props} />;
    }
    default: {
      return <QuestionIcon width={width} {...props} />;
    }
  }
};
