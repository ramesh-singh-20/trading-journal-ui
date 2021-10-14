export interface Trade {
    id?: number;
    stock: string;
    entryPrice: number;
    entryDate: Date;
    stopLoss: number,
    amountRisked: number,
    riskPercentPosition: number,
    riskPercentPortfolio: number,
    exitPrice?: number;
    exitDate?: Date;
    isProfitable?: string;
    tradeType: string;
    shortLong: string;
    chartPattern: string;
    commentsAfterBuy?: string;
    commentsAfterSell?: string;
    showMore?: boolean;
}