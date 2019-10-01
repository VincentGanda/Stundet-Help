import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";

const FooterPage = () => {
  return (
    <MDBFooter color="blue" className="font-small pt-1 mt-1">
      <MDBContainer fluid className="text-center text-md-left">
        <MDBRow>
          <MDBCol md="6">
            <h5 className="title">Got any questions? Want to do collaboration?</h5>
            <p>
              contact me via e-mail at vincentganda625@gmail.com
            </p>
          </MDBCol>
      
        </MDBRow>
      </MDBContainer>
      <div className="footer-copyright text-center py-3">
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} Copyright: <a href=""> Vincent Ganda </a>
        </MDBContainer>
      </div>
    </MDBFooter>
  );
}

export default FooterPage;