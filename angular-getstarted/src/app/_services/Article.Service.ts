import { Injectable } from "@angular/core";
import { Article } from "../_models/Article";
import { HttpClient } from "@angular/common/http";
import { Observable, map, of } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class ArticleService {

    public observableArticles$: Observable<Article[]> = of(
        [{ articleId: 1, authorEmail: "jv@gmail.com", publishedAt: new Date("4/1/2023"), views: 0, header: "This is a first Article!", content: "This is a sample content" },
        { articleId: 2, authorEmail: "jv@gmail.com", publishedAt: new Date("4/2/2023"), views: 0, header: "This is a second Article!", content: "This is a sample content" }]
    );

    constructor(private http: HttpClient) {

    }

    GetAllArticles() {
        return this.observableArticles$;
    }

    GetArticleById(id: number) {
        return this.observableArticles$.pipe(map(articles => { let article = articles.filter(a => a.articleId === id); return (article.length > 0) ? article[0] : null }));
    }

    AddArticle(newArticle: Article) {
        // var maxid = Math.max(...this.Articles.map(x => x.id));
        // newArticle.id = maxid + 1;
        // this.Articles = [...this.Articles, newArticle];
        return true;
    }

}