import Navbar from "../components/Navbar";

const MainLayout = ({ children }) => {
  return (
    <div className="min-h-screen bg-slate-950 text-white">

      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <div className="p-6">
        {children}
      </div>

    </div>
  );
};

export default MainLayout;