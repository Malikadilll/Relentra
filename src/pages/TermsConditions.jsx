import React, { useEffect } from 'react';

const TermsConditions = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const sectionStyle = "mb-12";
  const headingStyle = "text-2xl font-bold mb-6 tracking-tight";
  const textStyle = "text-[16px] md:text-[17px] leading-[1.8] text-gray-700 font-normal mb-4";
  const listStyle = "list-disc pl-6 space-y-3 text-gray-700 text-[16px] mb-6";

  return (
    <div className="min-h-screen bg-white pt-32 pb-20 px-6 md:px-12 lg:px-24">
      <div className="max-w-4xl mx-auto" style={{ color: '#282828', fontFamily: '"Sharp Sans", Helvetica, Arial, sans-serif' }}>
        
        {/* Header Section */}
        <header className="mb-16 border-b border-gray-100 pb-10">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium mb-6 tracking-tight">
            Terms and Conditions
          </h1>
          <p className="text-sm uppercase tracking-widest text-gray-400 font-bold">
            Last updated: December 2025
          </p>
        </header>

        {/* Introduction */}
        <section className={sectionStyle}>
          <h2 className="text-xl font-bold mb-4">Welcome to Relentra.</h2>
          <p className={textStyle}>
            By accessing or using our website (relentra.io), engaging in consultation, or purchasing services, you agree to the following Terms & Conditions. 
            <strong> If you do not agree, please discontinue use.</strong>
          </p>
        </section>

        <hr className="my-12 border-gray-100" />

        {/* 1. About Relentra */}
        <section className={sectionStyle}>
          <h2 className={headingStyle}>1. About Relentra</h2>
          <p className={textStyle}>Relentra provides:</p>
          <ul className={listStyle}>
            <li>CRM and automation consulting</li>
            <li>Business operations support</li>
            <li>Virtual assistance</li>
            <li>Property hosting and operations outsourcing</li>
            <li>Process documentation and advisory services</li>
          </ul>
          <p className={textStyle}>
            These terms apply to website visitors, inquiry submitters, subscribers, and paying clients.
          </p>
        </section>

        {/* 2. Use of Website */}
        <section className={sectionStyle}>
          <h2 className={headingStyle}>2. Use of Website</h2>
          <p className={textStyle}>You agree not to misuse this site, including:</p>
          <ul className={listStyle}>
            <li>Attempting to interfere with site functionality</li>
            <li>Scraping or extracting contact details for unsolicited use</li>
            <li>Submitting false information</li>
          </ul>
          <p className={textStyle}>
            We reserve the right to restrict access if abuse is detected.
          </p>
        </section>

        {/* 3. Engagement of Services */}
        <section className={sectionStyle}>
          <h2 className={headingStyle}>3. Engagement of Services</h2>
          <p className={textStyle}>Services are provided through:</p>
          <ul className={listStyle}>
            <li>Written proposals</li>
            <li>Statements of work</li>
            <li>Consulting packages</li>
            <li>Retainers</li>
          </ul>
          <p className={textStyle}>
            Scope, pricing, deliverables, and timelines are defined in agreements or correspondence. 
            Relentra is not responsible for results outside of agreed scope, dependencies, or delays caused by client-side actions or missing information.
          </p>
        </section>

        {/* 4. Payment Terms */}
        <section className={sectionStyle}>
          <h2 className={headingStyle}>4. Payment Terms</h2>
          <p className={textStyle}>Invoices are due as communicated in agreements. Late or overdue payments may result in:</p>
          <ul className={listStyle}>
            <li>Suspension of services</li>
            <li>Interest charges</li>
            <li>Cancellation of engagement</li>
          </ul>
          <p className={textStyle}>All fees exclude applicable taxes unless stated otherwise.</p>
        </section>

        {/* 5. Confidentiality */}
        <section className={sectionStyle}>
          <h2 className={headingStyle}>5. Confidentiality</h2>
          <p className={textStyle}>
            We treat all business and operational information received from clients as confidential and do not disclose it without permission, except when legally required. 
            Clients are expected to respect any similarly confidential material shared by us.
          </p>
        </section>

        {/* 6. Intellectual Property */}
        <section className={sectionStyle}>
          <h2 className={headingStyle}>6. Intellectual Property & Deliverables</h2>
          <p className={textStyle}>Unless otherwise specified:</p>
          <ul className={listStyle}>
            <li>Documentation, templates, processes, playbooks, and frameworks remain Relentra property.</li>
            <li>Clients receive usage rights for their business but not redistribution rights.</li>
          </ul>
          <p className={textStyle}>
            Content published on our website may not be copied, resold, or rebranded without permission.
          </p>
        </section>

        {/* 7. Advisory Disclaimer */}
        <section className={sectionStyle}>
          <h2 className={headingStyle}>7. Advisory Disclaimer</h2>
          <p className={textStyle}>
            Our recommendations, consulting, and operational guidance are based on practical experience and industry knowledge. 
            However, business outcomes depend on multiple factors beyond our control. Relentra does not guarantee specific financial or commercial results.
          </p>
        </section>

        {/* 8. Third-Party Tools */}
        <section className={sectionStyle}>
          <h2 className={headingStyle}>8. Third-Party Tools & Platforms</h2>
          <p className={textStyle}>
            Our services may involve setup or advisory on third-party tools (e.g., HubSpot, Salesforce, automation apps, hosting platforms). Relentra:
          </p>
          <ul className={listStyle}>
            <li>Does not own or control these tools</li>
            <li>Is not responsible for outages, pricing changes, or service failures of such providers</li>
          </ul>
          <p className={textStyle}>
            Clients are responsible for their own software subscriptions unless otherwise agreed.
          </p>
        </section>

        {/* 9. Cancellation & Termination */}
        <section className={sectionStyle}>
          <h2 className={headingStyle}>9. Cancellation & Termination</h2>
          <p className={textStyle}>Either party may terminate services with written notice per agreement terms. Upon termination:</p>
          <ul className={listStyle}>
            <li>Outstanding work may be billed proportionately</li>
            <li>Access to shared systems may be revoked</li>
            <li>Certain deliverables may no longer be supported</li>
          </ul>
        </section>

        {/* 10. Liability Limitation */}
        <section className={sectionStyle}>
          <h2 className={headingStyle}>10. Liability Limitation</h2>
          <p className={textStyle}>To the fullest extent permitted by law:</p>
          <ul className={listStyle}>
            <li>Relentra is not liable for indirect, incidental, consequential, or loss of profits damages.</li>
            <li>Maximum liability is limited to fees paid for the specific service(s) in question.</li>
          </ul>
        </section>

        {/* 11. Links to Other Websites */}
        <section className={sectionStyle}>
          <h2 className={headingStyle}>11. Links to Other Websites</h2>
          <p className={textStyle}>
            We may link to external content for information. We are not responsible for those third-party sites or practices.
          </p>
        </section>

        {/* 12. Modifications */}
        <section className={sectionStyle}>
          <h2 className={headingStyle}>12. Modifications</h2>
          <p className={textStyle}>
            We may update these terms at any time. Continued use constitutes acceptance of updated terms.
          </p>
        </section>

        {/* 13. Governing Law */}
        <section className={sectionStyle}>
          <h2 className={headingStyle}>13. Governing Law</h2>
          <p className={textStyle}>
            These terms are governed by laws of Finland (or applicable EU jurisdiction where relevant).
          </p>
        </section>

        {/* 14. Contact */}
        <section className="mt-20 p-10 bg-[#fbfbfb] rounded-3xl border border-gray-100">
          <h2 className="text-2xl font-bold mb-4">14. Contact</h2>
          <p className="text-gray-600 mb-6 tracking-wide">
            For questions regarding these terms:
          </p>
          <div className="flex items-center gap-3">
            <span className="text-xl">📩</span>
            <span className="font-semibold text-gray-500 mr-1 uppercase tracking-tighter text-sm">Email:</span>
            <a 
              href="mailto:legal@relentra.io" 
              className="text-xl font-bold border-b-2 border-orange-500 hover:text-orange-600 transition-all"
            >
              legal@relentra.io
            </a>
          </div>
        </section>

      </div>
    </div>
  );
};

export default TermsConditions;