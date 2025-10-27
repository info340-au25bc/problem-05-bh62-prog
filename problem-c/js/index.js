'use strict';

var games = [
  { date: '9/3/16', home: 'UW', opponent: 'Rutgers', 'home_score': 48, 'opponent_score': 13, 'passing_yards': 289, 'rushing_yards': 91, fumbles: 0 },
  { date: '9/10/16', home: 'UW', opponent: 'Idaho', 'home_score': 59, 'opponent_score': 14, 'passing_yards': 265, 'rushing_yards': 126, fumbles: 1 },
  { date: '9/17/16', home: 'UW', opponent: 'Portland State', 'home_score': 41, 'opponent_score': 3, 'passing_yards': 213, 'rushing_yards': 150, fumbles: 0 },
  { date: '9/24/16', home: 'Arizona', opponent: 'UW', 'home_score': 28, 'opponent_score': 35, 'passing_yards': 160, 'rushing_yards': 352, fumbles: 1 },
  { date: '9/30/16', home: 'UW', opponent: 'Stanford', 'home_score': 44, 'opponent_score': 6, 'passing_yards': 210, 'rushing_yards': 214, fumbles: 0 },
  { date: '10/8/16', home: 'Oregon', opponent: 'UW', 'home_score': 21, 'opponent_score': 70, 'passing_yards': 304, 'rushing_yards': 378, fumbles: 1 },
  { date: '10/22/16', home: 'UW', opponent: 'Oregon State', 'home_score': 41, 'opponent_score': 17, 'passing_yards': 241, 'rushing_yards': 219, fumbles: 0 },
  { date: '10/29/16', home: 'Utah', opponent: 'UW', 'home_score': 24, 'opponent_score': 31, 'passing_yards': 186, 'rushing_yards': 199, fumbles: 1 },
  { date: '11/5/16', home: 'Cal', opponent: 'UW', 'home_score': 27, 'opponent_score': 66, 'passing_yards': 417, 'rushing_yards': 287, fumbles: 2 },
  { date: '11/12/16', home: 'UW', opponent: 'USC', 'home_score': 13, 'opponent_score': 26, 'passing_yards': 259, 'rushing_yards': 17, fumbles: 0 },
  { date: '11/19/16', home: 'UW', opponent: 'Arizona State', 'home_score': 44, 'opponent_score': 18, 'passing_yards': 338, 'rushing_yards': 201, fumbles: 1 },
  { date: '11/25/16', home: 'Washington State', opponent: 'UW', 'home_score': 17, 'opponent_score': 45, 'passing_yards': 244, 'rushing_yards': 168, fumbles: 0 },
  { date: '12/2/16', home: 'UW', opponent: 'Colorado', 'home_score': 41, 'opponent_score': 10, 'passing_yards': 118, 'rushing_yards': 265, fumbles: 0 },
  { date: '12/31/16', home: 'UW', opponent: 'Alabama', 'home_score': 7, 'opponent_score': 24, 'passing_yards': 150, 'rushing_yards': 44, fumbles: 1 }
];

var opponents = games.map(function (g) {
  return g.home === 'UW' ? g.opponent : g.home;
});
console.log(JSON.stringify(opponents));

function isUwLoss(g) {
  if (g.home === 'UW') {
    return g['home_score'] < g['opponent_score'];
  } else {
    return g['opponent_score'] < g['home_score'];
  }
}

var losses = games.filter(isUwLoss);
console.log(JSON.stringify(losses));

var lossOpponents = losses.map(function (g) {
  return g.home === 'UW' ? g.opponent : g.home;
});
console.log(JSON.stringify(lossOpponents));

losses.forEach(function (g) {
  var opp = g.home === 'UW' ? g.opponent : g.home;
  var venue = g.home === 'UW' ? 'UW' : opp;
  var os = g.home === 'UW' ? g['opponent_score'] : g['home_score'];
  var us = g.home === 'UW' ? g['home_score'] : g['opponent_score'];
  console.log(opp + ' at ' + venue + ', ' + os + ' to ' + us);
});

var fumbleCount = games.filter(function (g) {
  return g.fumbles > 0;
}).length;
console.log(fumbleCount);

var mostPass = games.reduce(function (best, g) {
  return g['passing_yards'] > best['passing_yards'] ? g : best;
}, games[0]);
console.log(JSON.stringify(mostPass));

function makeFumbledLossFilter(team) {
  return function (g) {
    var loss = false;
    if (g.home === team) {
      loss = g['home_score'] < g['opponent_score'];
    } else if (g.opponent === team) {
      loss = g['opponent_score'] < g['home_score'];
    }
    return loss && g.fumbles > 0;
  };
}

var fumbledLosses = games.filter(makeFumbledLossFilter('UW'));
console.log(JSON.stringify(fumbledLosses));

module.exports = {};