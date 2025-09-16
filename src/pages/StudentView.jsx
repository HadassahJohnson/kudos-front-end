import React, { useState } from "react";
import '../styles/Wireframe.css';
import Header from "../components/Header";
import NewKudosForm from "../components/NewKudosForm";
import ReceivedKudosStudent from "../components/ReceivedKudosStudent";
import SentKudosStudent from "../components/SentKudosStudent";
import Footer from "../components/Footer";

function StudentView() {

    const [showForm, setShowForm] = useState(false);
    const handleNewKudos = (newKudos) => {
        console.log("New kudos submitted:", newKudos);
        setShowForm(false);
    }

    return (
        <div className="app-container">
            <Header onCreateNew = {() => setShowForm(true)} />
            
            {showForm && (
                <NewKudosForm 
                onClose = {() =>setShowForm(false)} 
                onSubmit = {handleNewKudos} 
            />
        )}
            <div className="main-content">
                <ReceivedKudosStudent />
                <SentKudosStudent />
            </div>
            <Footer />
        </div>
    );
}

export default StudentView;