<template>
<div id="app">
  <h1>Wat te eten vandaag?</h1>
  <NearbyVenuesList />
</div>
</template>

<script>
import NearbyVenuesList from './components/NearbyVenuesList.vue'

export default {
  name: 'app',
  components: {
    NearbyVenuesList
  }
}
</script>

<style lang="scss">
@import './assets/stylesheets/shared.scss';
</style>
