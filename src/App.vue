<template>
  <div id="app">
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
