import { vars } from "@pancakeswap/ui";

const DocsPage = () => {
  return (
    <div style={{ fontFamily: "Arial, sans-serif", backgroundColor: "#f8fafc", padding: "20px" }}>
      {/* Docs Section */}
      <div style={{ maxWidth: "800px", margin: "0 auto", padding: "20px" }}>
        <h1 style={{ fontSize: "28px", fontWeight: "bold", marginTop: "20px", marginBottom: "20px", color: vars.colors.contrast }}>
          Documentation Overview (Docs)
        </h1>
        <p style={{ fontSize: "16px", lineHeight: "1.6", color: "#4a4a4a" }}>
          Welcome to Hub.Exchange! This documentation will guide you through our platform&apos;s features and functionalities.
        </p>

        {/* Getting Started */}
        <h2 style={{ fontSize: "22px", fontWeight: "bold", marginTop: "30px", marginBottom: "10px", color: vars.colors.contrast }}>
          1. Getting Started
        </h2>
        <ul style={{ listStyle: "none", padding: 0 }}>
          <li style={{ backgroundColor: "#fff", padding: "10px", margin: "5px 0", borderRadius: "8px", boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)", color: vars.colors.textSubtle }}>
            Connect your wallet (MetaMask, Trust Wallet, etc.).
          </li>
          <li style={{ backgroundColor: "#fff", padding: "10px", margin: "5px 0", borderRadius: "8px", boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)", color: vars.colors.textSubtle }}>
            Access swap, staking, and liquidity features.
          </li>
        </ul>

        {/* Swapping */}
        <h2 style={{ fontSize: "22px", fontWeight: "bold", marginTop: "30px", marginBottom: "10px", color: vars.colors.contrast }}>
          2. Swapping
        </h2>
        <ul style={{ listStyle: "none", padding: 0 }}>
          <li style={{ backgroundColor: "#fff", padding: "10px", margin: "5px 0", borderRadius: "8px", boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)", color: vars.colors.textSubtle }}>
            Select tokens, set slippage tolerance, and confirm the trade.
          </li>
          <li style={{ backgroundColor: "#fff", padding: "10px", margin: "5px 0", borderRadius: "8px", boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)", color: vars.colors.textSubtle }}>
            Transactions occur instantly with minimal fees.
          </li>
        </ul>

        {/* Providing Liquidity */}
        <h2 style={{ fontSize: "22px", fontWeight: "bold", marginTop: "30px", marginBottom: "10px", color: vars.colors.contrast }}>
          3. Providing Liquidity
        </h2>
        <ul style={{ listStyle: "none", padding: 0 }}>
          <li style={{ backgroundColor: "#fff", padding: "10px", margin: "5px 0", borderRadius: "8px", boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)", color: vars.colors.textSubtle }}>
            Add token pairs to liquidity pools and earn a share of trading fees.
          </li>
          <li style={{ backgroundColor: "#fff", padding: "10px", margin: "5px 0", borderRadius: "8px", boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)", color: vars.colors.textSubtle }}>
            Withdraw liquidity anytime based on your share.
          </li>
        </ul>

        {/* Staking */}
        <h2 style={{ fontSize: "22px", fontWeight: "bold", marginTop: "30px", marginBottom: "10px", color: vars.colors.contrast }}>
          4. Staking
        </h2>
        <ul style={{ listStyle: "none", padding: 0 }}>
          <li style={{ backgroundColor: "#fff", padding: "10px", margin: "5px 0", borderRadius: "8px", boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)", color: vars.colors.textSubtle }}>
            Lock tokens in staking pools to earn rewards over time.
          </li>
          <li style={{ backgroundColor: "#fff", padding: "10px", margin: "5px 0", borderRadius: "8px", boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)", color: vars.colors.textSubtle }}>
            View APY and staking duration before confirming.
          </li>
        </ul>

        {/* Security Best Practices */}
        <h2 style={{ fontSize: "22px", fontWeight: "bold", marginTop: "30px", marginBottom: "10px", color: vars.colors.contrast }}>
          5. Security Best Practices
        </h2>
        <ul style={{ listStyle: "none", padding: 0 }}>
          <li style={{ backgroundColor: "#fff", padding: "10px", margin: "5px 0", borderRadius: "8px", boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)", color: vars.colors.textSubtle }}>
            Use strong passwords and enable 2FA on your wallet.
          </li>
          <li style={{ backgroundColor: "#fff", padding: "10px", margin: "5px 0", borderRadius: "8px", boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)", color: vars.colors.textSubtle }}>
            Always verify smart contracts before approving transactions.
          </li>
        </ul>

        {/* Contact Information */}
        <p style={{ fontSize: "16px", lineHeight: "1.6", color: "#4a4a4a", marginTop: "30px" }}>
          For more details, visit <a href="https://hubexchange.vercel.app/" style={{ color: "#4c6ef5", textDecoration: "none" }}>Hub.Exchange</a>.
        </p>
      </div>
    </div>
  );
};

export default DocsPage;