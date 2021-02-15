import { useState } from 'react';
import people from '../../data';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';

const Review = () => {
  const [index, setIndex] = useState(0);
  const { name, job, image, text } = people[index];

  const checkNumber = (number) => {
    if (number > people.length - 1) {
      return 0;
    } else if (number < 0) {
      return people.length - 1;
    }
    return number;
  };

  const handlePrevPerson = () => {
    setIndex((index) => {
      let newIndex = index - 1;
      return checkNumber(newIndex);
    });
  };

  const handleNextPerson = () => {
    setIndex((index) => {
      let newIndex = index + 1;
      return checkNumber(newIndex);
    });
  };

  const randomPerson = () => {
    let randomNumber = Math.floor(Math.random() * people.length);
    if (randomNumber === index) {
      randomNumber = index + 1;
    }
    setIndex(checkNumber(randomNumber));
  };

  return (
    <article className="review">
      <div className="img-container">
        <img src={image} alt="" className="person-img" />
        <span className="quote-icon">
          <FaQuoteRight />
        </span>
      </div>
      <h4 className="author">{name}</h4>
      <p className="job">{job}</p>
      <p className="info">{text}</p>
      <div className="button-container">
        <button className="prev-btn" onClick={() => handlePrevPerson()}>
          <FaChevronLeft />
        </button>
        <button className="next-btn" onClick={() => handleNextPerson()}>
          <FaChevronRight />
        </button>
      </div>
      <button className="random-btn" onClick={() => randomPerson()}>
        Get Random Review
      </button>
    </article>
  );
};

export default Review;
