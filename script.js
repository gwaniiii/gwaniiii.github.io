const places = {
  jeju: [
    { title: "흑돼지 거리", description: "제주도에서 꼭 먹어야 할 흑돼지 맛집 거리!" },
    { title: "성산 일출봉", description: "일출 보기에 최고의 명소!" },
  ],
  seoul: [
    { title: "광장시장", description: "빈대떡, 육회 맛집이 모여있는 전통시장." },
    { title: "남산타워", description: "서울을 한눈에! 야경이 예쁜 명소." },
  ],
  gangneung: [
    { title: "경포대", description: "바다와 호수가 함께 보이는 명소!" },
    { title: "초당순두부 거리", description: "강릉에서 유명한 순두부 맛집 거리." }
  ],
  yeosu: [
    { title: "돌산공원", description: "야경이 아름다운 여수의 명소!" },
    { title: "여수밤바다", description: "그 유명한 여수밤바다 🎵" }
  ]
  busan: [
    { title: "광안리 해수욕장", description: "해변과 야경이 멋진 부산의 명소." },
    { title: "국제시장", description: "부산의 다양한 먹거리와 쇼핑을 즐길 수 있어요!" },
  ]
};

function showPlace(region) {
  const container = document.getElementById("place-container");
  container.innerHTML = ""; // 기존 정보 지움

  places[region].forEach(place => {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `<h3>${place.title}</h3><p>${place.description}</p>`;
    container.appendChild(card);
  });
}
