```ts
import { en, type Translation } from "./en";

/** Korean translation. Falls back to English for any future strings not yet translated. */
export const ko: Translation = {
  ...en,
  htmlLang: "ko",
  label: "한국어",
  shortLabel: "한국어",
  flag: "🇰🇷",

  nav: {
    ...en.nav,
    products: "제품",
    flavours: "케이크 맛",
    delivery: "배송",
    howToOrder: "주문 방법",
    faq: "자주 묻는 질문",
    orderRequest: "주문 요청",
  },

  common: {
    ...en.common,
    city: "시하누크빌",
    location: "캄보디아 시하누크빌",
    openingHours: "매일 오전 10:00 – 오전 1:00",
    orderOnTelegram: "Telegram으로 주문하기",
    viewProducts: "제품 보기",
    viewProductsOnTelegram: "Telegram에서 제품 보기",
    contactOnTelegram: "Telegram으로 문의하기",
    contactHandle: "@da723에 문의하기",
    skipToContent: "본문으로 건너뛰기",
    openMenu: "메뉴 열기",
    closeMenu: "메뉴 닫기",
    language: "언어",
    chooseLanguage: "언어 선택",
  },

  hero: {
    ...en.hero,
    badge: "캄보디아 시하누크빌",
    tagline: "시하누크빌의 신선한 케이크와 아름다운 꽃",
    taglineCity: "시하누크빌",
    intro:
      "생일, 기념일 및 특별한 순간을 위한 신선한 케이크와 꽃을 준비합니다. Telegram에서 최신 사진과 가격을 확인한 후 메시지를 보내 주문해 주세요.",
    ctaBrowse: "케이크 & 꽃 보기",
    chipHours: "매일 영업 · 오전 10시 – 오전 1시",
    chipSameDay: "당일 주문 가능",
    chipDelivery: "시하누크빌 전 지역 배송",
    badgeSameDayTitle: "당일 주문",
    badgeSameDaySub: "오늘 주문 가능",
    badgeFreeTitle: "무료 배송",
    badgeFreeSub: "$20 이상 주문 시",
    imageAlt: "CK Cake & Flower의 분홍 장미로 장식된 신선한 축하 케이크",
    marquee: "Telegram에서 최신 사진 및 가격 확인 · @da723으로 주문 문의 ·",
    marqueeLink: "채널 열기 →",
  },

  products: {
    ...en.products,
    eyebrow: "제품",
    title: "신선한 케이크 & 아름다운 꽃",
    subtitle:
      "매일 신선한 케이크를 굽고 아름다운 꽃을 준비합니다. 최신 디자인, 사진 및 가격은 Telegram 채널에서 확인해 주세요. 새로운 제품과 디자인을 모두 그곳에 게시합니다.",
    bannerTitle: "Telegram에서 최신 케이크, 꽃, 사진 및 가격 보기",
    bannerSub: "사진, 디자인 및 가격은 Telegram 채널에서 매일 업데이트됩니다.",
    cakesTitle: "케이크",
    cakesText:
      "초콜릿, 딸기, 블루베리, 코코넛의 네 가지 클래식 맛으로 주문에 맞춰 신선하게 만드는 축하 케이크입니다. 새로운 디자인은 Telegram 채널에 정기적으로 게시됩니다.",
    cakesNote: "🥥 코코넛 케이크의 주문 가능 여부는 Telegram에서 직접 확인해 주세요.",
    cakesCta: "케이크 사진 & 가격 보기",
    flowersTitle: "꽃",
    flowersText:
      "생일, 기념일, 선물 및 다양한 축하 행사에 어울리는 아름다운 꽃다발과 꽃 장식입니다. 주문에 맞춰 신선하게 준비하며, 최신 꽃 디자인은 Telegram 채널에서 확인할 수 있습니다.",
    flowersNote: "💐 모든 특별한 순간을 위한 신선한 꽃다발을 준비합니다. 문의해 주세요.",
    flowersCta: "꽃 사진 & 가격 보기",
    galleryTitle: "CK Cake & Flower의 실제 케이크 & 꽃",
    galleryText:
      "실제 제품 사진입니다. 사진을 클릭하면 Telegram 채널에서 최신 디자인과 가격을 확인할 수 있습니다.",
    flowerTags: ["꽃다발", "꽃 장식", "선물", "축하"],
    helpPrefix: "주문할 준비가 되셨거나 궁금한 점이 있으신가요? Telegram에서",
    helpSuffix: "으로 문의해 주세요. 도와드리겠습니다.",
  },

  flavours: {
    ...en.flavours,
    eyebrow: "케이크 맛",
    title: "네 가지 맛있는 케이크",
    subtitle:
      "모든 케이크는 주문 후 신선하게 만들어집니다. 좋아하는 맛을 선택해 주세요. 각 맛의 사진과 가격은 Telegram 채널에서 확인할 수 있습니다.",
    confirmBadge: "주문 가능 여부: Telegram으로 확인해 주세요",
    photosCta: "Telegram에서 사진 & 가격 보기",
    items: {
      chocolate: {
        name: "초콜릿",
        note: "진하고 맛있는 초콜릿 케이크입니다. 사진과 가격은 Telegram 채널에서 확인해 주세요.",
      },
      strawberry: {
        name: "딸기",
        note: "달콤하고 신선한 딸기 케이크입니다. 사진과 가격은 Telegram 채널에서 확인해 주세요.",
      },
      blueberry: {
        name: "블루베리",
        note: "부드럽고 풍미가 가득한 블루베리 케이크입니다. 사진과 가격은 Telegram 채널에서 확인해 주세요.",
      },
      coconut: {
        name: "코코넛",
        note: "가볍고 열대적인 맛의 코코넛 케이크입니다. 주문 가능 여부는 Telegram에서 확인해 주세요.",
      },
    },
  },

  delivery: {
    ...en.delivery,
    eyebrow: "배송",
    title: "시하누크빌 전 지역 배송",
    subtitle: "도심부터 해변까지 케이크와 꽃을 고객님의 문 앞까지 배송해 드립니다.",
    imageAlt: "CK Cake & Flower의 부드러운 분홍색과 크림색 꽃다발",
    floatTitle: "🛵 무료 배송",
    floatSub: "$20 이상 주문 시",
    note:
      "배송 시간은 주문 시 Telegram을 통해 고객님과 직접 확인합니다. 고정된 배송 시간을 공개하지 않습니다. 자세한 내용은 @da723으로 문의해 주세요.",
    points: {
      map: {
        title: "시하누크빌 전 지역 배송",
        text: "시하누크빌의 모든 지역으로 케이크와 꽃을 배송합니다.",
      },
      bike: {
        title: "배송비: $1 – $1.50",
        text: "배송 위치에 따라 소액의 배송비가 부과됩니다.",
      },
      gift: {
        title: "$20 이상 주문 시 무료 배송",
        text: "$20 이상 주문하시면 배송비가 무료입니다.",
      },
      zap: {
        title: "당일 주문 가능",
        text: "오늘 필요하신가요? 당일 주문이 가능합니다. @da723으로 문의하여 확인해 주세요.",
      },
    },
  },

  howToOrder: {
    ...en.howToOrder,
    eyebrow: "주문 방법",
    title: "간단하게 주문하세요",
    subtitle: "제품을 둘러보는 것부터 배송 확인까지 세 단계면 됩니다.",
    steps: [
      {
        title: "둘러보기",
        text: "CK Cake & Flower Telegram 채널에서 최신 케이크, 꽃, 사진 및 가격을 확인하세요.",
        cta: "Telegram에서 보기",
      },
      {
        title: "선택하기",
        text: "주문하고 싶은 케이크 맛이나 꽃다발을 선택하세요.",
        cta: "제품 보기",
      },
      {
        title: "문의하기",
        text: "@da723으로 메시지를 보내 제품 재고, 가격 및 배송 정보를 확인하세요.",
        cta: "@da723에게 문의",
      },
    ],
    footerPrefix: "주문에 대해 궁금한 점이 있으신가요? Telegram에서",
    footerSuffix: "으로 문의해 주세요. 기꺼이 도와드리겠습니다.",
  },

  orderForm: {
    ...en.orderForm,
    eyebrow: "주문 요청",
    title: "여기에서 주문을 시작하세요",
    subtitle:
      "원하시는 제품을 알려주시면 나머지는 저희가 도와드리고 Telegram을 통해 주문 세부 사항을 확인해 드립니다.",
    labels: {
      ...en.orderForm.labels,
      name: "이름 *",
      contact: "연락처 *",
      product: "선택한 제품 *",
      location: "배송 장소 *",
      date: "배송 날짜 *",
      time: "희망 배송 시간 *",
    },
    placeholders: {
      ...en.orderForm.placeholders,
      name: "예: Sophea",
      contact: "전화번호 또는 Telegram 사용자 이름",
      product: "케이크 맛 또는 꽃을 선택하세요…",
      location: "예: 시하누크빌 오치헤우테알 해변 지역",
    },
    errors: {
      ...en.orderForm.errors,
      name: "이름을 입력해 주세요.",
      contact: "전화번호 또는 Telegram 사용자 이름을 입력해 주세요.",
      product: "제품을 선택해 주세요. 또는 '잘 모르겠어요'를 선택하세요.",
      location: "배송 장소를 입력해 주세요.",
      date: "배송 날짜를 선택해 주세요.",
      time: "희망 배송 시간을 선택해 주세요.",
    },
    productOptions: {
      ...en.orderForm.productOptions,
      chocolate: "초콜릿 케이크",
      strawberry: "딸기 케이크",
      blueberry: "블루베리 케이크",
      coconut: "코코넛 케이크",
      flowers: "꽃 / 꽃다발",
      unsure: "잘 모르겠어요 — 추천해 주세요",
    },
    submit: "주문 요청 보내기",
    submitting: "요청 보내는 중…",
    disclaimer:
      "이 양식을 제출하는 것은 주문 요청만 의미하며 주문이 자동으로 확정되는 것은 아닙니다. 제품 가능 여부, 최종 가격 및 배송 정보는 CK Cake & Flower가 Telegram을 통해 확인합니다.",
    disclaimerHighlight: "주문 요청만 해당",
    nextTitle: "다음에는 어떻게 되나요?",
    next1: "주문 요청을 받습니다.",
    next2: "Telegram에서 @da723으로 연락하여 제품 가능 여부와 최종 가격을 확인합니다.",
    next3: "배송 세부 사항을 확인하면 주문이 확정됩니다. 🎉",
    browseFirst: "먼저 제품 보기",
    tip:
      "💡 팁: 가장 빠른 확인을 위해 Telegram 채널에서 선택한 제품 사진을 함께 보내주세요.",
    successTitle: "감사합니다",
    successText:
      "제품 가능 여부, 최종 가격 및 배송 정보를 확인하려면 Telegram에서 @da723으로 연락해 주세요.",
    successNotePrefix:
      "주문 요청이 접수되었지만 CK Cake & Flower가 Telegram을 통해 확인하기 전까지는",
    successNoteHighlight: "확정되지 않았습니다",
    successNoteSuffix: ".",
    continueTelegram: "Telegram에서 계속하기",
    sendAnother: "다른 주문 요청 보내기",
    summary: {
      ...en.orderForm.summary,
      intro: "안녕하세요, CK Cake & Flower! 주문하고 싶습니다:",
      name: "이름",
      contact: "연락처",
      product: "제품",
      location: "배송 장소",
      date: "배송 날짜",
      time: "희망 시간",
      outro: "제품 가능 여부, 최종 가격 및 배송 정보를 확인해 주세요. 감사합니다!",
    },
  },

  faq: {
    ...en.faq,
    eyebrow: "자주 묻는 질문",
    title: "자주 묻는 질문",
    subtitle: "고객님들이 가장 많이 문의하시는 내용을 빠르게 확인하세요.",
    stillTitle: "다른 질문이 있으신가요?",
    stillText: "@da723으로 문의해 주세요. 영업시간 동안 빠르게 답변해 드립니다.",
    items: [
      {
        q: "영업시간이 어떻게 되나요?",
        a: "매일 오전 10시부터 오전 1시까지 영업합니다.",
      },
      {
        q: "어떤 케이크 맛이 있나요?",
        a: "초콜릿, 딸기, 블루베리, 코코넛 맛이 있습니다. 코코넛 케이크의 주문 가능 여부는 Telegram으로 문의해 주세요.",
      },
      {
        q: "배송이 가능한가요?",
        a: "네. 시하누크빌 전 지역으로 배송합니다.",
      },
      {
        q: "배송비는 얼마인가요?",
        a: "배송비는 $1–$1.50입니다. $20 이상 주문 시 무료 배송입니다.",
      },
      {
        q: "오늘 주문할 수 있나요?",
        a: "네, 당일 주문이 가능합니다. 오늘 주문 가능 여부와 배송 정보를 확인하려면 @da723으로 문의해 주세요.",
      },
      {
        q: "최신 제품과 가격은 어디에서 볼 수 있나요?",
        a: "최신 케이크와 꽃 사진 및 가격은 Telegram 채널에서 확인해 주세요.",
      },
    ],
  },

  footer: {
    ...en.footer,
    about:
      "캄보디아 시하누크빌의 신선한 케이크와 아름다운 꽃. 생일, 기념일 및 모든 특별한 순간을 위해 주문 제작합니다.",
    hoursTitle: "영업시간",
    hoursNote: "월요일 – 일요일, 공휴일 포함.",
    exploreTitle: "둘러보기",
    telegramTitle: "Telegram",
    telegramText: "매장에서 제공하는 최신 제품 및 가격:",
    madeWith: "제작",
    madeIn: "시하누크빌에서",
    disclaimer:
      "사진, 디자인, 가격 및 주문 가능 여부는 Telegram 채널에 게시됩니다. 최신 정보는 채널에서 확인해 주세요.",
  },

  chatbot: {
    ...en.chatbot,
    title: "CK Cake & Flower 도우미",
    status: "온라인 — 즉시 답변",
    openLabel: "CK Cake & Flower 도우미 채팅 열기",
    closeLabel: "CK Cake & Flower 도우미 닫기",
    closeChat: "채팅 닫기",
    placeholder: "케이크, 꽃, 배송에 대해 물어보세요…",
    inputLabel: "도우미에게 메시지를 입력하세요",
    sendLabel: "메시지 보내기",
    welcome:
      "안녕하세요! 👋 시하누크빌의 CK Cake & Flower에 오신 것을 환영합니다. 영업시간, 케이크 맛, 꽃, 배송 및 주문에 대해 도와드릴 수 있습니다. 무엇을 도와드릴까요?",

    chips: {
      ...en.chatbot.chips,
      hours: "🕙 영업시간",
      flavours: "🎂 케이크 맛",
      delivery: "🛵 배송 정보",
      flowers: "🌸 꽃",
      order: "📦 주문하고 싶어요",
      telegram: "💬 Telegram으로 문의",
      coconut: "🥥 코코넛 케이크가 있나요?",
      chocolate: "🍫 초콜릿 케이크",
      strawberry: "🍓 딸기 케이크",
      blueberry: "🫐 블루베리 케이크",
      cancel: "취소",
      newOrder: "새 주문 시작",
      somethingElse: "다른 질문하기",
    },

    links: {
      ...en.chatbot.links,
      seeCakes: "Telegram에서 케이크 보기",
      seeFlowers: "Telegram에서 꽃 보기",
      viewPrices: "Telegram에서 최신 가격 보기",
      openChannel: "Telegram 채널 열기",
      messageNow: "지금 @da723에게 문의",
      askCoconut: "코코넛 케이크 문의",
      sendOrder: "Telegram으로 주문 요청 보내기",
    },

    replies: {
      ...en.chatbot.replies,
      cancel: "괜찮습니다 — 취소되었습니다. 다른 도움이 필요하신가요?",
      thanks: "천만에요! 😊 다른 도움이 필요하신가요?",
      hours:
        "매일 오전 10시부터 오전 1시까지 영업합니다. 월요일부터 일요일까지 운영합니다. 🕙 영업시간 중 언제든 시하누크빌 매장을 방문해 주세요!",
      coconut:
        "🥥 네, 코코넛 케이크를 제공합니다! 주문 가능 여부는 변경될 수 있으므로 Telegram에서 확인해 주세요. @da723으로 메시지를 보내주시면 바로 알려드리겠습니다.",
      cakes:
        "🎂 저희 케이크 맛은 다음과 같습니다:\n\n🍫 초콜릿\n🍓 딸기\n🫐 블루베리\n🥥 코코넛\n\n코코넛 케이크의 주문 가능 여부는 Telegram에서 확인해 주세요. 모든 맛의 사진과 가격은 Telegram 채널에서 확인할 수 있습니다.",
      flowers:
        "🌸 모든 특별한 순간을 위한 아름다운 꽃다발과 꽃 장식을 준비합니다! 최신 꽃 디자인과 가격은 Telegram 채널에서 확인할 수 있습니다. 아래 버튼을 눌러 둘러보세요.",
      delivery:
        "🛵 시하누크빌 전 지역으로 배송합니다.\n\n• 배송비: $1 – $1.50\n• $20 이상 주문 시 무료 배송\n• 당일 주문 가능\n\n배송 시간은 Telegram을 통해 고객님과 직접 확인합니다. 고정된 배송 시간을 약속하지 않습니다.",
      prices:
        "현재 가격 정보는 여기에서 확인할 수 없습니다. 가격은 Telegram 채널에서 업데이트됩니다. 💬 아래 버튼을 눌러 최신 케이크와 꽃 사진 및 가격을 확인하거나 @da723으로 문의해 주세요.",
      sameDay:
        "⚡ 네! 당일 주문이 가능합니다. 오늘 주문 가능 여부와 배송 정보를 확인하려면 @da723으로 문의해 주세요.",
      telegram:
        "💬 Telegram으로 연락하는 방법입니다:\n\n📸 최신 사진 및 가격: Telegram 채널\n🛒 주문 및 문의: @da723\n\n영업시간(오전 10시 – 오전 1시) 동안 빠르게 답변해 드립니다.",
      somethingElse: "물론입니다! 😊 무엇을 알고 싶으신가요?",
      greeting: "안녕하세요! 😊 CK Cake & Flower에 오신 것을 환영합니다. 오늘 무엇을 도와드릴까요?",
      goodbye:
        "안녕히 가세요! 👋 CK Cake & Flower를 방문해 주셔서 감사합니다. 언제든 Telegram에서 @da723으로 문의해 주세요!",
      fallback:
        "죄송합니다. 해당 정보는 현재 제공할 수 없습니다. 최신 정보는 Telegram에서 CK Cake & Flower의 @da723으로 문의해 주세요.",
      orderIntro: "주문을 도와드리겠습니다! 🎂 몇 가지 간단한 정보만 필요합니다.",
      orderReady:
        "주문 요청을 보낼 준비가 되었습니다. 📲 아래 버튼을 눌러 Telegram에서 @da723에게 메시지를 보내주세요. 제품 가능 여부, 최종 가격 및 배송 정보를 확인해 드립니다.",
    },

    order: {
      ...en.chatbot.order,
      name: "좋습니다! 주문을 시작해 볼까요? 🎂 먼저 이름을 알려주세요.",
      contactPrefix: "감사합니다, ",
      contactSuffix: "님! 📞 어떻게 연락드리면 될까요? (전화번호 또는 Telegram 사용자 이름)",
      product:
        "무엇을 주문하시겠어요? 예: 초콜릿 케이크, 딸기 케이크, 블루베리 케이크, 코코넛 케이크 또는 꽃. (잘 모르겠다면 '잘 모르겠어요'라고 말씀하셔도 됩니다!)",
      location: "📍 시하누크빌 어디로 주문을 배송해 드릴까요?",
      date:
        "📅 언제 배송받고 싶으신가요? ('오늘', '내일' 또는 구체적인 날짜를 말씀하셔도 됩니다.)",
      time:
        "🕐 희망하시는 배송 시간은 언제인가요? (정확한 시간은 Telegram을 통해 확인해 드립니다.)",
      recapTitle: "좋습니다! 주문 요청 내용을 확인해 주세요: 🎉",
      recapWarning:
        "⚠️ 참고해 주세요: 주문은 아직 확정되지 않았습니다. 제품 가능 여부, 최종 가격 및 배송 정보는 CK Cake & Flower가 확인해야 합니다. 주문을 확정하려면 이 요청을 Telegram의 @da723에게 보내주세요. 📲",
      summaryIntro: "안녕하세요, CK Cake & Flower! 주문하고 싶습니다:",
      summaryName: "이름",
      summaryContact: "연락처",
      summaryProduct: "제품",
      summaryLocation: "배송 장소",
      summaryDate: "배송 날짜",
      summaryTime: "희망 시간",
      summaryOutro: "제품 가능 여부, 최종 가격 및 배송 정보를 확인해 주세요. 감사합니다!",
    },
  },
};
```
