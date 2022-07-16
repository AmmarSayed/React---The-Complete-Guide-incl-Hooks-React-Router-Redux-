import Card from '../UI/Card';
import './Chart.css';
import ChartBar from './ChartBar';

const Chart = ({ dataPoints }) => {
  const totalMax = Math.max(...dataPoints.map(dp => dp.value));

  return (
    <Card>
      <div className='chart'>
        {dataPoints.map(dataPoint => (
          <ChartBar {...dataPoint} key={dataPoint.label} maxValue={totalMax} />
        ))}
      </div>
    </Card>
  );
};

export default Chart;
