import { Component, OnInit } from '@angular/core';
import { Article } from '../_models/Article';
import { ArticleService } from '../_services/Article.Service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private articleService: ArticleService) {

  }

  AllArticles: Article[] = [];

  ngOnInit(): void {
    this.articleService.GetAllArticles().subscribe(s => {
      this.AllArticles = s
    });
  }

}
