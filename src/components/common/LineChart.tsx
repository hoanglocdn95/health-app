import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const options = {
  responsive: true,
};

const labels = [
  '6月',
  '7月',
  '8月',
  '9月',
  '10月',
  '11月',
  '12月',
  '1月',
  '2月',
  '3月',
  '4月',
  '5月',
];

const data = {
  labels,
  datasets: [
    {
      data: [-1000, -750, -500, -250, 0, 250, 500, 750, 1000],
      borderColor: '#8FE9D0',
      backgroundColor: '#8FE9D0',
    },
    {
      data: [-1000, -750, -500, -250, 0, 250, 500, 750, 1000],
      borderColor: '#FFCC21',
      backgroundColor: '#FFCC21',
    },
  ],
};

const LineChart = () => {
  return <Line options={options} data={data} />;
};

export default LineChart;
