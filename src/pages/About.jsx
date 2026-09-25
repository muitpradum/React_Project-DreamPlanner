
function About() {
  return (
    <div className="min-h-screen bg-gray-100">


      <section className=" text-gray-500 py-5 text-center">
        <h1 className="text-5xl !text-purple-500 font-bold mb-4">
          About Us
        </h1>
        <p className="text-lg ">
          We help you plan and organize beautiful events that create<br />
          unforgettable memories.
        </p>
      </section>
      {/* About Content */}
      <section className="max-w-4xl mx-auto px-6 py-4">
       <div className="py-8 px-5 rounded-2xl bg-linear-65 from-purple-300 to-sky-200">
         <div className="grid md:grid-cols-2 gap-7 items-center ">

          <div>
            <h2 className="text-3xl font-bold !text-purple-500 mb-5">
              Welcome to DreamPlanner
            </h2>
            <p className="text-gray-600 leading-7">
              <strong >DreamPlanner</strong> is an
              <strong> event management platform</strong> that makes
              <strong> event planning simple and stress-free</strong>. We help you
              organize <strong>weddings, birthdays, parties, and special events </strong>
               with creative ideas and easy planning tools. Our goal is to make every
              celebration <strong>beautiful, memorable, and enjoyable</strong>.
            </p>



          </div>

          <div className="bg-white rounded-xl shadow-lg p-8">
            <h3 className="text-2xl font-bold mb-4 text-purple-500">
              Why Choose Us?
            </h3>

            <ul className="space-y-4 text-gray-600">
              <li>✓ Easy event planning</li>
              <li>✓ Beautiful event ideas</li>
              <li>✓ Simple registration</li>
              <li>✓ Easy event management</li>
              <li>✓ Memorable celebrations</li>
            </ul>
          </div>

        </div>
       </div>
      </section>

    </div>
  );
}

export default About;

