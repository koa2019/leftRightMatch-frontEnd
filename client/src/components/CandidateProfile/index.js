// dependencies
import React from "react";
import { Col, Row, Container } from "../components/Grid";
import Nav from '../components/Nav';
import Jumbotron from "../components/Jumbotron";
import ProfileCard from "../components/ProfileCard";
import candidateImages from "../utils/images.json";
import Bernie from '../images/bernie_blue_profile1.jpg'

function CandidateProfile(props) {

        return (
           
            // code for an individual candidate
                 <div>
                 <Nav />
                 <Jumbotron>
                     <h1><span className="bg-light p-3"> {props.name}</span></h1>
                 </Jumbotron>
                 <Container>
                     <Row>
                         <Col size="col-md-auto mx-auto">
                             <ProfileCard
                                 id={props.id}
                                 image={Bernie}
                                 name={props.name}
                             />
                         </Col>
                     </Row>
                 </Container>
             </div>
        );
    }

export default CandidateProfile;