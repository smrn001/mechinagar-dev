const Home = () => {
  return (
    <div className="container mx-auto p-4 max-w-3xl text-justify">
      <h1 className="text-4xl font-bold text-center mb-6 text-gray-800">
        Welcome to the Developers Community of Mechinagar!
      </h1>
      <p className="mb-4 text-gray-700 leading-relaxed">
        We are a group of tech enthusiasts and developers who share knowledge
        and work on projects together.
      </p>
      <p className="mb-4 text-gray-700 leading-relaxed">
        Whether you&apos;re new or experienced, we invite you to connect and
        grow with us. Together, we can explore new ideas and solve challenges.
      </p>
      <p className="mb-4 text-gray-700 leading-relaxed">
        We host events, workshops, and hackathons with industry experts. Join us
        to learn and network with other tech enthusiasts!
      </p>
      <div className="grid grid-cols-1 gap-4 mt-6">
        <img
          src="/photo/post002.jpg"
          alt="Community Gathering"
          className="rounded-lg shadow-md"
        />
      </div>
    </div>
  );
};

export default Home;
