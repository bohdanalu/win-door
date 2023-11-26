import Link from "next/link";

const Hero = () => {
  return (
    <section className="bg-primary text-light h-screen">
      <div className="container h-full flex flex-col justify-center space-y-8">
        <h1 className="text-4xl leading-normal">
          Вікна <br /> за найкращою ціною
        </h1>
        <Link
          href="/window"
          className="inline-flex items-center justify-center rounded-md p-2 text-light/500 bg-light w-1/2 border-light border-2 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
        >
          заміни вікно
        </Link>
      </div>
    </section>
  );
};

export default Hero;
