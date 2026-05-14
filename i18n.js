/** UI strings: ko / en / zh-Hans / zh-Hant. Proxima Nova: wire Adobe Fonts kit in index.html. */
(function () {
  const STORAGE_KEY = "niusn-lang";

  const LANG_MENU = [
    { code: "en", label: "English", short: "EN" },
    { code: "ko", label: "한국어", short: "KR" },
    { code: "zh-Hans", label: "简体中文", short: "简体" },
    { code: "zh-Hant", label: "繁體中文", short: "繁體" },
  ];

  const STRINGS = {
    ko: {
      "doc.title": "NIUSN · Hong Kong Comic Con 2026",
      "lang.label": "언어",
      "lang.triggerAria": "언어 선택",
      "lang.menuAria": "언어 목록",
      "lang.ariaEn": "English (EN)",
      "lang.ariaKo": "한국어 (KR)",
      "lang.ariaHans": "간체中文",
      "lang.ariaHant": "繁體中文",
      skip: "본문으로 건너뛰기",
      "logo.aria": "NIUSN: 페이지 상단으로",
      "nav.label": "주요 메뉴",
      "nav.menu": "메뉴",
      "nav.event": "홍콩 코믹콘",
      "nav.program": "프로그램",
      "nav.schedule": "스케줄",
      "nav.prizes": "상품 · 경품",
      "nav.booth": "부스",
      "nav.about": "무엇을 하나요",
      "nav.whatWeDo": "무엇을 하나요",
      "nav.contact": "문의",
      "sound.off": "OFF",
      "sound.on": "ON",
      "sound.toggleAria": "배경 앰비언트 음악 켜기/끄기",
      "page.wfComicKicker": "COMIC CON 2026",
      "page.wfComicWhen": "5월 29 – 31 · 홍콩 HKCEC",
      "page.wfReadyLine": "Be ready for the Next Era",
      "page.wfCinemaLine": "다가오는 AI 시네마의 시대",
      "page.wfCinemaLineHtml":
        "<span class=\"wf-hero__cinema-line\"><span class=\"wf-hero__cinema-line__pre\">where ai becomes</span><span class=\"wf-hero__cinema-line__word\">cinema</span></span>",
      "page.wfKicker1": "다가오는",
      "page.wfKicker2": "AI",
      "page.wfKicker3": "시네마",
      "page.wfKicker4": "시대",
      "page.wfNiusnLineHtml": "<span class=\"page-title__sig\">NIUSN</span>",
      "boothInfo.title": "Booth Information (부스 안내)",
      "boothInfo.mapLabel": "전시장 맵(스타일 아트, NIUSN 3E-D29)",
      "boothInfo.mapBoardAria": "기판·네온 느낌의 Hall 3E 맵, NIUSN 전시 부스 3E-D29 강조",
      "boothInfo.legendMain": "Main",
      "boothInfo.legendStage": "Stage",
      "boothInfo.legendArtist": "Artist Alley",
      "boothInfo.mapNote": "NIUSN 전시 부스: HKCEC 3F Hall 3E · #3E-D29 (최종은 현장 도면과 동일)",
      "boothInfo.mapImageAlt": "기판(회로) 스타일의 Hall 3E 전시장 맵, NIUSN #3E-D29(홍콩 HKCEC 3F)",
      "boothInfo.mapScrollHint": "좌우로 밀어 전체 도면 보기",
      "mapIg.boardAria": "홍콩 HKCEC 3F Hall 3E 개략, NIUSN 전시 부스 3E-D29",
      "mapIg.niusnAria": "NIUSN 전시 부스, 3E-D29",
      "mapIg.location": "HKCEC · 3F · Hall 3E",
      "mapIg.schematic": "개략도 · 실제와 축척·간격이 다를 수 있음",
      "mapIg.stageDir": "메인 홀 & 동선 →",
      "mapIg.blockD": "D 구역 · 전면 통로",
      "mapIg.here": "HERE",
      "mapIg.niusnName": "NIUSN",
      "mapIg.aisleLabel": "WALKING AISLE",
      "mapIg.blockC": "C 구역 · (참고)",
      "mapIg.legendGroupAria": "도면 범례",
      "mapIg.legendNiusn": "NIUSN 부스(찾을 위치)",
      "mapIg.legendOther": "다른 전시",
      "mapIg.disclaimer": "3E-D29 · HKCEC Hall 3E",
      "mapIso.kicker": "이소메트릭 “보드” 느낌 · 3일 일정, 홀, 당일 부스를 한눈에 (축척·실제와 다름)",
      "mapIso.boardListAria": "3일, 홀, 스테이지, 대략 D열 부스(참고)",
      "mapIso.tileFri": "5.29 금",
      "mapIso.openHours": "10:00 개장",
      "mapIso.tileHall3e": "Hall 3E",
      "mapIso.tileL3": "HKCEC · 3F",
      "mapIso.tileSat": "5.30 토",
      "mapIso.tileStage": "스테이지",
      "mapIso.tileHallE": "Hall E & 동선",
      "mapIso.tileSun": "5.31 일",
      "mapIso.closes7": "19:00 폐장",
      "boothInfo.openDetail": "상세 맵(확대)",
      "boothInfo.skipToMap": "부스 안내로 이동 ↓",
      "boothInfo.ctaMain": "부스 안내",
      "boothInfo.landingEyebrow": "홍콩 코믹콘 2026",
      "boothInfo.landingH2": "부스 · 위치",
      "boothInfo.landingTime": "5.29(금) 오전 10:00 – 5.31(일) 오후 7:00",
      "boothInfo.calloutKicker": "NIUSN 전시 부스",
      "boothInfo.calloutBoothId": "#3E-D29",
      "boothInfo.calloutVenue": "HKCEC, 3F Hall 3E",
      "page.wfNiusnWord": "NIUSN",
      "page.wfComicOnLine": "COMIC CON 2026",
      "boothEventPage.title": "NIUSN · Hong Kong Comic Con 2026 — Booth",
      "boothEventPage.h1": "Booth / 이벤트",
      "boothEventPage.lede": "전시 맵·일정·부스 이벤트",
      "boothEventPage.back": "전체 랜딩으로",
      "boothEventPage.spectacleHeading": "운영 시간 · 부스 도면 · Hall & 스테이지",
      "boothEventPage.spectacleTime": "5.29(금) 오전 10:00 – 5.31(일) 오후 7:00",
      "boothEventPage.spectacleMapHint": "개략도 & #3E-D29 ↓",
      "boothEventPage.spectacleBooth": "NIUSN 전시 부스 #3E-D29 · HKCEC 3F Hall 3E",
      "boothEventPage.beHeroKicker": "운영 시간",
      "boothEventPage.beHeroVenueK": "장소",
      "doc.titleBooth": "부스 이벤트 · NIUSN — Hong Kong Comic Con 2026",
      "program.scheduledGroupAria": "스케줄 이벤트·부스 이벤트 시간",
      "program.scheduledLabel": "Scheduled event",
      "program.boothEventLabel": "Booth event",
      "program.scheduledTime": "5.29(금) 오전 10:00 – 5.31(일) 오후 7:00",
      "program.boothTimeSame": "5.29(금) 오전 10:00 – 5.31(일) 오후 7:00",
      "program.venueBlock": "홍콩 HKCEC, 3F. Hall E and Stage.",
      "program.exhibLineHtml":
        "<span class=\"strong\">NIUSN</span> — 전시 부스 · HKCEC, 3F, Hall 3E · <span class=\"mono\">#3E-D29</span>",
      "program.venueGroupAria": "전시 부스 위치",
      "page.title": "NIUSN, AI가 시네마가 되는 곳",
      "page.titleHtml":
        "<span class=\"page-title__sig\">NIUSN</span><span class=\"page-title__body\">, AI가 시네마가 되는 곳</span>",
      "page.subline": "홍콩 코믹콘 2026",
      "hero.panel": "보조 패널",
      "hero.countdownEyebrow": "개막 카운트다운",
      "hero.tagline": "다음 시대를 향한 준비, 지금부터",
      "hero.eventKicker": "NIUSN × 홍콩 코믹콘",
      "hero.eventDates": "2026년 5월 29일부터 31일까지",
      "hero.eventTimes": "부스: 금 10:00 – 일 19:00 (HKT)",
      "hero.boothLine": "HKCEC 3F · Hall 3E · #3E-D29",
      "hero.eventVenue": "홍콩 컨벤션 전시센터 (HKCEC)",
      "hero.playAria": "재생 (와이어프레임)",
      "hero.posterLabel": "메인 포스터 또는 하이라이트 영상",
      "hero.quickLinks": "바로가기",
      "hero.boothMap": "부스 도면",
      "program.title": "행사 프로그램",
      "program.lede": "스테이지 토크·FAQ. (부스·맵·인부스는 위 \"Booth event\" 섹션.)",
      "program.hoursGroupAria": "NIUSN 부스 및 부스 이벤트 운영 시간",
      "program.hoursLabel": "부스 · 인부스 이벤트",
      "program.hoursRange": "5월 29일(금) 10:00 – 5월 31일(일) 19:00 (HKT)",
      "program.faqLead": "현장에서 자주 묻는 질문",
      "booth.cardTitle": "부스 찾기",
      "booth.cardMeta": "HKCEC 3F, Hall 3E · 메인·아티스트 알리 동선",
      "booth.cardNumber": "#3E-D29",
      "booth.openMap": "층별 도면보기",
      "events.photoBadge": "인부스",
      "events.photoTitle": "NIUSN 포토 이벤트",
      "events.runTime": "행사 3일간, 개장~폐장(현장 기준)",
      "events.photoBody":
        "시네마틱 포토존에 들어와 히어로가 되어 보세요. 촬영에 참여하면 AI 슬롯머신의 스핀 획득 기회가! 골드, 캐릭터 백, 기타 굿즈까지. NIUSN은 #3E-D29에서 기다릴게요.",
      "boothSlot.badge": "인부스 이벤트",
      "boothSlot.titleKicker": "NIUSN PHOTO EVENT",
      "boothSlot.titleGold": ": Win a GOLD!",
      "boothSlot.hours": "5.29(금) 오전 10:00 – 5.31(일) 오후 7:00",
      "boothSlot.bodyHtml":
        '<p class="booth-slot-showcase__p">시네마틱 포토존에 들어와 히어로가 되어 보세요. 이 순간을 담으면 <strong>슬롯 머신</strong> 스핀을 얻을 수 있어요.</p><p class="booth-slot-showcase__p">1위의 전설을 가져갈 수 있을까요? <strong>골드</strong>, 캐릭터 백, 다양한 굿즈가 기다립니다.</p><p class="booth-slot-showcase__p booth-slot-showcase__p--foot">꼭 들러 주세요. NIUSN은 <span class="booth-booth-pill" aria-label="부스 번호">#3E-D29</span>에 있어요.</p>',
      "boothSlot.kioskLabel": "부스 체험 · 55″ 세로 스탠딩 디스플레이",
      "boothSlot.kioskGroupAria": "포토존·슬롯 체험(세로 55″)의 추상 시각화",
      "boothSlot.bevMuralTag": "인부스 설치 · 55″ 세로 · 축척·실물과 다를 수 있음",
      "events.speechBadge": "스테이지",
      "events.speechTitle": "NIUSN 코믹콘 스피치",
      "events.speechTime": "키노트 시간 · HKCEC 현장 스테이지 안내 확인",
      "events.speechBody":
        "NIUSN 박석환 CEO의 키노트. 브랜드, 비전, AI로 전통을 다시 쓰는 일에 대해 이야기합니다.",
      "schedule.title": "스케줄",
      "schedule.type": "유형",
      "schedule.time": "시간",
      "schedule.titleCol": "제목",
      "schedule.place": "장소",
      "schedule.booth": "부스",
      "schedule.tabListAria": "일정 탭 · 자주 묻는 질문",
      "schedule.tabFaqs": "FAQs",
      "schedule.day1Num": "DAY 01",
      "schedule.day1Date": "2026년 5월 29일 (금)",
      "schedule.s1time": "오전 9:00",
      "schedule.s1title": "등록 · 입장",
      "schedule.s1meta": "메인 로비 · HKCEC",
      "schedule.s2time": "오전 10:00",
      "schedule.s2title": "오프닝 세레모니",
      "schedule.s2meta": "메인 홀 · 미정",
      "schedule.s3time": "오후 12:30",
      "schedule.s3title": "점심 · 휴식",
      "schedule.s3meta": "자유 · TBC",
      "schedule.day2Num": "DAY 02",
      "schedule.day2Date": "2026년 5월 30일 (토)",
      "schedule.s4time": "오전 10:00",
      "schedule.s4title": "패널 · 쇼케이스",
      "schedule.s4meta": "엑스포 플로어 · TBC",
      "schedule.s5time": "오후 3:00",
      "schedule.s5title": "커뮤니티 밋업",
      "schedule.s5meta": "부스 존 · TBC",
      "schedule.day3Num": "DAY 03",
      "schedule.day3Date": "2026년 5월 31일 (일) · TBC",
      "schedule.s6time": "오전 10:00",
      "schedule.s6title": "클로징 · 시상",
      "schedule.s6meta": "메인 홀 · TBC",
      "schedule.s7time": "오후 4:00",
      "schedule.s7title": "전시 종료 · 퇴장",
      "schedule.s7meta": "HKCEC · TBC",
      "schedule.faqLead": "자주 묻는 질문 · 행사 전 공지 예정",
      "schedule.faqQ1": "부스는 어디에 있나요?",
      "schedule.faqA1": "홍콩 컨벤션 센터 3층, Hall 3E, #3E-D29입니다. 바로 위 Booth event 섹션의 층 맵, 또는 [상세 맵] 버튼을 쓰세요.",
      "schedule.faqQ2": "경품은 어떻게 받나요?",
      "schedule.faqA2": "포토존 촬영 후 현장 AI 슬롯 스핀(재고 소진 시까지)으로 진행됩니다.",
      "schedule.faqQ3": "메인 스테이지는 어디인가요?",
      "schedule.faqA3": "홍콩 코믹콘 쇼플로어에 있습니다. 키노트는 현장 사인·시간표를 따르세요.",
      "booth.label": "부스",
      "prizes.title": "부스 경품",
      "prizes.subtitle": "슬롯에 돌리고, 전설적인 한 점을 가져가세요.",
      "prizes.kicker": "NIUSN 포토 이벤트",
      "prizes.headlineHtml": "<span class=\"prize-gold\">GOLD</span> 를 노릴 기회",
      "prizes.lede": "시네마틱 포토 세트, AI 슬롯 스핀, 1등에 도전. 수량은 한정입니다.",
      "prizes.tier1": "1위 · 골드 그랑프리",
      "prizes.tier2": "캐릭터 백 & 한정 머천",
      "prizes.tier3": "#3E-D29 · 현장에서만",
      "prizes.cta": "부스로 가기",
      "prizes.listTitle": "경품",
      "wwd.summary":
        "박석환 NIUSN CEO의 키노트로 브랜드 아이덴티티를 소개하고, 첨단 AI로 클래식을 어떻게 다시 쓰는지 직접 보여 드립니다. 기술이 순수한 아티스트리와 맞닿는 순간을 꼭 함께하세요. NIUSN은 콘텐츠 제작에 머무르지 않고 기술로 교육의 미래를 다시 정의합니다. AI로 완성하는 월드클래스 애니메이션으로, 이전에 경험하지 못한 새로운 교육의 기준을 세우고 있습니다.",
      "wwd.displayPrimaryHtml":
        '<span class="wwd-line"><span class="word">박석환 NIUSN CEO의 키노트로</span></span><span class="wwd-line"><span class="word">브랜드 아이덴티티를 소개하고</span></span><span class="wwd-line"><span class="word">첨단 AI로 클래식을</span></span><span class="wwd-line"><span class="word">어떻게 다시 쓰는지 직접 보여 드립니다.</span></span><span class="wwd-line"><span class="word">기술이 순수한 아티스트리와 맞닿는</span></span><span class="wwd-line"><span class="word">순간을 꼭 함께하세요.</span></span>',
      "wwd.displaySecondaryHtml":
        '<span class="wwd-line"><span class="word">NIUSN은 콘텐츠 제작에</span></span><span class="wwd-line"><span class="word">머무르지 않고</span></span><span class="wwd-line"><span class="word">기술로 교육의 미래를 다시 정의합니다.</span></span><span class="wwd-line"><span class="word wwd-accent">AI</span><span class="word">로 완성하는 월드클래스 애니메이션으로,</span></span><span class="wwd-line"><span class="word">이전에 경험하지 못한 새로운 교육의 기준을 세우고 있습니다.</span></span>',
      "contact.lede1": "행사든, 제휴나 보도·미디어나 인사 차 연락이든?",
      "contact.lede2": "편하게 남겨 주세요, 메시지 보내셔도 돼요. 하나하나 다 읽어요. 약속.",
      "contact.titleHtml":
        '함께 <em>이야기해요</em><span class="tk-contact__title-dot">.</span>',
      "contact.ledeHtml":
        "행사든, 제휴나 보도·미디어나 인사 차 연락이든? 편하게 남겨 주세요, 메시지 보내셔도 돼요. 하나하나 다 읽어요. 약속.",
      "contact.phEmailSample": "hello@example.com",
      "contact.phMessageLong": "무엇을 함께 만들고 싶으신가요?",
      "landing.hero.brandL1": "NIUSN",
      "landing.hero.brandL2": "ON COMIC CON 2026",
      "landing.hero.when": "5월 29일 – 31일 · 홍콩 HKCEC",
      "landing.booth.eyebrow": "부스",
      "landing.booth.titleHtml":
        '지도 속 <em>길</em>을 따라 우리를 찾아오세요<span class="tk-booth__title-dot">.</span>',
      "landing.booth.ledeHtml":
        "이 섹션이 화면에 들어오면 지도에서 메인 입구부터 부스까지 동선 안내가 자동으로 시작해요. <strong>SHOW ME THE WAY</strong>를 눌러 언제든 다시 재생할 수 있어요.",
      "landing.booth.mapIframeTitle": "NIUSN 부스 동선 맵 — HKCEC Hall 3E, D29",
      "landing.wwd.ariaLabel": "무엇을 하나요",
      "landing.wwd.eyebrow": "무엇을 하나요",
      "landing.wwd.titleHtml":
        '<em>교육의 미래</em>를 새로 씁니다<span class="nw-title-dot">.</span>',
      "landing.wwd.ledeHtml":
        "<strong>NIUSN은 콘텐츠 제작에 머무르지 않습니다.</strong> AI로 완성하는 월드클래스 애니메이션이 학습의 새 기준을 엽니다.",
      "landing.wwd.c1.titleHtml":
        '이야기에 <em>생명</em>을 불어넣습니다<span class="nw-title-dot">.</span>',
      "landing.wwd.c1.body":
        "모든 이야기는 한 번의 고동에서 시작됩니다. 당신의 고동을 찾아, 화면이 꺼진 뒤에도 남는 애니메이션을 만듭니다. 첫 아이디어부터 마지막 프레임까지요.",
      "landing.wwd.c1.cta": "@NIUSN_Official 시청",
      "landing.wwd.c2.titleHtml":
        '<em>상상</em>과 한배를 젓습니다<span class="nw-title-dot">.</span>',
      "landing.wwd.c2.body":
        "혁신은 일정을 지키게 하고, 상상력은 사람들이 머릿속에 되감는 장면을 찾게 합니다. 크루와 파이프라인이 둘 다 품에 담아, 스크린에 남는 건 기계가 아니라 이야기입니다.",
      "landing.wwd.c2.cta": "파이프라인 둘러보기",
      "landing.wwd.c3.titleHtml":
        '<em>당신과</em> 함께 만듭니다<span class="nw-title-dot">.</span>',
      "landing.wwd.c3.body":
        "가장 좋은 이야기에는 지문이 묻어 있습니다. 당신의 지문이요. 캐릭터든 장면이든 움직임이든, 당신이 믿는 것에서 시작합니다. 우리는 그것을 세상이 보게 돕습니다.",
      "landing.wwd.c3.cta": "미팅 예약하기",
      "contact.sectionTag": "문의",
      "contact.head1": "함께",
      "contact.head2": "이야기해요",
      "contact.head3": "NIUSN",
      "contact.submitCta": "연락하기",
      "contact.name": "이름",
      "contact.email": "이메일",
      "contact.subject": "제목",
      "contact.message": "메시지",
      "contact.defaultSubject": "NIUSN · Hong Kong Comic Con 2026 — 문의",
      "contact.phSubject": "무엇에 관한 문의인가요?",
      "contact.phName": "이름",
      "contact.phEmail": "이메일",
      "contact.phMessage": "메시지",
      "contact.submit": "전송",
      "scrollTopFab.aria": "맨 위로",
      "footer.snsNavAria": "SNS 링크",
      "footer.marqueeAria": "NIUSN · AI 애니메이션 스튜디오 · 홍콩 코믹콘 2026 · 장소",
      "footer.marqueeTagline": "AI 기반 애니메이션 스튜디오",
      "footer.marqueeEvent": "Hong Kong Comic Con 2026",
      "footer.marqueeVenue": "홍콩 컨벤션 전시센터 (HKCEC)",
      "footer.marqueeBoothLine": "HKCEC · Hall 3E · 부스 D29",
      "footer.copyright": "© 2026 NIUSN Corp. All rights reserved.",
      "dialog.close": "닫기",
      "dialog.boothEyebrow": "부스 위치 (개략)",
      "dialog.boothHighlight": "현재 위치 · 3E-D29",
      "dialog.mapAria": "기판·네온 느낌의 Hall 3E 맵, NIUSN 3E-D29",
      "dialog.mapCaption": "아트웍용 맵입니다. 정확한 위치는 현장 안내·사인을 따르세요.",
      "dialog.hint": "최종 PDF 도면이 나오면 여기에 연결됩니다",
    },
    en: {
      "doc.title": "NIUSN · Hong Kong Comic Con 2026",
      "lang.label": "Language",
      "lang.triggerAria": "Choose language",
      "lang.menuAria": "Select language",
      "lang.ariaEn": "English",
      "lang.ariaKo": "Korean",
      "lang.ariaHans": "Simplified Chinese",
      "lang.ariaHant": "Traditional Chinese",
      skip: "Skip to main content",
      "logo.aria": "NIUSN: back to top",
      "nav.label": "Main menu",
      "nav.menu": "Menu",
      "nav.event": "HONGKONG COMIC CON",
      "nav.program": "Program",
      "nav.schedule": "Schedule",
      "nav.prizes": "Prizes",
      "nav.booth": "BOOTH",
      "nav.about": "WHAT WE DO",
      "nav.whatWeDo": "WHAT WE DO",
      "nav.contact": "CONTACT",
      "sound.off": "OFF",
      "sound.on": "ON",
      "sound.toggleAria": "Toggle ambient background sound",
      "page.wfComicKicker": "COMIC CON 2026",
      "page.wfComicWhen": "May 29 – 31 @ Hong Kong HKCEC",
      "page.wfReadyLine": "Be ready for the Next Era",
      "page.wfCinemaLine": "Where AI Becomes Cinema",
      "page.wfCinemaLineHtml":
        "<span class=\"wf-hero__cinema-line\"><span class=\"wf-hero__cinema-line__pre\">where ai becomes</span><span class=\"wf-hero__cinema-line__word\">cinema</span></span>",
      "page.wfKicker1": "where",
      "page.wfKicker2": "ai",
      "page.wfKicker3": "becomes",
      "page.wfKicker4": "cinema",
      "page.wfNiusnLineHtml": "<span class=\"page-title__sig\">NIUSN</span>",
      "boothInfo.title": "Booth Information",
      "boothInfo.mapLabel": "Stylized exhibition map (art-directed)",
      "boothInfo.mapBoardAria": "Stylized Hall 3E plan highlighting NIUSN at booth 3E-D29",
      "boothInfo.legendMain": "Main",
      "boothInfo.legendStage": "Stage",
      "boothInfo.legendArtist": "Artist Alley",
      "boothInfo.mapNote": "NIUSN exhibition booth: HKCEC, 3F, Hall 3E — #3E-D29 (final plan may differ on site)",
      "boothInfo.mapImageAlt": "Circuit-board style Hall 3E map with NIUSN at #3E-D29, HKCEC, 3F",
      "boothInfo.mapScrollHint": "Swipe sideways to see the full plan",
      "mapIg.boardAria": "Simplified plan: Hall 3E, NIUSN at booth 3E-D29, HKCEC",
      "mapIg.niusnAria": "NIUSN booth, stand 3E-D29",
      "mapIg.location": "HKCEC · L3 · Hall 3E",
      "mapIg.schematic": "Simplified plan · not to scale",
      "mapIg.stageDir": "Main hall & flow →",
      "mapIg.blockD": "Block D · front aisle",
      "mapIg.here": "HERE",
      "mapIg.niusnName": "NIUSN",
      "mapIg.aisleLabel": "WALKING AISLE",
      "mapIg.blockC": "Block C · (reference row)",
      "mapIg.legendGroupAria": "Legend",
      "mapIg.legendNiusn": "Your booth (NIUSN)",
      "mapIg.legendOther": "Other exhibitor",
      "mapIg.disclaimer": "3E-D29 · HKCEC Hall 3E",
      "mapIso.kicker": "Isometric “board” read — three show days, halls, and our stand (schematic, not to scale)",
      "mapIso.boardListAria": "Show days, halls, stage, and D-row stalls (illustration)",
      "mapIso.tileFri": "Fri 29",
      "mapIso.openHours": "10:00 am open",
      "mapIso.tileHall3e": "Hall 3E",
      "mapIso.tileL3": "HKCEC · 3F",
      "mapIso.tileSat": "Sat 30",
      "mapIso.tileStage": "Stage",
      "mapIso.tileHallE": "Hall E & concourse",
      "mapIso.tileSun": "Sun 31",
      "mapIso.closes7": "7:00 pm",
      "boothInfo.openDetail": "Open detail map",
      "boothInfo.skipToMap": "Booth information ↓",
      "boothInfo.ctaMain": "Booth Information",
      "boothInfo.landingEyebrow": "Hong Kong Comic Con 2026",
      "boothInfo.landingH2": "Booth & location",
      "boothInfo.landingTime": "10:00 AM FRI, MAY. 29 – 7:00 PM SUN, MAY. 31",
      "boothInfo.calloutKicker": "NIUSN exhibition booth",
      "boothInfo.calloutBoothId": "#3E-D29",
      "boothInfo.calloutVenue": "HKCEC, 3F Hall 3E",
      "page.wfNiusnWord": "NIUSN",
      "page.wfComicOnLine": "COMIC CON 2026",
      "boothEventPage.title": "NIUSN · Hong Kong Comic Con 2026 — Booth",
      "boothEventPage.h1": "Booth & events",
      "boothEventPage.lede": "Floor map, hours, and what we are running on site.",
      "boothEventPage.back": "Back to full landing",
      "boothEventPage.spectacleHeading": "Event window, booth map, and venues",
      "boothEventPage.spectacleTime": "10:00 AM FRI. MAY. 29 – 7:00 PM SUN. MAY. 31",
      "boothEventPage.spectacleMapHint": "Schematic & #3E-D29 ↓",
      "boothEventPage.spectacleBooth": "NIUSN exhibition booth #3E-D29 · HKCEC, 3F Hall 3E",
      "boothEventPage.beHeroKicker": "Show window",
      "boothEventPage.beHeroVenueK": "Venue",
      "doc.titleBooth": "Booth event · NIUSN — Hong Kong Comic Con 2026",
      "program.scheduledGroupAria": "Scheduled event and booth event times",
      "program.scheduledLabel": "Scheduled event",
      "program.boothEventLabel": "Booth event",
      "program.scheduledTime": "Fri. May. 29 10:00 AM – Sun. May. 31 7:00 PM",
      "program.boothTimeSame": "Fri. May. 29 10:00 AM – Sun. May. 31 7:00 PM",
      "program.venueBlock": "Hong Kong HKCEC, 3F. Hall E and Stage.",
      "program.exhibLineHtml":
        "<span class=\"strong\">NIUSN</span> — Exhibition booth · HKCEC, 3F, Hall 3E · <span class=\"mono\">#3E-D29</span>",
      "program.venueGroupAria": "Exhibition booth location",
      "page.title": "NIUSN: where AI becomes cinema",
      "page.titleHtml":
        "<span class=\"page-title__sig\">NIUSN</span><span class=\"page-title__body\">: where AI becomes cinema</span>",
      "page.subline": "Hong Kong Comic Con 2026",
      "hero.panel": "Side panel",
      "hero.countdownEyebrow": "Countdown to opening",
      "hero.tagline": "Be ready for the Next Era",
      "hero.eventKicker": "NIUSN at Hong Kong Comic Con",
      "hero.eventDates": "29 to 31 May 2026",
      "hero.eventTimes": "Booth: Fri 10:00 AM – Sun 7:00 PM HKT",
      "hero.boothLine": "HKCEC 3F · Hall 3E · Booth #3E-D29",
      "hero.eventVenue": "Hong Kong Convention and Exhibition Centre",
      "hero.playAria": "Play (wireframe)",
      "hero.posterLabel": "Main poster or highlight video",
      "hero.quickLinks": "Quick links",
      "hero.boothMap": "Booth map",
      "program.title": "Program",
      "program.lede": "Keynote and FAQs. (Booth map and in-booth event are in the section above.)",
      "program.hoursGroupAria": "NIUSN booth and in-booth event hours",
      "program.hoursLabel": "Booth & in-booth events",
      "program.hoursRange": "Fri 29 May, 10:00 AM – Sun 31 May, 7:00 PM HKT",
      "program.faqLead": "Quick answers for the show floor",
      "booth.cardTitle": "Find the booth",
      "booth.cardMeta": "HKCEC · 3F · Hall 3E · near main & artist-alley flow",
      "booth.cardNumber": "#3E-D29",
      "booth.openMap": "Open floor map",
      "events.photoBadge": "In-booth",
      "events.photoTitle": "NIUSN Photo Event",
      "events.runTime": "10:00 AM Fri – 7:00 PM Sun (convention open hours)",
      "events.photoBody":
        "Step into our Cinematic Photo Zone, capture your moment, and earn a spin on the AI slot machine. Prizes up to 1st place: gold, fancy character bags, and more merch. Remember: NIUSN is at #3E-D29.",
      "boothSlot.badge": "In-booth event",
      "boothSlot.titleKicker": "NIUSN PHOTO EVENT",
      "boothSlot.titleGold": ": Win a GOLD!",
      "boothSlot.hours": "10:00 AM FRI, MAY. 29 – 7:00 PM SUN, MAY. 31",
      "boothSlot.bodyHtml":
        '<p class="booth-slot-showcase__p">Step into our <strong>Cinematic Photo Zone</strong> and become the hero. Capture your moment to earn a spin on the <strong>Slot Machine</strong>.</p><p class="booth-slot-showcase__p">Amazing prizes await—will you claim the <strong>legendary 1st place</strong>? <strong>Gold</strong>, fancy character bags, and more merch.</p><p class="booth-slot-showcase__p booth-slot-showcase__p--foot">Come and visit us—we&rsquo;re waiting for you. <strong>NIUSN is on <span class="booth-booth-pill" aria-label="Booth number">#3E-D29</span></strong></p>',
      "boothSlot.kioskLabel": "Booth experience · 55″ portrait display",
      "boothSlot.kioskGroupAria": "Abstract visualization: photo zone and slot, 55 inch portrait",
      "boothSlot.bevMuralTag": "In-booth build · 55″ portrait · not to scale",
      "events.speechBadge": "Stage",
      "events.speechTitle": "NIUSN Comic Con Speech",
      "events.speechTime": "Keynote time · see stage boards at HKCEC",
      "events.speechBody":
        "A keynote with Seok-hwan Park, CEO of NIUSN on brand, vision, and redefining classics with cutting-edge AI. Where technology meets artistry.",
      "schedule.title": "Schedule",
      "schedule.type": "Type",
      "schedule.time": "Time",
      "schedule.titleCol": "Title",
      "schedule.place": "Venue",
      "schedule.booth": "Booth",
      "schedule.tabListAria": "Event days and frequently asked questions",
      "schedule.tabFaqs": "FAQs",
      "schedule.day1Num": "DAY 01",
      "schedule.day1Date": "Friday, 29 May 2026",
      "schedule.s1time": "9:00 AM",
      "schedule.s1title": "Registration & doors",
      "schedule.s1meta": "Main lobby · HKCEC",
      "schedule.s2time": "10:00 AM",
      "schedule.s2title": "Opening ceremony",
      "schedule.s2meta": "Main hall · TBC",
      "schedule.s3time": "12:30 PM",
      "schedule.s3title": "Lunch break",
      "schedule.s3meta": "On your own · TBC",
      "schedule.day2Num": "DAY 02",
      "schedule.day2Date": "Saturday, 30 May 2026",
      "schedule.s4time": "10:00 AM",
      "schedule.s4title": "Panels & showcases",
      "schedule.s4meta": "Expo floor · TBC",
      "schedule.s5time": "3:00 PM",
      "schedule.s5title": "Community meetups",
      "schedule.s5meta": "Booth zone · TBC",
      "schedule.day3Num": "DAY 03",
      "schedule.day3Date": "Sunday, 31 May 2026 · TBC",
      "schedule.s6time": "10:00 AM",
      "schedule.s6title": "Closing & awards",
      "schedule.s6meta": "Main hall · TBC",
      "schedule.s7time": "4:00 PM",
      "schedule.s7title": "Floor closes · departure",
      "schedule.s7meta": "HKCEC · TBC",
      "schedule.faqLead": "Common questions · full details before the event.",
      "schedule.faqQ1": "Where is the booth?",
      "schedule.faqA1": "HKCEC, 3F, Hall 3E, stand #3E-D29. The floor map is in the Booth event section above, or tap Open detail map.",
      "schedule.faqQ2": "How do prizes work?",
      "schedule.faqA2": "Complete the photo moment for a slot spin on-site, while supplies last.",
      "schedule.faqQ3": "Where is the main stage?",
      "schedule.faqA3": "On the show floor; follow on-site boards for keynote times and locations.",
      "booth.label": "Booth",
      "prizes.title": "Prizes at the booth",
      "prizes.subtitle": "Spin, win, and take home a legendary keepsake.",
      "prizes.kicker": "NIUSN photo event",
      "prizes.headlineHtml": "Win a <span class=\"prize-gold\">GOLD</span>",
      "prizes.lede": "A cinematic photo set, a spin on the AI slot machine, and a shot at 1st place. While supplies last.",
      "prizes.tier1": "1st place · Gold grand prize",
      "prizes.tier2": "Fancy character bags and show merch",
      "prizes.tier3": "Booth #3E-D29 · on-site only",
      "prizes.cta": "Go to booth",
      "prizes.listTitle": "Prizes",
      "wwd.summary":
        "We are thrilled to announce an exclusive keynote session featuring Seok-hwan Park, CEO of NIUSN, introducing the brand identity of NIUSN and demonstrate how we are redefining classics through cutting-edge AI technology. Don’t miss the moment where technology meets pure artistry. NIUSN goes beyond being a content production company to redefine the future of education through technology. By crafting world-class animations powered by AI, we are establishing a new educational standard that has never been seen before.",
      "wwd.displayPrimaryHtml":
        '<span class="wwd-line"><span class="word">We are thrilled to announce</span></span><span class="wwd-line"><span class="word">an exclusive keynote session featuring</span></span><span class="wwd-line"><span class="word">Seok-hwan Park, CEO of NIUSN,</span></span><span class="wwd-line"><span class="word">introducing the brand identity of NIUSN and</span></span><span class="wwd-line"><span class="word">demonstrating how we are redefining classics</span></span><span class="wwd-line"><span class="word">through cutting-edge AI technology.</span></span><span class="wwd-line"><span class="word">Don’t miss the moment where technology meets pure artistry.</span></span>',
      "wwd.displaySecondaryHtml":
        '<span class="wwd-line"><span class="word">NIUSN goes beyond being a</span></span><span class="wwd-line"><span class="word">content production company to redefine the future</span></span><span class="wwd-line"><span class="word">of education through technology.</span></span><span class="wwd-line"><span class="word">By crafting world-class animations powered by </span><span class="word wwd-accent">AI</span><span class="word">,</span></span><span class="wwd-line"><span class="word">we are establishing a new educational standard that has never been seen before.</span></span>',
      "contact.lede1": "An event, a partnership, a press thing, or just hello?",
      "contact.lede2": "Drop us a line, or shoot us a message. We read every one. Promise.",
      "contact.titleHtml":
        'Let&apos;s <em>talk</em><span class="tk-contact__title-dot">.</span>',
      "contact.ledeHtml":
        "An event, a partnership, a press thing, or just hello? Drop us a line, or shoot us a message. We read every one. Promise.",
      "contact.phEmailSample": "hello@yourname.com",
      "contact.phMessageLong": "What can we make together?",
      "landing.hero.brandL1": "NIUSN",
      "landing.hero.brandL2": "ON COMIC CON 2026",
      "landing.hero.when": "May 29 – 31 @Hong Kong HKCEC",
      "landing.booth.eyebrow": "Booth",
      "landing.booth.titleHtml":
        'Follow the <em>path</em> to us<span class="tk-booth__title-dot">.</span>',
      "landing.booth.ledeHtml":
        "When you scroll here, the map automatically guides you from the main entrance to our booth. Tap <strong>SHOW ME THE WAY</strong> anytime to replay the route.",
      "landing.booth.mapIframeTitle": "NIUSN booth wayfinding map — HKCEC Hall 3E, D29",
      "landing.wwd.ariaLabel": "What we do",
      "landing.wwd.eyebrow": "What we do",
      "landing.wwd.titleHtml":
        'Redefining the <em>future of education</em><span class="nw-title-dot">.</span>',
      "landing.wwd.ledeHtml":
        "<strong>NIUSN goes beyond content creation.</strong> Our world-class animations, powered by AI, set a new standard for learning.",
      "landing.wwd.c1.titleHtml":
        'We Bring Stories to <em>Life</em><span class="nw-title-dot">.</span>',
      "landing.wwd.c1.body":
        "Every story begins with a heartbeat. We find yours, and we let the world feel it. From a first idea to a finished frame, we build animations people remember long after the screen goes dark.",
      "landing.wwd.c1.cta": "Watch @NIUSN_Official",
      "landing.wwd.c2.titleHtml":
        'We Align with <em>Imagination</em><span class="nw-title-dot">.</span>',
      "landing.wwd.c2.body":
        "Innovation keeps deliverables on schedule and repeatable. Imagination hunts the shot people replay in their heads. Crew and pipeline hold both in focus, so what lands on screen is the story, not the machinery behind it.",
      "landing.wwd.c2.cta": "Pipeline walk-through",
      "landing.wwd.c3.titleHtml":
        'We Create with <em>You</em><span class="nw-title-dot">.</span>',
      "landing.wwd.c3.body":
        "The best stories carry a fingerprint. Yours. Every character, every scene, every motion begins with what you believe in. We just help the world see it too.",
      "landing.wwd.c3.cta": "Book a call",
      "contact.sectionTag": "Contact",
      "contact.head1": "Let's",
      "contact.head2": "talk",
      "contact.head3": "NIUSN",
      "contact.submitCta": "Get in touch",
      "contact.name": "Name",
      "contact.email": "Email",
      "contact.subject": "Subject",
      "contact.message": "Message",
      "contact.defaultSubject": "NIUSN · Hong Kong Comic Con 2026 — inquiry",
      "contact.phSubject": "What is this about?",
      "contact.phName": "Name",
      "contact.phEmail": "Email",
      "contact.phMessage": "Message",
      "contact.submit": "Send",
      "scrollTopFab.aria": "Back to top",
      "footer.snsNavAria": "Social media links",
      "footer.marqueeAria": "NIUSN · AI-Powered Animation Studio · Hong Kong Comic Con 2026 · venue",
      "footer.marqueeTagline": "AI-Powered Animation Studio",
      "footer.marqueeEvent": "Hong Kong Comic Con 2026",
      "footer.marqueeVenue": "Hong Kong Convention and Exhibition Centre",
      "footer.marqueeBoothLine": "HKCEC · Hall 3E · Booth D29",
      "footer.copyright": "© 2026 NIUSN Corp. All rights reserved.",
      "dialog.close": "Close",
      "dialog.boothEyebrow": "Booth map (schematic)",
      "dialog.boothHighlight": "You are here · 3E-D29",
      "dialog.mapAria": "Stylized Hall 3E map, NIUSN at 3E-D29",
      "dialog.mapCaption": "Art-direction map; follow on-site signage for the exact stand position.",
      "dialog.hint": "We will link the final PDF when it is available",
    },
    "zh-Hans": {
      "doc.title": "NIUSN · Hong Kong Comic Con 2026",
      "lang.label": "语言",
      "lang.triggerAria": "选择语言",
      "lang.menuAria": "选择界面语言",
      "lang.ariaEn": "English（英语）",
      "lang.ariaKo": "韩语",
      "lang.ariaHans": "简体中文",
      "lang.ariaHant": "繁體中文",
      skip: "跳到正文",
      "logo.aria": "NIUSN: 返回页顶",
      "nav.label": "主导航",
      "nav.menu": "菜单",
      "nav.event": "香港动漫电玩节",
      "nav.program": "活动日程",
      "nav.schedule": "日程",
      "nav.prizes": "商品 · 奖品",
      "nav.booth": "展位",
      "nav.about": "我们做什么",
      "nav.whatWeDo": "我们做什么",
      "nav.contact": "联系",
      "sound.off": "关",
      "sound.on": "开",
      "sound.toggleAria": "环境背景声开关",
      "page.wfComicKicker": "COMIC CON 2026",
      "page.wfComicWhen": "5 月 29 – 31 · 香港 HKCEC",
      "page.wfReadyLine": "Be ready for the Next Era",
      "page.wfCinemaLine": "当人工智能成为电影",
      "page.wfCinemaLineHtml":
        "<span class=\"wf-hero__cinema-line\"><span class=\"wf-hero__cinema-line__pre\">where ai becomes</span><span class=\"wf-hero__cinema-line__word\">cinema</span></span>",
      "page.wfKicker1": "当",
      "page.wfKicker2": "AI",
      "page.wfKicker3": "成为",
      "page.wfKicker4": "电影",
      "page.wfNiusnLineHtml": "<span class=\"page-title__sig\">NIUSN</span>",
      "boothInfo.title": "Booth Information",
      "boothInfo.mapLabel": "展场风格化地图（艺术稿）",
      "boothInfo.mapBoardAria": "3E 馆风格化展位图，突出 NIUSN 3E-D29",
      "boothInfo.legendMain": "Main",
      "boothInfo.legendStage": "Stage",
      "boothInfo.legendArtist": "Artist Alley",
      "boothInfo.mapNote": "NIUSN 展位：HKCEC 3F Hall 3E — #3E-D29（以现场为准）",
      "boothInfo.mapImageAlt": "电路板风格 3E 馆展位图，标出 NIUSN #3E-D29（香港会议展览中心 3F）",
      "boothInfo.mapScrollHint": "左右滑动查看完整图",
      "mapIg.boardAria": "简图：香港会议展览中心 3F 3E 馆，NIUSN 展位 3E-D29",
      "mapIg.niusnAria": "NIUSN 展位 3E-D29",
      "mapIg.location": "香港会议展览中心 · 3F · 3E 馆",
      "mapIg.schematic": "简图展示 · 与比例以现场为准",
      "mapIg.stageDir": "主通廊与客流动线 →",
      "mapIg.blockD": "D 区 · 前通道侧",
      "mapIg.here": "此",
      "mapIg.niusnName": "NIUSN",
      "mapIg.aisleLabel": "通道",
      "mapIg.blockC": "C 区（示意）",
      "mapIg.legendGroupAria": "图例",
      "mapIg.legendNiusn": "NIUSN 展位",
      "mapIg.legendOther": "其他展方",
      "mapIg.disclaimer": "3E-D29 · HKCEC 3E 馆",
      "mapIso.kicker": "等距 “棋盘” 示意 · 三日行程与展位（非比例、仅供参考）",
      "mapIso.boardListAria": "展会三日、馆厅、舞台、D 排示意",
      "mapIso.tileFri": "5/29 周五",
      "mapIso.openHours": "10:00 开场",
      "mapIso.tileHall3e": "3E 馆",
      "mapIso.tileL3": "香港会展 · 3F",
      "mapIso.tileSat": "5/30 周六",
      "mapIso.tileStage": "主舞台区",
      "mapIso.tileHallE": "Hall E 与主通道",
      "mapIso.tileSun": "5/31 周日",
      "mapIso.closes7": "19:00",
      "boothInfo.openDetail": "查看详图",
      "boothInfo.skipToMap": "展位信息 ↓",
      "boothInfo.ctaMain": "展位信息",
      "boothInfo.landingH2": "展位与位置",
      "boothInfo.landingTime": "5 月 29 日（周五）10:00 – 5 月 31 日（周日）19:00",
      "boothInfo.calloutKicker": "NIUSN 展位",
      "boothInfo.calloutBoothId": "#3E-D29",
      "boothInfo.calloutVenue": "HKCEC，3F Hall 3E",
      "page.wfNiusnWord": "NIUSN",
      "page.wfComicOnLine": "COMIC CON 2026",
      "boothEventPage.title": "NIUSN · Hong Kong Comic Con 2026 — 展位",
      "boothEventPage.h1": "展位与活动",
      "boothEventPage.lede": "现场地图、时段与展位活动",
      "boothEventPage.back": "返回主落地页",
      "boothEventPage.spectacleHeading": "时段 · 展位图 · 场馆行",
      "boothEventPage.spectacleTime": "5 月 29 日（周五）10:00 – 5 月 31 日（周日）19:00",
      "boothEventPage.spectacleMapHint": "简图与 #3E-D29 ↓",
      "boothEventPage.spectacleBooth": "NIUSN 展览展位 #3E-D29 · HKCEC 3F Hall 3E",
      "boothEventPage.beHeroKicker": "展期 / 时间",
      "boothEventPage.beHeroVenueK": "场馆",
      "doc.titleBooth": "展位活动 · NIUSN — Hong Kong Comic Con 2026",
      "program.scheduledGroupAria": "排期与展位活动时段",
      "program.scheduledLabel": "Scheduled event",
      "program.boothEventLabel": "Booth event",
      "program.scheduledTime": "5 月 29 日（周五）10:00 – 5 月 31 日（周日）19:00",
      "program.boothTimeSame": "5 月 29 日（周五）10:00 – 5 月 31 日（周日）19:00",
      "program.venueBlock": "香港 HKCEC，3F. Hall E and Stage。",
      "program.exhibLineHtml":
        "<span class=\"strong\">NIUSN</span> — 展位 · HKCEC，3F，Hall 3E · <span class=\"mono\">#3E-D29</span>",
      "program.venueGroupAria": "展位信息",
      "page.title": "NIUSN: where AI becomes cinema",
      "page.titleHtml":
        "<span class=\"page-title__sig\">NIUSN</span><span class=\"page-title__body\">: where AI becomes cinema</span>",
      "page.subline": "香港 Comic Con 2026",
      "hero.panel": "侧栏",
      "hero.countdownEyebrow": "开幕倒计时",
      "hero.tagline": "为下一个时代做好准备",
      "hero.eventKicker": "NIUSN × 香港 Comic Con",
      "hero.eventDates": "2026年5月29日至31日",
      "hero.eventTimes": "展位：周五 10:00 – 周日 19:00（HKT）",
      "hero.boothLine": "香港会议展览中心 3F · 3E 馆 · 展位 #3E-D29",
      "hero.eventVenue": "香港会议展览中心（HKCEC）",
      "hero.playAria": "播放（线框）",
      "hero.posterLabel": "主海报或高光视频",
      "hero.quickLinks": "快捷入口",
      "hero.boothMap": "展位图",
      "program.title": "现场活动",
      "program.lede": "主舞台与 FAQ。展位、地图、展位内活动见上方 “Booth event” 板块。",
      "program.hoursGroupAria": "NIUSN 展位与展位活动开放时段",
      "program.hoursLabel": "展位与现场活动",
      "program.hoursRange": "5 月 29 日（周五）10:00 – 5 月 31 日（周日）19:00（HKT）",
      "program.faqLead": "现场常见问题",
      "booth.cardTitle": "找到我们",
      "booth.cardMeta": "香港会议展览中心 3F · 3E 馆 · 主通道与艺术家区附近",
      "booth.cardNumber": "#3E-D29",
      "booth.openMap": "打开展位图",
      "events.photoBadge": "展位内",
      "events.photoTitle": "NIUSN 主题拍照活动",
      "events.runTime": "周五 10:00 – 周日 19:00（展会开放时间内）",
      "events.photoBody":
        "进入电影感拍照区，留下你的英雄瞬间，赢取 AI 老虎机抽奖机会。大奖、角色包与更多周边，我们在 #3E-D29 等你。",
      "boothSlot.badge": "展位内活动",
      "boothSlot.titleKicker": "NIUSN PHOTO EVENT",
      "boothSlot.titleGold": ": Win a GOLD!",
      "boothSlot.hours": "5 月 29 日（周五）10:00 – 5 月 31 日（周日）19:00",
      "boothSlot.bodyHtml":
        '<p class="booth-slot-showcase__p">走进<strong>电影感拍照区</strong>，成为主角。完成拍摄，即可获得<strong>老虎机</strong>抽奖机会。</p><p class="booth-slot-showcase__p">豪礼静候——能否拿下<strong>传说级第一名</strong>？<strong>金条</strong>、主题角色包等更多周边。</p><p class="booth-slot-showcase__p booth-slot-showcase__p--foot">欢迎到访，我们恭候。NIUSN 在 <span class="booth-booth-pill" aria-label="展位号">#3E-D29</span>。</p>',
      "boothSlot.kioskLabel": "现场体验 · 55″ 竖屏立式展示机",
      "boothSlot.kioskGroupAria": "现场拍照与老虎机体验（55 英寸竖屏）抽象示意",
      "boothSlot.bevMuralTag": "展位内装置 · 55 英寸竖屏 · 仅为示意，非等比例",
      "events.speechBadge": "主舞台",
      "events.speechTitle": "NIUSN Comic Con 演讲",
      "events.speechTime": "主题演讲时间 · 以 HKCEC 现场公告为准",
      "events.speechBody":
        "NIUSN 首席执行官 Seok-hwan Park 带来主题演讲，分享品牌、愿景，以及如何用前沿 AI 重塑经典。",
      "schedule.title": "日程",
      "schedule.type": "类型",
      "schedule.time": "时间",
      "schedule.titleCol": "标题",
      "schedule.place": "地点",
      "schedule.booth": "展位",
      "schedule.tabListAria": "日程标签 · 常见问题",
      "schedule.tabFaqs": "FAQs",
      "schedule.day1Num": "DAY 01",
      "schedule.day1Date": "2026年5月29日（周五）",
      "schedule.s1time": "上午 9:00",
      "schedule.s1title": "签到 · 入场",
      "schedule.s1meta": "主大堂 · HKCEC",
      "schedule.s2time": "上午 10:00",
      "schedule.s2title": "开幕仪式",
      "schedule.s2meta": "主会场 · 待定",
      "schedule.s3time": "下午 12:30",
      "schedule.s3title": "午休",
      "schedule.s3meta": "自由安排 · TBC",
      "schedule.day2Num": "DAY 02",
      "schedule.day2Date": "2026年5月30日（周六）",
      "schedule.s4time": "上午 10:00",
      "schedule.s4title": "对谈与展示",
      "schedule.s4meta": "展区 · TBC",
      "schedule.s5time": "下午 3:00",
      "schedule.s5title": "社群见面",
      "schedule.s5meta": "展位区 · TBC",
      "schedule.day3Num": "DAY 03",
      "schedule.day3Date": "2026年5月31日（周日）· 待定",
      "schedule.s6time": "上午 10:00",
      "schedule.s6title": "闭幕 · 颁奖",
      "schedule.s6meta": "主会场 · TBC",
      "schedule.s7time": "下午 4:00",
      "schedule.s7title": "闭展 · 离场",
      "schedule.s7meta": "HKCEC · TBC",
      "schedule.faqLead": "常见问题 · 活动前公布",
      "schedule.faqQ1": "展位在哪里？",
      "schedule.faqA1": "香港会议展览中心 3F，3E 馆，#3E-D29。展位图在上方 “Booth event” 区块，或点“查看详图”。",
      "schedule.faqQ2": "奖品怎么领取？",
      "schedule.faqA2": "完成现场拍照任务后参与 AI 老虎机（礼品有限，送完即止）。",
      "schedule.faqQ3": "主舞台在哪里？",
      "schedule.faqA3": "在展会现场，请遵循指示牌与现场时间表。",
      "booth.label": "展位",
      "prizes.title": "现场奖品",
      "prizes.subtitle": "转老虎机，把纪念大奖带回家。",
      "prizes.kicker": "主题拍照活动",
      "prizes.headlineHtml": "赢取 <span class=\"prize-gold\">GOLD</span>",
      "prizes.lede": "电影感置景、AI 老虎机与冲击头奖的机会，数量有限。",
      "prizes.tier1": "一等奖 · 黄金大奖",
      "prizes.tier2": "主题角色包与现场周边",
      "prizes.tier3": "展位 #3E-D29 · 仅限现场",
      "prizes.cta": "去展位",
      "prizes.listTitle": "奖品",
      "wwd.summary":
        "我们荣幸宣布由 NIUSN CEO 朴石焕（Seok-hwan Park）带来的独家主题演讲，介绍品牌身份，并展示如何以尖端 AI 重新诠释经典。别错过科技与艺术纯粹相遇的那一刻。NIUSN 不止于内容制作公司，而以技术重塑教育的未来。我们打造由 AI 驱动的世界级动画，建立前所未见的全新教育标准。",
      "wwd.displayPrimaryHtml":
        '<span class="wwd-line"><span class="word">我们荣幸宣布由 NIUSN CEO 朴石焕（Seok-hwan Park）带来</span></span><span class="wwd-line"><span class="word">独家主题演讲，</span></span><span class="wwd-line"><span class="word">介绍品牌身份，并展示如何以尖端 </span><span class="word wwd-accent">AI</span><span class="word"> 重新诠释经典。</span></span><span class="wwd-line"><span class="word">别错过</span></span><span class="wwd-line"><span class="word">科技与艺术纯粹</span></span><span class="wwd-line"><span class="word">相遇的那一刻。</span></span>',
      "wwd.displaySecondaryHtml":
        '<span class="wwd-line"><span class="word">NIUSN 不止于</span></span><span class="wwd-line"><span class="word">内容制作公司，</span></span><span class="wwd-line"><span class="word">而以技术重塑教育的未来。</span></span><span class="wwd-line"><span class="word">我们打造由 </span><span class="word wwd-accent">AI</span><span class="word"> 驱动的世界级动画，</span></span><span class="wwd-line"><span class="word">建立前所未见的全新教育标准。</span></span>',
      "contact.lede1": "活动、合作、媒体采访，或只是打个招呼？",
      "contact.lede2": "留言或直接发消息都行。每一条我们都会认真看。说到做到。",
      "contact.titleHtml":
        '一起 <em>聊聊</em><span class="tk-contact__title-dot">。</span>',
      "contact.ledeHtml":
        "活动、合作、媒体采访，或只是打个招呼？留言或直接发消息都行。每一条我们都会认真看。说到做到。",
      "contact.phEmailSample": "hello@example.com",
      "contact.phMessageLong": "您想和我们一起创造什么？",
      "landing.hero.brandL1": "NIUSN",
      "landing.hero.brandL2": "ON COMIC CON 2026",
      "landing.hero.when": "5 月 29 – 31 日 · 香港 HKCEC",
      "landing.booth.eyebrow": "展位",
      "landing.booth.titleHtml":
        '沿着地图上的<em>路线</em>找到我们<span class="tk-booth__title-dot">。</span>',
      "landing.booth.ledeHtml":
        "滚动到本区域时，地图会自动演示从主入口到展位的路线。也可随时点击 <strong>SHOW ME THE WAY</strong> 重新播放。",
      "landing.booth.mapIframeTitle": "NIUSN 展位导览地图 — 香港会议展览中心 3E 馆 D29",
      "landing.wwd.ariaLabel": "我们做什么",
      "landing.wwd.eyebrow": "我们做什么",
      "landing.wwd.titleHtml":
        '重新定义<em>教育的未来</em><span class="nw-title-dot">。</span>',
      "landing.wwd.ledeHtml":
        "<strong>NIUSN 不止于内容创作。</strong>我们以 AI 驱动的世界级动画，树立全新的学习标杆。",
      "landing.wwd.c1.titleHtml":
        '让故事焕发<em>生命</em><span class="nw-title-dot">。</span>',
      "landing.wwd.c1.body":
        "每个故事都始于一记心动。我们找到属于你的那一记，让世界也能感受。从第一个念头到最后一帧，我们打造让人久久难忘的画面。",
      "landing.wwd.c1.cta": "观看 @NIUSN_Official",
      "landing.wwd.c2.titleHtml":
        '与<em>想象力</em>同行<span class="nw-title-dot">。</span>',
      "landing.wwd.c2.body":
        "创新让交付准时、可复现；想象力追逐人们会在脑海里反复回放的镜头。团队与流程双线并进，留在屏幕上的应是故事，而不是背后的机器。",
      "landing.wwd.c2.cta": "了解制作流程",
      "landing.wwd.c3.titleHtml":
        '与<em>你</em>共同创作<span class="nw-title-dot">。</span>',
      "landing.wwd.c3.body":
        "最好的故事带着指纹——你的指纹。每个角色、每场戏、每个动作，都从你相信的事物开始；我们帮助世界看见它。",
      "landing.wwd.c3.cta": "预约通话",
      "contact.sectionTag": "联系",
      "contact.head1": "一起",
      "contact.head2": "聊聊",
      "contact.head3": "NIUSN",
      "contact.submitCta": "联系我们",
      "contact.name": "姓名",
      "contact.email": "邮箱",
      "contact.subject": "主题",
      "contact.message": "留言",
      "contact.defaultSubject": "NIUSN · Hong Kong Comic Con 2026 — 咨询",
      "contact.phSubject": "这是关于什么的咨询？",
      "contact.phName": "姓名",
      "contact.phEmail": "邮箱",
      "contact.phMessage": "留言",
      "contact.submit": "发送",
      "scrollTopFab.aria": "返回顶部",
      "footer.snsNavAria": "社交媒体链接",
      "footer.marqueeAria": "NIUSN · AI 驱动动画工作室 · Hong Kong Comic Con 2026 · 场馆",
      "footer.marqueeTagline": "AI 驱动动画工作室",
      "footer.marqueeEvent": "Hong Kong Comic Con 2026",
      "footer.marqueeVenue": "香港会议展览中心",
      "footer.marqueeBoothLine": "HKCEC · 3E 馆 · D29 展位",
      "footer.copyright": "© 2026 NIUSN Corp. All rights reserved.",
      "dialog.close": "关闭",
      "dialog.boothEyebrow": "展位示意图",
      "dialog.boothHighlight": "你在这里 · 3E-D29",
      "dialog.mapAria": "3E 馆风格化地图，NIUSN 于 3E-D29",
      "dialog.mapCaption": "此为美术稿；准确位置以现场指示为准。",
      "dialog.hint": "最终 PDF 将在此链接",
    },
    "zh-Hant": {
      "doc.title": "NIUSN · Hong Kong Comic Con 2026",
      "lang.label": "語言",
      "lang.triggerAria": "選擇語言",
      "lang.menuAria": "選擇介面語言",
      "lang.ariaEn": "English（英語）",
      "lang.ariaKo": "韓語",
      "lang.ariaHans": "簡體中文",
      "lang.ariaHant": "繁體中文",
      skip: "跳到正文",
      "logo.aria": "NIUSN: 返回頁頂",
      "nav.label": "主導航",
      "nav.menu": "選單",
      "nav.event": "香港動漫電玩節",
      "nav.program": "活動節目",
      "nav.schedule": "日程",
      "nav.prizes": "商品 · 獎品",
      "nav.booth": "展位",
      "nav.about": "我們做什麼",
      "nav.whatWeDo": "我們做什麼",
      "nav.contact": "聯絡",
      "sound.off": "關",
      "sound.on": "開",
      "sound.toggleAria": "切換環境背景聲",
      "page.wfComicKicker": "COMIC CON 2026",
      "page.wfComicWhen": "5 月 29 – 31 · 香港 HKCEC",
      "page.wfReadyLine": "Be ready for the Next Era",
      "page.wfCinemaLine": "當人工智慧成為電影",
      "page.wfCinemaLineHtml":
        "<span class=\"wf-hero__cinema-line\"><span class=\"wf-hero__cinema-line__pre\">where ai becomes</span><span class=\"wf-hero__cinema-line__word\">cinema</span></span>",
      "page.wfKicker1": "當",
      "page.wfKicker2": "AI",
      "page.wfKicker3": "成為",
      "page.wfKicker4": "電影",
      "page.wfNiusnLineHtml": "<span class=\"page-title__sig\">NIUSN</span>",
      "boothInfo.title": "Booth Information",
      "boothInfo.mapLabel": "展場風格化圖（美術稿）",
      "boothInfo.mapBoardAria": "3E 館風格化攤位圖，突顯 NIUSN 3E-D29",
      "boothInfo.legendMain": "Main",
      "boothInfo.legendStage": "Stage",
      "boothInfo.legendArtist": "Artist Alley",
      "boothInfo.mapNote": "NIUSN 展位：HKCEC 3F Hall 3E — #3E-D29（實務以場內為準）",
      "boothInfo.mapImageAlt": "電路板風格 3E 館攤位圖，NIUSN #3E-D29 標示（香港會展 3F）",
      "boothInfo.mapScrollHint": "左右滑動檢視完整圖面",
      "mapIg.boardAria": "簡圖：香港會議展覽中心 3F 3E 館，NIUSN 展位 3E-D29",
      "mapIg.niusnAria": "NIUSN 展位 3E-D29",
      "mapIg.location": "香港會議展覽中心 · 3F · 3E 館",
      "mapIg.schematic": "簡圖說明 · 比例以現場為準",
      "mapIg.stageDir": "主通廊與動線 →",
      "mapIg.blockD": "D 區 · 前通廊側",
      "mapIg.here": "此",
      "mapIg.niusnName": "NIUSN",
      "mapIg.aisleLabel": "走道",
      "mapIg.blockC": "C 區（示意）",
      "mapIg.legendGroupAria": "圖例",
      "mapIg.legendNiusn": "NIUSN 展位",
      "mapIg.legendOther": "其他參展單位",
      "mapIg.disclaimer": "3E-D29 · HKCEC 3E 館",
      "mapIso.kicker": "等距 “棋盤風” 示意 · 三日、館別與攤位（非比例、僅參考）",
      "mapIso.boardListAria": "展期三日、廳、舞台、D 排參考",
      "mapIso.tileFri": "5/29 週五",
      "mapIso.openHours": "10:00 入場",
      "mapIso.tileHall3e": "3E 館",
      "mapIso.tileL3": "香港會展 · 3F",
      "mapIso.tileSat": "5/30 週六",
      "mapIso.tileStage": "主舞臺區",
      "mapIso.tileHallE": "Hall E 與動線",
      "mapIso.tileSun": "5/31 週日",
      "mapIso.closes7": "19:00",
      "boothInfo.openDetail": "展開詳圖",
      "boothInfo.skipToMap": "Booth 資訊 ↓",
      "boothInfo.ctaMain": "展位資訊",
      "boothInfo.landingEyebrow": "2026 香港動漫電玩節",
      "boothInfo.landingH2": "展位與位置",
      "boothInfo.landingTime": "5 月 29 日（週五）10:00 – 5 月 31 日（週日）19:00",
      "boothInfo.calloutKicker": "NIUSN 展位",
      "boothInfo.calloutBoothId": "#3E-D29",
      "boothInfo.calloutVenue": "HKCEC，3F Hall 3E",
      "page.wfNiusnWord": "NIUSN",
      "page.wfComicOnLine": "COMIC CON 2026",
      "boothEventPage.title": "NIUSN · Hong Kong Comic Con 2026 — 展位",
      "boothEventPage.h1": "展位與活動",
      "boothEventPage.lede": "現場地圖、時段與展內活動",
      "boothEventPage.back": "返回主落地頁",
      "boothEventPage.spectacleHeading": "時段 · 展位圖 · 場館行",
      "boothEventPage.spectacleTime": "5 月 29 日（週五）10:00 – 5 月 31 日（週日）19:00",
      "boothEventPage.spectacleMapHint": "簡圖與 #3E-D29 ↓",
      "boothEventPage.spectacleBooth": "NIUSN 展覽展位 #3E-D29 · HKCEC 3F Hall 3E",
      "boothEventPage.beHeroKicker": "展期／時間",
      "boothEventPage.beHeroVenueK": "場館",
      "doc.titleBooth": "展位活動 · NIUSN — Hong Kong Comic Con 2026",
      "program.scheduledGroupAria": "大會排程與展位活動時段",
      "program.scheduledLabel": "Scheduled event",
      "program.boothEventLabel": "Booth event",
      "program.scheduledTime": "5 月 29 日（週五）10:00 – 5 月 31 日（週日）19:00",
      "program.boothTimeSame": "5 月 29 日（週五）10:00 – 5 月 31 日（週日）19:00",
      "program.venueBlock": "香港 HKCEC，3F. Hall E and Stage。",
      "program.exhibLineHtml":
        "<span class=\"strong\">NIUSN</span> — 展位 · HKCEC，3F，Hall 3E · <span class=\"mono\">#3E-D29</span>",
      "program.venueGroupAria": "展位資訊",
      "page.title": "NIUSN: where AI becomes cinema",
      "page.titleHtml":
        "<span class=\"page-title__sig\">NIUSN</span><span class=\"page-title__body\">: where AI becomes cinema</span>",
      "page.subline": "香港 Comic Con 2026",
      "hero.panel": "側欄",
      "hero.countdownEyebrow": "開幕倒數",
      "hero.tagline": "為下一個時代做好準備",
      "hero.eventKicker": "NIUSN × 香港 Comic Con",
      "hero.eventDates": "2026年5月29日至31日",
      "hero.eventTimes": "展位：週五 10:00 – 週日 19:00（HKT）",
      "hero.boothLine": "香港會議展覽中心 3F · 3E 館 · 展位 #3E-D29",
      "hero.eventVenue": "香港會議展覽中心（HKCEC）",
      "hero.playAria": "播放（線框）",
      "hero.posterLabel": "主海報或高光影片",
      "hero.quickLinks": "快捷入口",
      "hero.boothMap": "展位圖",
      "program.title": "現場活動",
      "program.lede": "主舞臺與 FAQ。展位、地圖、展位內活動見上方「Booth event」板塊。",
      "program.hoursGroupAria": "NIUSN 展位與展位活動時段",
      "program.hoursLabel": "展位與場內活動",
      "program.hoursRange": "5 月 29 日（週五）10:00 – 5 月 31 日（週日）19:00（HKT）",
      "program.faqLead": "現場常見問題",
      "booth.cardTitle": "找到我們",
      "booth.cardMeta": "香港會議展覽中心 3F · 3E 館 · 主通道與藝廊動線",
      "booth.cardNumber": "#3E-D29",
      "booth.openMap": "打開展場圖",
      "events.photoBadge": "展位內",
      "events.photoTitle": "NIUSN 主題拍照活動",
      "events.runTime": "週五 10:00 – 週日 19:00（展覽開放期間內）",
      "events.photoBody":
        "走進電影感拍照區，留下你的英雄畫面，贏得 AI 老虎機抽獎。金獎、角色提袋與更多週邊，我們在 #3E-D29 等你。",
      "boothSlot.badge": "展位內活動",
      "boothSlot.titleKicker": "NIUSN PHOTO EVENT",
      "boothSlot.titleGold": ": Win a GOLD!",
      "boothSlot.hours": "5 月 29 日（週五）10:00 – 5 月 31 日（週日）19:00",
      "boothSlot.bodyHtml":
        '<p class="booth-slot-showcase__p">走進<strong>電影感拍照區</strong>，成為主角。完成拍攝，即可取得<strong>老虎機</strong>抽獎機會。</p><p class="booth-slot-showcase__p">大獎等你——能否奪下<strong>傳說級冠軍</strong>？<strong>金條</strong>、主題提袋等更多週邊。</p><p class="booth-slot-showcase__p booth-slot-showcase__p--foot">歡迎到訪。NIUSN 在 <span class="booth-booth-pill" aria-label="展位編號">#3E-D29</span>。</p>',
      "boothSlot.kioskLabel": "現場體驗 · 55″ 直式立架螢幕",
      "boothSlot.kioskGroupAria": "現場拍照與吃角子老虎體驗（55 吋直式）抽象示意",
      "boothSlot.bevMuralTag": "展內裝置 · 55 吋直式 · 純示意，非等比例",
      "events.speechBadge": "主舞臺",
      "events.speechTitle": "NIUSN Comic Con 演說",
      "events.speechTime": "主題演講時間 · 依 HKCEC 現場看板公布",
      "events.speechBody":
        "NIUSN 執行長 Seok-hwan Park 登場，分享品牌、願景，以及如何用前衛 AI 重塑經典。",
      "schedule.title": "日程",
      "schedule.type": "類型",
      "schedule.time": "時間",
      "schedule.titleCol": "標題",
      "schedule.place": "地點",
      "schedule.booth": "展位",
      "schedule.tabListAria": "日程標籤 · 常見問題",
      "schedule.tabFaqs": "FAQs",
      "schedule.day1Num": "DAY 01",
      "schedule.day1Date": "2026年5月29日（週五）",
      "schedule.s1time": "上午 9:00",
      "schedule.s1title": "簽到 · 入場",
      "schedule.s1meta": "主大堂 · HKCEC",
      "schedule.s2time": "上午 10:00",
      "schedule.s2title": "開幕儀式",
      "schedule.s2meta": "主會場 · 待定",
      "schedule.s3time": "下午 12:30",
      "schedule.s3title": "午休",
      "schedule.s3meta": "自由安排 · TBC",
      "schedule.day2Num": "DAY 02",
      "schedule.day2Date": "2026年5月30日（週六）",
      "schedule.s4time": "上午 10:00",
      "schedule.s4title": "對談與展示",
      "schedule.s4meta": "展區 · TBC",
      "schedule.s5time": "下午 3:00",
      "schedule.s5title": "社群見面",
      "schedule.s5meta": "展位區 · TBC",
      "schedule.day3Num": "DAY 03",
      "schedule.day3Date": "2026年5月31日（週日）· 待定",
      "schedule.s6time": "上午 10:00",
      "schedule.s6title": "閉幕 · 頒獎",
      "schedule.s6meta": "主會場 · TBC",
      "schedule.s7time": "下午 4:00",
      "schedule.s7title": "閉展 · 離場",
      "schedule.s7meta": "HKCEC · TBC",
      "schedule.faqLead": "常見問題 · 活動前公布",
      "schedule.faqQ1": "展位在哪裡？",
      "schedule.faqA1": "香港會議展覽中心 3F，3E 館，#3E-D29。展位圖在上方 “Booth event” 區塊，或按「展開詳圖」。",
      "schedule.faqQ2": "贈品怎麼兌領？",
      "schedule.faqA2": "完成拍照任務即可參加 AI 老虎機（贈品有限，送完為止）。",
      "schedule.faqQ3": "主舞臺在哪裡？",
      "schedule.faqA3": "在展覽大會現場，請依看板與大會節目表。",
      "booth.label": "展位",
      "prizes.title": "現場贈品",
      "prizes.subtitle": "轉出驚喜，帶回傳奇紀念。",
      "prizes.kicker": "主題拍照活動",
      "prizes.headlineHtml": "奪下 <span class=\"prize-gold\">GOLD</span>",
      "prizes.lede": "電影感佈景、AI 老虎機，以及挑戰頭獎的機會，限量提供。",
      "prizes.tier1": "一獎 · 金質大獎",
      "prizes.tier2": "主題提袋與展場週邊",
      "prizes.tier3": "展位 #3E-D29 · 僅限現場",
      "prizes.cta": "到展位去",
      "prizes.listTitle": "贈品",
      "wwd.summary":
        "我們榮幸宣布由 NIUSN CEO 朴碩煥（Seok-hwan Park）帶來的獨家主題演講，介紹品牌身份，並示範如何以尖端 AI 重新詮釋經典。別錯過科技與純粹藝術交會的瞬間。NIUSN 不僅是內容製作公司，更以技術重新定義教育的未來。我們打造由 AI 驅動的世界級動畫，建立前所未見的全新教育標準。",
      "wwd.displayPrimaryHtml":
        '<span class="wwd-line"><span class="word">我們榮幸宣布由 NIUSN CEO 朴碩煥（Seok-hwan Park）帶來</span></span><span class="wwd-line"><span class="word">獨家主題演講，</span></span><span class="wwd-line"><span class="word">介紹品牌身份，並示範如何以尖端 </span><span class="word wwd-accent">AI</span><span class="word"> 重新詮釋經典。</span></span><span class="wwd-line"><span class="word">別錯過</span></span><span class="wwd-line"><span class="word">科技與純粹藝術</span></span><span class="wwd-line"><span class="word">交會的瞬間。</span></span>',
      "wwd.displaySecondaryHtml":
        '<span class="wwd-line"><span class="word">NIUSN 不僅是</span></span><span class="wwd-line"><span class="word">內容製作公司，</span></span><span class="wwd-line"><span class="word">更以技術重新定義教育的未來。</span></span><span class="wwd-line"><span class="word">我們打造由 </span><span class="word wwd-accent">AI</span><span class="word"> 驅動的世界級動畫，</span></span><span class="wwd-line"><span class="word">建立前所未見的全新教育標準。</span></span>',
      "contact.lede1": "活動、合作、媒體採訪，或只是想打個招呼？",
      "contact.lede2": "留言或直接發訊息都行。每一則我們都會認真看。說到做到。",
      "contact.titleHtml":
        '一起 <em>聊聊</em><span class="tk-contact__title-dot">。</span>',
      "contact.ledeHtml":
        "活動、合作、媒體採訪，或只是想打個招呼？留言或直接發訊息都行。每一則我們都會認真看。說到做到。",
      "contact.phEmailSample": "hello@example.com",
      "contact.phMessageLong": "您想和我們一起創造什麼？",
      "landing.hero.brandL1": "NIUSN",
      "landing.hero.brandL2": "ON COMIC CON 2026",
      "landing.hero.when": "5 月 29 – 31 日 · 香港 HKCEC",
      "landing.booth.eyebrow": "展位",
      "landing.booth.titleHtml":
        '沿著地圖上的<em>路線</em>找到我們<span class="tk-booth__title-dot">。</span>',
      "landing.booth.ledeHtml":
        "捲動到此區域時，地圖會自動示範從主入口到展位的路線。也可隨時點選 <strong>SHOW ME THE WAY</strong> 重新播放。",
      "landing.booth.mapIframeTitle": "NIUSN 展位導覽地圖 — 香港會議展覽中心 3E 館 D29",
      "landing.wwd.ariaLabel": "我們做什麼",
      "landing.wwd.eyebrow": "我們做什麼",
      "landing.wwd.titleHtml":
        '重新定義<em>教育的未來</em><span class="nw-title-dot">。</span>',
      "landing.wwd.ledeHtml":
        "<strong>NIUSN 不僅於內容創作。</strong>我們以 AI 驅動的世界級動畫，樹立全新的學習標竿。",
      "landing.wwd.c1.titleHtml":
        '讓故事煥發<em>生命</em><span class="nw-title-dot">。</span>',
      "landing.wwd.c1.body":
        "每個故事都始於一記心動。我們找到屬於你的那一記，讓世界也能感受。從第一個念頭到最後一幀，我們打造讓人久久難忘的畫面。",
      "landing.wwd.c1.cta": "觀看 @NIUSN_Official",
      "landing.wwd.c2.titleHtml":
        '與<em>想像力</em>同行<span class="nw-title-dot">。</span>',
      "landing.wwd.c2.body":
        "創新讓交付準時、可重現；想像力追逐人們會在腦海裡反覆回放的鏡頭。團隊與流程雙線並進，留在螢幕上的應是故事，而不是背後的機器。",
      "landing.wwd.c2.cta": "了解製作流程",
      "landing.wwd.c3.titleHtml":
        '與<em>你</em>共同創作<span class="nw-title-dot">。</span>',
      "landing.wwd.c3.body":
        "最好的故事帶著指紋——你的指紋。每個角色、每場戲、每個動作，都從你相信的事物開始；我們幫助世界看見它。",
      "landing.wwd.c3.cta": "預約通話",
      "contact.sectionTag": "聯絡",
      "contact.head1": "一起",
      "contact.head2": "聊聊",
      "contact.head3": "NIUSN",
      "contact.submitCta": "聯絡我們",
      "contact.name": "姓名",
      "contact.email": "信箱",
      "contact.subject": "主旨",
      "contact.message": "留言",
      "contact.defaultSubject": "NIUSN · Hong Kong Comic Con 2026 — 諮詢",
      "contact.phSubject": "這是關於什麼？",
      "contact.phName": "姓名",
      "contact.phEmail": "信箱",
      "contact.phMessage": "留言",
      "contact.submit": "送出",
      "scrollTopFab.aria": "返回頂部",
      "footer.snsNavAria": "社群媒體連結",
      "footer.marqueeAria": "NIUSN · AI 驅動動畫工作室 · Hong Kong Comic Con 2026 · 場館",
      "footer.marqueeTagline": "AI 驅動動畫工作室",
      "footer.marqueeEvent": "Hong Kong Comic Con 2026",
      "footer.marqueeVenue": "香港會議展覽中心",
      "footer.marqueeBoothLine": "HKCEC · 3E 館 · D29 展位",
      "footer.copyright": "© 2026 NIUSN Corp. All rights reserved.",
      "dialog.close": "關閉",
      "dialog.boothEyebrow": "展位示意圖",
      "dialog.boothHighlight": "你在這裡 · 3E-D29",
      "dialog.mapAria": "3E 館風格化圖，NIUSN 在 3E-D29",
      "dialog.mapCaption": "此為美術稿；實際位置以場內指標為準。",
      "dialog.hint": "最終 PDF 將掛上連結",
    },
  };

  function normalizeLang(v) {
    if (v === "zh-CN" || v === "zh") return "zh-Hans";
    if (v === "zh-TW" || v === "zh-HK") return "zh-Hant";
    if (STRINGS[v]) return v;
    return "en";
  }

  function t(lang, key) {
    const L = STRINGS[lang] || STRINGS.en;
    if (L[key] !== undefined) return L[key];
    if (STRINGS.en[key] !== undefined) return STRINGS.en[key];
    return STRINGS.ko[key] || key;
  }

  function closeLangMenu() {
    const root = document.getElementById("lang-dropdown");
    const trigger = document.getElementById("lang-trigger");
    const menu = document.getElementById("lang-menu");
    if (root) {
      root.classList.remove("open", "is-open");
    }
    if (menu) menu.hidden = true;
    if (trigger) trigger.setAttribute("aria-expanded", "false");
  }

  function openLangMenu() {
    const root = document.getElementById("lang-dropdown");
    const trigger = document.getElementById("lang-trigger");
    const menu = document.getElementById("lang-menu");
    if (!root || !trigger || !menu) return;
    root.classList.add("open", "is-open");
    menu.hidden = false;
    trigger.setAttribute("aria-expanded", "true");
    const active =
      menu.querySelector(".lang-option.active, .lang-option.is-active") || menu.querySelector(".lang-option");
    if (active && typeof active.focus === "function") {
      active.focus({ preventScroll: true });
    }
  }

  function toggleLangMenu() {
    const root = document.getElementById("lang-dropdown");
    if (!root) return;
    if (root.classList.contains("open") || root.classList.contains("is-open")) closeLangMenu();
    else openLangMenu();
  }

  function syncLangDropdown(lang) {
    const L = normalizeLang(lang);
    const row = LANG_MENU.find((x) => x.code === L) || LANG_MENU[0];
    const labelEl = document.getElementById("lang-label") || document.getElementById("lang-trigger-label");
    if (labelEl) labelEl.textContent = row.short;
    document.querySelectorAll(".lang-option").forEach((btn) => {
      const on = btn.getAttribute("data-lang") === L;
      btn.classList.toggle("active", on);
      btn.classList.toggle("is-active", on);
      btn.setAttribute("aria-selected", on ? "true" : "false");
    });
  }

  function initLangDropdown() {
    const root = document.getElementById("lang-dropdown");
    const trigger = document.getElementById("lang-trigger");
    const menu = document.getElementById("lang-menu");
    if (!root || !trigger || !menu) return;

    trigger.addEventListener("click", (e) => {
      e.stopPropagation();
      toggleLangMenu();
    });

    menu.querySelectorAll(".lang-option").forEach((btn) => {
      btn.addEventListener("click", (e) => {
        e.stopPropagation();
        const code = btn.getAttribute("data-lang");
        if (code) applyLang(code);
        document.dispatchEvent(new CustomEvent("niusn:close-mobile-nav"));
      });
    });

    document.addEventListener("click", (e) => {
      if (!e.target.closest("#lang-dropdown")) closeLangMenu();
    });

    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") closeLangMenu();
    });
  }

  function applyLang(lang) {
    const dropdown = document.getElementById("lang-dropdown");
    const hadOpenMenu =
      dropdown &&
      (dropdown.classList.contains("open") || dropdown.classList.contains("is-open"));

    /** Drop transitions while closing + swapping strings so glass tweens cannot fight layout reflow. */
    function endLangSwitcherTransitionPass() {
      if (!hadOpenMenu || !dropdown) return;
      requestAnimationFrame(() => {
        requestAnimationFrame(() => dropdown.classList.remove("lang-ui-skip-transitions"));
      });
    }

    try {
      if (hadOpenMenu && dropdown) dropdown.classList.add("lang-ui-skip-transitions");
      closeLangMenu();

      const L = normalizeLang(lang);
      document.documentElement.lang = L;
      try {
        localStorage.setItem(STORAGE_KEY, L);
      } catch (_) {}

      const titleKey = document.documentElement.getAttribute("data-title-key");
      document.title = t(L, titleKey || "doc.title");

      document.querySelectorAll("[data-i18n]").forEach((el) => {
        const key = el.getAttribute("data-i18n");
        if (!key) return;
        el.textContent = t(L, key);
      });

      document.querySelectorAll("[data-i18n-html]").forEach((el) => {
        const key = el.getAttribute("data-i18n-html");
        if (!key) return;
        el.innerHTML = t(L, key);
      });

      document.querySelectorAll("[data-i18n-attr]").forEach((el) => {
        const spec = el.getAttribute("data-i18n-attr");
        if (!spec || !spec.includes(":")) return;
        const [attr, key] = spec.split(":").map((s) => s.trim());
        el.setAttribute(attr, t(L, key));
      });

      document.querySelectorAll("[data-i18n-placeholder]").forEach((el) => {
        const key = el.getAttribute("data-i18n-placeholder");
        if (key) el.setAttribute("placeholder", t(L, key));
      });

      document.querySelectorAll(".schedule-table tbody td[data-label-key]").forEach((td) => {
        const key = td.getAttribute("data-label-key");
        if (key) td.setAttribute("data-label", t(L, key));
      });

      syncLangDropdown(L);

      window.dispatchEvent(new CustomEvent("niusn:lang", { detail: { lang: L } }));
    } finally {
      endLangSwitcherTransitionPass();
    }
  }

  function init() {
    let stored = null;
    try {
      stored = localStorage.getItem(STORAGE_KEY);
    } catch (_) {}
    if (!stored) {
      stored = "en";
    }
    applyLang(stored);
    initLangDropdown();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }

  window.NIUSN_I18N = { applyLang, t, STRINGS };
})();
