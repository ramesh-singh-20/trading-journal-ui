import { Portfolio } from "./portfolio.interface";

export interface PortfolioResponse {
    status: string;
    data: Portfolio[];
}