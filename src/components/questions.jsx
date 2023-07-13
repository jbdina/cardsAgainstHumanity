import React, { useState } from 'react';
import './Questions.css';

const Questions = () => {
    const [expandedQuestion, setExpandedQuestion] = useState(null);

    const questions = [
        {
            id: 1,
            question: 'Frage 1',
            answer: 'Antwort auf Frage 1.'
        },
        {
            id: 2,
            question: 'Frage 2',
            answer: 'Antwort auf Frage 2.'
        },
        {
            id: 3,
            question: 'Frage 3',
            answer: 'Antwort auf Frage 3.'
        }
    ];

    const toggleQuestion = (id) => {
        if (expandedQuestion === id) {
            setExpandedQuestion(null);
        } else {
            setExpandedQuestion(id);
        }
    };

    return (
        <div className="questions-container">
            {questions.map((q) => (
                <div key={q.id} className="question-item">
                    <div
                        className={`question ${expandedQuestion === q.id ? 'expanded' : ''}`}
                        onClick={() => toggleQuestion(q.id)}
                    >
                        {q.question}
                    </div>
                    {expandedQuestion === q.id && <div className="answer">{q.answer}</div>}
                </div>
            ))}
        </div>
    );
};

export default Questions;
