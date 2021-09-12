import { Analytics } from "./analytics.interface";

export interface AnalyticsResponse {
    status: string;
    data: Analytics[];
    errors: Error [];
}