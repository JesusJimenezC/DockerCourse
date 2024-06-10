let times = 0;

const syncDB = () => {
  times+=5;
  console.log('Tick every 5 seconds castor: ', times);

  return times;
}

module.exports = {
  syncDB
}
