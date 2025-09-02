import TennisScorer from "./tennisScorer.js";

describe("TennisScorer", () => {
  //Empieza sin puntos     --> "Love - Love"
  it("game empieza con ambos en cero", () => {
    const scorer = new TennisScorer(0,0);
    expect(scorer.showScore()).toEqual("Love - Love");
  });

  it("Jugador 1 marca un punto y el jugador en cero", () => {
    const scorer = new TennisScorer(0,0);
    scorer.player1Scores();
    expect(scorer.showScore()).toEqual("15 - Love");
  });

  it("Jugador 1 marca 2 puntos y jugador 2 en cero", () => {
    const scorer = new TennisScorer(0,0);
    scorer.player1Scores();
    scorer.player1Scores();
    expect(scorer.showScore()).toEqual("30 - Love");
  });
  it("El Jugador 1 marca 3 puntos y jugador 2 en 0", () => {
    const scorer = new TennisScorer(0,0);
    scorer.player1Scores();
    scorer.player1Scores();
    scorer.player1Scores();
    expect(scorer.showScore()).toEqual("40 - Love");
  });

  it("El Jugador 2 marca 1 punto y jugador 2 en cero", () => {
    const scorer = new TennisScorer(0,0);
    scorer.player2Scores();
    expect(scorer.showScore()).toEqual("Love - 15");
  });

  it("El Jugador 2 marca 2 puntos y jugador 1 en cero", () => {
    const scorer = new TennisScorer(0,0);
    scorer.player2Scores();
    scorer.player2Scores();
    expect(scorer.showScore()).toEqual("Love - 30");
  });

  it("El Jugador 2 marca 3 puntos y jugador 1 en cero", () => {
    const scorer = new TennisScorer(0,0);
    scorer.player2Scores();
    scorer.player2Scores();
    scorer.player2Scores();
    expect(scorer.showScore()).toEqual("Love - 40");  
  });



});
