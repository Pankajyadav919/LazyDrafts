import { useState } from "react";
import {
  FaHome,
  FaBook,
  FaWallet,
  FaBell,
  FaUserFriends,
  FaCog,
  FaQuestionCircle,
  FaComment,
  FaFileAlt,
  FaCheckCircle,
  FaStar,
  FaDollarSign,
  FaCloudUploadAlt,
  FaArrowRight,
  FaFilePdf,
  FaCalendar,
  FaPlus,
  FaDownload,
  FaHistory,
  FaShare,
  FaBars,
  FaTimes,
} from "react-icons/fa";

export default function StudentDashboard() {
  const [walletOpen, setWalletOpen] = useState(false);
  const [uploadOpen, setUploadOpen] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [fileName, setFileName] = useState("Drag & drop your homework file here or click to browse");

  const [ratings, setRatings] = useState({}); // ⭐ track ratings for works

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setFileName(e.target.files[0].name);
    }
  };

  // ⭐ Handle rating submission (API call)
  const submitRating = async (workId) => {
    if (!ratings[workId]) return alert("Please select a rating before submitting");

    try {
      const res = await fetch(`/api/student/rating/${workId}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ rating: ratings[workId] }),
      });

      if (res.ok) {
        alert("Rating submitted successfully!");
      } else {
        alert("Failed to submit rating");
      }
    } catch (err) {
      console.error(err);
      alert("Error submitting rating");
    }
  };

  const stats = [
    { icon: <FaFileAlt />, value: "12", label: "Total Uploads" },
    { icon: <FaCheckCircle />, value: "8", label: "Completed Notes" },
    { icon: <FaStar />, value: "4.9", label: "Avg Rating" },
    { icon: <FaDollarSign />, value: "$120", label: "Spent" },
  ];

  const works = [
    { id: 1, title: "Calculus Homework", date: "Oct 12", pages: 12, price: "$5.99", status: "completed" },
    { id: 2, title: "Organic Chemistry Assignment", date: "Oct 5", pages: 8, price: "$4.99", status: "completed" },
    { id: 3, title: "History Essay Draft", date: "Sep 28", pages: 15, price: "$7.99", status: "in-progress" },
    { id: 4, title: "C++ Programming Project", date: "Sep 20", pages: 20, price: "$9.99", status: "completed" },
  ];

  return (
    <div className="flex min-h-screen bg-gradient-to-br from-[#f8f7f5] to-[#f0ede8] font-inter text-gray-900">
      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 h-full w-72 bg-[#2C3E50] text-white flex flex-col transition-transform duration-300 z-50 ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
        }`}
      >
        <div className="p-6 border-b border-white/10">
          <h1 className="font-playfair text-2xl font-bold">
            Note<span className="text-[#8B5A2B]">Craft</span>
          </h1>
          <p className="text-xs text-white/70 mt-1">
            Where Knowledge Meets Opportunity
          </p>
        </div>

        <nav className="flex-1 py-4">
          <a className="flex items-center px-6 py-3 hover:bg-white/10 border-l-4 border-transparent hover:border-[#8B5A2B] transition">
            <FaHome className="mr-3" /> Dashboard
          </a>
          <a className="relative flex items-center px-6 py-3 hover:bg-white/10 border-l-4 border-transparent hover:border-[#8B5A2B]">
            <FaBook className="mr-3" /> My Uploads
            <span className="absolute right-6 bg-[#8B5A2B] text-xs w-5 h-5 flex items-center justify-center rounded-full font-bold">
              5
            </span>
          </a>
          <a
            onClick={() => setWalletOpen(true)}
            className="flex items-center px-6 py-3 hover:bg-white/10 border-l-4 border-transparent hover:border-[#8B5A2B] cursor-pointer"
          >
            <FaWallet className="mr-3" /> Wallet
          </a>
          <a className="relative flex items-center px-6 py-3 hover:bg-white/10 border-l-4 border-transparent hover:border-[#8B5A2B]">
            <FaBell className="mr-3" /> Notifications
            <span className="absolute right-6 bg-[#8B5A2B] text-xs w-5 h-5 flex items-center justify-center rounded-full font-bold">
              3
            </span>
          </a>
          <a className="flex items-center px-6 py-3 hover:bg-white/10 border-l-4 border-transparent hover:border-[#8B5A2B]">
            <FaUserFriends className="mr-3" /> Refer a Friend
          </a>
          <a className="flex items-center px-6 py-3 hover:bg-white/10 border-l-4 border-transparent hover:border-[#8B5A2B]">
            <FaCog className="mr-3" /> Settings
          </a>
          <a className="flex items-center px-6 py-3 hover:bg-white/10 border-l-4 border-transparent hover:border-[#8B5A2B]">
            <FaQuestionCircle className="mr-3" /> Help & Support
          </a>
        </nav>

        <div className="p-6 border-t border-white/10">
          <div className="flex items-center">
            <div className="w-12 h-12 rounded-full bg-[#8B5A2B] flex items-center justify-center font-bold">
              JS
            </div>
            <div className="ml-3">
              <p className="font-medium">John Smith</p>
              <p className="text-xs text-white/70">Student</p>
            </div>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 lg:ml-72 p-6">
        {/* Header */}
        <header className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
          <div>
            <h1 className="font-playfair text-3xl font-bold">Student Dashboard</h1>
            <p className="text-gray-600 mt-1">
              Upload your homework and get high-quality handwritten notes from writers
            </p>
          </div>
          <div className="relative w-12 h-12 bg-gray-200 flex items-center justify-center rounded-full cursor-pointer">
            <FaComment />
            <span className="absolute -top-1 -right-1 bg-[#8B5A2B] text-xs text-white w-5 h-5 rounded-full flex items-center justify-center">
              2
            </span>
          </div>
        </header>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((s, i) => (
            <div
              key={i}
              className="flex items-center bg-white shadow-md p-4 rounded-xl border border-gray-200 hover:-translate-y-1 transition"
            >
              <div className="w-12 h-12 flex items-center justify-center bg-gray-100 rounded-lg text-xl text-[#8B5A2B] mr-4">
                {s.icon}
              </div>
              <div>
                <p className="text-xl font-bold">{s.value}</p>
                <p className="text-sm text-gray-600">{s.label}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Content Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {/* Upload Card */}
          <div className="bg-white shadow-md p-6 rounded-xl border border-gray-200 text-center">
            <div className="w-16 h-16 bg-[#8B5A2B]/10 text-[#8B5A2B] flex items-center justify-center rounded-full mx-auto mb-4 text-2xl">
              <FaCloudUploadAlt />
            </div>
            <h2 className="font-playfair text-xl font-semibold mb-2">
              Upload Your Homework
            </h2>
            <p className="text-gray-600 text-sm mb-4">
              Submit your homework or assignments to get handwritten notes prepared by writers.
            </p>
            <button
              onClick={() => setUploadOpen(true)}
              className="bg-[#8B5A2B] text-white px-6 py-2 rounded-lg shadow hover:bg-[#7a4d23] transition flex items-center justify-center mx-auto"
            >
              <FaPlus className="mr-2" /> Upload Homework
            </button>
          </div>

          {/* Past Uploads with ⭐ Rating */}
          <div className="bg-white shadow-md p-6 rounded-xl border border-gray-200">
            <div className="flex justify-between items-center mb-4">
              <h2 className="font-playfair text-xl font-semibold">Your Past Uploads</h2>
              <a href="#" className="text-[#8B5A2B] text-sm flex items-center">
                View All <FaArrowRight className="ml-1" />
              </a>
            </div>
            <div className="space-y-3">
              {works.map((w) => (
                <div
                  key={w.id}
                  className="p-3 bg-gray-50 rounded-lg shadow-sm hover:-translate-y-1 transition"
                >
                  <div className="flex items-center">
                    <div className="w-10 h-10 flex items-center justify-center bg-[#8B5A2B]/10 text-[#8B5A2B] rounded-md mr-3">
                      <FaFilePdf />
                    </div>
                    <div className="flex-1">
                      <p className="font-medium text-sm">{w.title}</p>
                      <div className="text-xs text-gray-600 flex gap-4">
                        <span className="flex items-center gap-1">
                          <FaCalendar /> {w.date}
                        </span>
                        <span>{w.pages} pages</span>
                      </div>
                    </div>
                    <span className="bg-[#8B5A2B] text-white text-xs px-3 py-1 rounded-full">
                      {w.price}
                    </span>
                  </div>

                  {/* ⭐ Rating (only for completed work) */}
                  {w.status === "completed" && (
                    <div className="mt-2 flex items-center">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <FaStar
                          key={star}
                          className={`cursor-pointer ${
                            ratings[w.id] >= star ? "text-yellow-400" : "text-gray-300"
                          }`}
                          onClick={() => setRatings((prev) => ({ ...prev, [w.id]: star }))}
                        />
                      ))}
                      <button
                        onClick={() => submitRating(w.id)}
                        className="ml-3 text-xs bg-[#8B5A2B] text-white px-3 py-1 rounded"
                      >
                        Submit
                      </button>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>

      {/* Mobile Menu */}
      <button
        onClick={() => setSidebarOpen(!sidebarOpen)}
        className="lg:hidden fixed top-4 left-4 bg-[#8B5A2B] text-white w-12 h-12 rounded-full flex items-center justify-center z-50 shadow-lg"
      >
        {sidebarOpen ? <FaTimes /> : <FaBars />}
      </button>

      {/* Wallet Modal */}
      {walletOpen && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl p-6 w-96 shadow-lg relative">
            <button
              onClick={() => setWalletOpen(false)}
              className="absolute top-3 right-3 text-gray-600"
            >
              <FaTimes />
            </button>
            <h2 className="font-playfair text-2xl font-semibold mb-4">
              Your Wallet
            </h2>
            <p className="text-3xl font-bold text-[#8B5A2B] text-center mb-2">
              $120.00
            </p>
            <p className="text-center text-gray-600 mb-6">Available balance</p>
            <div className="grid grid-cols-2 gap-3">
              <button className="flex items-center justify-center border rounded-lg py-2">
                <FaPlus className="mr-2" /> Add Funds
              </button>
              <button className="flex items-center justify-center bg-[#8B5A2B] text-white rounded-lg py-2">
                <FaDownload className="mr-2" /> Withdraw
              </button>
              <button className="flex items-center justify-center border rounded-lg py-2">
                <FaHistory className="mr-2" /> History
              </button>
              <button className="flex items-center justify-center border rounded-lg py-2">
                <FaShare className="mr-2" /> Transfer
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Upload Modal */}
      {uploadOpen && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl p-6 w-full max-w-lg shadow-lg relative">
            <button
              onClick={() => setUploadOpen(false)}
              className="absolute top-3 right-3 text-gray-600"
            >
              <FaTimes />
            </button>
            <h2 className="font-playfair text-2xl font-semibold mb-4">
              Upload Your Homework
            </h2>
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Enter a title for your homework"
                className="w-full border p-2 rounded-lg"
              />
              <select className="w-full border p-2 rounded-lg">
                <option>Select subject</option>
                <option>Mathematics</option>
                <option>Science</option>
                <option>History</option>
                <option>English</option>
                <option>Programming</option>
              </select>
              <textarea
                placeholder="Add additional details about your homework..."
                className="w-full border p-2 rounded-lg"
              ></textarea>
              <input
                type="number"
                placeholder="Offer Price ($)"
                className="w-full border p-2 rounded-lg"
              />

              <div className="border-dashed border-2 border-gray-300 p-6 text-center rounded-lg cursor-pointer">
                <input
                  type="file"
                  accept=".pdf"
                  onChange={handleFileChange}
                  className="hidden"
                  id="file-upload"
                />
                <label htmlFor="file-upload" className="cursor-pointer">
                  <FaFilePdf className="mx-auto text-2xl text-[#8B5A2B]" />
                  <p className="mt-2 text-sm">{fileName}</p>
                </label>
              </div>

              <div className="flex justify-end gap-3">
                <button
                  type="button"
                  onClick={() => setUploadOpen(false)}
                  className="px-4 py-2 border rounded-lg"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-[#8B5A2B] text-white rounded-lg"
                >
                  Submit Homework
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
