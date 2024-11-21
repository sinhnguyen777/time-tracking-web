import React, { useRef, useEffect } from "react";
import dayjs from "dayjs";
import VILocale from "dayjs/locale/vi";
import localeData from "dayjs/plugin/localeData";
import {
  Chart,
  BarController,
  BarElement,
  CategoryScale,
  LinearScale,
  Title,
  Tooltip,
  Legend,
  ChartOptions,
  ChartData,
  ChartConfiguration
} from "chart.js";

Chart.register(
  BarController,
  BarElement,
  CategoryScale,
  LinearScale,
  Title,
  Tooltip,
  Legend
);

const BarChart: React.FC = () => {
  const chartRef = useRef<HTMLCanvasElement | null>(null);

  dayjs.extend(localeData);

  dayjs.locale(VILocale);

  useEffect(() => {
    const ctx = chartRef.current;
    if (!ctx) return;

    const data: ChartData<"bar", number[], string> = {
      labels: dayjs().localeData().months(),
      datasets: [
        {
          label: "Số ngày nghỉ",
          data: [5, 3, 4, 2, 6, 3, 7, 5, 4, 6, 4, 8],
          backgroundColor: "rgba(75, 192, 192, 0.5)",
          borderColor: "rgba(75, 192, 192, 1)",
          borderWidth: 1
        }
      ]
    };

    const options: ChartOptions<"bar"> = {
      scales: {
        y: {
          beginAtZero: true
        }
      },
      plugins: {
        legend: {
          display: true,
          position: "top"
        },
        title: {
          display: true,
          text: "Tổng số ngày nghỉ trong năm"
        }
      }
    };
    const config: ChartConfiguration<"bar", number[], string> = {
      type: "bar",
      data: data,
      options: options
    };

    const myChart = new Chart(ctx, config);

    return () => {
      myChart.destroy();
    };
  }, []);

  return <canvas ref={chartRef}></canvas>;
};

export default BarChart;
