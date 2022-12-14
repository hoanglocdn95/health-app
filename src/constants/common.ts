import { COLOR } from './theme';

export enum NAVIGATION_MENU {
  // Title in navbar header
  CHALLENGE = 'チャレンジ',
  NEWS = 'お知らせ',
  // Title in menu list
  MY_RECORDS = '自分の記録',
  WEIGHT_CHART = '体重グラフ',
  GOAL = '目標',
  SELECTED_COURSE = '選択中のコース',
  COLUMN_LIST = 'コラム一覧',
  SETTINGS = '設定',
}

export enum FOOTER_FEATURES {
  REGISTRATION = '会員登録',
  OPERATING_COMPANY = '運営会社',
  TERMS = '利用規約',
  HANDLE_PERSONAL_INFORMATION = '個人情報の取扱について',
  SPECIFIED_COMMERCIAL_TRANSACTION = '特定商取引法に基づく表記',
  CONTACT_US = 'お問い合わせ',
}

export enum LOAD_MORE {
  RECORD = '記録をもっと見る',
  DIARY = '自分の日記をもっと見る',
  COLUMN = 'コラムをもっと見る',
}

export const LIMIT_ITEM_PER_PAGE = 8;

export enum DATE_FORMAT {
  MEAL_HISTORY = 'MM.dd',
  ACHIEVEMENT_RATE = 'MM/dd',
  DEFAULT_DATE = 'yyyy.MM.dd',
  DEFAULT_TIME = 'hh:mm',
}

export const RECOMMEND_TOPIC = {
  COLUMN: 'オススメ',
  DIET: 'ダイエット',
  BEAUTY: '美容',
  HEALTH: 'オススメ',
};

export const CONFIG_LINE_CHART = {
  responsive: true,
  plugins: {
    legend: {
      display: false,
    },
  },
  scales: {
    y: {
      ticks: {
        display: false,
        major: {
          enabled: true,
          dash: [100, 100, 100],
        },
      },
      grid: {
        drawBorder: false,
        display: false,
      },
    },
    r: {
      max: 100,
      min: 0,
      ticks: {
        stepSize: 20,
      },
    },
    x: {
      offset: true,
      ticks: {
        color: COLOR.light,
        padding: 5,
        textStrokeWidth: 100,
        stepSize: 200,
        major: {
          enabled: true,
          dash: [100, 100, 100],
        },
      },
      grid: {
        color: COLOR.light,
        borderColor: COLOR.light,
      },
    },
  },
};

export const RECORD_TOPICS = {
  'BODY RECORD': '自分のカラダの記録',
  'MY EXERCISE': '自分の運動の記録',
  'MY DIARY': '自分の日記',
};

export const INTERVAL_LABELS = {
  DAY: '日',
  WEEK: '週',
  MONTH: '月',
  YEAR: '年',
};

export const UNIT_CALORIES = 'cal';
