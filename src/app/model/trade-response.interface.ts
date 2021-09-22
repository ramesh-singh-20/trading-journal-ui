import { TradeResponseDto } from "./trade-response-dto.interface";
import { Trade } from "./trade.interface";

export interface TradeResponse {
    status: string;
    data: TradeResponseDto;
    errors: Error [];
}