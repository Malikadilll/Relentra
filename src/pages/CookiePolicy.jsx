import React, { useEffect } from 'react';

const CookiePolicy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const sectionStyle = "mb-10";
  const headingStyle = "text-2xl font-bold mb-5 tracking-tight";
  const subHeadingStyle = "text-xl font-bold mb-3 mt-6 text-[#282828]";
  const textStyle = "text-[16px] md:text-[17px] leading-[1.8] text-gray-700 font-normal";
  const listStyle = "list-disc pl-6 space-y-3 text-gray-700 text-[16px] mb-6";

  return (
    <div className="min-h-screen bg-white pt-32 pb-20 px-6 md:px-12 lg:px-24">
      <div className="max-w-4xl mx-auto" style={{ color: '#282828', fontFamily: '"Sharp Sans", Helvetica, Arial, sans-serif' }}>
        
        {/* Header Section */}
        <header className="mb-16 border-b border-gray-100 pb-10">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium mb-6 tracking-tight">
            Cookies Policy
          </h1>
          <p className="text-sm uppercase tracking-widest text-gray-400 font-bold">
            Last updated: December 2025
          </p>
        </header>

        <section className={sectionStyle}>
          <p className={textStyle}>
            This Cookie Policy explains how Relentra (“we”, “us”, “our”) uses cookies and similar technologies on our website. 
            Because we operate within the EU, our cookie practices follow GDPR principles.
          </p>
        </section>

        <hr className="my-12 border-gray-100" />

        {/* 1. What Are Cookies? */}
        <section className={sectionStyle}>
          <h2 className={headingStyle}>1. What Are Cookies?</h2>
          <p className={textStyle}>
            Cookies are small text files stored on your device when you visit a website. 
            They help websites function, improve performance, and analyse usage.
          </p>
        </section>

        {/* 2. Types of Cookies We Use */}
        <section className={sectionStyle}>
          <h2 className={headingStyle}>2. Types of Cookies We Use</h2>
          
          <h3 className={subHeadingStyle}>a) Essential Cookies</h3>
          <p className={textStyle}>
            These enable basic site functionality such as navigation and security. Without them, the website may not work correctly.
          </p>

          <h3 className={subHeadingStyle}>b) Analytics & Performance Cookies</h3>
          <p className={textStyle + " mb-4"}>
            These track how visitors use the site, helping us improve user experience. Examples include:
          </p>
          <ul className={listStyle}>
            <li>Google Analytics</li>
            <li>CRM tracking pixels</li>
            <li>Website usage analysis tools</li>
          </ul>

          <h3 className={subHeadingStyle}>c) Functional Cookies</h3>
          <p className={textStyle}>
            These remember preferences such as language, session state, or form inputs.
          </p>

          <h3 className={subHeadingStyle}>d) Marketing / Tracking Cookies (optional usage)</h3>
          <p className={textStyle}>
            If implemented, these help measure campaign effectiveness or display relevant content. We do not use aggressive ad-tracking.
          </p>
        </section>

        {/* 3. Third-Party Cookies */}
        <section className={sectionStyle}>
          <h2 className={headingStyle}>3. Third-Party Cookies</h2>
          <p className={textStyle + " mb-4"}>Some cookies may be placed by external services we use, such as:</p>
          <ul className={listStyle}>
            <li>Google Analytics</li>
            <li>LinkedIn Insights</li>
            <li>HubSpot/CRM tracking for form submissions</li>
          </ul>
          <p className={textStyle}>These providers maintain their own privacy and cookie policies.</p>
        </section>

        {/* 4. Why We Use Cookies */}
        <section className={sectionStyle}>
          <h2 className={headingStyle}>4. Why We Use Cookies</h2>
          <p className={textStyle + " mb-4"}>We use cookies to:</p>
          <ul className={listStyle}>
            <li>Improve site experience</li>
            <li>Understand visitor behaviour</li>
            <li>Enable contact forms and CRM automation</li>
            <li>Monitor page performance</li>
          </ul>
          <p className={textStyle}>
            We <strong>do not use cookies to sell personal information</strong>.
          </p>
        </section>

        {/* 5. Cookie Consent */}
        <section className={sectionStyle}>
          <h2 className={headingStyle}>5. Cookie Consent</h2>
          <p className={textStyle}>
            When you visit our site for the first time, you may see a cookie banner or notice. 
            By continuing to browse, you consent to cookie use as described. You may accept all cookies, manage preferences, or withdraw consent via browser settings.
          </p>
        </section>

        {/* 6. Managing or Disabling Cookies */}
        <section className={sectionStyle}>
          <h2 className={headingStyle}>6. Managing or Disabling Cookies</h2>
          <p className={textStyle}>
            You can control cookies in your browser by blocking cookies, deleting stored cookies, or setting notifications. 
            However, disabling essential cookies may affect website functionality.
          </p>
        </section>

        {/* 7. Updates to This Policy */}
        <section className={sectionStyle}>
          <h2 className={headingStyle}>7. Updates to This Policy</h2>
          <p className={textStyle}>
            We may update this Cookie Policy to reflect changes in practices or law. Updates will be posted here.
          </p>
        </section>

        {/* Contact Us */}
        <section className="mt-20 p-10 bg-[#fbfbfb] rounded-3xl border border-gray-100">
          <h2 className="text-2xl font-bold mb-4">8. Contact Us</h2>
          <p className="text-gray-600 mb-6 tracking-wide">
            If you have questions about cookie use or data privacy, email:
          </p>
          <div className="flex items-center gap-3">
            <span className="text-xl">📩</span>
            <a 
              href="mailto:privacy@relentra.io" 
              className="text-xl font-bold border-b-2 border-orange-500 hover:text-orange-600 transition-all"
            >
              privacy@relentra.io
            </a>
          </div>
        </section>

      </div>
    </div>
  );
};

export default CookiePolicy;