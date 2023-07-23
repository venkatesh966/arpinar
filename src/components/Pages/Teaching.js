import React from "react";
import "./Teaching.css"; // Import the CSS file for Teaching component

export const Teaching = () => {
  return (
    <div id="teaching">
      <h2>Teaching</h2>

      <table summary="Courses">
        <caption>Current Course</caption>
        <thead>
          <tr>
            <th width="23%" scope="col">Course Id</th>
            <th width="34%" scope="col">Semester</th>
            <th width="43%" scope="col">Course Name</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <th scope="row">CSCI8380</th>
            <td>S'12</td>
            <td>Advanced Topics in Information Systems</td>
          </tr>
        </tbody>
      </table>

      <table summary="Courses">
        <caption>Past Courses</caption>
        <thead>
          <tr>
            <th width="23%" scope="col">Course Id</th>
            <th width="34%" scope="col">Semester</th>
            <th width="43%" scope="col">Course Name</th>
          </tr>
        </thead>
        <tfoot>
          <tr>
            <th scope="row"></th>
            <td colspan="3">
              <sup>*</sup> I introduced this course.
              <br />
              <sup>^</sup> Master of Internet Technology course.
              <br />
              <sup>+</sup> I taught this course during my post-doctoral study.
              <br />
              <sup>#</sup> Team-teaching with Dr. Sheth.
            </td>
          </tr>
        </tfoot>
        <tbody>
          <tr>
            <th scope="row">
              <a href="atis_s10.html">CSCI8380</a>
            </th>
            <td>S’11, S’10, F’08, S’07, S’06, S’05, S’04</td>
            <td>
              Advanced Topics in Information Systems<sup>*</sup>
            </td>
          </tr>
          <tr>
            <th scope="row">CSCI8350</th>
            <td>F’99</td>
            <td>Enterprise Integration<sup>+#</sup></td>
          </tr>
          <tr>
            <th scope="row">CSCI6900</th>
            <td>S’02<sup>*</sup></td>
            <td>Networked Information Systems<sup>*</sup></td>
          </tr>
          <tr>
            <th scope="row">CSCI6370</th>
            <td>F’03</td>
            <td>Database Management</td>
          </tr>
          <tr>
            <th scope="row">CSCI6345</th>
            <td>S’03</td>
            <td>Internet Information Systems<sup>^</sup></td>
          </tr>
          <tr>
            <th scope="row">CSCI4900/6900</th>
            <td>S’04</td>
            <td>Transaction &amp; Query Processing Techniques<sup>*</sup></td>
          </tr>
          <tr>
            <th scope="row">
              <a href="db_f09.html">CSCI4370/6370</a>
            </th>
            <td>F’09, S’08, F’07, S’06, F’05, S’02</td>
            <td>Database Management</td>
          </tr>
          <tr>
            <th scope="row">
              <a href="db_sp13.html">CSCI4370</a>
            </th>
            <td>S’13, F’11, F’10, F’08, F’06, F’02, S’00<sup>+</sup></td>
            <td>Database Management</td>
          </tr>
          <tr>
            <th scope="row">CSCI2720</th>
            <td>S’10, F’07, F’04</td>
            <td>Data Structures</td>
          </tr>
          <tr>
            <th scope="row">CSCI1730</th>
            <td>S’11, F’10, S’09</td>
            <td>Systems Programming</td>
          </tr>
        </tbody>
      </table>
      <div className="accomplishments">
      <h3>Teaching Accomplishments:</h3>

<p>
  Since August 2001, I have developed and taught new curriculum for courses in{" "}
  <a href="http://www.uga.edu/">UGA </a>
  <a href="http://www.cs.uga.edu/">Computer Science Department</a> (UGA-CS). With these contributions (in addition to courses offered by other faculty members) UGA-CS has one of the most extensive course offerings in databases and web information systems. In addition, I trained and supervised numerous{" "}
  <a href="students.html">students</a> at MS and PhD levels with strong publication records. Training students in and beyond the class and witnessing their scholarly and personal progress are very important objectives in my perspective.
</p>
<p>
  <a href="atis_s10.html">Advanced Topics in Information Systems</a>, Networked Information Systems and Transaction and Query Processing Techniques are new courses at UGA-CS which are introduced and developed. In these courses, I incorporate my research results, and ask students to do rigorous research projects. These projects enrich the learning experience for students and expose them to various approaches and tools for real-life problem solving. Because of these experiences my students are frequently offered full time or intern positions in various companies and industrial research labs.
</p>
<p>
  I frequently teach an advanced level graduate course "<a href="atis_s10.html">Advanced Topics in Information Systems</a>". In this course, two major issues dealt with are: (1) information integration and interoperability, (2) novel web technologies. Special attention is given to emerging research areas fueled by the web and related technologies, such as semantic web, web services, and Web 3.0. This course is highly enjoyed by our graduate students since it is based on class discussions of scientific papers, which encourages critical thinking on various research problems and techniques. Also some students were able to publish the results of their course projects at the workshop level.
</p>
<p>
  I also teach "<a href="db_f09.html">Database Management</a>". This course covers the essential concepts, principles and techniques for design, analysis, and implementation of databases and the use of database management systems for developing applications. Key information management concepts and techniques are examined, including information modeling, querying and access, and implementation structures such as indexing for efficient retrieval. I also cover transaction processing and concurrency control techniques. For this course, I have developed a number of programming projects which expose students to basic concepts of database system implementation such as persistent storage, querying and developing hash or tree-based indexing structures.
</p>
      </div>
     
    </div>
  );
}

export default Teaching;
