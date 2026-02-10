import React, { useEffect } from 'react';

const PrivacyPolicy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const sectionStyle = "mb-10";
  const headingStyle = "text-2xl font-bold mb-5 tracking-tight";
  const textStyle = "text-[16px] md:text-[17px] leading-[1.8] text-gray-700 font-normal";
  const listStyle = "list-disc pl-6 space-y-3 text-gray-700 text-[16px] mb-6";

  return (
    <div className="min-h-screen bg-white pt-32 pb-20 px-6 md:px-12 lg:px-24">
      <div className="max-w-4xl mx-auto" style={{ color: '#282828', fontFamily: '"Sharp Sans", Helvetica, Arial, sans-serif' }}>
        
        {/* Header Section */}
        <header className="mb-16 border-b border-gray-100 pb-10">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium mb-6 tracking-tight">
            Privacy Policy
          </h1>
          <p className="text-sm uppercase tracking-widest text-gray-400 font-bold">
            Last updated: December 2025
          </p>
        </header>

        <section className={sectionStyle}>
          <p className={textStyle}>
            Relentra (“we”, “us”, “our”) respects your privacy and is committed to protecting personal information we collect from visitors, clients, job applicants, and business partners. 
            This policy explains how we collect, use, and safeguard your data.
          </p>
        </section>

        <hr className="my-12 border-gray-100" />

        {/* 1. Information We Collect */}
        <section className={sectionStyle}>
          <h2 className={headingStyle}>1. Information We Collect</h2>
          <p className={textStyle + " mb-4"}>We may collect information when you:</p>
          <ul className={listStyle}>
            <li>Submit forms on our website</li>
            <li>Request services or consultations</li>
            <li>Subscribe to updates</li>
            <li>Apply for roles or submit CVs</li>
            <li>Interact with us via email, messaging, or CRM</li>
          </ul>

          <p className="font-bold mb-3">Types of data we may collect:</p>
          <div className="space-y-4">
            <div>
              <p className="font-semibold text-gray-800">Contact details:</p>
              <p className={textStyle}>Name, email address, phone number, company information.</p>
            </div>
            <div>
              <p className="font-semibold text-gray-800">Business context:</p>
              <p className={textStyle}>Service inquiries, project needs, operational information, or property management details for Airbnb host services.</p>
            </div>
            <div>
              <p className="font-semibold text-gray-800">Technical information:</p>
              <p className={textStyle}>IP address, browser type, device information, usage data collected via cookies.</p>
            </div>
            <div>
              <p className="font-semibold text-gray-800">Career applications:</p>
              <p className={textStyle}>CV, LinkedIn profile, professional background.</p>
            </div>
          </div>
        </section>

        {/* 2. How We Use Your Information */}
        <section className={sectionStyle}>
          <h2 className={headingStyle}>2. How We Use Your Information</h2>
          <p className={textStyle + " mb-4"}>We use data to:</p>
          <ul className={listStyle}>
            <li>Respond to inquiries and provide services</li>
            <li>Improve website experience</li>
            <li>Send relevant updates or communication</li>
            <li>Conduct onboarding or consultations</li>
            <li>Improve operational workflows</li>
            <li>Assess job applicants</li>
            <li>Manage CRM and client relationships</li>
            <li>Comply with legal requirements</li>
          </ul>
          <p className={textStyle}>
            We <strong>do not sell or trade your personal information</strong>.
          </p>
        </section>

        {/* 3. Cookies & Analytics */}
        <section className={sectionStyle}>
          <h2 className={headingStyle}>3. Cookies & Analytics</h2>
          <p className={textStyle}>
            Our website may use cookies to improve site performance, track engagement, and personalize content. You can control or disable cookies through your browser settings.
          </p>
        </section>

        {/* 4. Data Sharing */}
        <section className={sectionStyle}>
          <h2 className={headingStyle}>4. Data Sharing</h2>
          <p className={textStyle + " mb-4"}>We may share data with:</p>
          <ul className={listStyle}>
            <li>Service providers (e.g., CRM platforms, email tools, cloud hosting)</li>
            <li>Subcontractors supporting service delivery</li>
            <li>Legal authorities when required by law</li>
          </ul>
          <p className={textStyle}>
            All partners we work with are expected to follow data protection principles. We <strong>do not sell personal data</strong> to third parties.
          </p>
        </section>

        {/* 5. Data Retention */}
        <section className={sectionStyle}>
          <h2 className={headingStyle}>5. Data Retention</h2>
          <p className={textStyle}>
            We retain information only as long as it is needed to provide services, we have a legal or contractual reason, or you have an active business relationship with us. 
            You may request deletion of your data at any time (contact details below).
          </p>
        </section>

        {/* 6. Your Rights */}
        <section className={sectionStyle}>
          <h2 className={headingStyle}>6. Your Rights</h2>
          <p className={textStyle + " mb-4"}>Depending on your location, you may have the right to:</p>
          <ul className={listStyle}>
            <li>Access your personal data</li>
            <li>Correct inaccuracies</li>
            <li>Request deletion</li>
            <li>Object to marketing communication</li>
          </ul>
          <p className={textStyle}>
            To exercise rights, contact us at <strong>privacy@relentra.io</strong>.
          </p>
        </section>

        {/* 7. Security */}
        <section className={sectionStyle}>
          <h2 className={headingStyle}>7. Security</h2>
          <p className={textStyle}>
            We take reasonable measures to protect data, including access restriction, cloud security practices, and staff awareness. 
            However, no internet transmission is fully risk-free, so we cannot guarantee absolute security.
          </p>
        </section>

        {/* 8. International Data Transfers */}
        <section className={sectionStyle}>
          <h2 className={headingStyle}>8. International Data Transfers</h2>
          <p className={textStyle}>
            As a business operating digitally, data may be stored or processed in other countries. 
            Where this occurs, we ensure commercially reasonable safeguards are in place.
          </p>
        </section>

        {/* 9. Contact Forms & CRM Data */}
        <section className={sectionStyle}>
          <h2 className={headingStyle}>9. Contact Forms & CRM Data</h2>
          <p className={textStyle}>
            Information submitted via forms or email may enter our CRM for communication and support purposes. 
            By submitting your details, you consent to this processing.
          </p>
        </section>

        {/* 10. Updates to This Policy */}
        <section className={sectionStyle}>
          <h2 className={headingStyle}>10. Updates to This Policy</h2>
          <p className={textStyle}>
            We may update this policy occasionally. The latest version will always be posted on this page.
          </p>
        </section>

        {/* 11. Contact Us */}
        <section className="mt-20 p-10 bg-[#fbfbfb] rounded-3xl border border-gray-100">
          <h2 className="text-2xl font-bold mb-4">11. Contact Us</h2>
          <p className="text-gray-600 mb-6 tracking-wide">
            For privacy questions, data access requests, or deletion:
          </p>
          <div className="flex items-center gap-3">
            <span className="text-xl">📩</span>
            <span className="font-semibold text-gray-500 mr-2 uppercase tracking-tighter text-sm">Email:</span>
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

export default PrivacyPolicy;