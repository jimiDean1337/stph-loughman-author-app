import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap, map, tap } from 'rxjs/operators';
import { BlogService } from '../../core/services/blog.service';
// import { Post } from './post.interface';

@Component({
  selector: 'sla-post',
  templateUrl: './blog-post.component.html',
  styleUrls: ['./blog-post.component.scss']
})
export class BlogPostComponent implements OnInit {
  postId: string;

  post$: Observable<any>;
  post: any;
  service: any;

  filteredPosts: any[] = [];

  constructor(private router: Router, private route: ActivatedRoute, private blogService: BlogService) { }


  filterPostsByKeywords(keys: string[] = null) {
    return this.blogService.getAllPosts()
    .pipe(
      map(req => req.items),
      map(res => {
        return res.filter((item, idx) => idx < 3);
      })
      )
    }

    navigate(url, params?: string[]) {
      this.router.navigate([`${url}/${params ? params.join('/'):''}`])
    }

    ngOnInit(): void {
      this.route.paramMap.subscribe(params => {
        this.postId = params.get('postId');
        this.post$ = this.blogService.getPostById(this.postId)
      })
      this.filterPostsByKeywords().subscribe(res => this.filteredPosts = res);
    }
}
