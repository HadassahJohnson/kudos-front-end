import React from "react";
import '../styles/Wireframe.css';
import Header from "../components/Header";
import ReceivedKudosProf from "../components/SubmittedKudosProf";
import SentKudosProf from "../components/ReviewedKudosProf";
import Footer from "../components/Footer";

function ProfessorView() {
    return (
        <div className="app-container">
            <Header />
            <div className="main-content">
                <ReceivedKudosProf />
                <SentKudosProf />
            </div>
            <Footer />
        </div>
    );
}

export default ProfessorView;