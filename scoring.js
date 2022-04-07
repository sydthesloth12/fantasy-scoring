// function calculateScore(player) {
//   let score = []
//   let position = player.position 

//   if (position === 'QB') {
//     let passingYardScore = player.stats.passing.yards / 25
//     let rushingYardScore = player.stats.rushing.yards / 10
//     let passingTouchdownScore = player.stats.passing.touchdowns * 6
//     let rushingTouchdownScore = player.stats.rushing.touchdowns * 6
//     let intersceptionScore = player.stats.passing.interceptions * -3
//     let rushingFumbleScore = player.stats.rushing.fumbles * -3

//     const score = (passingYardScore + rushingYardScore + passingTouchdownScore + rushingTouchdownScore + intersceptionScore + rushingFumbleScore)
//   }

//   return score
// }

const calculateQB = (player) => {
  const score = player.stats.passing.yards / 25 + player.stats.passing.touchdowns * 6 + 
  player.stats.passing.interceptions * -3 + player.stats.rushing.touchdowns * 6 +  
  player.stats.rushing.yards / 10 + player.stats.rushing.fumbles * -3

  return score
}

const calculateScore = (player) =>{
  switch (player.position) {
    case 'QB': 
    return calculateQB(player)
    case 'RB': 
    return calculateRB (player)
    default: return 0 

  }
}

module.exports = calculateScore

