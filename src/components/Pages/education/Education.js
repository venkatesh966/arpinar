import React from "react";
import "./Education.css"; // Import the CSS file for Education component

function Education() {
  return (
    <div id="content">
      <h2>Education</h2>
      <h3>PhD</h3>
      <p>
        <strong>Title</strong>:{" "}
        <a href="papers/phdthesis.pdf">Formalization of Workflows and Correctness Issues in the Presence of Concurrency</a>.
      </p>
      <p>
        <strong>Supervisors</strong>:{" "}
        <a href="http://www.srdc.metu.edu.tr/%7Easuman">Prof. Asuman Dogac</a>, and{" "}
        <a href="http://heaven.eee.metu.edu.tr/%7Ehalici/">Prof. Ugur Halici</a>
      </p>
      <p>
        <strong>Abstract</strong>:
      </p>
      <p>
        In this thesis, main components of a workflow system that are relevant to the correctness in the presence of concurrency are formalized based on set theory and graph theory. The formalization which constitutes the theoretical basis of the correctness criterion provided can be summarized as follows:
      </p>
      <ul>
        <li>Activities of a workflow are represented through a notation based on set theory to make it possible to formalize the conceptual grouping of activities.</li>
        <li>Control-flow is represented as a special graph based on this set definition, and it includes serial composition, parallel composition, conditional branching, and nesting of individual activities and conceptual activities themselves.</li>
        <li>Data-flow is represented as a directed acyclic graph in conformance with the control-flow graph.</li>
      </ul>
      <p>
        The formalization of correctness of concurrently executing workflow instances is based on this framework by defining two categories of constraints on the workflow environment with which the workflow instances and their activities interact. These categories are:
      </p>
      <ul>
        <li>Basic constraints that specify the correct states of a workflow environment.</li>
        <li>Inter-activity constraints that define the semantic dependencies among activities such as an activity requiring the validity of a constraint that is set or verified by a preceding activity.</li>
      </ul>
      <p>
        Basic constraints graph and inter-activity constraints graph which are in conformance with the control-flow and data-flow graphs are then defined to represent these constraints. These graphs are used in for
        {/* <img src="img/odtu-wall3.jpg" height="215" width="288" className="left" alt="Example image - aligned to the right" /> */}
        malizing the intervals among activities where an inter-activity constraint should be maintained and the intervals where a basic constraint remains invalid.
      </p>
      <p>
        A correctness criterion is defined for an interleaved execution of workflow instances using the constraints graphs. Two concurrency control mechanisms, namely Constraint Based Concurrency Control technique and Constraint Locking Concurrency Control technique are developed based on the correctness criterion. The performance analysis shows the superiority of the proposed techniques. Other possible approaches to the problem are also presented.
      </p>
      <p>
        <strong>Courses</strong>: Advanced Unix, Advanced Graphics and User Interfaces, Design and Analysis of Computer Algorithms, Design and Analysis of Information Systems, Distributed Database Management Systems, Software Quality Assurance and Testing, System Development with Abstract Design, etc.
      </p>

      <h3>MSc Thesis</h3>
      <strong>Title</strong>: An Advanced Graphical User Interface for Object-Oriented DBMSs: MoodView <br />
      <br />
      <strong>Supervisor</strong>: <a href="http://www.srdc.metu.edu.tr/%7Easuman">Prof. Asuman Dogac</a>
      <p>
        <br />
        <strong>Abstract</strong>:
      </p>
      <p>
        OODBMSs need more than declarative query languages and programming languages as their interfaces since they are designed and implemented for complex applications requiring more advanced and easy to use visual interfaces. A complete programming environment called MoodView is developed for this purpose. MoodView translates all the user actions performed through its graphical interface to SQL statements and therefore it can be ported onto any object-oriented database systems using SQL. MoodView provides the database programmer with tools and functionalities for every phase of object-oriented database application development. Current version of MoodView allows a database user to design, browse, and modify database schema interactively and to display class inheritance hierarchy as a directed acyclic graph. MoodView can automatically generate graphical displays for complex and multimedia database objects which can be updated through the object
      </p>
      <p>
        <strong>Courses</strong>: Digital Image Processing, Object-Oriented Database Management, Object-Oriented Programming Languages, Computer Networks and Communications, etc.
      </p>
    </div>
  );
}

export default Education;
