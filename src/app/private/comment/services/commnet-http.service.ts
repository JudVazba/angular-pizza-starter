import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HTTPService } from 'src/app/core/http/http.service';
@Injectable()
export class CommentService extends HTTPService {
  constructor(http: HttpClient) {
    super(http, 'comments');
  }
  create(model) {
    return this.http.post(this.resolve(), model).toPromise();
  }
}
