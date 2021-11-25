import React, { useEffect, useState } from 'react';
import Accordion from '../../components/Accordion/Accordion';
import Spinner from '../../components/Spinner/Spinner';

const Faq = () => {
    const [faq, setFaq] = useState('loading');
    useEffect(() => {
        fetch(`https://safe-sea-78341.herokuapp.com/faq`)
            .then((res) => res.json())
            .then((data) => setFaq(data));
    }, []);
    return (
        <>
            {
                faq === 'loading' ? <Spinner /> : faq.map(ques => <Accordion key={ques._id} ques={ques.question} ans={ques.answer} />)
            }
        </>
    );
};

export default Faq;