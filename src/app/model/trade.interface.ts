export interface Trade {
    id?: number;
    stock: string;
    entryPrice: number;
    entryDate: Date;
    exitPrice?: number;
    exitDate?: Date;
    isProfitable?: string;
    tradeType: string;
    shortLong: string;
    chartPattern: string;
    commentsAfterBuy?: string;
    commentsAfterSell?: string;
    
}