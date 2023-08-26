'use client'

import Link from 'next/link'
import { CSS } from '../css'

const Page = () => {
  return (
    <>
      <h1 className='text-3xl font-bold md:text-6xl'>Terms of Service</h1>
      <p className='opacity-60'>Last updated: Aug 26, 2023</p>
      <hr className='mb-12 h-px w-full bg-black dark:bg-white' />
      <div className={CSS}>
        <p>
          &emsp;&emsp;&emsp;By using{' '}
          <Link href='https://TheIceJi.com'>
            <strong>IceJiVerse</strong>
          </Link>{' '}
          CreativeUniverse App, you agree to abide by these Terms of Service.
          Please read this document carefully before using our website, apps,
          subscription plans, shop, and related services.
        </p>
        <h2>1. Acceptance of Terms</h2>
        <p>
          &emsp;&emsp;&emsp;By accessing and using the Service, you agree to
          comply with and be bound by these Terms of Service. If you do not
          agree with these terms, you must not use the Service.
        </p>
        <h2>2. Use of the Service</h2>
        <p>
          &emsp;&emsp;&emsp;You must be at least 18 years old to use the
          Service. If you are using the Service on behalf of an organization,
          you represent and warrant that you have the authority to bind the
          organization to these Terms of Service.
        </p>
        <h2>3. Intellectual Property</h2>
        <p>
          &emsp;&emsp;&emsp;All content on the Service, including but not
          limited to text, graphics, images, videos, and software, is protected
          by intellectual property rights and is the property of{' '}
          <Link href='https://TheIceJi.com'>
            <strong>IceJiVerse</strong>
          </Link>{' '}
          or its licensors. You may not reproduce, distribute, modify, or create
          derivative works based on this content without our explicit consent.
        </p>
        <h2>4. User Accounts</h2>
        <p>
          &emsp;&emsp;&emsp;When creating an account with us, you are
          responsible for maintaining the security of your account credentials.
          You agree to provide accurate and complete information during the
          registration process and to promptly update your information if
          changes occur.
        </p>
        <h2>5. Privacy</h2>
        <p>
          &emsp;&emsp;&emsp;Your use of the Service is also governed by our
          Privacy Policy, which outlines how we collect, use, and protect your
          information. By using the Service, you consent to our data practices
          as described in the Privacy Policy.
        </p>
        <h2>6. Prohibited Activities</h2>
        <p>
          &emsp;&emsp;&emsp;You agree not to engage in any activities that may
          violate these Terms of Service or applicable laws. Prohibited
          activities include but are not limited to unauthorized access to our
          systems, attempting to disrupt the Service's functionality, and using
          the Service for illegal purposes.
        </p>
        <h2>7. Payments and Subscription Plans</h2>
        <p>
          &emsp;&emsp;&emsp;If you purchase a subscription plan or products from
          our shop, you agree to pay the specified fees and charges.
          Subscription plans automatically renew unless canceled before the
          renewal date. Refunds and cancellation policies are outlined in our
          Refund Policy.
        </p>
        <h2>8. Limitation of Liability</h2>
        <p>
          To the extent permitted by law,{' '}
          <Link href='https://TheIceJi.com'>
            <strong>IceJiVerse</strong>
          </Link>{' '}
          shall not be liable for any direct, indirect, incidental, special, or
          consequential damages resulting from your use or inability to use the
          Service.
        </p>
        <h2>9. Changes to Terms</h2>
        <p>
          &emsp;&emsp;&emsp;We reserve the right to modify or replace these
          Terms of Service at any time. Changes will be effective upon posting
          on this page. Your continued use of the Service after any changes
          constitute your acceptance of the modified terms.
        </p>
        <h2>10. Termination</h2>
        <p>
          &emsp;&emsp;&emsp;We reserve the right to terminate your access to the
          Service for violation of these Terms of Service or for any reason at
          our discretion.
        </p>
        <h2>11. Governing Law</h2>
        <p>
          &emsp;&emsp;&emsp;These Terms of Service shall be governed by and
          construed in accordance with the laws of Thailand.
        </p>
      </div>
    </>
  )
}

export default Page
