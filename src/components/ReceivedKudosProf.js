import React from 'react';

function ReceivedKudosProf() {
    return (
        <section>
            <h2>Submitted Kudos</h2>
            <table>
                <thead>
                <tr>
                    <th>Sender</th>
                    <th>Recipient</th>
                    <th>Title</th>
                    <th>Message</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td><strong>John Doe</strong></td>
                    <td><strong>Jane Smith</strong></td>
                    <td><strong>Excellent Work!</strong></td>
                    <td><strong>I thought you did a great job with the log-in page. It looks sleek and me...</strong></td>
                </tr>
                </tbody>
            </table>
        </section>
    );
}

export default ReceivedKudosProf;