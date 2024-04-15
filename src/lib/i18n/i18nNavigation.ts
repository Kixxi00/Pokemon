import {createSharedPathnamesNavigation} from 'next-intl/navigation';

import { i18nConfig } from "./config";

export const {usePathname, useRouter} = createSharedPathnamesNavigation({
locales: i18nConfig.locales,
localePrefix: i18nConfig.localePrefix,
})