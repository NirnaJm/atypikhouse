import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Activity } from '../../activities/activity';
import { ACTIVITIES } from '../../shared/service/mock/mock-activities.service';

@Injectable({
  providedIn: 'root'
})
export class ActivitiesService {

  constructor() { }

getActivities(): Observable<Activity[]> {
  return of (ACTIVITIES);
}
getActivity(id: number): Observable<Activity> {
  return of(ACTIVITIES.find(activity => activity.id_activity === id));
}

}
