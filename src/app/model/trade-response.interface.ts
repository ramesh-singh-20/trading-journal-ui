import { Trade } from "./trade.interface";

export interface TradeResponse {
    status: string;
    data: Trade[];
    errors: Error [];
}