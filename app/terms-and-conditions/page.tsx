import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export default function page() {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans text-black">
      <Navbar />

      <main className="grow pt-24 px-10 pb-16 max-w-5xl mx-auto w-full">
        <h1 className="text-3xl font-bold text-slate-900 mb-6">Terms and Conditions</h1>
        {/* 1. Introduction */}
        <section className="mb-8">
          <h2 className="font-bold text-xl mb-3">1. Introduction</h2>
          <p className="mb-4">
            DeVoc is an industry-oriented learning and skill-development initiative offering structured
            technical training programs, hands-on project-based learning, industry mentorship, and
            professional certification.
          </p>
          <p>
            By enrolling in any DeVoc program, the student agrees to the following Terms & Conditions.
          </p>
        </section>

        {/* 2. Eligibility */}
        <section className="mb-8">
          <h2 className="font-bold text-xl mb-3">2. Eligibility</h2>
          <ul className="list-disc pl-5 space-y-1">
            <li>All students interested in learning technology are eligible to join.</li>
            <li>Students must register through the official website.</li>
            <li>Admission is subject to availability of seats and completion of the required registration steps.</li>
          </ul>
        </section>

        {/* 3. Fees */}
        <section className="mb-8">
          <h2 className="font-bold text-xl mb-3">3. Fees, Discounts & Installments</h2>
          <div className="space-y-2">
            <p>The actual program fee is ₹65,000.</p>
            <p>Farook College students receive a 40% discount.</p>
            <p>Fees may be paid in installments. The installment plan will be communicated during admission.</p>
            <p>All payment deadlines must be strictly followed.</p>
          </div>
        </section>

        {/* 4. Caution Deposit */}
        <section className="mb-8">
          <h2 className="font-bold text-xl mb-3">4. Caution Deposit Policy</h2>
          <p className="mb-4">A caution deposit will be collected at the start of the program.</p>

          <h3 className="font-bold mb-2">Refund Conditions</h3>
          <ul className="list-disc pl-5 mb-4 space-y-1">
            <li>Students should complete Stage 1 – Fumigation, regardless of pass/fail status, and choose not to continue, to receive a full refund of the caution deposit.</li>
            <li>Once a student continues beyond Stage 1, the caution deposit becomes refundable only after successful completion of the entire program.</li>
          </ul>

          <h3 className="font-bold mb-2">Deposit Will Not Be Refunded If:</h3>
          <ul className="list-disc pl-5 mb-4 space-y-1">
            <li>The student withdraws in the middle of the program.</li>
            <li>The student is inconsistent with tasks.</li>
            <li>The student fails to actively participate in learning and project activities.</li>
            <li>The student does not complete required stages or projects.</li>
            <li>The student causes any damage to the properties of Farook College or the company.</li>
          </ul>

          <p className="mb-4">
            Any damages to institutional or company property may be recovered from the caution deposit. If the damage cost exceeds the deposit amount, the student will be required to pay the balance.
          </p>

          <h3 className="font-bold mb-2">This policy is designed to ensure:</h3>
          <ul className="list-disc pl-5 space-y-1">
            <li>Transparency and fairness</li>
            <li>Accountability and commitment</li>
            <li>Flexible exploration during the initial stage</li>
            <li>Clarity on refund conditions</li>
          </ul>
        </section>

        {/* 5. Code of Conduct */}
        <section className="mb-8">
          <h2 className="font-bold text-xl mb-3">5. Code of Conduct</h2>
          <p className="mb-2">To maintain a safe and professional learning environment, all students must follow the DeVoc community rules:</p>
          <ul className="list-disc pl-5 mb-4 space-y-1">
            <li>Show respectful behaviour toward peers, mentors, and staff.</li>
            <li>No harassment, abuse, threats, or inappropriate behaviour.</li>
            <li>No discrimination of any kind.</li>
            <li>No spamming or disruptive activities.</li>
            <li>No engagement in illegal activities within the program or community spaces.</li>
            <li>Students must maintain academic integrity and complete tasks responsibly.</li>
          </ul>
          <p>Violation of the Code of Conduct may result in removal from the program without refund.</p>
        </section>

        {/* 6. Infrastructure */}
        <section className="mb-8">
          <h2 className="font-bold text-xl mb-3">6. Infrastructure, Assets & Damage Liability</h2>
          <p className="mb-2">Students are responsible for maintaining and protecting all infrastructure, equipment, lab facilities, furniture, digital assets, and physical property belonging to DeVoc or Farook College.</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Any loss, misuse, or damage caused to college or company infrastructure, lab facilities, equipment, or property—whether intentional or due to negligence—must be fully compensated by the student.</li>
            <li>The cost of repair or replacement will be determined by the institution or company, and the student must settle the amount as instructed.</li>
            <li>Loss or damage of the identity card will result in a fine of ₹500 for reissuance.</li>
            <li>Failure to pay applicable fines or compensation may lead to disciplinary action.</li>
            <li>The company has the right to remove a student without refund of the fees paid in case of any violations.</li>
          </ul>
        </section>

        {/* 7. Attendance */}
        <section className="mb-8">
          <h2 className="font-bold text-xl mb-3">7. Attendance & Participation</h2>
          <ul className="list-disc pl-5 space-y-1">
            <li>Students must participate actively in both online and offline sessions.</li>
            <li>Projects and assignments must be completed within the given timelines.</li>
            <li>Failure to maintain minimum participation standards may impact certifications or refunds.</li>
          </ul>
        </section>

        {/* 8. IP */}
        <section className="mb-8">
          <h2 className="font-bold text-xl mb-3">8. Intellectual Property</h2>
          <p className="mb-2">All DeVoc course materials, resources, branding, logos, website content, and training content are the property of DeVoc. Students agree not to:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Copy, reproduce, or redistribute any study materials without permission.</li>
            <li>Sell or share course content externally.</li>
            <li>Use DeVoc branding without written consent.</li>
          </ul>
        </section>

        {/* 9. Data Collection */}
        <section className="mb-8">
          <h2 className="font-bold text-xl mb-3">9. Data Collection & Digital Platforms</h2>
          <ul className="list-disc pl-5 space-y-1">
            <li>Basic student information will be collected solely for academic and administrative purposes.</li>
            <li>Google Meet or similar platforms may be used for virtual sessions.</li>
            <li>Students are responsible for maintaining proper internet connectivity during online sessions.</li>
            <li>DeVoc follows standard privacy practices and does not misuse or share student data with unauthorized parties.</li>
          </ul>
        </section>

        {/* 10. Liability */}
        <section className="mb-8">
          <h2 className="font-bold text-xl mb-3">10. Limitation of Liability</h2>
          <p className="mb-2">DeVoc is not responsible for:</p>
          <ul className="list-disc pl-5 mb-2 space-y-1">
            <li>Technical issues or connectivity problems.</li>
            <li>Loss of data or incomplete submissions due to student negligence.</li>
            <li>Personal disputes between participants.</li>
            <li>External tools or third-party service outages (Google Meet, GitHub, etc.).</li>
          </ul>
          <p>All training outcomes depend on the student’s effort and participation.</p>
        </section>

        {/* 11. Cancellation */}
        <section className="mb-8">
          <h2 className="font-bold text-xl mb-3">11. Program Modification or Cancellation</h2>
          <p className="mb-2">DeVoc reserves the right to modify schedules, curriculum, or delivery methods as necessary.</p>
          <p>In case of cancellation due to unforeseen circumstances, appropriate communication will be provided.</p>
        </section>

        {/* 12. Termination */}
        <section className="mb-8">
          <h2 className="font-bold text-xl mb-3">12. Termination of Enrollment</h2>
          <p className="mb-2">DeVoc may terminate a student’s enrollment if:</p>
          <ul className="list-disc pl-5 mb-2 space-y-1">
            <li>T&C or Code of Conduct is violated.</li>
            <li>Fees or installments are not paid on time.</li>
            <li>The student consistently fails to participate or complete tasks.</li>
          </ul>
          <p>Termination may result in loss of the caution deposit and/or fees.</p>
        </section>

        {/* 13. Updates */}
        <section>
          <h2 className="font-bold text-xl mb-3">13. Updates to Terms & Conditions</h2>
          <p>DeVoc may update these Terms & Conditions at any time. Updated versions will be published through official communication channels.</p>
        </section>

      </main>

      <Footer />
    </div>
  );
}