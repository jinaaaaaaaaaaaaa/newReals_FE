import * as S from './Chart.Style';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Cell,
  LabelList,
} from 'recharts';

const COLORS = ['#6F60FF', '#9F94FF', '#BDB6FF'];

type ValueItem = {
  value: number;
};

interface ChartProps {
  category: string;
  values: ValueItem[];
}

const Chart = ({ category, values }: ChartProps) => {
  return (
    <S.ChartContainer>
      <S.CenterText>{category}</S.CenterText>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={values}>
          <XAxis dataKey="name" tick={false} />
          <YAxis hide />
          <Tooltip />
          <Bar dataKey="value" radius={[10, 10, 0, 0]}>
            {values.map((_, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
            <LabelList dataKey="subCategory" position="bottom" offset={20} />
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </S.ChartContainer>
  );
};

export default Chart;
