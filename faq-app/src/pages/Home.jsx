import React, { useEffect, useState } from "react";
import womanDesktop from '../assets/images/illustration-woman-online-desktop.svg';
import bgDesktop from '../assets/images/bg-pattern-desktop.svg';
import womanMobile from '../assets/images/illustration-woman-online-mobile.svg';
import bgMobile from '../assets/images/bg-pattern-mobile.svg';
import LogoBox from '../components/LogoBox';
import LogoFaq from '../components/LogoFaq';
import DetailsList from '../components/DetailsList';
import $api from "../axios";

const Home = () => {
  const [faqslist, setFaqList] = useState([]);

  useEffect(() => {
    $api
      .get('/faqs')
      .then(({ data }) => setFaqList(data))
      .catch(error => {
        console.log(error);
      });
  }, [])

  return (
    <main>
      <LogoBox />
      <div className="faq">
        <LogoFaq
          classLogo='faq__mobile-log'
          woman={womanMobile}
          bg={bgMobile}
        />
        <LogoFaq
          classLogo='faq__desktop-log'
          woman={womanDesktop}
          bg={bgDesktop}
        />
        <div className="container">
          <h1 className="faq_title">FAQ</h1>
          <DetailsList
            details={faqslist}
          />
        </div>
      </div>
    </main>
  );
};

export default Home;