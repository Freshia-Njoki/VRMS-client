import Footer from "../common/Footer";
import Navbar from "../common/Navbar";

function Completion() {
    return (
        <>
                <Navbar />
                <div className="min-h-screen flex justify-center mt-28" >
                   <h2 className="w-2/3 text-center bg-gray-600 h-60 text-gray-300 pt-10 text-2xl px-6 border rounded-lg"> Thank you! 🎉
                    Fantastic! 🎉 Your reservation is confirmed!
                    We can't wait to empower your vacation fantacy with us. Thank you for choosing our Vacation Finder.
                    We value your trust and promise to deliver a delightful travel experience every time you visit us. Happy vacation! 🛍️</h2>
                </div>;
                <Footer  />
        </>
    )
}

export default Completion;