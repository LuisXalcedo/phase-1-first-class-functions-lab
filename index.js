const returnFirstTwoDrivers = (names) => [...names].slice(0, 2);

const returnLastTwoDrivers = (drives) =>
  drives.slice(drives.length - 2, drives.length);

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(fare) {
  return (fare) => fare ** 2;
}

const fareDoubler = (fare) => fare * 2;

const fareTripler = (fare) => fare * 3;

function selectDifferentDrivers(drivers, returnFirstTwoDrivers) {
  return returnFirstTwoDrivers(drivers);
}
