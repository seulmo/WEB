// 추구미 데이터
/*const moods = {
  "Clean Girl": {
    color: "#f9f9f9",
    image: "images/clean_girl.png",
    desc: "깨끗하고 단정한 인상에 미니멀한 뷰티 무드를 추구하는 세련된 스타일.",
    similar: ["Acubi Core", "Light Academia"],
    recommend: ["흰 나시 + 와이드 팬츠", "투명 립글로스", "슬릭백 헤어", "골드 후프 이어링", "미니멀 토트백"]
  },
  "Acubi Core": {
    color: "#eaeaea",
    image: "images/acubi_core.png",
    desc: "미니멀리즘과 Y2K의 시크함을 혼합한 도시적 스타일.",
    similar: ["Clean Girl", "Mob Wife"],
    recommend: ["로우라이즈 팬츠", "크롭탑", "암워머", "블랙/그레이 톤온톤", "볼레로 레이어드"]
  },
  "Coquette Core": {
    color: "#fceee3",
    image: "images/coquette_core.png",
    desc: "과장된 여성미와 낭만적인 소녀 감성을 강조하는 스타일.",
    similar: ["Balletcore", "Tomato Girl"],
    recommend: ["리본 드레스", "핑크 블러셔", "새틴 가방", "플로럴 향수", "레이스 악세사리"]
  },
  "Dark Academia": {
    color: "#eae6e1",
    image: "images/dark_academia.png",
    desc: "고전 문학과 지성에서 영감을 받은 빈티지한 스타일.",
    similar: ["Light Academia", "Grunge Fairy"],
    recommend: ["트위드 자켓", "옥스퍼드화", "우디 향수", "가죽 서류가방", "체크 패턴 스카프"]
  },
  "Light Academia": {
    color: "#fdf6e3",
    image: "images/light_academia.png",
    desc: "밝고 낙천적인 지성미를 추구하는 스타일.",
    similar: ["Dark Academia", "Clean Girl"],
    recommend: ["린넨 셔츠", "밝은 니트 조끼", "MLBB 립", "베이지 슬랙스", "아이보리 토트백"]
  },
  "Balletcore": {
    color: "#f9e6eb",
    image: "images/balletcore.png",
    desc: "발레리나의 우아함과 섬세한 여성성을 일상복에 접목한 스타일.",
    similar: ["Coquette Core", "Light Academia"],
    recommend: ["랩 가디건", "튤 스커트", "발레 플랫슈즈", "핑크 치크", "리본 헤어핀"]
  },
  "Grunge Fairy": {
    color: "#e0d6d0",
    image: "images/grunge_fairy.png",
    desc: "몽환적인 요정 스타일에 거친 그런지 요소를 결합한 신비로운 무드.",
    similar: ["Dark Academia", "Rockstar GF"],
    recommend: ["빈티지 레이스", "낡은 가죽 부츠", "버건디 립", "헤진 니트", "글리터 아이 메이크업"]
  },
  "Mob Wife": {
    color: "#f5e4e1",
    image: "images/mob_wife.png",
    desc: "과감하고 화려한 자신감을 표현하는 스타일.",
    similar: ["Rockstar GF", "Acubi Core"],
    recommend: ["레오파드 드레스", "레드립", "퍼 코트", "볼드 골드 액세사리", "클러치백"]
  },
  "Tomato Girl": {
    color: "#fff0f0",
    image: "images/tomato_girl.png",
    desc: "지중해 여름 휴가에서 영감을 받은 활기차고 낭만적인 스타일.",
    similar: ["Coquette Core", "Light Academia"],
    recommend: ["리넨 원피스", "밀짚모자", "깅엄 체크", "에스파드리유", "시트러스 향수"]
  },
  "Rockstar GF": {
    color: "#f0f0f0",
    image: "images/rockstar_gf.png",
    desc: "자유롭고 쿨한 글램록 스타일.",
    similar: ["Grunge Fairy", "Mob Wife"],
    recommend: ["가죽 자켓", "밴드 티셔츠", "슬립 드레스", "체인 목걸이", "블랙 부츠"]
  }
};*/
const moods = {
  "Clean Girl": {
    color: "#f9f9f9",
    image: "images/clean_girl.png",
    desc: "깨끗하고 단정한 인상에 미니멀한 뷰티 무드를 추구하는 세련된 스타일.",
    similar: ["Acubi Core", "Light Academia"],
    coord: ["images/clean_coord1.png", "images/clean_coord2.png", "images/clean_coord3.png"],
    perfume: ["images/clean_perfume1.png", "images/clean_perfume2.png", "images/clean_perfume3.png"],
    items: ["images/clean_item1.png", "images/clean_item2.png", "images/clean_item3.png"]
  },
  "Acubi Core": {
    color: "#eaeaea",
    image: "images/acubi_core.png",
    desc: "미니멀리즘과 Y2K의 시크함을 혼합한 도시적 스타일.",
    similar: ["Clean Girl", "Mob Wife"],
    coord: ["images/acubi_coord1.png", "images/acubi_coord2.png", "images/acubi_coord3.png"],
    perfume: ["images/acubi_perfume1.png", "images/acubi_perfume2.png", "images/acubi_perfume3.png"],
    items: ["images/acubi_item1.png", "images/acubi_item2.png", "images/acubi_item3.png"]
  },
  "Coquette Core": {
    color: "#fceee3",
    image: "images/coquette_core.png",
    desc: "과장된 여성미와 낭만적인 소녀 감성을 강조하는 스타일.",
    similar: ["Balletcore", "Tomato Girl"],
    coord: ["images/coquette_coord1.png", "images/coquette_coord2.png", "images/coquette_coord3.png"],
    perfume: ["images/coquette_perfume1.png", "images/coquette_perfume2.png", "images/coquette_perfume3.png"],
    items: ["images/coquette_item1.png", "images/coquette_item2.png", "images/coquette_item3.png"]
  },
  "Dark Academia": {
    color: "#eae6e1",
    image: "images/dark_academia.png",
    desc: "고전 문학과 지성에서 영감을 받은 빈티지한 스타일.",
    similar: ["Light Academia", "Grunge Fairy"],
    coord: ["images/dark_coord1.png", "images/dark_coord2.png", "images/dark_coord3.png"],
    perfume: ["images/dark_perfume1.png", "images/dark_perfume2.png", "images/dark_perfume3.png"],
    items: ["images/dark_item1.png", "images/dark_item2.png", "images/dark_item3.png"]
  },
  "Light Academia": {
    color: "#fdf6e3",
    image: "images/light_academia.png",
    desc: "밝고 낙천적인 지성미를 추구하는 스타일.",
    similar: ["Dark Academia", "Clean Girl"],
    coord: ["images/light_coord1.png", "images/light_coord2.png", "images/light_coord3.png"],
    perfume: ["images/light_perfume1.png", "images/light_perfume2.png", "images/light_perfume3.png"],
    items: ["images/light_item1.png", "images/light_item2.png", "images/light_item3.png"]
  },
  "Balletcore": {
    color: "#f9e6eb",
    image: "images/balletcore.png",
    desc: "발레리나의 우아함과 섬세한 여성성을 일상복에 접목한 스타일.",
    similar: ["Coquette Core", "Light Academia"],
    coord: ["images/ballet_coord1.png", "images/ballet_coord2.png", "images/ballet_coord3.png"],
    perfume: ["images/ballet_perfume1.png", "images/ballet_perfume2.png", "images/ballet_perfume3.png"],
    items: ["images/ballet_item1.png", "images/ballet_item2.png", "images/ballet_item3.png"]
  },
  "Grunge Fairy": {
    color: "#e0d6d0",
    image: "images/grunge_fairy.png",
    desc: "몽환적인 요정 스타일에 거친 그런지 요소를 결합한 신비로운 무드.",
    similar: ["Dark Academia", "Rockstar GF"],
    coord: ["images/grunge_coord1.png", "images/grunge_coord2.png", "images/grunge_coord3.png"],
    perfume: ["images/grunge_perfume1.png", "images/grunge_perfume2.png", "images/grunge_perfume3.png"],
    items: ["images/grunge_item1.png", "images/grunge_item2.png", "images/grunge_item3.png"]
  },
  "Mob Wife": {
    color: "#f5e4e1",
    image: "images/mob_wife.png",
    desc: "과감하고 화려한 자신감을 표현하는 스타일.",
    similar: ["Rockstar GF", "Acubi Core"],
    coord: ["images/mob_coord1.png", "images/mob_coord2.png", "images/mob_coord3.png"],
    perfume: ["images/mob_perfume1.png", "images/mob_perfume2.png", "images/mob_perfume3.png"],
    items: ["images/mob_item1.png", "images/mob_item2.png", "images/mob_item3.png"]
  },
  "Tomato Girl": {
    color: "#fff0f0",
    image: "images/tomato_girl.png",
    desc: "지중해 여름 휴가에서 영감을 받은 활기차고 낭만적인 스타일.",
    similar: ["Coquette Core", "Light Academia"],
    coord: ["images/tomato_coord1.png", "images/tomato_coord2.png", "images/tomato_coord3.png"],
    perfume: ["images/tomato_perfume1.png", "images/tomato_perfume2.png", "images/tomato_perfume3.png"],
    items: ["images/tomato_item1.png", "images/tomato_item2.png", "images/tomato_item3.png"]
  },
  "Rockstar GF": {
    color: "#f0f0f0",
    image: "images/rockstar_gf.png",
    desc: "자유롭고 쿨한 글램록 스타일.",
    similar: ["Grunge Fairy", "Mob Wife"],
    coord: ["images/rockstar_coord1.png", "images/rockstar_coord2.png", "images/rockstar_coord3.png"],
    perfume: ["images/rockstar_perfume1.png", "images/rockstar_perfume2.png", "images/rockstar_perfume3.png"],
    items: ["images/rockstar_item1.png", "images/rockstar_item2.png", "images/rockstar_item3.png"]
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
  resultBox.style.backgroundColor = mood.color;   
  document.body.style.backgroundColor = mood.color;   

  // 결과 반영
  document.getElementById("result-image").style.backgroundImage = `url(${mood.image})`;
  document.getElementById("result-title").innerText = `당신의 추구미는 ${resultMood} 입니다!`;
  document.getElementById("result-desc").innerText = mood.desc;

  // 비슷한 추구미 한 줄 표시
  document.getElementById("similar-text").innerText = `비슷한 추구미: ${mood.similar.join(", ")}`;

  // 추천 이미지 출력
  const coordGrid = document.getElementById("coord-grid");
  const perfumeGrid = document.getElementById("perfume-grid");
  const itemGrid = document.getElementById("item-grid");

  coordGrid.innerHTML = "";
  perfumeGrid.innerHTML = "";
  itemGrid.innerHTML = "";

  mood.coord.forEach(src => {
    coordGrid.innerHTML += `<div class="recommend-item"><img src="${src}" alt="코디 이미지"></div>`;
  });
  mood.perfume.forEach(src => {
    perfumeGrid.innerHTML += `<div class="recommend-item"><img src="${src}" alt="향수 이미지"></div>`;
  });
  mood.items.forEach(src => {
    itemGrid.innerHTML += `<div class="recommend-item"><img src="${src}" alt="아이템 이미지"></div>`;
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
