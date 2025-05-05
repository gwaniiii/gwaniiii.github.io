// 버튼 요소 가져오기
const jejuBtn = document.getElementById('jeju-btn');
const seoulBtn = document.getElementById('seoul-btn');
const busanBtn = document.getElementById('busan-btn');
const placeDetails = document.getElementById('place-details');

// 여행지 정보 (예시)
const jejuInfo = {
    name: '제주도',
    places: ['한라산', '성산일출봉', '제주올레길'],
    restaurants: ['제주흑돼지', '해물탕집', '오메기떡'],
};

const seoulInfo = {
    name: '서울',
    places: ['경복궁', '남산타워', '북촌한옥마을'],
    restaurants: ['명동교자', '삼청동 떡볶이', '이태원 브런치'],
};

const busanInfo = {
    name: '부산',
    places: ['해운대', '광안리', '태종대'],
    restaurants: ['부산밀면', '돼지국밥', '해산물 칼국수'],
};

// 버튼 클릭 시 정보 표시
function displayPlaceInfo(info) {
    placeDetails.innerHTML = `
        <h4>${info.name}의 명소</h4>
        <ul>
            ${info.places.map(place => `<li>${place}</li>`).join('')}
        </ul>
        <h4>${info.name}의 맛집</h4>
        <ul>
            ${info.restaurants.map(restaurant => `<li>${restaurant}</li>`).join('')}
        </ul>
    `;
}

// 각 버튼에 클릭 이벤트 추가
jejuBtn.addEventListener('click', function() {
    displayPlaceInfo(jejuInfo);
});

seoulBtn.addEventListener('click', function() {
    displayPlaceInfo(seoulInfo);
});

busanBtn.addEventListener('click', function() {
    displayPlaceInfo(busanInfo);
});
