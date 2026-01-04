const toggles = {
  seoul: document.getElementById('toggleSeoul'),
  gyeonggi: document.getElementById('toggleGyeonggi'),
};
const spinButton = document.getElementById('spinButton');
const rouletteDisplay = document.getElementById('rouletteDisplay');
const locationName = document.getElementById('locationName');
const locationMeta = document.getElementById('locationMeta');
const historyList = document.getElementById('historyList');
const historyCount = document.getElementById('historyCount');

const regionData = [
  {
    province: '강원도',
    boost: true,
    locations: [
      { name: '춘천시', lat: 37.8813, lng: 127.7298 },
      { name: '원주시', lat: 37.3422, lng: 127.919 },
      { name: '강릉시', lat: 37.7518, lng: 128.8761 },
      { name: '동해시', lat: 37.5247, lng: 129.114 },
      { name: '태백시', lat: 37.1641, lng: 128.9856 },
      { name: '속초시', lat: 38.207, lng: 128.5916 },
      { name: '삼척시', lat: 37.4499, lng: 129.1653 },
      { name: '홍천군', lat: 37.6972, lng: 127.8888 },
      { name: '횡성군', lat: 37.4919, lng: 127.9842 },
      { name: '영월군', lat: 37.1833, lng: 128.4617 },
      { name: '평창군', lat: 37.3704, lng: 128.3907 },
      { name: '정선군', lat: 37.3806, lng: 128.6608 },
      { name: '철원군', lat: 38.146, lng: 127.3134 },
      { name: '화천군', lat: 38.1063, lng: 127.7069 },
      { name: '양구군', lat: 38.1065, lng: 127.9897 },
      { name: '인제군', lat: 38.0694, lng: 128.1701 },
      { name: '고성군(강원)', lat: 38.3806, lng: 128.4678 },
      { name: '양양군', lat: 38.0754, lng: 128.6185 },
    ],
  },
  {
    province: '경상북도',
    locations: [
      { name: '포항시', lat: 36.019, lng: 129.3435 },
      { name: '경주시', lat: 35.8562, lng: 129.2247 },
      { name: '김천시', lat: 36.1398, lng: 128.1127 },
      { name: '안동시', lat: 36.5684, lng: 128.7294 },
      { name: '구미시', lat: 36.1195, lng: 128.3446 },
      { name: '영주시', lat: 36.8057, lng: 128.6248 },
      { name: '영천시', lat: 35.9732, lng: 128.9381 },
      { name: '상주시', lat: 36.4111, lng: 128.1593 },
      { name: '문경시', lat: 36.5864, lng: 128.1877 },
      { name: '경산시', lat: 35.8251, lng: 128.7417 },
      { name: '군위군', lat: 36.2394, lng: 128.572 },
      { name: '의성군', lat: 36.3529, lng: 128.6974 },
      { name: '청송군', lat: 36.435, lng: 129.0577 },
      { name: '영양군', lat: 36.6667, lng: 129.1125 },
      { name: '영덕군', lat: 36.4155, lng: 129.3656 },
      { name: '청도군', lat: 35.647, lng: 128.7333 },
      { name: '고령군', lat: 35.7271, lng: 128.2731 },
      { name: '성주군', lat: 35.9203, lng: 128.2846 },
      { name: '칠곡군', lat: 35.9958, lng: 128.4015 },
      { name: '예천군', lat: 36.6578, lng: 128.4527 },
      { name: '봉화군', lat: 36.8934, lng: 128.7327 },
      { name: '울진군', lat: 36.9931, lng: 129.4003 },
      { name: '울릉군', lat: 37.4845, lng: 130.9057 },
    ],
  },
  {
    province: '경상남도',
    locations: [
      { name: '창원시', lat: 35.227, lng: 128.6811 },
      { name: '진주시', lat: 35.1804, lng: 128.1076 },
      { name: '통영시', lat: 34.8544, lng: 128.4336 },
      { name: '사천시', lat: 35.0038, lng: 128.0645 },
      { name: '김해시', lat: 35.2286, lng: 128.8893 },
      { name: '밀양시', lat: 35.5036, lng: 128.7465 },
      { name: '거제시', lat: 34.8806, lng: 128.6219 },
      { name: '양산시', lat: 35.335, lng: 129.0372 },
      { name: '의령군', lat: 35.3192, lng: 128.2616 },
      { name: '함안군', lat: 35.2725, lng: 128.4067 },
      { name: '창녕군', lat: 35.5412, lng: 128.4929 },
      { name: '고성군(경남)', lat: 34.9738, lng: 128.3225 },
      { name: '남해군', lat: 34.8375, lng: 127.8947 },
      { name: '하동군', lat: 35.0675, lng: 127.7519 },
      { name: '산청군', lat: 35.415, lng: 127.8739 },
      { name: '함양군', lat: 35.5203, lng: 127.7252 },
      { name: '거창군', lat: 35.6861, lng: 127.9093 },
      { name: '합천군', lat: 35.5667, lng: 128.1667 },
    ],
  },
  {
    province: '충청북도',
    locations: [
      { name: '청주시', lat: 36.6424, lng: 127.489 },
      { name: '충주시', lat: 36.991, lng: 127.9251 },
      { name: '제천시', lat: 37.1326, lng: 128.1934 },
      { name: '보은군', lat: 36.4897, lng: 127.7292 },
      { name: '옥천군', lat: 36.306, lng: 127.5712 },
      { name: '영동군', lat: 36.175, lng: 127.7761 },
      { name: '증평군', lat: 36.787, lng: 127.5814 },
      { name: '진천군', lat: 36.855, lng: 127.4352 },
      { name: '괴산군', lat: 36.815, lng: 127.7861 },
      { name: '음성군', lat: 36.9405, lng: 127.6909 },
      { name: '단양군', lat: 36.9846, lng: 128.3655 },
    ],
  },
  {
    province: '충청남도',
    locations: [
      { name: '천안시', lat: 36.8151, lng: 127.1139 },
      { name: '공주시', lat: 36.4705, lng: 127.1253 },
      { name: '보령시', lat: 36.3331, lng: 126.6129 },
      { name: '아산시', lat: 36.792, lng: 127.0018 },
      { name: '서산시', lat: 36.7845, lng: 126.4501 },
      { name: '논산시', lat: 36.1872, lng: 127.0986 },
      { name: '계룡시', lat: 36.2742, lng: 127.2485 },
      { name: '당진시', lat: 36.8892, lng: 126.6463 },
      { name: '금산군', lat: 36.1031, lng: 127.4878 },
      { name: '부여군', lat: 36.2737, lng: 126.9091 },
      { name: '서천군', lat: 36.0806, lng: 126.6914 },
      { name: '청양군', lat: 36.4594, lng: 126.8021 },
      { name: '홍성군', lat: 36.6017, lng: 126.6608 },
      { name: '예산군', lat: 36.6806, lng: 126.8458 },
      { name: '태안군', lat: 36.7455, lng: 126.2977 },
    ],
  },
  {
    province: '전라북도',
    locations: [
      { name: '전주시', lat: 35.8242, lng: 127.148 },
      { name: '군산시', lat: 35.9677, lng: 126.7366 },
      { name: '익산시', lat: 35.9483, lng: 126.9574 },
      { name: '정읍시', lat: 35.5699, lng: 126.8643 },
      { name: '남원시', lat: 35.4164, lng: 127.3905 },
      { name: '김제시', lat: 35.8036, lng: 126.8803 },
      { name: '완주군', lat: 35.9056, lng: 127.1629 },
      { name: '진안군', lat: 35.791, lng: 127.4245 },
      { name: '무주군', lat: 36.0064, lng: 127.6615 },
      { name: '장수군', lat: 35.6475, lng: 127.5207 },
      { name: '임실군', lat: 35.613, lng: 127.2791 },
      { name: '순창군', lat: 35.3747, lng: 127.1378 },
      { name: '고창군', lat: 35.4333, lng: 126.702 },
      { name: '부안군', lat: 35.7269, lng: 126.7365 },
    ],
  },
  {
    province: '전라남도',
    locations: [
      { name: '목포시', lat: 34.8118, lng: 126.3922 },
      { name: '여수시', lat: 34.7604, lng: 127.6622 },
      { name: '순천시', lat: 34.9481, lng: 127.4895 },
      { name: '나주시', lat: 35.0159, lng: 126.7109 },
      { name: '광양시', lat: 34.9409, lng: 127.6957 },
      { name: '담양군', lat: 35.321, lng: 126.9882 },
      { name: '곡성군', lat: 35.2805, lng: 127.2904 },
      { name: '구례군', lat: 35.2027, lng: 127.4623 },
      { name: '고흥군', lat: 34.607, lng: 127.2826 },
      { name: '보성군', lat: 34.7714, lng: 127.0803 },
      { name: '화순군', lat: 35.0647, lng: 126.9866 },
      { name: '장흥군', lat: 34.6862, lng: 126.9091 },
      { name: '강진군', lat: 34.6425, lng: 126.7675 },
      { name: '해남군', lat: 34.5714, lng: 126.5989 },
      { name: '영암군', lat: 34.8005, lng: 126.6979 },
      { name: '무안군', lat: 34.9907, lng: 126.4771 },
      { name: '함평군', lat: 35.065, lng: 126.5163 },
      { name: '영광군', lat: 35.2772, lng: 126.5117 },
      { name: '장성군', lat: 35.3014, lng: 126.7847 },
      { name: '완도군', lat: 34.3119, lng: 126.755 },
      { name: '진도군', lat: 34.4868, lng: 126.2633 },
      { name: '신안군', lat: 34.8336, lng: 125.9976 },
    ],
  },
  {
    province: '제주특별자치도',
    locations: [
      { name: '제주시', lat: 33.4996, lng: 126.5312 },
      { name: '서귀포시', lat: 33.2539, lng: 126.5597 },
    ],
  },
  {
    province: '부산광역시',
    locations: [
      { name: '중구(부산)', lat: 35.106, lng: 129.0324 },
      { name: '서구(부산)', lat: 35.097, lng: 129.0246 },
      { name: '동구(부산)', lat: 35.1293, lng: 129.0454 },
      { name: '영도구', lat: 35.0914, lng: 129.067 },
      { name: '부산진구', lat: 35.1632, lng: 129.0531 },
      { name: '동래구', lat: 35.2049, lng: 129.0838 },
      { name: '남구(부산)', lat: 35.1366, lng: 129.0847 },
      { name: '북구(부산)', lat: 35.2092, lng: 129.0326 },
      { name: '해운대구', lat: 35.1632, lng: 129.1636 },
      { name: '사하구', lat: 35.1047, lng: 128.9745 },
      { name: '금정구', lat: 35.2428, lng: 129.0927 },
      { name: '강서구(부산)', lat: 35.2122, lng: 128.9804 },
      { name: '연제구', lat: 35.1767, lng: 129.0798 },
      { name: '수영구', lat: 35.1458, lng: 129.1132 },
      { name: '사상구', lat: 35.1523, lng: 128.9897 },
      { name: '기장군', lat: 35.2441, lng: 129.222 },
    ],
  },
  {
    province: '대구광역시',
    locations: [
      { name: '중구(대구)', lat: 35.8694, lng: 128.6067 },
      { name: '동구(대구)', lat: 35.8864, lng: 128.635 },
      { name: '서구(대구)', lat: 35.8711, lng: 128.5594 },
      { name: '남구(대구)', lat: 35.8468, lng: 128.597 },
      { name: '북구(대구)', lat: 35.8894, lng: 128.5827 },
      { name: '수성구', lat: 35.8583, lng: 128.6308 },
      { name: '달서구', lat: 35.8294, lng: 128.5326 },
      { name: '달성군', lat: 35.7744, lng: 128.4314 },
    ],
  },
  {
    province: '광주광역시',
    locations: [
      { name: '동구(광주)', lat: 35.1461, lng: 126.9235 },
      { name: '서구(광주)', lat: 35.1527, lng: 126.8906 },
      { name: '남구(광주)', lat: 35.1336, lng: 126.9025 },
      { name: '북구(광주)', lat: 35.174, lng: 126.9124 },
      { name: '광산구', lat: 35.1394, lng: 126.7936 },
    ],
  },
  {
    province: '대전광역시',
    locations: [
      { name: '동구(대전)', lat: 36.3169, lng: 127.4549 },
      { name: '중구(대전)', lat: 36.3254, lng: 127.4219 },
      { name: '서구(대전)', lat: 36.355, lng: 127.3834 },
      { name: '유성구', lat: 36.3626, lng: 127.3568 },
      { name: '대덕구', lat: 36.3468, lng: 127.4182 },
    ],
  },
  {
    province: '울산광역시',
    locations: [
      { name: '중구(울산)', lat: 35.5695, lng: 129.332 },
      { name: '남구(울산)', lat: 35.5433, lng: 129.3306 },
      { name: '동구(울산)', lat: 35.5039, lng: 129.4182 },
      { name: '북구(울산)', lat: 35.5827, lng: 129.3611 },
      { name: '울주군', lat: 35.5221, lng: 129.2421 },
    ],
  },
  {
    province: '인천광역시',
    locations: [
      { name: '중구(인천)', lat: 37.4738, lng: 126.6219 },
      { name: '동구(인천)', lat: 37.4753, lng: 126.6339 },
      { name: '미추홀구', lat: 37.4636, lng: 126.6508 },
      { name: '연수구', lat: 37.4093, lng: 126.6782 },
      { name: '남동구', lat: 37.4475, lng: 126.7314 },
      { name: '부평구', lat: 37.5082, lng: 126.7218 },
      { name: '계양구', lat: 37.5363, lng: 126.7376 },
      { name: '서구(인천)', lat: 37.545, lng: 126.6754 },
      { name: '강화군', lat: 37.7464, lng: 126.4874 },
      { name: '옹진군', lat: 37.4461, lng: 126.459 },
    ],
  },
  {
    province: '세종특별자치시',
    locations: [{ name: '세종시', lat: 36.4801, lng: 127.2892 }],
  },
  {
    province: '서울특별시',
    toggleId: 'toggleSeoul',
    locations: [
      { name: '종로구', lat: 37.573, lng: 126.9794 },
      { name: '중구(서울)', lat: 37.5636, lng: 126.9976 },
      { name: '용산구', lat: 37.5311, lng: 126.9794 },
      { name: '성동구', lat: 37.5633, lng: 127.0366 },
      { name: '광진구', lat: 37.5386, lng: 127.0822 },
      { name: '동대문구', lat: 37.5744, lng: 127.0396 },
      { name: '중랑구', lat: 37.6063, lng: 127.0927 },
      { name: '성북구', lat: 37.5891, lng: 127.0182 },
      { name: '강북구', lat: 37.6398, lng: 127.0257 },
      { name: '도봉구', lat: 37.6688, lng: 127.0471 },
      { name: '노원구', lat: 37.6543, lng: 127.0565 },
      { name: '은평구', lat: 37.6026, lng: 126.9291 },
      { name: '서대문구', lat: 37.5791, lng: 126.9368 },
      { name: '마포구', lat: 37.5663, lng: 126.9018 },
      { name: '양천구', lat: 37.5172, lng: 126.8665 },
      { name: '강서구(서울)', lat: 37.5509, lng: 126.8495 },
      { name: '구로구', lat: 37.4955, lng: 126.8877 },
      { name: '금천구', lat: 37.4569, lng: 126.8956 },
      { name: '영등포구', lat: 37.5264, lng: 126.8963 },
      { name: '동작구', lat: 37.5124, lng: 126.9395 },
      { name: '관악구', lat: 37.4781, lng: 126.9517 },
      { name: '서초구', lat: 37.4836, lng: 127.0327 },
      { name: '강남구', lat: 37.5173, lng: 127.0474 },
      { name: '송파구', lat: 37.5146, lng: 127.1058 },
      { name: '강동구', lat: 37.5301, lng: 127.1238 },
    ],
  },
  {
    province: '경기도',
    toggleId: 'toggleGyeonggi',
    locations: [
      { name: '수원시', lat: 37.2636, lng: 127.0286 },
      { name: '고양시', lat: 37.6584, lng: 126.832 },
      { name: '용인시', lat: 37.2411, lng: 127.1775 },
      { name: '성남시', lat: 37.4203, lng: 127.1266 },
      { name: '부천시', lat: 37.5034, lng: 126.766 },
      { name: '안산시', lat: 37.3219, lng: 126.8309 },
      { name: '안양시', lat: 37.3943, lng: 126.9568 },
      { name: '남양주시', lat: 37.636, lng: 127.2141 },
      { name: '화성시', lat: 37.1995, lng: 126.8312 },
      { name: '평택시', lat: 36.9921, lng: 127.1128 },
      { name: '의정부시', lat: 37.7381, lng: 127.0337 },
      { name: '파주시', lat: 37.76, lng: 126.7798 },
      { name: '김포시', lat: 37.615, lng: 126.7166 },
      { name: '광주시(경기)', lat: 37.4171, lng: 127.2561 },
      { name: '시흥시', lat: 37.3805, lng: 126.8028 },
      { name: '군포시', lat: 37.3614, lng: 126.9353 },
      { name: '오산시', lat: 37.1498, lng: 127.0772 },
      { name: '이천시', lat: 37.2795, lng: 127.4425 },
      { name: '안성시', lat: 37.008, lng: 127.2797 },
      { name: '의왕시', lat: 37.3416, lng: 126.9707 },
      { name: '하남시', lat: 37.5393, lng: 127.2148 },
      { name: '양주시', lat: 37.7854, lng: 127.045 },
      { name: '포천시', lat: 37.8943, lng: 127.2001 },
      { name: '여주시', lat: 37.2989, lng: 127.6371 },
      { name: '연천군', lat: 38.0965, lng: 127.0743 },
      { name: '가평군', lat: 37.8316, lng: 127.5097 },
      { name: '양평군', lat: 37.4919, lng: 127.4872 },
    ],
  },
];

const map = L.map('map').setView([36.5, 127.8], 7);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; OpenStreetMap 기여자',
  maxZoom: 18,
}).addTo(map);

let activeMarker = null;
let spinCount = 0;

function buildWeightedList() {
  const includeSeoul = toggles.seoul.checked;
  const includeGyeonggi = toggles.gyeonggi.checked;

  const activeRegions = regionData.filter((region) => {
    if (region.toggleId === 'toggleSeoul' && !includeSeoul) return false;
    if (region.toggleId === 'toggleGyeonggi' && !includeGyeonggi) return false;
    return true;
  });

  const weightedList = [];
  activeRegions.forEach((region) => {
    const multiplier = region.boost ? 2 : 1;
    region.locations.forEach((loc) => {
      for (let i = 0; i < multiplier; i += 1) {
        weightedList.push({ ...loc, province: region.province, boost: !!region.boost });
      }
    });
  });

  return weightedList;
}

function updateMap(lat, lng, displayName) {
  if (!lat || !lng) return;
  if (activeMarker) {
    map.removeLayer(activeMarker);
  }

  map.flyTo([lat, lng], 10, { duration: 1.2 });
  activeMarker = L.marker([lat, lng]).addTo(map);
  activeMarker.bindPopup(`<strong>${displayName}</strong>`).openPopup();
}

function updateHistory(entry) {
  spinCount += 1;
  const li = document.createElement('li');
  li.textContent = `${spinCount}. ${entry}`;
  historyList.prepend(li);
  historyCount.textContent = `${spinCount}회`;
}

function indicateEmptyPool() {
  locationName.textContent = '선택할 지역이 없습니다';
  locationMeta.textContent = '서울 또는 경기도를 포함시켜 주세요.';
  rouletteDisplay.classList.remove('spinning');
}

function animateSpin() {
  rouletteDisplay.classList.add('spinning');
  locationMeta.textContent = '룰렛이 회전 중... 가중치 적용 중입니다!';
  locationName.textContent = '돌리는 중';
}

function finalizeSelection(choice) {
  rouletteDisplay.classList.remove('spinning');
  const nameWithProvince = `${choice.province} · ${choice.name}`;
  locationName.textContent = nameWithProvince;
  locationMeta.textContent = choice.boost
    ? '강원도 가중치(2배)가 적용되어 더 쉽게 선택되었어요.'
    : `${choice.province}에서 랜덤 선정되었습니다.`;
  updateHistory(nameWithProvince);
  updateMap(choice.lat, choice.lng, nameWithProvince);
}

function spinRoulette() {
  const candidates = buildWeightedList();

  if (!candidates.length) {
    indicateEmptyPool();
    return;
  }

  spinButton.disabled = true;
  spinButton.textContent = '돌리는 중...';
  animateSpin();

  setTimeout(() => {
    const choice = candidates[Math.floor(Math.random() * candidates.length)];
    finalizeSelection(choice);
    spinButton.disabled = false;
    spinButton.textContent = '룰렛 돌리기';
  }, 1100);
}

function syncToggleHint() {
  const seoulState = toggles.seoul.checked ? '포함됨' : '제외됨';
  const gyeonggiState = toggles.gyeonggi.checked ? '포함됨' : '제외됨';
  locationMeta.textContent = `서울 ${seoulState}, 경기도 ${gyeonggiState}. 강원도는 2배 확률!`;
}

spinButton.addEventListener('click', spinRoulette);
Object.values(toggles).forEach((input) => input.addEventListener('change', syncToggleHint));

syncToggleHint();
