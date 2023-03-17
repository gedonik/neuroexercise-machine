import React from 'react';

const Feedback = () => {
    return (
        <div className="container">
            <div className="catalog-head">
                <h2 className="section-title">Отзывы</h2>
                <a className="catalog-link" href="#">Смотреть все</a>
            </div>

            <div className="feedbackWrapper">
                <ul className={feedbackList}>

                </ul>
            </div>
        </div>
    );
};

export default Feedback;