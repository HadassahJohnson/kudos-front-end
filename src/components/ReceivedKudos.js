import React from "react";

const received = [
    {
        sender: "Bill Gates",
        title: "Totally Awesome!",
        message:
            "You are the smartest person I know. Would you mind tutoring me in Co...",
        imageUrl: "/img/logo192.png",
    },
];

function ReceivedKudos() {
    const openImage = (url) => {
        window.open(url, "_blank", "noopener,noreferrer");
    };

    return (
        <section>
            <h2>Received Kudos</h2>
            <table className="k-table">
                <thead>
                <tr>
                    <th>Sender</th>
                    <th>Title</th>
                    <th>Message</th>
                </tr>
                </thead>
                <tbody>
                {received.map((k, i) => (
                    <tr
                        key={i}
                        className="row-click"
                        role="button"
                        tabIndex={0}
                        onClick={() => openImage(k.imageUrl)}
                        onKeyDown={(e) => {
                            if (e.key === "Enter" || e.key === " ") openImage(k.imageUrl);
                        }}
                    >
                        <td><strong>{k.sender}</strong></td>
                        <td>{k.title}</td>
                        <td className="truncate">{k.message}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </section>
    );
}

export default ReceivedKudos;
