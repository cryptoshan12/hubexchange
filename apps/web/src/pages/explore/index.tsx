import { useEffect, useState } from "react";
import axios from "axios";
import { ResponsiveContainer, XAxis, YAxis, Tooltip, AreaChart, Area } from "recharts";

const ExplorePage = () => {
  const [tvlData, setTvlData] = useState([]);
  const [volumeData, setVolumeData] = useState([]);
  const [tokens, setTokens] = useState([]);
  const [pairs, setPairs] = useState([]);

  const formatNumber = (num) => {
    const value = Number(num);
    
    if (!value || Number.isNaN(value)) return "$0"; // ✅ No need for 'else'

    if (value >= 1_000_000_000) return `$${(value / 1_000_000_000).toFixed(2)}B`;
    if (value >= 1_000_000) return `$${(value / 1_000_000).toFixed(2)}M`;
    if (value >= 1_000) return `$${(value / 1_000).toFixed(2)}K`;

    return `$${value.toFixed(2)}`;
};

  

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [tvlRes, volumeRes, tokensRes, pairsRes] = await Promise.all([
          axios.get("https://api.llama.fi/charts/bsc"),
          axios.get("https://api.coingecko.com/api/v3/exchanges/binance/volume_chart?days=7"),
          axios.get("https://api.coingecko.com/api/v3/coins/markets", {
            params: { vs_currency: "usd", order: "market_cap_desc", per_page: 10, page: 1 },
          }),
          axios.get("https://api.coingecko.com/api/v3/exchanges/binance/tickers"),
        ]);

        setTvlData(tvlRes.data.map(d => ({ time: new Date(d.date * 1000).toLocaleDateString(), value: d.totalLiquidityUSD })));
        setVolumeData(volumeRes.data.map(d => ({
          time: new Date(d[0]).toLocaleDateString(), // No need to multiply by 1000
          value: d[1]
        })));        setTokens(tokensRes.data);
        setPairs(pairsRes.data.tickers.slice(0, 10));
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };
    fetchData();
  }, []);

  return (
    <div style={{ fontFamily: "Arial, sans-serif", backgroundColor: "#fff", padding: "30px", maxWidth: "1200px", margin: "auto" }}>
      <h1 style={{ textAlign: "center", fontSize: "32px", fontWeight: "bold", marginBottom: "20px", marginTop: "20px" }}>Explore Hub.Exchange Ecosystem</h1>
      
      {/* Charts Section */}
      <div
      style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", // Responsive grid
          gap: "20px",
          marginBottom: "40px",
      }}
      >
        
      {/* TVL Chart */}
      <div style={{ backgroundColor: "#f8f9fa", padding: "20px", borderRadius: "10px", marginBottom: "20px" }}>
        <h2 style={{ textAlign: "center" }}>BSC TVL</h2>
        <ResponsiveContainer width="100%" height={300}>
          <AreaChart data={tvlData}>
            <XAxis dataKey="time" />
            <Tooltip formatter={(value) => formatNumber(value)} />
<YAxis tickFormatter={(value) => formatNumber(value)} />
            <Area type="monotone" dataKey="value" stroke="#4c6ef5" fill="#c3dafe" />
          </AreaChart>
        </ResponsiveContainer>
      </div>

      {/* Volume Chart */}
      <div style={{ backgroundColor: "#f8f9fa", padding: "20px", borderRadius: "10px", marginBottom: "20px" }}>
        <h2 style={{ textAlign: "center" }}>24H Trading Volume</h2>
        <ResponsiveContainer width="100%" height={300}>
          <AreaChart data={volumeData}>
            <XAxis dataKey="time" />
            <Tooltip formatter={(value) => formatNumber(value)} />
<YAxis tickFormatter={(value) => formatNumber(value)} />
            <Area type="monotone" dataKey="value" stroke="#f59e0b" fill="#fde68a" />
          </AreaChart>
        </ResponsiveContainer>
      </div>
      
      </div>

      {/* Top Tokens */}
      <h2 style={{ fontSize: "24px", fontWeight: "bold", marginBottom: "10px" }}>Top 10 BSC Tokens</h2>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))", gap: "20px", marginBottom: "40px" }}>
        {tokens.map(token => (
          <div key={token.id} style={{ backgroundColor: "#f8f9fa", padding: "15px", borderRadius: "10px", textAlign: "center" }}>
            <img src={token.image} alt={token.name} style={{ width: "40px" }} />
            <h3>{token.name}</h3>
            <p>${token.current_price.toFixed(2)}</p>
          </div>
        ))}
      </div>

      {/* Top Trading Pairs */}
      <h2 style={{ fontSize: "24px", fontWeight: "bold", marginBottom: "10px" }}>Top 10 Trading Pairs</h2>
      <div style={{ backgroundColor: "#fff", borderRadius: "10px", overflow: "hidden", boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)" }}>
        <div style={{ display: "flex", justifyContent: "space-between", padding: "10px", backgroundColor: "#f8f9fa", fontWeight: "bold", borderBottom: "1px solid #ddd" }}>
          <div style={{ flex: 1, textAlign: "left" }}>Pair</div>
          <div style={{ flex: 1, textAlign: "right" }}>24H Volume</div>
        </div>
        {pairs.map(pair => (
          <div key={`${pair.base}-${pair.target}`} style={{ display: "flex", justifyContent: "space-between", padding: "10px", borderBottom: "1px solid #ddd" }}>
            <div style={{ flex: 1, textAlign: "left" }}>{pair.base}/{pair.target}</div>
            <div style={{ flex: 1, textAlign: "right" }}>${parseFloat(pair.volume).toLocaleString()}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExplorePage;
