import { InjectionToken } from '@angular/core';

export interface Config {
  searchDebounceTime: number;
}

export const CONFIG = new InjectionToken<Config>('CONFIG', {
  factory: () => ({searchDebounceTime: 300})
});
