import React, { useState } from 'react';
import './questions.css';

const Questions = () => {
    const [expandedQuestion, setExpandedQuestion] = useState(null);

    const questions = [
        {
            id: 1,
            question: 'How do I join a game?',
            answer: 'Just enter your name and select “find lobby” to join an existing game or “create new lobby” to create your own.'
        },
        {
            id: 2,
            question: 'Can I invite my friends?',
            answer: 'They can join you by searching for your group after you created one.'
        },
        {
            id: 3,
            question: 'How can I choose the card decks?',
            answer: 'By default, all decks are enabled. A feature to choose specific card decks will be implemented later.'
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
