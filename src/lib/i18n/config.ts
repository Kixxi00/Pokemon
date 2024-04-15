import type {LocalePrefix} from 'next-intl/dist/types/src/shared/types';

export type Locale = "en"|"de";
export type Locales = Locale[];

export type I18nConfig = {
    name:string;
    locales:Locales;
    defaultLocale:Locale;
    localePrefix: LocalePrefix;
};

const localePrefix: LocalePrefix="as-needed";

export const i18nConfig: I18nConfig = {
    name: 'OptiBus',
    locales: ['en', 'de'],
    defaultLocale: 'en',
    localePrefix,
}