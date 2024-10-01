import img1 from "../../Assets/HarishChoudhary.jpg";
import img2 from "../../Assets/Placeholder.png";



export default function Contact() {
    return <>
      <div className="flex mx-auto justify-center text-center">
            <div className="flex flex-col items-center w-1/3">
                <img src={img1} className="h-80 rounded-2xl my-3" placeholder="image" />
                <h1 className="text-3xl font-bold">Harish Choudhary</h1>
                <a href="https://www.linkedin.com/in/harish-choudhary-636123201/" className="font-semibold">LinkedIn</a>
            </div>
            <div className="flex flex-col items-center w-1/3">
                <img src={img2} className="h-80 rounded-2xl my-3" placeholder="image" />
                <h1 className="text-3xl font-bold">Debiprasad Nanda</h1>
                <a href="https://www.linkedin.com/in/debiprasad-nanda-08550b303/" className="font-semibold">LinkedIn</a>
            </div>
        </div>


        <div className="mt-8  py-8 px-4">
  <div className="text-center">
    <h2 className="text-3xl font-bold">Get in Touch</h2>
    <p className="text-gray-600 mt-2">We’d love to hear from you! Send us a message below.</p>
  </div>
  </div>

        <div className="mt-8 py-8 px-4 flex justify-center">
            <div className="mx-40  max-w-lg bg-white p-6 rounded-lg ">
    <h2 className="text-3xl font-bold mb-4 text-gray-600">Send a Message</h2>

    <form
      onSubmit={(e) => {
        e.preventDefault(); 
        e.target.reset();  
        
      }}
    >
     
      <div className="mb-2">
        <label htmlFor="name" className="block text-1xl font-bold text-gray-700">
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
          placeholder="Write your name here"
          required
        />
      </div>

      
      <div className="mb-4">
        <label htmlFor="email" className="block text-1xl font-bold text-gray-700">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
          placeholder="Write your Email here"
          required
        />
      </div>

      
      <div className="mb-4">
        <label htmlFor="message" className="block text-1xl font-bold text-gray-600">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows="4"
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
          placeholder="Write your message here"
          required
        ></textarea>
      </div>

     
      <div className="flex justify-center">
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-44 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        >
          Submit
        </button>
      </div>
    </form>
  </div>  
  
</div>








    </>
}