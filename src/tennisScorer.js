class TennisScorer {
  constructor(player1Points, player2Points) {
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
      if (this.player1Points >= 3 && this.player2Points >= 3) {
        if (this.player1Points === this.player2Points) {
          return "Deuce";
        } else if (this.player1Points === this.player2Points + 1) {
          return "Advantage Player 1";
        } else if (this.player2Points === this.player1Points + 1) {
          return "Advantage Player 2";
        } else if (this.player1Points >= this.player2Points + 2) {
          return "Player 1 wins";
        }
      }
      return res[this.player1Points] + " - " + res[this.player2Points];
    
  }

  player1Scores() {
    this.player1Points++;
  }
  player2Scores() {
    this.player2Points++;
  }
}



export default TennisScorer;
