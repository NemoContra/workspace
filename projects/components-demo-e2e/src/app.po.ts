import { browser, by, element, ElementArrayFinder, ElementFinder, promise } from 'protractor';

export class AppPage {
  public navigateTo(): promise.Promise<any> {
    return browser.get('/');
  }

  public typeInFromInput(text: string): promise.Promise<void> {
    return this.getFromInput().sendKeys(text);
  }

  public typeInToInput(text: string): promise.Promise<void> {
    return this.getToInput().sendKeys(text);
  }

  public getAmountOfFlights(): promise.Promise<number> {
    return this.getFlightContainers().count();
  }

  public selectFlight(index: number): promise.Promise<void> {
    return this.getFlightByIndex(index).element(by.css('button')).click();
  }

  public checkFlightSelected(index: number): promise.Promise<boolean> {
    return this.getFlightByIndex(index).getAttribute('class').then(classList => {
      return classList.includes('selected');
    });
  }

  private getFlightByIndex(index: number): ElementFinder {
    return this.getFlightContainers().get(index);
  }

  private getFlightContainers(): ElementArrayFinder {
    return element.all(by.css('.flight-box'));
  }

  private getFromInput(): ElementFinder {
    return element.all(by.css('input')).get(0);
  }

  private getToInput(): ElementFinder {
    return element.all(by.css('input')).get(1);
  }
}
