let productReview = [
  { name: 'md Ashraf', response: 'positive', ratings: '5' },
  { name: 'Jalal Uddin', response: 'positive', ratings: '4' },
  { name: 'Sakib Al Hasan', response: 'negative', ratings: '4' },
  { name: 'Tamim Iqbal', response: 'positive', ratings: '4' },
];

if (productReview.every((ele) => ele.ratings > 3)) {
  console.log('100% positive feedback...');
} else {
  console.log('there is negative feedback...');
}

let testRunsInASingleMatch = [
  { name: 'DPMD Jayawardene	', runs: 374 },
  { name: 'BC Lara', runs: '375' },
  { name: 'ML Hayden', runs: 380 },
  { name: 'BC Lara', runs: 400 },
];

if (testRunsInASingleMatch.some((ele) => ele.runs >= 400)) {
  console.log("at least one player's score is equal or greater than 400");
}
