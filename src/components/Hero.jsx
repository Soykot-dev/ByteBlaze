import { Link } from "react-router-dom";

const Hero = () => {
    return (
        <div className="hero -mt-20">
            <div className="hero-content text-center">
                <div className="">
                    {/* https://www.andrealves.dev/blog/how-to-make-an-animated-gradient-text-with-tailwindcss/ */}
                    <h1 className="text-5xl font-bold">Welcome to <span className="bg-gradient-to-r from-primary via-blue-500 to-secondary text-transparent bg-clip-text animate-gradient bg-300%">ByteBlaze</span></h1>
                    <p className="py-6">
                        ByteBlaze is the bridge between the complex world of technology and <br /> the curious minds eager to understand it
                    </p>
                    {/* https://devdojo.com/tailwindcss/buttons */}
                    <div className="flex justify-center gap-4">
                        <Link to="/blogs" className="relative px-5 py-3 overflow-hidden font-medium text-black bg-gray-100 border border-black rounded-lg shadow-inner group">
                            <span className="absolute top-0 left-0 w-0 h-0 transition-all duration-200 border-t-2 border-gray-600 group-hover:w-full ease"></span>
                            <span className="absolute bottom-0 right-0 w-0 h-0 transition-all duration-200 border-b-2 border-gray-600 group-hover:w-full ease"></span>
                            <span className="absolute top-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-gray-600 group-hover:h-full ease"></span>
                            <span className="absolute bottom-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-gray-600 group-hover:h-full ease"></span>
                            <span className="absolute inset-0 w-full h-full duration-300 delay-300 bg-gray-900 opacity-0 group-hover:opacity-100"></span>
                            <span className="relative transition-colors duration-300 delay-200 group-hover:text-white ease">Read Blogs</span>
                        </Link>
                        <Link to="/bookmarks" className="relative px-5 py-3 overflow-hidden font-medium text-black bg-gray-100 border border-black rounded-lg shadow-inner group">
                            <span className="absolute top-0 left-0 w-0 h-0 transition-all duration-200 border-t-2 border-gray-600 group-hover:w-full ease"></span>
                            <span className="absolute bottom-0 right-0 w-0 h-0 transition-all duration-200 border-b-2 border-gray-600 group-hover:w-full ease"></span>
                            <span className="absolute top-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-gray-600 group-hover:h-full ease"></span>
                            <span className="absolute bottom-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-gray-600 group-hover:h-full ease"></span>
                            <span className="absolute inset-0 w-full h-full duration-300 delay-300 bg-gray-900 opacity-0 group-hover:opacity-100"></span>
                            <span className="relative transition-colors duration-300 delay-200 group-hover:text-white ease">Bookmarks</span>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;