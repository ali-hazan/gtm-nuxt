<template>
  <div>
    <button @click="triggerEvent">Track me!</button>
  </div>
</template>

<script lang="ts" setup>
import { useGtm } from '@gtm-support/vue-gtm';

const gtm = useGtm();

function triggerEvent() {
  gtm.trackEvent({
    event: 'event name',
    category: 'category',
    action: 'click',
    label: 'My custom component trigger',
    value: 5000,
    noninteraction: false,
  });
}




</script>
