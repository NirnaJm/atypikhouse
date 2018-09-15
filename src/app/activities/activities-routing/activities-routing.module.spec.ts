import { ActivitiesRoutingModule } from './activities-routing.module';

describe('ActivitiesRoutingModule', () => {
  let activitiesRoutingModule: ActivitiesRoutingModule;

  beforeEach(() => {
    activitiesRoutingModule = new ActivitiesRoutingModule();
  });

  it('should create an instance', () => {
    expect(activitiesRoutingModule).toBeTruthy();
  });
});
