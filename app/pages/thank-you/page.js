const page = () => {
  return (
    <div className="main-bg2 pt-5">
      <div className="container mx-auto flex flex-col md:flex-row justify-around items-center px-10 md:px-0">
        <div className="w-full md:w-[30%] text-center py-10 md:py-0">
          <h2 className=" text-3xl text-[60px] text-secondary mb-5 font-semibold">
            Thank You
          </h2>
          <p className="text-xl mb-4">
            Your submission has been received we will be in touch and contact
            you soon!
          </p>
          <button className="bg-primary rounded-full py-3 w-full text-white font-normal">
            Back to site
          </button>
        </div>
        <div className="py-10 md:py-0">
          <img src="/thank-you.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default page;
