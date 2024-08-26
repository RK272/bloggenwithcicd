
import image2 from './7.jpg';
import image2 from './2.jpg';

function App() {
  return (
    <div>
      <nav className="bg-red-500 py-2">
        <div className="relative w-[1080px] mx-auto flex items-center justify-between gap-4">
          <a href="/" className="cursor-pointer py-2 pr-7">
            <img
              className="h-14"
              src={image7}
              width="125"
              height="30"
              alt="Logo"
            />
          </a>
          <ul className="flex gap-3">
            {["Payments", "Banking", "Corporate Card", "Pay Roll", "Resources", "Support", "Pricing"].map((item, index) => (
              <li key={index} className="text-white font-mullish text-lg hover:text-blue-300 cursor-pointer transition-all duration-300 relative group">
                <a href="#">{item}</a>
                <div className="absolute left-0 bottom-[-2px] w-full h-[2px] bg-blue-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-200"></div>
              </li>
            ))}
          </ul>
          <div className="flex items-center space-x-6">
            <img
              className="h-8"
              src={image2}
              width="28"
              height="20"
              alt="Icon"
            />
            <button className="py-2 px-4 font-mullish text-white border-lime-300 border-[1px] rounded-sm text-sm font-bold">
              Log in
            </button>
            <button className="py-3 rounded-sm text-sm font-bold bg-white text-lime-300 border transition-all duration-200 hover:text-red-500">
              Sign up
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default App;
