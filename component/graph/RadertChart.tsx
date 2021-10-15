import { Radar } from "react-chartjs-2";

interface dataset {
  label: string;
  labels: string[];
  data: number[];
  fill: boolean;
  backgroundColor: string;
  borderColor: string;
  pointBackgroundColor: string;
  pointBorderColor: string;
  pointHoverBackgroundColor: string;
  pointHoverBorderColor: string;
}

const RadertChart = (props: dataset) => {
  console.log(props.label);
  const data = {
    labels: props.labels,
    datasets: [
      {
        label: props.label,
        data: props.data,
        fill: props.fill,
        backgroundColor: props.backgroundColor,
        borderColor: props.borderColor,
        pointBackgroundColor: props.pointBackgroundColor,
        pointBorderColor: props.pointHoverBorderColor,
        pointHoverBackgroundColor: props.pointHoverBackgroundColor,
        pointHoverBorderColor: props.pointHoverBorderColor,
      },
    ],
  };

  const options = {
    maintainAspectRatio: false,
    responsive: false,
    elements: {
      line: {
        borderWidth: 3,
      },
    },
    scales: {
      r: {
        suggestedMin: 0,
        suggestedMax: 5,
      },
    },
  };

  return <Radar data={data} width={500} height={500} options={options} />;
};

export default RadertChart;
