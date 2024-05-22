import Link from "next/link";
import React from "react";

const PrivacyPolicy: React.FC = () => {
  return (
    <div className="bg-white text-myblack-100">
      <div className=" lg:mx-[76px] mx-[7px] px-4 py-8 md:py-16">
        <h1 className="text-[50px] lg:text-7xl   xl:text-[100px] font-semibold md:font-medium md:text-center leading-[55.5px] md:leading-8 my-[26px]">
          PRIVACY POLICY{" "}
        </h1>
        <div className="flex flex-col md:mt-[72px] md:flex-row">
          <div className=" md:px-6">
            <section id="acceptance" className=" mb-3 text-[15px] ">
              <h2 className=" text-[25px] font-semibold  mt-6 md:mt-0">
                Information Collection{" "}
              </h2>
              <h2 className=" text-[15px] font-semibold  mt-6 md:mt-0">
                What Information We Collect:{" "}
              </h2>

              <div className="mt-2 ml-4 leading-[22.5px] font-medium">
                <p className="mt-2 leading-[22.5px] font-normal">
                  <span className="text-[15px] font-medium">
                    Personal Identification Information:
                  </span>{" "}
                  Names, email addresses, phone numbers, and other contact
                  details.
                </p>
                <p className="mt-2 leading-[22.5px] font-normal">
                  <span className="text-[15px] font-medium">
                    Social Media Information:
                  </span>{" "}
                  Account details, profile pictures, follower data, and public
                  interactions relevant to influencer activities.
                </p>
                <p className="mt-2 leading-[22.5px] font-normal">
                  <span className="text-[15px] font-medium">
                    Content Interaction:
                  </span>{" "}
                  Posts created, likes, shares, comments, and other engagement
                  metrics.
                </p>
                <p className="mt-2 leading-[22.5px] font-normal">
                  <span className="text-[15px] font-medium">
                    Transactional Data:{" "}
                  </span>
                  Payment methods, transaction histories, and billing addresses,
                  necessary for processing any payments on the platform.
                </p>
                <p className="mt-2 leading-[22.5px] font-normal">
                  <span className="text-[15px] font-medium">
                    Technical and Usage Data:
                  </span>{" "}
                  IP addresses, browser types, operating system details, and
                  usage statistics to help optimize the user experience.
                </p>
              </div>
            </section>
            <section id="changes" className=" my-3 text-[15px] ">
              <h2 className=" text-[15px] font-semibold  mt-6 md:mt-0">
                How We Collect Information:{" "}
              </h2>
              <div className="mt-2  ml-4  leading-[22.5px] font-medium">
                <p className="mt-2 leading-[22.5px] font-normal">
                  <span className="text-[15px] font-medium">
                    {" "}
                    Direct User Inputs:
                  </span>{" "}
                  Through registration forms, account settings, and direct
                  uploads or posts by the users.
                </p>
                <p className="mt-2 leading-[22.5px] font-normal">
                  <span className="text-[15px] font-medium">
                    Automated Technologies:
                  </span>{" "}
                  Via cookies and web beacons that collect data to enhance,
                  personalize, and track user interactions for continuous
                  platform improvement.
                </p>
                <p className="mt-2 leading-[22.5px] font-normal">
                  <span className="text-[15px] font-medium">
                    Third-Party Sources:
                  </span>{" "}
                  Including social media platforms that integrate with ISE,
                  providing additional user data to enrich profile and
                  engagement metrics.
                </p>
              </div>
            </section>
            <section id="platform use" className=" my-3 text-[15px] ">
              <h2 className="text-[25px] font-semibold  mt-6 md:mt-0">
                Use of Information{" "}
              </h2>
              <h2 className=" text-[15px] font-semibold  mt-6 md:mt-0">
                Purpose of Data Collection:{" "}
              </h2>
              <div className="mt-2 ml-4 leading-[22.5px] font-medium">
                <p className="mt-2 leading-[22.5px] font-normal">
                  <span className="text-[15px] font-medium">
                    Platform Operation and Management:
                  </span>{" "}
                  To manage user accounts, provide customer support, and deliver
                  services efficiently.
                </p>
                <p className="mt-2 leading-[22.5px] font-normal">
                  <span className="text-[15px] font-medium">
                    Personalization:
                  </span>{" "}
                  To tailor the user experience based on individual preferences
                  and interactions.
                </p>
                <p className="mt-2 leading-[22.5px] font-normal">
                  <span className="text-[15px] font-medium">
                    Analytics and Improvement:
                  </span>{" "}
                  To analyze user behavior and feedback to improve platform
                  features and interfaces.
                </p>
                <p className="mt-2 leading-[22.5px] font-normal">
                  <span className="text-[15px] font-medium">Marketing:</span> To
                  inform users of new features, promotional events, and tailored
                  offers, subject to their consent.
                </p>
                <p className="mt-2 leading-[22.5px] font-normal">
                  <span className="text-[15px] font-medium">
                    Legal Compliance:
                  </span>{" "}
                  To comply with applicable laws and regulatory requirements,
                  ensuring platform integrity and user safety.
                </p>
              </div>
            </section>
            <section id="user accounts" className=" my-3 text-[15px] ">
              <h2 className=" text-[25px] font-semibold  mt-6 md:mt-0">
                Data Protection{" "}
              </h2>
              <h2 className=" text-[15px] font-semibold  mt-6 md:mt-0">
                Security Measures:{" "}
              </h2>
              <div className="mt-2  ml-4  leading-[22.5px] font-medium">
                <p className="mt-2 leading-[22.5px] font-normal">
                  <span className="text-[15px] font-medium">
                    Advanced Encryption:
                  </span>{" "}
                  Use of industry-standard encryption technologies during data
                  transmission and storage.
                </p>
                <p className="mt-2 leading-[22.5px] font-normal">
                  <span className="text-[15px] font-medium">
                    Security Protocols:{" "}
                  </span>
                  Implementation of robust security protocols to safeguard
                  against unauthorized access, data breaches, and other cyber
                  threats.
                </p>
                <p className="mt-2 leading-[22.5px] font-normal">
                  <span className="text-[15px] font-medium">
                    Regular Audits:
                  </span>{" "}
                  Conducting regular security audits and vulnerability scans to
                  identify and mitigate risks promptly.
                </p>
              </div>
            </section>
            <section id="intellectual property" className=" my-3 text-[15px] ">
              <h2 className=" text-[15px] font-semibold  mt-6 md:mt-0">
                User Rights and Controls:{" "}
              </h2>
              <div className="mt-2  ml-4  leading-[22.5px] font-medium">
                <p className="mt-2 leading-[22.5px] font-normal">
                  <span className="text-[15px] font-medium">
                    Access and Rectification:
                  </span>{" "}
                  Users can view, edit, or update their personal data at any
                  time via their account settings.
                </p>
                <p className="mt-2 leading-[22.5px] font-normal">
                  <span className="text-[15px] font-medium">Deletion:</span>{" "}
                  Users can request the deletion of their data under certain
                  conditions.
                </p>

                <p className="mt-2 leading-[22.5px] font-normal">
                  <span className="text-[15px] font-medium">
                    Opt-Out Options:{" "}
                  </span>
                  Users can opt-out of marketing communications and manage
                  cookie settings to restrict data processing.
                </p>
              </div>
            </section>
            <section id="user conduct" className=" my-3 text-[15px] ">
              <div className="mt-2 leading-[22.5px] font-normal">
                <span className="text-[15px] font-semibold">
                  Protecting your privacy is paramount.
                </span>{" "}
                Our app strictly adheres to the Google API Services User Data
                Policy, ensuring compliance with the Limited Use requirements.
                Rest assured, any information received from Google APIs is
                handled responsibly. You can learn more about the Google API
                Services User Data Policy hereProtecting your privacy is
                paramount. Our app strictly adheres to the Google API Services
                User Data Policy, ensuring compliance with the Limited Use
                requirements. Rest assured, any information received from Google
                APIs is handled responsibly. You can learn more about the Google
                API Services User Data Policy{" "}
                <Link
                  href={
                    " https://developers.google.com/terms/api-services-user-data-policy"
                  }
                  target="_blank"
                  className="text-myblue-100 font-medium"
                >
                  here
                </Link>
                .
              </div>
            </section>
            <section id="user conduct" className=" my-3 text-[15px] ">
              <h2 className=" text-[25px] font-semibold  mt-6 md:mt-0">
                Sharing of Information{" "}
              </h2>
              <h2 className=" text-[15px] font-semibold  mt-6 md:mt-0">
                With Whom We Share Data:{" "}
              </h2>
              <div className="mt-2  ml-4  leading-[22.5px] font-medium">
                <p className="mt-2 leading-[22.5px] font-normal">
                  <span className="text-[15px] font-medium">
                    Service Providers:
                  </span>{" "}
                  Third-party companies that provide services like hosting,
                  payment processing, and analytics on behalf of ISE.
                </p>
                <p className="mt-2 leading-[22.5px] font-normal">
                  <span className="text-[15px] font-medium">
                    Legal Obligations:
                  </span>{" "}
                  Sharing information with law enforcement or other governmental
                  authorities when required by law or to protect the rights,
                  property, or safety of ISE and its users.
                </p>
                <p className="mt-2 leading-[22.5px] font-normal">
                  <span className="text-[15px] font-medium">
                    Standard Contractual Clauses:{" "}
                  </span>{" "}
                  Anonymized Data: Sharing aggregated or anonymized data with
                  business partners or for public reports where individual users
                  are not identifiable.
                </p>
              </div>
            </section>
            <section
              id="limitation of liability"
              className=" my-3 text-[15px] "
            >
              <h2 className=" text-[25px] font-semibold  mt-6 md:mt-0">
                Data Retention{" "}
              </h2>
              <h2 className=" text-[15px] font-semibold  mt-6 md:mt-0">
                How Long Data is Retained:{" "}
              </h2>
              <p className="mt-2  ml-4  leading-[22.5px] font-medium">
                ISE retains personal data only as long as necessary to provide
                the services to users and to comply with legal obligations. This
                means that data associated with your account will be kept as
                long as you maintain an account with us. If you decide to close
                your account, your personal data will be deleted within a
                reasonable timeframe, except for data that we are required to
                keep for longer periods to comply with financial, legal, or
                regulatory obligations.
              </p>
            </section>
            <section id="Indemnification" className=" my-3 text-[15px] ">
              <h2 className=" text-[15px] font-semibold  mt-6 md:mt-0">
                Secure Disposal of Data:{" "}
              </h2>
              <div className="mt-2  ml-4 leading-[22.5px] font-medium">
                Once data is no longer necessary, we take appropriate measures
                to securely delete or anonymize it. If data must be retained
                (for example, for tax or litigation purposes), it will be
                isolated and protected to prevent use for any other purpose.
                Data disposal procedures are aligned with best security
                practices to prevent unauthorized access or data breaches.
                <div className="mt-2  ml-4 leading-[22.5px] font-semibold">
                  Click{" "}
                  <Link href={"/unlink-account"} className="text-myblue-100">
                    here
                  </Link>{" "}
                  to learn how to delete your data.
                </div>
              </div>
            </section>
            <section id="Governing law" className=" my-3 text-[15px] ">
              <h2 className=" text-[25px] font-semibold  mt-6 md:mt-0">
                International Data Transfers{" "}
              </h2>
              <h2 className=" text-[15px] font-semibold  mt-6 md:mt-0">
                Transferring Data Across Borders:{" "}
              </h2>
              <p className="mt-2  ml-4  leading-[22.5px] font-medium">
                ISE operates globally, which means that your data may be
                transferred to and processed in countries other than the one in
                which you reside. These countries may have data protection laws
                that are different from those of your country. However, we take
                steps to ensure that your personal data receives an adequate
                level of protection, including:
              </p>
              <div className="ml-8">
                <p className="mt-2 leading-[22.5px] font-normal">
                  <span className="text-[15px] font-medium">
                    Standard Contractual Clauses:
                  </span>{" "}
                  We use approved contractual clauses to ensure that data
                  transfers comply with EU data protection laws and other local
                  legal requirements.
                </p>
                <p className="mt-2 leading-[22.5px] font-normal">
                  <span className="text-[15px] font-medium">
                    Privacy Shield Framework:
                  </span>{" "}
                  While the Privacy Shield Framework is no longer a valid
                  mechanism to comply with EU data protection requirements for
                  data transfer, we ensure similar protective measures are in
                  place through other mechanisms like binding corporate rules or
                  specific data transfer agreements that provide enforceable
                  rights and effective legal remedies for data subjects.
                </p>
              </div>
            </section>
            <section id="termination" className=" my-3 text-[15px] ">
              <h2 className=" text-[25px] font-semibold  mt-6 md:mt-0">
                Updates to Our Privacy Policy{" "}
              </h2>
              <h2 className=" text-[15px] font-semibold  mt-6 md:mt-0">
                Notification of Changes:{" "}
              </h2>
              <p className="mt-2  ml-4  leading-[22.5px] font-medium">
                ISE&apos;s Privacy Policy may be updated periodically to reflect
                changes in our practices concerning the processing of personal
                data or changes in applicable law. We will post any changes to
                our policy on our website with an updated revision date. If we
                make significant changes that materially alter our privacy
                practices, we may also notify you by other means, such as
                sending an email or posting a notice on our corporate website
                and/or social media pages prior to the changes taking effect.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
