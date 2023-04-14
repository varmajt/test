export interface Article {
    articleId: number;
    header: string;
    content?: string;
    publishedAt: Date;
    views: number;
    authorEmail: string;
}