// 추구미 데이터
const moods = {
  "Clean Girl": {
    color: "#f9f9f9",
    image: "images/clean_girl.png",
    desc: "깨끗하고 단정한 인상에 미니멀한 뷰티 무드를 추구하는 세련된 스타일.",
    similar: ["Acubi Core", "Light Academia"],
    coord: [
      { src: "images/clean_coord.png", desc: "흰 나시, 크롭 탑, 와이드 팬츠 등 뉴트럴 톤 의상" }
    ],
    makeup: [
      { src: "images/clean_makeup.png", desc: "결광(光)을 살린 촉촉한 베이스, 투명 립글로스" }
    ],
    items: [
      { src: "images/clean_item.png", desc: "깔끔한 슬릭백 헤어와 골드 후프 이어링" }
    ]
  },
  "Acubi Core": {
    color: "#eaeaea",
    image: "images/acubi_core.png",
    desc: "미니멀리즘과 Y2K의 시크함을 혼합한 도시적 스타일.",
    similar: ["Clean Girl", "Mob Wife"],
    coord: [
      { src: "images/acubi_coord.png", desc: "로우 라이즈 팬츠/스커트, 크롭 기장의 탑 레이어드" }
    ],
    makeup: [
      { src: "images/acubi_makeup.png", desc: "무광 피부 표현, 아이라인과 컨투어링을 강조한 시크 무드" }
    ],
    items: [
      { src: "images/acubi_item.png", desc: "블랙, 그레이, 화이트 중심의 톤온톤 매치" }
    ]
  },
  "Coquette Core": {
    color: "#fceee3",
    image: "images/coquette_core.png",
    desc: "과장된 여성미와 낭만적인 소녀 감성을 강조하는 스타일.",
    similar: ["Balletcore", "Tomato Girl"],
    coord: [
      { src: "images/coquette_coord.png", desc: "리본, 레이스, 프릴 등 여성스러운 디테일 의상 (코르셋, 새틴 드레스)" }
    ],
    makeup: [
      { src: "images/coquette_makeup.png", desc: "복숭아/딸기 톤 블러셔 강조, 도톰한 립, 풍성한 속눈썹" }
    ],
    items: [
      { src: "images/coquette_item.png", desc: "밝은 핑크/화이트 컬러의 리본 및 레이스 액세서리" }
    ]
  },
  "Dark Academia": {
    color: "#eae6e1",
    image: "images/dark_academia.png",
    desc: "고전 문학과 지성에서 영감을 받은 빈티지한 스타일.",
    similar: ["Light Academia", "Grunge Fairy"],
    coord: [
      { src: "images/dark_coord.png", desc: "트위드/체크 블레이저, 베스트(조끼), 옥스퍼드화, 플리츠 스커트" }
    ],
    makeup: [
      { src: "images/dark_makeup.png", desc: "거의 하지 않거나 눈가 주변에 음영을 준 내추럴 메이크업" }
    ],
    items: [
      { src: "images/dark_item.png", desc: "톤 다운된 브라운, 블랙, 네이비 컬러 중심" }
    ]
  },
  "Light Academia": {
    color: "#fdf6e3",
    image: "images/light_academia.png",
    desc: "밝고 낙천적인 지성미를 추구하는 스타일.",
    similar: ["Dark Academia", "Clean Girl"],
    coord: [
      { src: "images/light_coord.png", desc: "리넨 소재, 밝은 색상의 니트 조끼, 얇은 셔츠" }
    ],
    makeup: [
      { src: "images/light_makeup.png", desc: "자연스러운 생기를 살린 MLBB 립, 최소한의 톤 보정 메이크업" }
    ],
    items: [
      { src: "images/light_item.png", desc: "베이지/아이보리/파스텔 옐로우 등 밝은 컬러 중심" }
    ]
  },
  "Balletcore": {
    color: "#f9e6eb",
    image: "images/balletcore.png",
    desc: "발레리나의 우아함과 섬세한 여성성을 일상복에 접목한 스타일.",
    similar: ["Coquette Core", "Light Academia"],
    coord: [
      { src: "images/ballet_coord.png", desc: "랩 가디건, 튤 스커트, 레그 워머, 타이즈, 발레 플랫슈즈" }
    ],
    makeup: [
      { src: "images/ballet_makeup.png", desc: "깨끗하고 맑은 피부, 핑크/코랄 톤 치크와 립으로 혈색 강조" }
    ],
    items: [
      { src: "images/ballet_item.png", desc: "리본이나 레이스를 활용하며 연한 파스텔톤 컬러 중심" }
    ]
  },
  "Grunge Fairy": {
    color: "#e0d6d0",
    image: "images/grunge_fairy.png",
    desc: "몽환적인 요정 스타일에 거친 그런지 요소를 결합한 신비로운 무드.",
    similar: ["Dark Academia", "Rockstar GF"],
    coord: [
      { src: "images/grunge_coord.png", desc: "헤진 니트, 빈티지 레이스나 시스루를 여러 겹 레이어드" }
    ],
    makeup: [
      { src: "images/grunge_makeup.png", desc: "주근깨 메이크업, 눈 주변 음영/글리터로 몽환적인 느낌 강조" }
    ],
    items: [
      { src: "images/grunge_item.png", desc: "톤 다운된 그린/브라운/버건디 컬러, 낡은 가죽 부츠" }
    ]
  },
  "Mob Wife": {
    color: "#f5e4e1",
    image: "images/mob_wife.png",
    desc: "과감하고 화려한 자신감을 표현하는 스타일.",
    similar: ["Rockstar GF", "Acubi Core"],
    coord: [
      { src: "images/mob_coord.png", desc: "화려한 퍼(Fur) 코트, 애니멀 프린트(레오파드), 슬립 드레스나 가죽 의류" }
    ],
    makeup: [
      { src: "images/mob_makeup.png", desc: "스모키 아이 메이크업, 볼륨 있는 헤어, 짙은 립 컬러로 강렬함 강조" }
    ],
    items: [
      { src: "images/mob_item.png", desc: "대담하고 볼드한 골드 액세서리" }
    ]
  },
  "Tomato Girl": {
    color: "#fff0f0",
    image: "images/tomato_girl.png",
    desc: "지중해 여름 휴가에서 영감을 받은 활기차고 낭만적인 스타일.",
    similar: ["Coquette Core", "Light Academia"],
    coord: [
      { src: "images/tomato_coord.png", desc: "리넨 소재의 셔츠나 원피스, 에스파드리유, 밀짚모자" }
    ],
    makeup: [
      { src: "images/tomato_makeup.png", desc: "햇볕에 그을린 듯한 건강한 피부, 붉은색/오렌지색 블러셔와 립" }
    ],
    items: [
      { src: "images/tomato_item.png", desc: "빨간색과 흰색 패턴(깅엄 체크)과 과일 모티브 활용" }
    ]
  },
  "Rockstar GF": {
    color: "#f0f0f0",
    image: "images/rockstar_gf.png",
    desc: "자유롭고 쿨한 글램록 스타일.",
    similar: ["Grunge Fairy", "Mob Wife"],
    coord: [
      { src: "images/rockstar_coord.png", desc: "가죽 재킷, 빈티지 밴드 티셔츠, 슬립 드레스, 부츠" }
    ],
    makeup: [
      { src: "images/rockstar_makeup.png", desc: "스모키하거나 번진 듯한 아이 메이크업, 시크한 피부 표현" }
    ],
    items: [
      { src: "images/rockstar_item.png", desc: "블랙, 그레이, 버건디 중심 매치, 체인 장식" }
    ]
  }
};

// 질문 데이터
const questions = [
  {
    q: "당신이 선호하는 패션 아이템은?",
    a: [
      { text: "깔끔한 흰 나시와 와이드 팬츠", mood: "Clean Girl" },
      { text: "로우라이즈 팬츠와 크롭탑", mood: "Acubi Core" },
      { text: "리본과 레이스가 가득한 드레스", mood: "Coquette Core" },
      { text: "트위드 자켓과 체크 패턴", mood: "Dark Academia" }
    ]
  },
  {
    q: "메이크업에서 가장 중요하게 생각하는 포인트는?",
    a: [
      { text: "결광 피부와 투명한 립", mood: "Clean Girl" },
      { text: "아이라인과 컨투어링", mood: "Acubi Core" },
      { text: "복숭아 톤 블러셔와 풍성한 속눈썹", mood: "Coquette Core" },
      { text: "내추럴한 음영 메이크업", mood: "Dark Academia" }
    ]
  },
  {
    q: "좋아하는 분위기는?",
    a: [
      { text: "햇살 가득한 캠퍼스", mood: "Light Academia" },
      { text: "몽환적인 숲속 무드", mood: "Grunge Fairy" },
      { text: "화려한 퍼 코트와 자신감", mood: "Mob Wife" },
      { text: "지중해 여름 휴가", mood: "Tomato Girl" }
    ]
  },
  {
    q: "향수 취향은?",
    a: [
      { text: "깨끗한 비누향, 머스크", mood: "Clean Girl" },
      { text: "스파이시하고 시크한 향", mood: "Acubi Core" },
      { text: "달콤한 플로럴 향", mood: "Coquette Core" },
      { text: "우디하고 빈티지한 향", mood: "Dark Academia" }
    ]
  },
  {
    q: "스타일링에서 가장 중요하게 생각하는 것은?",
    a: [
      { text: "깔끔하고 단정한 인상", mood: "Clean Girl" },
      { text: "쿨하고 도시적인 무드", mood: "Acubi Core" },
      { text: "낭만적이고 여성스러운 감성", mood: "Coquette Core" },
      { text: "지적인 빈티지 감성", mood: "Dark Academia" }
    ]
  },
  {
    q: "외출할 때 가장 자주 입는 아이템은?",
    a: [
      { text: "린넨 셔츠와 슬랙스", mood: "Light Academia" },
      { text: "빈티지 레이스와 시스루", mood: "Grunge Fairy" },
      { text: "레오파드 패턴 드레스", mood: "Mob Wife" },
      { text: "밴드 티셔츠와 가죽 자켓", mood: "Rockstar GF" }
    ]
  },
  {
    q: "당신이 추구하는 라이프스타일은?",
    a: [
      { text: "깨끗하고 미니멀한 일상", mood: "Clean Girl" },
      { text: "쿨하고 시크한 도시적 무드", mood: "Acubi Core" },
      { text: "낭만적이고 소녀스러운 감성", mood: "Coquette Core" },
      { text: "자유롭고 대담한 무드", mood: "Rockstar GF" }
    ]
  }
];

let current = 0;
let scores = {};

// 질문 표시
function showQuestion() {
  const box = document.getElementById("question-box");
  box.innerHTML = `
    <h2>${questions[current].q}</h2>
    <div class="answers">
      ${questions[current].a.map(ans => `
        <button onclick="nextQuestion('${ans.mood}')">${ans.text}</button>
      `).join("")}
    </div>
  `;
  updateProgress();
}

// 답변 선택 후 다음 질문
function nextQuestion(mood) {
  scores[mood] = (scores[mood] || 0) + 1;
  current++;
  if (current < questions.length) {
    showQuestion();
  } else {
    showResult();}
}

// 진행도 바 업데이트
function updateProgress() {
  const progress = ((current+1) / questions.length) * 100;
  document.getElementById("progress-bar").style.width = progress + "%";
}

// 결과 출력
function showResult() {
  const resultMood = Object.keys(scores).reduce((a, b) => scores[a] > scores[b] ? a : b);
  const mood = moods[resultMood];

  // 질문 박스 숨기고 결과 박스 보여주기
  document.getElementById("question-box").style.display = "none";
  document.getElementById("progress-container").style.display = "none";
  document.getElementById("result-box").style.display = "block";

  // 배경색 변경
  // 결과 박스 색상과 텍스트 색상 변경
  const resultBox = document.getElementById("result-box"); 
  document.body.style.backgroundColor = mood.color;   

  // 결과 반영
  document.getElementById("result-image").style.backgroundImage = `url(${mood.image})`;
  document.getElementById("result-title").innerText = `${resultMood}`; 
  document.getElementById("result-desc").innerText = mood.desc;

  // 비슷한 추구미 리스트 출력 (ul/li 사용)
  const similarList = document.getElementById("similar-list");
  similarList.innerHTML = mood.similar.map(s => `<li>${s}</li>`).join("");

  // ⭐️ 통합 추천 섹션에 3가지 카드 출력 (코디, 아이템, 메이크업의 첫 번째 항목)
  const recommendGrid = document.getElementById("recommend-grid");
  recommendGrid.innerHTML = ""; // 기존 내용 초기화

  // 코디, 아이템, 메이크업 (기존 perfume 데이터 사용) 순서로 데이터 준비
  const recommendations = [
    // 코디
    { title: "추천 코디", data: mood.coord[0], alt: "코디 이미지" },
    // 아이템
    { title: "추천 아이템", data: mood.items[0], alt: "아이템 이미지" },
    // 메이크업 (기존 perfume 자리에 대체)
    { title: "추천 메이크업", data: mood.makeup[0], alt: "메이크업 이미지" }, 
  ];

  // ⭐️ HTML 생성 (3개 카드를 한 행에)
  recommendations.forEach(rec => {
    // 데이터 구조가 {src, desc} 객체이므로 .src와 .desc를 사용
    const src = rec.data ? rec.data.src : ''; 
    const desc = rec.data ? rec.data.desc : '정보가 없습니다.'; 
    
    recommendGrid.innerHTML += `
        <div class="recommend-card">
            <h4>${rec.title}</h4>
            <img src="${src}" alt="${rec.alt}">
            <p class="item-desc">${desc}</p> 
        </div>
    `;
  });
}



// 다시하기 버튼
function restartTest() {
  location.reload();
}

// 시작 버튼
function startTest() {
  document.getElementById("test-home").style.display = "none";
  document.getElementById("progress-container").style.display = "block";
  document.getElementById("test-section").style.display = "block";
  showQuestion();
}
