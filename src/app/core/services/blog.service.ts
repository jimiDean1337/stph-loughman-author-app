import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, filter } from 'rxjs/operators';
// import { Post } from '../post/post.interface';
import { Observable } from 'rxjs';
export interface BlogRequest {
  kind?: string;
  items?: any[];
}
@Injectable({
  providedIn: 'root'
})
export class BlogService {

  protected apiKey = 'AIzaSyCwVyv5WDVwg5XDyGetGqYo2UWScueSk84';
  apiRoot = 'https://www.googleapis.com/blogger/v3/blogs/';
  authorId = '6952084627250551242';
  posts: any;
  constructor(private http: HttpClient) { }

  getAllPosts(limit = 50) {
    return this.http.get<BlogRequest>(`${this.apiRoot}${this.authorId}/posts?key=${this.apiKey}`).pipe(
      map(res => {
        res.items.map(item => {
          // console.log(item)
          item.description = this.truncatePostContent(item.content, 100);
        })
        return res;
      })
    );
  }

  getPostById(postId: string) {
    return this.getAllPosts().pipe(map(res => {
      return res.items.filter(item => item.id === postId)[0];
    })
    )
  }

  queryByLabels(labels: string[]) {
    return this.http.get<BlogRequest>(`${this.apiRoot}${this.authorId}/posts?labels=${labels.join(',')}&key=${this.apiKey}`).pipe(
      map(res => {
        res.items.map(item => {
          // console.log(item)
          item.description = this.truncatePostContent(item.content, 100);
        })
        return res;
      })
    );
  }

  searchPostsByterm(q: string[]) {
    return this.http.get<BlogRequest>(`${this.apiRoot}${this.authorId}/posts/search?q=${q.join(',')}&key=${this.apiKey}`).pipe(
      map(res => {
        res.items.map(item => {
          // console.log(item)
          item.description = this.truncatePostContent(item.content, 100);
        })
        return res;
      })
    );
  }

  filterByDate(startDate: string, endDate: string) {
    return this.http.get<BlogRequest>(`${this.apiRoot}${this.authorId}/posts?startDate=${startDate}&endDate=${endDate}&key=${this.apiKey}`).pipe(
      map(res => {
        res.items.map(item => {
          // console.log(item)
          item.description = this.truncatePostContent(item.content, 100);
        })
        return res;
      })
    );
  }

  truncatePostContent(content, maxLength) {
    return String(content).slice(0, maxLength) + '. . . .';
  }
}
