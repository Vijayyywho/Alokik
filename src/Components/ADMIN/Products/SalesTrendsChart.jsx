import { motion } from "framer-motion";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";
import { useEffect, useState } from "react";

const SalesTrendChart = () => {
  const [salesData, setSalesData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchPosts = async () => {
    try {
      const response = await fetch("http://localhost:3000/api/posts");
      if (!response.ok) {
        throw new Error(`Error: ${response.status} - ${response.statusText}`);
      }
      const data = await response.json();

      // Group data by date and calculate high & low prices
      const dailySales = data.reduce((acc, post) => {
        const date = new Date(post.createdAt).toISOString().split("T")[0]; // Extract date in YYYY-MM-DD
        const price = post.price || 0;

        if (!acc[date]) {
          acc[date] = { high: price, low: price };
        } else {
          acc[date].high = Math.max(acc[date].high, price);
          acc[date].low = Math.min(acc[date].low, price);
        }
        return acc;
      }, {});

      // Convert grouped data to array format
      const formattedData = Object.keys(dailySales).map((date) => ({
        date,
        high: dailySales[date].high,
        low: dailySales[date].low,
      }));

      setSalesData(formattedData);
    } catch (err) {
      console.error("Error fetching posts:", err.message);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  if (loading) return <div>Loading chart...</div>;
  if (error) return <div className="text-red-500">Error: {error}</div>;

  return (
    <motion.div
      className="bg-gray-800 bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl p-6 border border-gray-700"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3 }}
    >
      <h2 className="text-xl font-semibold text-gray-100 mb-4">
        Price High To Low
      </h2>
      <div style={{ width: "100%", height: 300 }}>
        <ResponsiveContainer>
          <LineChart data={salesData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
            <XAxis
              dataKey="date"
              stroke="#9CA3AF"
              interval={0} // Show all dates
              tickFormatter={(date) =>
                new Date(date).toLocaleDateString("en-US", {
                  day: "2-digit",
                  month: "short", // e.g., "15 Nov"
                })
              }
            />
            <YAxis stroke="#9CA3AF" />
            <Tooltip
              contentStyle={{
                backgroundColor: "rgba(31, 41, 55, 0.8)",
                borderColor: "#4B5563",
              }}
              itemStyle={{ color: "#E5E7EB" }}
              labelFormatter={(date) =>
                `Date: ${new Date(date).toLocaleDateString()}`
              }
            />
            <Legend />
            {/* High Prices Line */}
            <Line
              type="monotone"
              dataKey="high"
              name="Highest Price"
              stroke="#10B981"
              strokeWidth={2}
            />
            {/* Low Prices Line */}
            <Line
              type="monotone"
              dataKey="low"
              name="Lowest Price"
              stroke="#EF4444"
              strokeWidth={2}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </motion.div>
  );
};

export default SalesTrendChart;
