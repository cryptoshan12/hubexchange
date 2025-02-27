import { vars } from "@pancakeswap/ui";

const AboutPage = () => {
  return (
    <div style={{ fontFamily: "Arial, sans-serif", backgroundColor: "#f8fafc", padding: "30px" }}>
      {/* About Section */}
      <div style={{ maxWidth: "800px", margin: "0 auto" }}>
        <h1 style={{ fontSize: "28px", fontWeight: "bold", marginTop: "30px", marginBottom: "30px", color: vars.colors.contrast }}>About Us</h1>
        <p style={{ fontSize: "16px", lineHeight: "1.6", color: "#4a4a4a" }}>
          At Hub.exchange, we are committed to revolutionizing the way people trade and interact with cryptocurrencies. 
          Our platform offers a seamless, secure, and user-friendly experience, catering to both beginners and seasoned traders.<br />
          We specialize in decentralized trading, enabling instant swaps, yield farming, and liquidity provision with low fees and maximum transparency. 
          By integrating multi-chain support and cutting-edge technology, we empower our users to make the most of their crypto journey.<br />
          Driven by innovation and community, Hub.exchange is more than just a trading platform—it&apos;s your gateway to the future of finance.
        </p>
      </div>

      {/* Features Section */}
      <div style={{ marginTop: "30px", padding: "30px" }}>
        <h2 style={{ textAlign: "center", color: vars.colors.contrast, fontSize: "32px", fontWeight: "bold", maxWidth: "800px", margin: "0 auto", marginBottom: "30px" }}>
          Features of Hub.exchange
        </h2>
        <div style={{ textAlign: "left", display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "20px", marginTop: "20px", maxWidth: "800px", margin: "0 auto" }}>
          {[
            { id: "decentralized-trading", title: "Decentralized Trading", description: "Trade your favorite cryptocurrencies instantly with a secure and transparent decentralized platform." },
            { id: "swap-ease", title: "Swap with Ease", description: "Easily swap between multiple tokens with low fees and lightning-fast transactions powered by blockchain technology." },
            { id: "liquidity-pools", title: "Liquidity Pools", description: "Provide liquidity and earn rewards. Join liquidity pools to maximize your crypto investments effortlessly." },
            { id: "yield-farming", title: "Yield Farming", description: "Stake your tokens and participate in yield farming opportunities to grow your crypto portfolio." },
            { id: "multi-chain-support", title: "Multi-Chain Support", description: "Seamless integration across major blockchains, including Ethereum, Binance Smart Chain, and more." },
            { id: "user-friendly", title: "User-Friendly Interface", description: "Experience a sleek and intuitive interface designed for both beginners and experienced traders." }
          ].map((feature) => (
            <div key={feature.id} style={{ backgroundColor: "#fff", padding: "20px", borderRadius: "10px", boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)" }}>
              <h3 style={{ fontSize: "18px", fontWeight: "bold", marginBottom: "10px", color: vars.colors.contrast }}>{feature.title}</h3>
              <p style={{ fontSize: "14px", color: vars.colors.textSubtle }}>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div style={{ maxWidth: "800px", margin: "50px auto", textAlign: "left", padding: "30px" }}>
        <h2 style={{ fontSize: "22px", fontWeight: "bold", color: vars.colors.contrast }}>Why Choose Us?</h2>
        <ul style={{ listStyle: "none", padding: 0 }}>
          {[
            { id: "multi-token", text: "Multi-Token Support: Trade across multiple networks." },
            { id: "low-fees", text: "Low Fees: Competitive transaction charges." },
            { id: "fast-transactions", text: "Lightning Fast Transactions: Powered by blockchain." },
            { id: "secure", text: "Secure and Non-Custodial: You control your assets." }
          ].map((reason) => (
            <li key={reason.id} style={{ backgroundColor: "#fff", padding: "10px", margin: "5px 0", borderRadius: "8px", boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)", color: vars.colors.textSubtle }}>
              {reason.text}
            </li>
          ))}
        </ul>
      </div>

      {/* Call to Action */}
      <div style={{ textAlign: "center", backgroundColor: "#4c6ef5", color: "white", padding: "40px", borderRadius: "10px" }}>
        <h2 style={{ fontSize: "22px", fontWeight: "bold" }}>Earn Passive Income.</h2>
        <p style={{ fontSize: "18px" }}>Provide liquidity and earn fees every time someone swaps on YourDEX</p>
      </div>
    </div>
  );
};

export default AboutPage;
