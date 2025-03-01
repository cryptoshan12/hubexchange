import { vars } from "@pancakeswap/ui";

const CookiePage = () => {
  return (
    <div style={{ fontFamily: "Arial, sans-serif", backgroundColor: "#f8fafc", padding: "20px" }}>
      {/* Cookie Section */}
      <div style={{ maxWidth: "800px", margin: "0 auto", padding: "20px" }}>
        <h1 style={{ fontSize: "28px", fontWeight: "bold", marginTop: "20px", marginBottom: "20px", color: vars.colors.contrast }}>
          Cookie Policy
        </h1>
        <p style={{ fontSize: "16px", lineHeight: "1.6", color: "#4a4a4a" }}>
          Hub.Exchange uses cookies to enhance your experience. This policy explains how we use cookies and how you can manage them.
        </p>

        {/* What Are Cookies? */}
        <h2 style={{ fontSize: "22px", fontWeight: "bold", marginTop: "30px", marginBottom: "10px", color: vars.colors.contrast }}>
          1. What Are Cookies?
        </h2>
        <p style={{ fontSize: "16px", lineHeight: "1.6", color: "#4a4a4a" }}>
          Cookies are small text files stored on your device when you visit our platform. They help us improve functionality and user experience.
        </p>

        {/* Types of Cookies We Use */}
        <h2 style={{ fontSize: "22px", fontWeight: "bold", marginTop: "30px", marginBottom: "10px", color: vars.colors.contrast }}>
          2. Types of Cookies We Use
        </h2>
        <ul style={{ listStyle: "none", padding: 0 }}>
          <li style={{ backgroundColor: "#fff", padding: "10px", margin: "5px 0", borderRadius: "8px", boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)", color: vars.colors.textSubtle }}>
            <strong>Essential Cookies:</strong> Required for platform functionality.
          </li>
          <li style={{ backgroundColor: "#fff", padding: "10px", margin: "5px 0", borderRadius: "8px", boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)", color: vars.colors.textSubtle }}>
            <strong>Analytical Cookies:</strong> Help us understand user behavior and improve services.
          </li>
          <li style={{ backgroundColor: "#fff", padding: "10px", margin: "5px 0", borderRadius: "8px", boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)", color: vars.colors.textSubtle }}>
            <strong>Marketing Cookies:</strong> Used for personalized ads and promotions (only with your consent).
          </li>
        </ul>

        {/* Managing Cookies */}
        <h2 style={{ fontSize: "22px", fontWeight: "bold", marginTop: "30px", marginBottom: "10px", color: vars.colors.contrast }}>
          3. Managing Cookies
        </h2>
        <p style={{ fontSize: "16px", lineHeight: "1.6", color: "#4a4a4a" }}>
          You can modify cookie settings in your browser or opt out of non-essential cookies.
        </p>

        {/* Contact Information */}
        <p style={{ fontSize: "16px", lineHeight: "1.6", color: "#4a4a4a", marginTop: "30px" }}>
          For further details, contact us at <a href="mailto:hubexchange@gmail.com" style={{ color: "#4c6ef5", textDecoration: "none" }}>hubexchange@gmail.com</a>.
        </p>
      </div>
    </div>
  );
};

export default CookiePage;