import React, { useEffect, useState } from 'react';

const Inbox = () => {
    const [message, setMessage] = useState('loading');
    useEffect(() => {
        fetch('https://safe-sea-78341.herokuapp.com/contactus')
            .then((res) => res.json())
            .then((data) => setMessage(data));
    }, []);
    return (
        <div className="w-1/2 mx-auto text-center">
            {
                message !== 'loading'
                ? message.map(msg => <div className="bg-gray-100 rounded-lg my-4 p-4" key={msg._id}>
                    <div className="flex justify-between mb-4">
                        <div className="font-semibold text-left">{msg.name} <br /><span className="italic font-light">{msg.email}</span></div>
                        <span className="italic">{msg.date}</span>
                    </div>
                    <p className="text-justify">{msg.message}</p>

                </div>) : <p>Loading...</p>
            }
        </div>
    );
};

export default Inbox;