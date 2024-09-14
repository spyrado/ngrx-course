import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { Store } from "@ngrx/store";
import { AppState } from "../reducers";
import { finalize, first, tap } from "rxjs/operators";
import { courseActions } from "./actions-types";

@Injectable()
export class CoursesResolver implements Resolve<any> {

  private loading = false

  constructor(private store: Store<AppState>) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    console.log("route: ", route);
    console.log("state: ", state);
    return this.store
      .pipe(
        tap(() => {
          if(!this.loading) {
            this.loading = true;
            this.store.dispatch(courseActions.loadAllCourses());
          }
        }),
        first(),
        finalize(() => this.loading = false)
      )
  }
}