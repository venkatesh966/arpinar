import React from "react";

import './Home.css'
import Education from "./education/Education";
import Positions from "./positions/Positions";

export const Home = () => {
  return (
    <div id="content">
      <h2>Welcome</h2>
      <p>
        I am an Associate Professor of{" "}
        <a href="http://www.cs.uga.edu" className="link">
          Computer Science
        </a>{" "}
        at the University of Georgia (
        <a href="http://www.uga.edu" className="link">
          UGA
        </a>
        ), and a member of Large Scale Distributed Information Systems (
        <a href="http://lsdis.cs.uga.edu" className="link">
          LSDIS
        </a>
        ) Lab. I received my BSc, MSc, and PhD degrees from{" "}
        <a href="http://www.ceng.metu.edu.tr/" className="link">
          Computer Engineering Department
        </a>{" "}
        of{" "}
        <a href="http://www.metu.edu.tr/" className="link">
          Middle East Technical University
        </a>{" "}
        in 1991, 1993, and 1998 respectively (advisors:{" "}
        <a href="http://www.srdc.metu.edu.tr/%7Easuman/" className="link">
          Prof. Dogac
        </a>{" "}
        and{" "}
        <a href="http://heaven.eee.metu.edu.tr/%7Ehalici/" className="link">
          Prof. Halici
        </a>
        ).
      </p>
      <h3>Research Interests</h3>
      <p>
        My current research interests include{" "}
        <a href="http://www.w3.org/2001/sw/" className="link">
          semantic web
        </a>
        , crowdsourcing and collective intelligence, information fusion, and
        biomedical informatics. My earlier research involved web services and
        workflow management. My research focuses on developing new semantic-based
        techniques for providing be
        <a
          href="http://blogs.ubc.ca/dean/files/2009/02/earthnetwork1.jpg"
          className="link"
        >
          {/* <img
            src="/semanticweb.jpg"
            height="158"
            width="207"
            className="left"
            alt="Example image - aligned to the right"
          /> */}
        </a>
        tter information integration and search experiences for the web users.
        This research direction is critical for building the next generation of
        web, called{" "}
        <a href="http://www.w3.org/2001/sw/" className="link">
          semantic web
        </a>
        . From December 1998 through August 2001, I worked on adaptable{" "}
        <a
          href="http://lsdis.cs.uga.edu/Projects/past/METEOR/"
          className="link"
        >
          workflow
        </a>{" "}
        technology during my post-doctoral studies at{" "}
        <a href="http://lsdis.cs.uga.edu" className="link">
          LSDIS
        </a>{" "}
        Lab, which is one of the leading information systems research labs
        worldwide (advisor:{" "}
        <a href="http://knoesis.wright.edu/amit/" className="link">
          Prof. Sheth
        </a>
        ).
      </p>
      <p>
        My research on{" "}
        <a href="http://www.w3.org/2002/ws/" className="link">
          web services
        </a>{" "}
        and{" "}
        <a href="http://www.w3.org/2001/sw/" className="link">
          semantic web
        </a>{" "}
        was supported by{" "}
        <a href="http://www.ovpr.uga.edu/ugarf/" className="link">
          UGA Research Foundation
        </a>{" "}
        and{" "}
        <a href="http://www.nsf.gov/" className="link">
          National Science Foundation
        </a>{" "}
        respectively. I have authored or co-authored over seventy{" "}
        <a href="publications.html" className="link">
          publications
        </a>
        , and the{" "}
        <a href="research.html" className="link">
          R&amp;D
        </a>{" "}
        I was involved has resulted in different products or research prototypes.
      </p>
      <h3>An Invitation</h3>
      <p>
        I consider training{" "}
        <a href="students.html" className="link">
          students
        </a>{" "}
        in and beyond the class and helping their scholarly and personal progress
        as very important objectives in my career. If you have an interest on web
        science, linked data, semantic web and collective intelligence and like
        to join our{" "}
        <a href="students.html" className="link">
          research group
        </a>{" "}
        please drop me an{" "}
        <a href="contact.html" className="link">
          e-mail
        </a>
        .
      </p>
      <Education />
      <Positions/>
    </div>
  );
};
