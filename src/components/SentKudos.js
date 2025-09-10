import React from "react";

const sent = [
    {
        recipient: "Abraham Lincoln",
        title: "Fantastic Effort!",
        status: "Received",
        imageUrl: "/img/logo192.png",
    },
];

function SentKudos() {
    const openImage = (url) => {
        window.open(url, "_blank", "noopener,noreferrer");
    };

    return (
        <section>
            <h2>Sent Kudos</h2>
            <table className="k-table">
                <thead>
                <tr>
                    <th>Recipient</th>
                    <th>Title</th>
                    <th>Kudos Status</th>
                </tr>
                </thead>
                <tbody>
                {sent.map((k, i) => (
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
                        <td>{k.recipient}</td>
                        <td>{k.title}</td>
                        <td>{k.status}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </section>
    );
}

export default SentKudos;
