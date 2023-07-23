import React from "react";
import "./Positions.css"; // Import the CSS file for Positions component

function Positions() {
  return (
    <div id="contentwide">
      <h2>Positions</h2>
      <table summary="Positions">
        <tfoot></tfoot>
        <tbody>
          <tr>
            <th width="31%" scope="row">
              Aug 2007 – present
            </th>
            <td width="69%">
              <a href="http://www.cs.uga.edu">Department of Computer Science</a>, University of Georgia (
              <a href="http://www.uga.edu">UGA</a>), Athens, GA.
              <em>Associate Professor</em>.
            </td>
          </tr>
          <tr>
            <th scope="row">Aug 2001 – Aug 2007</th>
            <td>
              <a href="http://www.cs.uga.edu">Department of Computer Science</a>, <a href="http://www.uga.edu">UGA</a>, Athens, GA.
              <em>Assistant Professor</em>.
            </td>
          </tr>
          <tr>
            <th scope="row">Jul 2001 – Aug 2001</th>
            <td>
              <a href="http://lsdis.cs.uga.edu">LSDIS Lab</a>, <a href="http://www.cs.uga.edu">Department of Computer Science</a>, <a href="http://www.uga.edu">UGA</a>, Athens, GA.
              <em>Post-Doctoral Research Associate</em>.
            </td>
          </tr>
          <tr>
            <th scope="row">Apr 2001 – Jul 2001</th>
            <td>
              <a href="http://www.genetics.uga.edu/">Department of Genetics</a>, <a href="http://www.uga.edu">UGA</a>, Athens, GA.
              <em>Research Computational Biologist</em>.
            </td>
          </tr>
          <tr>
            <th scope="row">Dec 1998 – Apr 2001</th>
            <td>
              <a href="http://lsdis.cs.uga.edu">LSDIS Lab</a>, <a href="http://www.cs.uga.edu">Department of Computer Science</a>, <a href="http://www.uga.edu">UGA</a>, Athens, GA.
              <em>Post-Doctoral Research Associate</em>.
            </td>
          </tr>
          <tr>
            <th scope="row">Mar 1997 – Dec 1998</th>
            <td>
              <a href="http://www.ayesas.com/">AYDIN</a> Software and Electronics Industry Co., Ankara, Turkey (acquired by <a href="http://www.l3.com">L-3</a>).
              <em>Software Engineer</em>.
            </td>
          </tr>
          <tr>
            <th scope="row">Feb 1992 – Mar 1997</th>
            <td>
              Software Research and Development Center (<a href="http://www.srdc.metu.edu.tr">SRDC</a>), <a href="http://www.metu.edu.tr">Middle East Technical University</a>, Ankara, Turkey.
              <em>Research Scientist</em>.
            </td>
          </tr>
          <tr>
            <th scope="row">Aug 1991 – Feb 1992</th>
            <td>
              Scientific and Technical Research Council of Turkey (<a href="http://www.tubitak.gov.tr/en/ot/10/">TUBITAK</a>), Ankara, Turkey.
              <em>Software Engineer</em>.
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Positions;
