import { Component, OnInit } from '@angular/core';
import { newsItems } from '../../../news-items';
import { newsSliders } from '../../../news-sliders';
import { newsReviews } from '../../../news-reviews';
@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {
  items = newsItems;
  sliders = newsSliders;
  reviews = newsReviews;
  constructor() { }

  ngOnInit(): void {
  }

}
