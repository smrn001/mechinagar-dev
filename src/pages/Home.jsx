const Home = () => {
  return (
    <main className="flex-grow">
      <section className="bg-gray-50 py-12 sm:py-16 md:py-24 border-b">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-tight">
            Welcome to Developers Community of Mechinagar
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 mt-6 sm:mt-8 md:mt-10 mb-8 md:mb-12 text-justify sm:text-center mx-4 md:mx-16 lg:mx-32 xl:mx-48">
            A vibrant group of tech enthusiasts and developers in Mechinagar. We
            share knowledge, work on projects, and host events to learn and grow
            together. Join us to connect, explore new ideas, and solve
            challenges!
          </p>
          <button className="bg-black text-white py-2 px-6 sm:py-3 sm:px-8 rounded-md font-medium hover:bg-gray-800 transition-colors duration-200">
            Join the Community
          </button>
        </div>
      </section>
    </main>
  );
};

export default Home;
