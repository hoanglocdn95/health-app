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
  RECOMMEND_DATE = 'yyyy.MM.dd',
  RECOMMEND_TIME = 'hh.mm',
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
      },
      grid: {
        drawBorder: false,
        display: false,
      },
    },
    x: {
      ticks: {
        color: COLOR.light,
        beginAtZero: true,
        min: 0,
        max: 120,
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
