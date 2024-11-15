const Home = () => {
  return (
    <main className="flex-grow">
        <section className="bg-gray-50 py-16 sm:py-24">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-3xl sm:text-4xl font-bold">Welcome to Developers Community of Mechinagar</h1>
            <p className="text-xl text-gray-600 my-8 md:mx-16 text-justify sm:text-center mx-2">
              A vibrant group of tech enthusiasts and developers in Mechinagar. We share knowledge, work on projects, and host events to learn and grow together. Join us to connect, explore new ideas, and solve challenges!
            </p>
            <a href="https://www.facebook.com/dc.mechinagar" target="_blank">
              <button className="bg-black text-white py-2 px-4 rounded-md font-medium">Join the Community</button>
            </a>
          </div>
        </section>
      </main>
  );
};

export default Home;
