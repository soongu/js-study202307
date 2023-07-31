const traders = [
  {
    trader: {
      name: "김철수",
      city: "대전",
    },
    year: 2023,
    value: 500000,
  },
  {
    trader: {
      name: "박영희",
      city: "서울",
    },
    year: 2022,
    value: 600000,
  },
  {
    trader: {
      name: "김철수",
      city: "대전",
    },
    year: 2022,
    value: 1200000,
  },
  {
    trader: {
      name: "박영희",
      city: "서울",
    },
    year: 2023,
    value: 650000,
  },
  {
    trader: {
      name: "뽀로로",
      city: "부산",
    },
    year: 2023,
    value: 800000,
  },
  {
    trader: {
      name: "루피",
      city: "대전",
    },
    year: 2022,
    value: 780000,
  },
];

// 연습 1: 2022년에 발생한 모든 거래를 찾아
//   거래자 정보(이름, 도시)를 배열에 매핑해주세요
const traderIn2022 = traders
  .filter((trs) => trs.year === 2022)
  .map((trs) => trs.trader);

console.log(traderIn2022);

// 연습 2: 거래자가 근무하는 모든 도시이름을 배열에 담아주세요.
console.log("======================");
const mappedCities = traders.map(trs => trs.trader.city);
// console.log(mappedCities);
const cities = [...new Set(mappedCities)]; 
// cities.push('청양');
console.log(cities);

// 연습 3: 대전에 근무하는
// 모든 거래자를 찾아 거래자정보(이름, 도시)를 배열에 매핑해주세요.
console.log("======================");
traders
  .filter(trs => trs.trader.city === '대전')
  .map(trs => trs.trader)
  .forEach(trd => console.log(trd))
;

// 연습 4: 모든 거래자의 이름을 배열에 모아주세요.
console.log("======================");
const mappedNames = traders.map(trs => trs.trader.name);
const names = [...new Set(mappedNames)]; 
console.log(names);

// 연습 5: 서울에 사는 거래자의 모든 거래액의 총합 출력.
console.log("======================");
// const filteredTraders = traders
//   .filter(trs => trs.trader.city === '서울');

// console.log(filteredTraders);

// let total = 0;
// for (const tr of filteredTraders) {
//   total += tr.value;
// }

// let total = 0;
// traders
//   .filter(trs => trs.trader.city === '서울')
//   .map(trs => trs.value)
//   .forEach(val => total += val);

// reduce함수: 배열을 반복해서 각 요소에 콜백함수를 적용한
//             결과를 누적하는 함수
const total = traders
  .filter(trs => trs.trader.city === '서울')
  .reduce((acc, curr) => acc + curr.value, 0);

console.log(`거래총액: ${total}원`);