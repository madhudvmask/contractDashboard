import React from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart, ArcElement, Tooltip, Legend } from "chart.js";

// Register the chart.js components
Chart.register(ArcElement, Tooltip, Legend);

const DonutChart = () => {
  const data = {
    labels: [
      "Chemistry",
      "Hematology",
      "Rapids",
      "Imagyst",
      "Reference Laboratories",
      "Other Testing",
      "Remaining Commitment",
    ],
    datasets: [
      {
        label: "Contract Progress",
        data: [2669.96, 980.63, 4352.42, 2235.3, 1667.07, 3097.79, 16040], // Replace with actual values from API
        backgroundColor: [
          "#f36f21", // Chemistry
          "#0088a8", // Hematology
          "#67b346", // Rapids
          "#005d7e", // Imagyst
          "#652e1b", // Reference Laboratories
          "#bb3f61", // Other Testing
          "#8e8d8b", // Remaining Commitment
        ],
        hoverOffset: 4,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "right",
        labels: {
          boxWidth: 10,
          padding: 12,
        },
      },
      tooltip: {
        callbacks: {
          label: function (tooltipItem) {
            return `${tooltipItem.label}: $${tooltipItem.raw.toLocaleString()}`;
          },
        },
      },
    },
  };

  return (
    <div className="spend-progress-chart">
      <Doughnut data={data} options={options} />
      <div className="donut-center-text">
        <p>95%</p>
      </div>
    </div>
  );
};

export default DonutChart;
