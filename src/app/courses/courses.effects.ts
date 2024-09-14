import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { courseActions } from "./actions-types";
import { CoursesHttpService } from "./services/courses-http.service";
import { concatMap, map } from "rxjs/operators";

@Injectable()
export class CoursesEffects {

  loadCourses$ = createEffect(
    () => this.actions$
      .pipe(
        ofType(courseActions.loadAllCourses),
        concatMap(action => this.coursesHttpService.findAllCourses()),
        map(courses => courseActions.allCoursesLoaded({ courses }))
      )
  )

  constructor(
    private actions$: Actions,
    private coursesHttpService: CoursesHttpService
  ) {}
}