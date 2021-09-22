export interface Trade {
    id: number;
    stock: string;
    entryPrice: number;
    entryDate: string;
    exitPrice?: number;
    exitDate?: string;
    isProfitable?: string;
    tradeType: string;
    shortLong: string;
    chartPattern: string;
    commentsAfterBuy?: string;
    commentsAfterSell?: string;
}