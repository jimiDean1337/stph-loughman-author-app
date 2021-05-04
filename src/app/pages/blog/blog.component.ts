import { Component, OnInit } from '@angular/core';
import { BlogService } from '../../core/services/blog.service';
import { Router } from '@angular/router';
import { NgModel, NgForm } from '@angular/forms';
import { isNgTemplate } from '@angular/compiler';

@Component({
  selector: 'sla-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {
  posts: any[];

  filterResults: any[];

  filterObj: any = {
    results: [],
    queryString: '',
    keywords: [],
    limit: 5,
    options: {
    }
  }

  constructor(private router: Router, private blogService: BlogService) { }
// TODO: Complete blog filters
  ngOnInit(): void {
    this.filterResults = [];
    this.blogService.getAllPosts()
      .subscribe(res => {
        console.log('blog posts', res)
        this.posts = res.items;
        // this.posts.map(item => {
        //   item.description = this.blogService.truncatePostContent(item.content, 150)
        // })
      })
  }

  addTag(e) {
    console.log(e)
    this.filterObj.keywords.map((item: any) => item['tagValue'] ? `${item['tagValue']}` : `${item}`)
  }

  filterByDate(date: string) {
    const start = new Date(date);
    const end = new Date(start.getDate() + 30);
    const startDate = start.toISOString();
    const endDate = end.toISOString();
    this.blogService.filterByDate(startDate, endDate).subscribe(res => this.posts = res.items)
  }

  filterByTerms(q: string[], additionalParams?: any) {

  }

  filterByLabels(labels: string[]) {}

  navigate(url, id) {
    this.router.navigate([`${url}/${id}`]);
  }

}
