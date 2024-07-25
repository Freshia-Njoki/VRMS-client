import Footer from "../common/Footer";
import Navbar from "../common/Navbar";
import {Link } from "react-router-dom"

function Completion() {
    return (
        <>
                <Navbar />
                <div className="min-h-screen flex justify-center mt-28" >
                   <h2 className="w-2/3 text-center bg-gray-600 h-60 text-gray-300 pt-10 text-2xl px-6 border rounded-lg"> Thank you! 🎉
                    Fantastic! 🎉 Your reservation is confirmed!
                    We can't wait to empower your vacation fantacy with us. Thank you for choosing our Vacation Finder.
                    We value your trust and promise to deliver a delightful travel experience every time you visit us. Happy vacation! 🛍️

                    <br /><br />
                 <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-4 rounded focus:outline-none focus:shadow-outline"><Link to="/dashboard">Go back</Link></button>
                    </h2>
                </div>;
                <Footer  />
        </>
    )
}

export default Completion;