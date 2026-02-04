import React from "react";

export default function Contact() {
  return (
    <section className="bg-white px-6 md:px-10 py-20 min-h-screen">
      <div className="max-w-[1600px] mx-auto flex flex-col md:flex-row gap-16 lg:gap-32">
        
        {/* LEFT SIDE: Fixed / Sticky */}
        <div className="md:w-1/3 md:sticky md:top-32 self-start space-y-4">
          <h3 className="text-xs font-bold uppercase tracking-[0.25em] text-gray-400">
            Want to know more?
          </h3>
          <h2 className="text-[48px] md:text-[64px] font-bold text-[#282828] leading-tight">
            Contact us
          </h2>
        </div>

        {/* RIGHT SIDE: Scrollable Form */}
        <div className="md:w-2/3 space-y-16">
          <p className="text-xl md:text-2xl text-[#282828] font-medium leading-tight max-w-2xl">
            If you’re rethinking how data and AI show up in real decisions, we’d enjoy the conversation.
          </p>

          <form className="space-y-12">
            
            {/* Radio Selection */}
            <div className="space-y-6">
              <p className="font-bold text-[#282828]">Select who you would like to contact*</p>
              <div className="space-y-4">
                <label className="flex items-center gap-4 cursor-pointer group">
                  <input type="radio" name="contact_target" className="w-6 h-6 accent-black" defaultChecked />
                  <span className="text-lg text-gray-700">Sales team</span>
                </label>
                <label className="flex items-center gap-4 cursor-pointer group">
                  <input type="radio" name="contact_target" className="w-6 h-6 accent-black" />
                  <span className="text-lg text-gray-700">Other inquiries</span>
                </label>
              </div>
            </div>

            {/* Form Grid */}
            <div className="grid md:grid-cols-2 gap-x-12 gap-y-16">
              <div className="space-y-2">
                <label className="font-bold block">First name</label>
                <input type="text" className="w-full border-b border-black py-2 outline-none focus:border-gray-400 transition-colors" />
              </div>
              <div className="space-y-2">
                <label className="font-bold block">Last name</label>
                <input type="text" className="w-full border-b border-black py-2 outline-none focus:border-gray-400 transition-colors" />
              </div>
              <div className="md:col-span-2 space-y-2">
                <label className="font-bold block">Work email*</label>
                <input type="email" className="w-full border-b border-black py-2 outline-none focus:border-gray-400 transition-colors" />
              </div>
              <div className="space-y-2">
                <label className="font-bold block">Phone number</label>
                <input type="tel" className="w-full border-b border-black py-2 outline-none focus:border-gray-400 transition-colors" />
              </div>
              <div className="space-y-2">
                <label className="font-bold block">Company</label>
                <input type="text" className="w-full border-b border-black py-2 outline-none focus:border-gray-400 transition-colors" />
              </div>
              <div className="space-y-2">
                <label className="font-bold block">Job title</label>
                <input type="text" className="w-full border-b border-black py-2 outline-none focus:border-gray-400 transition-colors" />
              </div>
              <div className="space-y-2">
                <label className="font-bold block">Country*</label>
                <select className="w-full border-b border-black py-2 outline-none bg-transparent">
                  <option>Please Select</option>
                  <option>Finland</option>
                  <option>United Kingdom</option>
                  <option>Other</option>
                </select>
              </div>
            </div>

            {/* Message Box */}
            <div className="space-y-4">
              <label className="font-bold block">Message*</label>
              <textarea rows="6" className="w-full border border-black p-4 outline-none focus:ring-1 focus:ring-black transition-all" />
            </div>

            {/* Acknowledgment */}
            <div className="flex gap-4 items-start max-w-2xl">
              <input type="checkbox" className="w-6 h-6 mt-1 accent-black shrink-0" required />
              <p className="text-gray-600 text-sm md:text-base">
                By submitting this form, I acknowledge that my information will be processed for communication, advertising, providing the requested information or organising meetings and events. *
              </p>
            </div>

            <p className="text-sm text-gray-500">
              Read more from our <a href="#" className="underline hover:text-black">Privacy Policy.</a>
            </p>

            {/* Submit Button */}
            <div className="pt-8 flex justify-end">
              <button className="border border-black px-16 py-4 font-bold uppercase tracking-widest hover:bg-black hover:text-white transition-all duration-300">
                Submit
              </button>
            </div>

          </form>
        </div>
      </div>
    </section>
  );
}