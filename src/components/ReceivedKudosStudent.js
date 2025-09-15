import React from 'react';

function ReceivedKudosStudent() {
    return (
        <section className={'received-kudos'}>
            <h2>Received Kudos</h2>
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
                <tr>
                    <td><strong>Bill Gates</strong></td>
                    <td>Totally Awesome!</td>
                    <td>You are the smartest person I know. Would you mind tuto...</td>
                    <td>9/13/25</td>
                </tr>
                </tbody>
            </table>
        </section>
    );
}

export default ReceivedKudosStudent;