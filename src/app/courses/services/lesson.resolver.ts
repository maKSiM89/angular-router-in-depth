import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {CoursesService} from './courses.service';
import {LessonDetail} from '../model/lesson-detail';

@Injectable()
export class LessonResolver implements Resolve<LessonDetail> {
  constructor(private coursesService: CoursesService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<LessonDetail> {
    const courseUrl = route.paramMap.get('courseUrl');
    const lessonSeqNo = route.paramMap.get('lessonSeqNo');

    return this.coursesService.loadLessonDetail(courseUrl, lessonSeqNo);
  }
}
