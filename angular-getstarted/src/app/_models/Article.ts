export interface Article {
    id: number;
    header: string;
    content?: string;
    publishedAt: Date;
    views: number;
    authorEmail: string;
}