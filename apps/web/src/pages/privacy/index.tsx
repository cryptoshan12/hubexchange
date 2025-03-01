import { vars } from "@pancakeswap/ui";

const PrivacyPage = () => {
  return (
    <div style={{ fontFamily: "Arial, sans-serif", backgroundColor: "#f8fafc", padding: "20px" }}>
      {/* Privacy Section */}
      <div style={{ maxWidth: "800px", margin: "0 auto", padding: "20px" }}>
        <h1 style={{ fontSize: "28px", fontWeight: "bold", marginTop: "20px", marginBottom: "20px", color: vars.colors.contrast }}>
          Privacy Policy
        </h1>
        <p style={{ fontSize: "16px", lineHeight: "1.6", color: "#4a4a4a" }}>
          At Hub.Exchange, we prioritize your privacy and are committed to protecting your personal data. This Privacy Policy explains how we collect, use, and safeguard your information when you use our platform.
        </p>

        {/* Information We Collect */}
        <h2 style={{ fontSize: "22px", fontWeight: "bold", marginTop: "30px", marginBottom: "10px", color: vars.colors.contrast }}>
          1. Information We Collect
        </h2>
        <ul style={{ listStyle: "none", padding: 0 }}>
          <li style={{ backgroundColor: "#fff", padding: "10px", margin: "5px 0", borderRadius: "8px", boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)", color: vars.colors.textSubtle }}>
            <strong>Personal Information:</strong> When you sign up or interact with our platform, we may collect your name, email, and wallet address.
          </li>
          <li style={{ backgroundColor: "#fff", padding: "10px", margin: "5px 0", borderRadius: "8px", boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)", color: vars.colors.textSubtle }}>
            <strong>Transaction Data:</strong> Details of swaps, staking, liquidity provision, and other trading activities.
          </li>
          <li style={{ backgroundColor: "#fff", padding: "10px", margin: "5px 0", borderRadius: "8px", boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)", color: vars.colors.textSubtle }}>
            <strong>Technical Data:</strong> IP address, browser type, device information, and cookies for improving user experience.
          </li>
        </ul>

        {/* How We Use Your Information */}
        <h2 style={{ fontSize: "22px", fontWeight: "bold", marginTop: "30px", marginBottom: "10px", color: vars.colors.contrast }}>
          2. How We Use Your Information
        </h2>
        <ul style={{ listStyle: "none", padding: 0 }}>
          <li style={{ backgroundColor: "#fff", padding: "10px", margin: "5px 0", borderRadius: "8px", boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)", color: vars.colors.textSubtle }}>
            To facilitate trading, staking, and liquidity services.
          </li>
          <li style={{ backgroundColor: "#fff", padding: "10px", margin: "5px 0", borderRadius: "8px", boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)", color: vars.colors.textSubtle }}>
            To enhance platform security and detect fraudulent activities.
          </li>
          <li style={{ backgroundColor: "#fff", padding: "10px", margin: "5px 0", borderRadius: "8px", boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)", color: vars.colors.textSubtle }}>
            To improve user experience through analytics and customer support.
          </li>
          <li style={{ backgroundColor: "#fff", padding: "10px", margin: "5px 0", borderRadius: "8px", boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)", color: vars.colors.textSubtle }}>
            To comply with legal obligations.
          </li>
        </ul>

        {/* How We Share Your Data */}
        <h2 style={{ fontSize: "22px", fontWeight: "bold", marginTop: "30px", marginBottom: "10px", color: vars.colors.contrast }}>
          3. How We Share Your Data
        </h2>
        <p style={{ fontSize: "16px", lineHeight: "1.6", color: "#4a4a4a" }}>
          We do not sell or share your personal data with third parties except:
        </p>
        <ul style={{ listStyle: "none", padding: 0 }}>
          <li style={{ backgroundColor: "#fff", padding: "10px", margin: "5px 0", borderRadius: "8px", boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)", color: vars.colors.textSubtle }}>
            With regulatory authorities if required by law.
          </li>
          <li style={{ backgroundColor: "#fff", padding: "10px", margin: "5px 0", borderRadius: "8px", boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)", color: vars.colors.textSubtle }}>
            With service providers assisting in platform functionality.
          </li>
        </ul>

        {/* Security Measures */}
        <h2 style={{ fontSize: "22px", fontWeight: "bold", marginTop: "30px", marginBottom: "10px", color: vars.colors.contrast }}>
          4. Security Measures
        </h2>
        <p style={{ fontSize: "16px", lineHeight: "1.6", color: "#4a4a4a" }}>
          We use encryption, multi-factor authentication, and other security protocols to safeguard your data. However, due to the decentralized nature of blockchain, some information may be public.
        </p>

        {/* Your Rights */}
        <h2 style={{ fontSize: "22px", fontWeight: "bold", marginTop: "30px", marginBottom: "10px", color: vars.colors.contrast }}>
          5. Your Rights
        </h2>
        <ul style={{ listStyle: "none", padding: 0 }}>
          <li style={{ backgroundColor: "#fff", padding: "10px", margin: "5px 0", borderRadius: "8px", boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)", color: vars.colors.textSubtle }}>
            You can request access, correction, or deletion of your data.
          </li>
          <li style={{ backgroundColor: "#fff", padding: "10px", margin: "5px 0", borderRadius: "8px", boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)", color: vars.colors.textSubtle }}>
            You can disable cookies via your browser settings.
          </li>
        </ul>

        {/* Contact Information */}
        <p style={{ fontSize: "16px", lineHeight: "1.6", color: "#4a4a4a", marginTop: "30px" }}>
          For any privacy concerns, contact us at <a href="mailto:hubexchange@gmail.com" style={{ color: "#4c6ef5", textDecoration: "none" }}>hubexchange@gmail.com</a>.
        </p>
      </div>
    </div>
  );
};

export default PrivacyPage;