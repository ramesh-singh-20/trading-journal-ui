import { Trade } from "./trade.interface";

export interface TradeResponseDto {
    trades: Trade[];
    totalPages: number;
    totalRecords: number;
    pageSize: number;
}