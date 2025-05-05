// 각 지역별 추천 정보 (예시 데이터)
const placeData = {
  jeju: {
    name: "제주도",
    places: [
      { name: "한라산", description: "제주도에서 가장 높은 산. 아름다운 풍경과 함께 하이킹을 즐길 수 있어요." },
      { name: "제주 올레길", description: "제주도의 바다를 따라 걷는 트레킹 코스. 풍경이 아름답다." },
      { name: "흑돼지구이", description: "제주도에서 유명한 흑돼지 구이. 맛있는 음식도 함께 즐길 수 있다." }
    ]
  },
  seoul: {
    name: "서울",
    places: [
      { name: "경복궁", description: "서울의 대표적인 궁궐. 역사적인 장소로 많은 관광객들이 방문한다." },
      { name: "명동", description: "서울의 쇼핑 중심지. 다양한 상점과 음식점들이 있다." },
      { name: "남산타워", description: "서울을 한눈에 볼 수 있는 전망대. 야경이 아름답다." }
    ]
  },
  busan: {
    name: "부산",
    places: [
      { name: "해운대", description: "부산의 대표적인 해변. 여름철에 많은 사람들이 찾는다." },
      { name: "자갈치 시장", description: "부산의 대표적인 수산 시장. 신선한 해산물을 구매할 수 있다." },
      { name: "광안리 해수욕장", description: "광안대교와 함께 멋진 풍경을 감상할 수 있는 해수욕장." }
    ]
  },
  gangneung: {
    name: "강릉",
    places: [
      { name: "정동진", description: "동해안을 따라 아름다운 경치를 즐길 수 있는 곳." },
      { name: "경포대", description: "강릉의 대표적인 명소. 경치가 아름다워 많은 사람들이 방문한다." },
      { name: "강릉 커피거리", description: "강릉에서 유명한 커피 거리. 다양한 카페를 즐길 수 있다." }
    ]
  },
  yeosu: {
    name: "여수",
    places: [
      { name: "여수 해상케이블카", description: "여수의 바다를 한눈에 볼 수 있는 케이블카." },
      { name: "오동도", description: "여수의 아름다운 섬. 자연 경관이 뛰어난 곳." },
      { name: "여수 밤바다", description: "밤에 더욱 아름다운 여수의 바다. 야경이 멋지다." }
    ]
  }
};

// 특정 지역의 정보를 보여주는 함수
function showPlace(place) {
  const container = document.getElementById('place-container');
  container.innerHTML = ''; // 기존 내용 지우기

  // 선택한 지역의 정보 가져오기
  const placeInfo = placeData[place];

  // 여행지 제목 추가
  const title = document.createElement('h3');
  title.textContent = `${placeInfo.name}의 추천 명소`;
  container.appendChild(title);

  // 각 명소를 카드 형태로 추가
  placeInfo.places.forEach(place => {
    const card = document.createElement('div');
    card.classList.add('place-card');
    
    const placeName = document.createElement('h4');
    placeName.textContent = place.name;
    
    const placeDescription = document.createElement('p');
    placeDescription.textContent = place.description;
    
    card.appendChild(placeName);
    card.appendChild(placeDescription);
    
    container.appendChild(card);
  });
}
