import React from 'react';
import { Link } from 'react-router-dom';

const PrivacyPolicy: React.FC = () => {
  return (
    <div style={{ padding: '2rem', maxWidth: '800px', margin: '0 auto', textAlign: 'left' }}>
      <h1>Privacy Policy</h1>
      <p><strong>Effective Date:</strong> 13 Nov 2025</p>

      <p>
        HobCab respects your privacy. This page explains how we handle your data when you connect your Pinterest account through our app.
      </p>

      <h2>1. Information We Collect</h2>
      <ul>
        <li>Pinterest account data: username, profile info, boards, and pins.</li>
        <li>Access tokens: used to retrieve Pinterest data securely.</li>
        <li>Usage data: app interactions and analytics.</li>
      </ul>
      <p>We <strong>do not store your Pinterest password</strong> or sell your data.</p>

      <h2>2. How We Use Your Data</h2>
      <ul>
        <li>Display and organise your Pinterest content.</li>
      </ul>

      <h2>3. Sharing Your Data</h2>
      <ul>
        <li>With Pinterest: to operate the app per Pinterest API rules.</li>
        <li>With service providers: to maintain the app, under confidentiality agreements.</li>
        <li>Only as required by law.</li>
      </ul>

      <h2>4. Security</h2>
      <p>We store tokens and data securely and limit access to authorized personnel only. Data is retained only as long as needed to provide the app’s functionality.</p>

      <h2>5. Your Rights</h2>
      <p>You can revoke Pinterest access at any time and request deletion of any data we have stored. Contact us at hobcab.business@gmail.com to exercise these rights.</p>

      <h2>6. Third-Party Links</h2>
      <p>We are not responsible for the privacy practices of Pinterest or other third-party sites linked in the app.</p>

      <h2>Contact Us</h2>
      <p>Email: hobcab.business@gmail.com</p>
      <p>Website: https://github.com/gina-kong/HobCab</p>

      <p style={{ marginTop: '2rem' }}>
        <Link to="/">← Back to Home</Link>
      </p>
    </div>
  );
};

export default PrivacyPolicy;
