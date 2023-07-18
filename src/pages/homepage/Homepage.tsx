import { FaRegImage, FaUser, FaEdit, FaRegPaperPlane } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";


const Homepage = () => {
  
  const navigate = useNavigate();

  return (
    <div className="">
      {/* NAVBAR */}
      <NavBar />
      {/* HOMEPAGE OVERLAY */}
      <div className="homepage-overlay text-white mt-14">
        <div className="w-5/6 text-center mx-auto">
          <p className=" text-2xl md:text-4xl lg:text-5xl font-bold pt-16 mb-4 md:pt-24 ">
            Get people connected to your brand
          </p>
          <p className="md:text-lg font-bold mb-8">
            By enabling them create and share personalized DP based on your
            brand, event or campaign banners
          </p>
          <div className="font-bold flex flex-col md:flex-row md:justify-center mt-4 gap-2 md:gap-8 pb-16">
            <button className="bg-blue-500 py-2 md:p-4">View Demo</button>
            <button
              className="py-2 bg-orange-600 md:p-4"
              onClick={() => navigate("/login")}
            >
              Get Started
            </button>
          </div>
        </div>
      </div>

      {/* PUBLISHING DP BANNER */}
      <div className="bg-gray-100 pb-24">
        <div className="w-5/6 mx-auto pt-16">
          <p className="text-3xl mb-12 text-center">
            Publishing your first DP Banner
          </p>
          <div className="flex flex-col md:flex-row text-center gap-16">
            <div>
              <p>
                <FaRegImage className="inline text-blue-500 text-4xl mb-4 " />
              </p>
              <div className="font-bold mb- text-lg">Upload Frame</div>
              <p>
                Upload your banner cover image showing with placeholders for
                avatars and name
              </p>
            </div>
            <div>
              <p>
                <FaUser className="inline text-blue-500 text-4xl mb-4 " />
              </p>
              <div className="font-bold mb- text-lg">Configure Avatar</div>
              <p>
                Configure shape (circle or square), size and position of avatar
                in frame
              </p>
            </div>
            <div>
              <p>
                <FaEdit className="inline text-blue-500 text-4xl mb-4 " />
              </p>
              <div className="font-bold mb- text-lg">Configure name</div>
              <p>
                Configure font type, size, style, color and position of user's
                name in frame
              </p>
            </div>
            <div>
              <p>
                <FaRegPaperPlane className="inline text-blue-500 text-4xl mb-4 " />
              </p>
              <div className="font-bold mb- text-lg">Publish</div>
              <p>
                Publish your banner and get a shortened URL that you can share
                to people
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA BUTTON */}
      <div className="signup-overlay pt-12 pb-12">
        <div className="w-5/6 mx-auto text-white text-center">
          <p className="text-3xl font-bold">
            Ready to get started? Sign up now!
          </p>
          <div className="flex justify-center">
            <button
              onClick={() => navigate("/register")}
              className=" p-2 bg-orange-600 rounded text-lg text-white font-bold mt-4"
            >
              Signup
            </button>
          </div>
        </div>
      </div>

      {/* FOOTER */}
      <Footer />
      {/* END OF HOMEPAGE */}
    </div>
  );
};

export default Homepage;
