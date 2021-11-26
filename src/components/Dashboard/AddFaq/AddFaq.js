import React, { useState } from 'react';

const AddFaq = () => {
    const [newFaq, setNewFaq] = useState({
        question: '',
        answer: ''
    })
    const addFaq = (e) => {
        const newFAQ = {
            ...newFaq
        };
        newFAQ[e.target.name] = e.target.value;
        setNewFaq(newFAQ);
    }
    const submitFaq = e => {
        e.preventDefault();

        fetch(`https://safe-sea-78341.herokuapp.com/addfaq`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(newFaq)
        })
        .then(res => res.json())
        .then(data => {})
        setNewFaq({
            question: '',
            answer: ''
        })

    }
    return (
        <form onSubmit={submitFaq} className="w-1/2 mx-auto text-center">
            <h1 className="font-semibold text-2xl my-3">Add a FAQ</h1>
            <input className="border-purple-400 border-2 m-2 p-2 rounded-md" type="text" name="question" id="question" placeholder="Type question" onBlur={addFaq} required />
            <input className="border-purple-400 border-2 m-2 p-2 rounded-md" type="text" name="answer" id="answer" placeholder="Type answer" onBlur={addFaq} required />
            <button className="border-purple-400 border-2 m-2 px-4 bg-purple-700 text-white font-semibold rounded-md p-1" type="submit">Submit</button>
        </form>
    );
};

export default AddFaq;