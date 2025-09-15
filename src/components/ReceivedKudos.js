import React, { useState } from "react";
import ImageModal from "./ImageModal";

const received = [
    {
        sender: "Bill Gates",
        title: "Totally Awesome!",
        message:
            "You are the smartest person I know. Would you mind tutoring me in Co...",
        date: "9/13/25",
        imageUrl: "/img/logo192.png",
    },
];

function ReceivedKudos() {
    const [selectedImage, setSelectedImage] = useState(null);

    const open = (url) => setSelectedImage(url);
    const close = () => setSelectedImage(null);

    return (
        <section>
            <h2>Received Kudos</h2>
            <table className="k-table">
                <thead>
                <tr>
                    <th>Sender</th>
                    <th>Title</th>
                    <th>Message</th>
                    <th>Date</th>
                </tr>
                </thead>
                <tbody>
                {received.map((k, i) => (
                    <tr
                        key={i}
                        className="row-click"
                        role="button"
                        tabIndex={0}
                        onClick={() => open(k.imageUrl)}
                        onKeyDown={(e) => {
                            if (e.key === "Enter" || e.key === " ") open(k.imageUrl);
                        }}
                    >
                        <td><strong>{k.sender}</strong></td>
                        <td>{k.title}</td>
                        <td className="truncate">{k.message}</td>
                    </tr>
                ))}
                </tbody>
            </table>

            <ImageModal src={selectedImage} onClose={close} />
        </section>
    );
}

export default ReceivedKudos;
