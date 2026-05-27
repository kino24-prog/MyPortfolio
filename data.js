const profile = {
  name: "木下諒",
  title: "ゲームプログラマー志望",
  tagline: "Unity / C# を中心に、チーム制作で遊びの手触りを形にしています。",
  bio: [
    "ゲームプログラマーを志望している木下諒です。",
    "UnityとC#を使った2Dゲーム制作を中心に、ゲームジャムでのチーム開発を経験しています。",
    "プレイヤー操作やステージギミックの実装に加えて、仕様書作成、音響制作、楽曲制作にも関わってきました。",
    "チームの中で遊びやすさと実装のしやすさを考えながら、作品を完成まで持っていくことを大切にしています。"
  ],
  links: {
    x: "https://x.com/pita2pita6?s=21",
    instagram: "https://www.instagram.com/kinopita_24?igsh=MThxdHd4ZHFheTFhdw%3D%3D&utm_source=qr",
    github: "https://github.com/kino24-prog",
    email: "mailto:ste1020ki_24@icloud.com"
  }
};

const projects = [
  {
    title: "Plan to Play 2carD",
    description: "カード効果を組み合わせてステージをクリアする2Dアクションゲーム",
    url: "https://bitsummit-gamejam.itch.io/plan-to-play-2-card",
    period: "2026年2月〜2026年5月",
    teamSize: 9,
    role: ["プレイヤー操作", "ステージギミック", "音響制作"],
    technologies: ["Unity", "C#"],
    jam: "BitSummitGameJam2026",
    visual: "card-action",
    image: "assets/plan-to-play-2card.png",
    highlights: [
      "プレイヤーが不快に感じにくい操作感を意識して、ジャンプや移動を調整",
      "ステージギミックと音響設計を組み合わせ、遊びのテンポを整えた"
    ],
    challenges: [
      "開発途中でリードプログラマーが離脱した状況で、ステージ作成、追加仕様実装、バグ修正、ビルド対応を急ピッチで進めた"
    ]
  },
  {
    title: "神域クラッシャーズ",
    description: "リズムに合わせて建物を壊す2Dリズムゲーム",
    url: "https://itch.io/jam/ggx-nexus-jam/rate/4178603",
    period: "2025年11月〜2026年1月",
    teamSize: 9,
    role: ["仕様書作成", "ゲームシステム設計", "アニメーションフロー設計", "楽曲制作"],
    technologies: ["Unity", "C#"],
    jam: "GGX NEXUS JAM",
    visual: "rhythm-break",
    image: "assets/kaminari-crashers.png",
    highlights: [
      "操作感に合う効果音やBGMを選定・作成し、プレイ中の気持ちよさが伝わる音響にした"
    ],
    challenges: [
      "制作進行が厳しくなる中で、展示準備、印刷物デザインの入稿、トレーラー制作の指示を担当",
      "展示当日は作品プレゼンも担当し、制作外のタスクまで最後までやり切った"
    ]
  }
];

const skills = [
  {
    category: "Programming",
    items: ["Unity", "C#", "2Dゲーム実装"]
  },
  {
    category: "Game Implementation",
    items: ["プレイヤー操作", "ステージギミック", "操作感の調整"]
  },
  {
    category: "Planning",
    items: ["仕様書作成", "ゲームシステム設計", "アニメーションフロー設計"]
  },
  {
    category: "Sound",
    items: ["音響制作", "BGM選定", "楽曲制作"]
  },
  {
    category: "Team Development",
    items: ["9人規模のチーム制作", "ゲームジャム制作", "展示準備"]
  }
];
