class TennisScorer {
  constructor(player1Points, player2Points = 0) {
    this.player1Points = player1Points;
    this.player2Points = player2Points;
  }
  /*
  showScore() {
    if (this.player1Points === 1) {
      return "15 - Love";
    } else if (this.player1Points === 2) {
      return "30 - Love";
    } else if (this.player1Points === 3) {
      return "40 - Love";
    }
    return "Love - Love";
  }*/
 
    showScore() {
      const res = ["Love", "15", "30", "40"];
      return res[this.player1Points] + " - " + res[this.player2Points];
    }

  player1Scores() {
    this.player1Points++;
  }
}



export default TennisScorer;
