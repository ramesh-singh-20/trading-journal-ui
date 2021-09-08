export interface Analytics {
    noOfTrades: number;
    battingAverage: number;
    averageGain: number;
    averageLoss: number;
    winLossRatio: number;
    largestGain: number;
    largestLoss: number;
    netAverage: number;
    percentWin: number;
    percentLoss: number;
    wins: number;
    losses: number;
    adjustedWinLossRatio: number;
    avgDaysGainsHeld: number;
    avgDaysLossesHeld: number;
    month: string;
    year: number;
    tradeType: string;
    shortLong: string;
    chartPattern: string;
}