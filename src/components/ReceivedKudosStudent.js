import React, { useState, useEffect} from 'react';

function ReceivedKudosStudent() {
    const [messages, setMessages] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3001/cards')
        .then((res) => res.json())
        .then((data) => {
            const studentMessages = data.filter(msg => msg.recipientType === 'student');
            setMessages(studentMessages);
        })
        .catch((err) => console.error('Error fetching student kudos:', err));
    }, []);

    return (
        <section className={'received-kudos'}>
            <h2>Received Kudos</h2>

            {messages.length === 0 ? (
                <p style={{ padding: '1rem', fontStyle: 'italic' }}>No Cards Received.</p>
            ) : (
             <table>
                <thead>
                <tr>
                    <th>Sender</th>
                    <th>Title</th>
                    <th>Message</th>
                    <th>Date</th>
                </tr>
                </thead>
                <tbody>
                    {messages.map((msg, index) => (
                        <tr key={msg.id || index}>
                            <td><strong>{msg.sender}</strong></td>
                            <td>{msg.subject || msg.title}</td>
                            <td>{msg.content || msg.message}</td>
                            <td>{msg.date || "-"}</td>
                        </tr>
                    ))}
                </tbody>
            </table>   
            )}
        </section>
    );
}

export default ReceivedKudosStudent;