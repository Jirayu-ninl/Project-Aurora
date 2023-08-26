'use client'

import Link from 'next/link'
import { CSS } from '../css'

const Page = () => {
  return (
    <>
      <h1 className='text-4xl font-bold md:text-6xl'>Privacy Policy</h1>
      <p className='opacity-60'>Last updated: Aug 26, 2023</p>
      <hr className='mb-12 h-px w-full bg-black dark:bg-white' />
      <div className={CSS}>
        <p>
          &emsp;&emsp;&emsp;Thank you for visiting{' '}
          <Link href='https://TheIceJi.com'>
            <strong>IceJiVerse</strong>
          </Link>
          . This Privacy Policy explains how we collect, use, and protect the
          information you provide to us when you use our website, apps,
          subscription plans, and related services. By using our services, you
          agree to the practices described in this Privacy Policy.
        </p>
        <h2>1. Information Collection</h2>
        <p>
          &emsp;&emsp;&emsp;We may collect both personal and non-personal
          information when you interact with our website, apps, and subscription
          plans. This information may include but is not limited to:
        </p>
        <ul>
          <li>
            <b>Personal information:</b> Name, email address, contact
            information, and other details you provide when creating an account
            or making a purchase.
          </li>
          <li>
            <b>Personal information:</b> Name, email address, contact
            information, and Usage data: Information about your interaction with
            our services, such as the pages you visit, features you use, and the
            duration of your visit.
          </li>
          <li>
            <b>Personal information:</b> Name, email address, contact
            information, and Log data: Information about your device, browser,
            IP address, and referral URLs.
          </li>
        </ul>
        <h2>2. Use of Information</h2>
        <p>
          &emsp;&emsp;&emsp;We use the collected information for various
          purposes, including but not limited to:
        </p>
        <ul>
          <li>Providing and maintaining our services.</li>
          <li>Personalizing your experience and improving our offerings.</li>
          <li>Processing transactions and delivering products.</li>
          <li>Responding to inquiries, comments, and feedback.</li>
          <li>
            Sending you promotional content, updates, and newsletters (with your
            consent).
          </li>
          <li>Ensuring the security and integrity of our services.</li>
        </ul>
        <h2>3. User Accounts and Third-Party Logins</h2>
        <p>
          &emsp;&emsp;&emsp;When you create a user account on our website or
          apps, you provide us with personal information necessary for account
          setup and communication. Additionally, we offer the option to log in
          using your Facebook, Google, Github, or Discord accounts. These
          third-party logins may collect and share certain information, as
          specified in their respective privacy policies.
        </p>
        <h2>4. Subscription Plans and E-Commerce</h2>
        <p>
          &emsp;&emsp;&emsp;If you purchase a subscription plan or products from
          our shop, we collect and process the information necessary to process
          your transaction. This may include payment details, shipping address,
          and order history. We do not store sensitive payment information on
          our servers.
        </p>
        <h2>5. Data Security</h2>
        <p>
          &emsp;&emsp;&emsp;We implement security measures to protect your
          personal information from unauthorized access, alteration, disclosure,
          or destruction. However, no method of data transmission over the
          internet is entirely secure, and we cannot guarantee absolute
          security.
        </p>
        <h2>6. Cookies and Tracking Technologies</h2>
        <p>
          &emsp;&emsp;&emsp;We may use cookies and similar tracking technologies
          to enhance your experience on our website and apps. These technologies
          collect data about your browsing behavior and preferences.
        </p>
        <h2>7. Third-Party Services</h2>
        <p>
          &emsp;&emsp;&emsp;Our website and services may contain links to
          third-party websites or services. We are not responsible for the
          privacy practices or content of these third parties. We encourage you
          to review the privacy policies of any external sites you visit.
        </p>
        <h2>8. Changes to this Privacy Policy</h2>
        <p>
          &emsp;&emsp;&emsp;We reserve the right to update this Privacy Policy
          to reflect changes in our practices or applicable laws. Any
          modifications will be posted on this page, and the "Last updated" date
          will be revised accordingly.
        </p>
        <h2>9. Contact Us</h2>
        <p>
          &emsp;&emsp;&emsp;If you have any questions, concerns, or requests
          related to your privacy, please contact us at{' '}
          <Link href='mailto:admin@theiceji.com' replace>
            <strong>admin@theiceji.com</strong>.
          </Link>
        </p>
      </div>
    </>
  )
}

export default Page
