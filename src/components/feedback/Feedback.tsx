import React from 'react';

function Feedback() {
  return (
    <div className="container">
      <div className="catalog-head">
        <h2 className="section-title">Отзывы</h2>
        <a className="catalog-link" href="#">
          Смотреть все
        </a>
      </div>

      <div className="feedbackWrapper">
        <ul className={feedbackList} />
      </div>
    </div>
  );
}

export default Feedback;
