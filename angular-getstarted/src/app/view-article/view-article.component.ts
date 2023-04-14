import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Observable, switchMap } from 'rxjs';
import { ArticleService } from '../_services/Article.Service';
import { Article } from '../_models/Article';

@Component({
  selector: 'app-view-article',
  templateUrl: './view-article.component.html',
  styleUrls: ['./view-article.component.css']
})
export class ViewArticleComponent implements OnInit {

  Article$?: Observable<Article | null>;

  constructor(private route: ActivatedRoute, private router: Router, private articleService: ArticleService) {

  }

  ngOnInit() {
    // this.route.queryParams.subscribe(params => {
    //   this.articleId = params[0];
    //   if (this.articleId == null || this.articleId <= 0) {
    //     this.router.navigate(['home'])
    //   }
    // });

    this.Article$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) =>
        this.articleService.GetArticleById(parseFloat(params.get('id')!)))
    )!;
  }

  goToList() {
    this.router.navigate(['home'])
  }
}
