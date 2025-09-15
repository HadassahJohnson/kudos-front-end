import React from "react";

function SentKudosStudent() {
    return (
        <section className={'sent-kudos'}>
            <h2>Sent Kudos</h2>
            <table>
                <thead>
                <tr>
                    <th>Recipient</th>
                    <th>Title</th>
                    <th>Kudos Status</th>
                    <th>Date</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>Abraham Lincoln</td>
                    <td>Fantastic Effort!</td>
                    <td>Received</td>
                    <td>9/13/25</td>
                </tr>
                </tbody>
            </table>
        </section>
    );
}

export default SentKudosStudent;