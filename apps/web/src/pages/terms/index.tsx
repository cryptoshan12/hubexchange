import { vars } from "@pancakeswap/ui";

const TermsPage = () => {
  return (
    <div style={{ fontFamily: "Arial, sans-serif", backgroundColor: "#f8fafc", padding: "20px" }}>
      {/* Terms Section */}
      <div style={{ maxWidth: "800px", margin: "0 auto", padding: "20px" }}>
        <h1 style={{ fontSize: "28px", fontWeight: "bold", marginTop: "20px", marginBottom: "20px", color: vars.colors.contrast }}>
          Terms and Conditions
        </h1>
        <p style={{ fontSize: "16px", lineHeight: "1.6", color: "#4a4a4a" }}>
          Welcome to Hub.Exchange! By accessing or using our platform, you agree to these Terms and Conditions.
        </p>

        {/* Eligibility */}
        <h2 style={{ fontSize: "22px", fontWeight: "bold", marginTop: "30px", marginBottom: "10px", color: vars.colors.contrast }}>
          1. Eligibility
        </h2>
        <ul style={{ listStyle: "none", padding: 0 }}>
          <li style={{ backgroundColor: "#fff", padding: "10px", margin: "5px 0", borderRadius: "8px", boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)", color: vars.colors.textSubtle }}>
            You must be at least 18 years old to use our services.
          </li>
          <li style={{ backgroundColor: "#fff", padding: "10px", margin: "5px 0", borderRadius: "8px", boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)", color: vars.colors.textSubtle }}>
            You are responsible for complying with local laws regarding cryptocurrency trading.
          </li>
        </ul>

        {/* Services */}
        <h2 style={{ fontSize: "22px", fontWeight: "bold", marginTop: "30px", marginBottom: "10px", color: vars.colors.contrast }}>
          2. Services
        </h2>
        <p style={{ fontSize: "16px", lineHeight: "1.6", color: "#4a4a4a" }}>
          Hub.Exchange provides decentralized trading, swaps, staking, and liquidity pools. All transactions occur on-chain, and users retain full control of their assets.
        </p>

        {/* User Responsibilities */}
        <h2 style={{ fontSize: "22px", fontWeight: "bold", marginTop: "30px", marginBottom: "10px", color: vars.colors.contrast }}>
          3. User Responsibilities
        </h2>
        <ul style={{ listStyle: "none", padding: 0 }}>
          <li style={{ backgroundColor: "#fff", padding: "10px", margin: "5px 0", borderRadius: "8px", boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)", color: vars.colors.textSubtle }}>
            Ensure the accuracy of transaction details before confirming trades.
          </li>
          <li style={{ backgroundColor: "#fff", padding: "10px", margin: "5px 0", borderRadius: "8px", boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)", color: vars.colors.textSubtle }}>
            Keep your wallet keys and credentials secure.
          </li>
          <li style={{ backgroundColor: "#fff", padding: "10px", margin: "5px 0", borderRadius: "8px", boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)", color: vars.colors.textSubtle }}>
            Do not use Hub.Exchange for illegal or fraudulent activities.
          </li>
        </ul>

        {/* Risks Disclaimer */}
        <h2 style={{ fontSize: "22px", fontWeight: "bold", marginTop: "30px", marginBottom: "10px", color: vars.colors.contrast }}>
          4. Risks Disclaimer
        </h2>
        <ul style={{ listStyle: "none", padding: 0 }}>
          <li style={{ backgroundColor: "#fff", padding: "10px", margin: "5px 0", borderRadius: "8px", boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)", color: vars.colors.textSubtle }}>
            Cryptocurrency markets are volatile, and trading carries financial risks.
          </li>
          <li style={{ backgroundColor: "#fff", padding: "10px", margin: "5px 0", borderRadius: "8px", boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)", color: vars.colors.textSubtle }}>
            Smart contracts and blockchain technology may have vulnerabilities.
          </li>
          <li style={{ backgroundColor: "#fff", padding: "10px", margin: "5px 0", borderRadius: "8px", boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)", color: vars.colors.textSubtle }}>
            Hub.Exchange does not provide financial advice—use at your own risk.
          </li>
        </ul>

        {/* Limitation of Liability */}
        <h2 style={{ fontSize: "22px", fontWeight: "bold", marginTop: "30px", marginBottom: "10px", color: vars.colors.contrast }}>
          5. Limitation of Liability
        </h2>
        <p style={{ fontSize: "16px", lineHeight: "1.6", color: "#4a4a4a" }}>
          Hub.Exchange is not liable for any losses due to market fluctuations, third-party breaches, or technical failures.
        </p>

        {/* Termination */}
        <h2 style={{ fontSize: "22px", fontWeight: "bold", marginTop: "30px", marginBottom: "10px", color: vars.colors.contrast }}>
          6. Termination
        </h2>
        <p style={{ fontSize: "16px", lineHeight: "1.6", color: "#4a4a4a" }}>
          We reserve the right to suspend or terminate accounts engaging in suspicious or prohibited activities.
        </p>

        {/* Contact Information */}
        <p style={{ fontSize: "16px", lineHeight: "1.6", color: "#4a4a4a", marginTop: "30px" }}>
          For any questions, contact us at <a href="mailto:hubexchange@gmail.com" style={{ color: "#4c6ef5", textDecoration: "none" }}>hubexchange@gmail.com</a>.
        </p>
      </div>
    </div>
  );
};

export default TermsPage;