import * as localizations from './languages';

export enum Locals {
  dutch = 'dutch',
  english = 'english'
}

export const getLocalization = (lang: Locals): { [key: string]: string } => {
  return localizations[lang]
};