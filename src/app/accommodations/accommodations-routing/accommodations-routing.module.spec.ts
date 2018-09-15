import { AccommodationsRoutingModule } from './accommodations-routing.module';

describe('AccommodationsRoutingModule', () => {
  let accommodationsRoutingModule: AccommodationsRoutingModule;

  beforeEach(() => {
    accommodationsRoutingModule = new AccommodationsRoutingModule();
  });

  it('should create an instance', () => {
    expect(accommodationsRoutingModule).toBeTruthy();
  });
});
