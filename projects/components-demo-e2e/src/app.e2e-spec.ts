import { AppPage } from './app.po';

describe('FlightSearch App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  describe('flight search from Hamburg to Graz', () => {
    it('should navigate to the page', async () => {
      await page.navigateTo();
    });

    it('should search for flights', async () => {
      await page.typeInFromInput('Hamburg');
      await page.typeInToInput('Graz');
      expect(await page.getAmountOfFlights()).toBe(3);
    });

    it('should select the first flight', async () => {
      await page.selectFlight(0);
      expect(await page.checkFlightSelected(0)).toBe(true);
    });
  });

  describe('flight search from Wien to Berlin', () => {
    it('should navigate to the page', async () => {
      await page.navigateTo();
    });

    it('should search for flights', async () => {
      await page.typeInFromInput('Wien');
      await page.typeInToInput('Berlin');
      expect(await page.getAmountOfFlights()).toBe(3);
    });

    it('should select the third flight', async () => {
      await page.selectFlight(2);
      expect(await page.checkFlightSelected(2)).toBe(true);
    });
  });
});
