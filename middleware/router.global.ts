
import { useGtm } from '@gtm-support/vue-gtm';

export default defineNuxtRouteMiddleware(async (to, from) => {
  // Here also we can add events
  const gtm = useGtm();
  if (gtm)
    gtm.trackEvent({
      event: 'router-change',
      category: 'route',
      action: 'navigation',
      label: "Page",
      value: `Page changed from: ${from.path} to ${to.path}`,
      noninteraction: false,
    });

})
