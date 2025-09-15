import React, { useState } from "react";
import ImageModal from "./ImageModal";

const submitted = [
    {
        sender: "John Doe",
        recipient: "Jane Smith",
        title: "Excellent Work!",
        message:
            "I thought you did a great job with the log-in page. It looks sleek and me...",
        date: "9/13/25",
        imageUrl: "/img/logo192.png",
    },
];

function ReceivedKudosProf() {
    const [selectedImage, setSelectedImage] = useState(null);
    const open = (url) => setSelectedImage(url);
    const close = () => setSelectedImage(null);

    return (
        <section className = {'received-kudos'}>
            <h2>Submitted Kudos</h2>
            <table className="k-table">
                <thead>
                <tr>
                    <th>Sender</th>
                    <th>Recipient</th>
                    <th>Title</th>
                    <th>Message</th>
                    <th>Date</th>
                </tr>
                </thead>
                <tbody>
                {submitted.map((k, i) => (
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
                        <td className={"submitted-kudos-table-data"}>{k.sender}</td>
                        <td className={"submitted-kudos-table-data"}>{k.recipient}</td>
                        <td className={"submitted-kudos-table-data"}>{k.title}</td>
                        <td className={"submitted-kudos-table-data"}>{k.message}</td>
                        <td className={"submitted-kudos-table-data"}>{k.date}</td>
                    </tr>
                ))}
                </tbody>
            </table>

            <ImageModal src={selectedImage} onClose={close} />
        </section>
    );
}

export default ReceivedKudosProf;
