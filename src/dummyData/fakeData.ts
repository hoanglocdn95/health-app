import { COLOR } from "constants/theme";
import { myBodyRecord } from "./myRecord";

export const achievementRate = {
  date: "2022-05-21T00:00:00.000Z",
  percent: 75,
};

export const dataChart = {
  labels: myBodyRecord.labels,
  datasets: [
    {
      data: myBodyRecord.line1,
      borderColor: COLOR.primary_300,
      backgroundColor: COLOR.primary_300,
    },
    {
      data: myBodyRecord.line2,
      borderColor: COLOR.secondary_300,
      backgroundColor: COLOR.secondary_300,
    },
  ],
};
