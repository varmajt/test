import { Injectable } from "@angular/core";
import { Article } from "../_models/Article";
import { HttpClient } from "@angular/common/http";
import { Observable, of, tap } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class ArticleService {

    public observableArticles$: Observable<Article[]> = of(
        [{ id: 1, authorEmail: "jv@gmail.com", publishedAt: new Date(), views: 0, header: "Something is coming up here!" },
        { id: 2, authorEmail: "jv@gmail.com", publishedAt: new Date(), views: 0, header: "Something is coming up here!" }]
    );
    constructor(private http: HttpClient) {

    }

    GetAllArticles() {
        return this.observableArticles$;
    }

    GetArticleById(id: number) {
        return this.observableArticles$.pipe(tap(res => { return res.find(x => x.id == id) }));
    }

    AddArticle(newArticle: Article) {
        // var maxid = Math.max(...this.Articles.map(x => x.id));
        // newArticle.id = maxid + 1;
        // this.Articles = [...this.Articles, newArticle];
        return true;
    }

}