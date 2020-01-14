import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { Subject, throwError } from 'rxjs';

import { Post } from './post.model';

@Injectable({providedIn: 'root'})
export class PostsService {
    error = new Subject<string>();

    constructor(private http: HttpClient) { }

    createAndStorePost(title: string, content: string) {
        const postData: Post = { title: title, content: content };
        this.http.post<{name: string}>(
            'https://ng-complete-guide-c5498.firebaseio.com/posts.json', 
            postData
        )
        .subscribe(responseData => {
            console.log(responseData);
        }, error => {
            this.error.next(error.message);
        });
    }

    fetchPosts() {
        let searchParams = new HttpParams();
        searchParams = searchParams.append('print', 'pretty');
        searchParams = searchParams.append('custom', 'key');
        return this.http.get<{[key: string]: Post}>(
            'https://ng-complete-guide-c5498.firebaseio.com/posts.json',
            {
                headers: new HttpHeaders({
                    'Custom-header': 'Hello'
                }),
                params: searchParams
            }
        )
        .pipe(
            map(responseData => {
              const postsArrays: Post[] = [];
              for (const key in responseData) {
                if (responseData.hasOwnProperty(key)) {
                  postsArrays.push({ ...responseData[key], id: key });
                }
              }
              return postsArrays;
            }),
            catchError(errorRes => {
                // Send to analytics server
                return throwError(errorRes);
            })
        )
    }

    deletePosts() {
        return this.http.delete('https://ng-complete-guide-c5498.firebaseio.com/posts.json');
    }
}