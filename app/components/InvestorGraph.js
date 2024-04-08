import React from "react";
import { Line } from "react-chartjs-2";
import { motion } from "framer-motion";
import { useInView } from 'react-intersection-observer';

import {
  Chart as ChartJS,
  LineElement,
  CategoryScale, // x axis
  LinearScale, // y axis
  PointElement,
  Tooltip,
} from "chart.js";

ChartJS.register(
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip
);

const Graph = () => {
  const data = {
    labels: [
      "2001",
      "2002",
      "2003",
      "2004",
      "2005",
      "2006",
      "2007",
      "2008",
      "2009",
      "2010",
      "2011",
      "2012",
      "2013",
    ],
    datasets: [
      {
        // label :  'sales of the week',
        data: [98, 45, 89, 6, 6, 8, 65, 79, 5, 45, 65, 98, 66],
        backgroundColor: "aqua",
        borderColor: "white",
        pointBorderColor: "aqua",
        fill: true,
        // tension:0.2
      },
    ],
  };

  const options = {
    plugins: {
      legend: true,
    },
    scales: {
      y: {
        // min: 3,
        // max: 6
      },
    },
  };
  const [ref1, inView1] = useInView({ triggerOnce: true });

  return (
    <motion.div className="graph-main"
      ref={ref1}
      initial={{
        opacity: 0,
        y: 40, // Move slightly down initially
      }}
      animate={{
        opacity: inView1 ? 1 : 0,
        y: inView1 ? 0 : 40,
      }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <div className="content">
        <h1> Investor monitor Interest rates with Unbeatable Loans. </h1>
        <p>
          Secure low cost capital for your investment.
        </p>
      </div>
      <div className="graph">
        <div className="alert">
          <div className="dot"></div>
          <p>Interest Rates Are Increasing</p>
        </div>
        <div className="success">
          <div className="dot"></div>
          <p> Interest Rates Are Decreasing</p>
        </div>
        <Line data={data} options={options}></Line>
      </div>
    </motion.div>
  );
};

export default Graph;
