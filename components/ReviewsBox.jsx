const ReviewsBox = ({title, text, name}) => {
  return (
    <>
      <div className="reviews-box rounded-3xl bg-white p-6 shadow-md shadow-gray-900/5">
        <div className="star-container flex">
          <img src="/img/review-star.svg" alt="" />
          <img src="/img/review-star.svg" alt="" />
          <img src="/img/review-star.svg" alt="" />
          <img src="/img/review-star.svg" alt="" />
          <img src="/img/review-star.svg" alt="" />
        </div>
        <p className="mt-4 text-lg font-semibold leading-6 before:content-['“'] after:content-['”']">
         {title}
        </p>
        <p className="mt-3 text-base leading-7">
          {text}
        </p>
        <p className="mt-3 text-sm text-gray-600 before:content-['–_']">{name}</p>
      </div>
    </>
  );
};

export default ReviewsBox;
