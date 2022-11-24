import { COLOR } from 'constants/theme';

export const achievementRate = {
  date: '2022-05-21T00:00:00.000Z',
  percent: 75,
};

export const percentFatChart = {
  line1: [100, 90, 60, 70, 70, 65, 80, 75, 70, 62, 60, 70],
  line2: [100, 95, 90, 80, 75, 60, 55, 50, 40, 35, 30, 20],
};

export const dataChart = {
  labels: [
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
  ],
  datasets: [
    {
      data: [100, 90, 60, 70, 70, 65, 80, 75, 70, 62, 60, 70],
      borderColor: COLOR.primary_300,
      backgroundColor: COLOR.primary_300,
    },
    {
      data: [100, 95, 90, 80, 75, 60, 55, 50, 40, 35, 30, 20],
      borderColor: COLOR.secondary_300,
      backgroundColor: COLOR.secondary_300,
    },
  ],
};
