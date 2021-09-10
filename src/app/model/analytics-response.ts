import { Analytics } from "./analytics";

export interface AnalyticsResponse {
    status: string;
    data: Analytics;
    errors: Error [];
}