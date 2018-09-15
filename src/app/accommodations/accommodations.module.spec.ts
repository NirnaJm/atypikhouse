import { AccommodationsModule } from './accommodations.module';

describe('AccommodationsModule', () => {
  let accommodationsModule: AccommodationsModule;

  beforeEach(() => {
    accommodationsModule = new AccommodationsModule();
  });

  it('should create an instance', () => {
    expect(accommodationsModule).toBeTruthy();
  });
});
