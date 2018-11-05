<template>
<section id="nearby-venues-list">
  <h1>Near by venues:</h1>
  <ul>
    <li v-for="venue in venues" :key="venue.id">
      {{venue.name}}<br />
      {{venue.location.address}} {{venue.location.postalCode}}<br />
      {{venue.categories.map(c => c.name).join(', ')}}
    </li>
  </ul>
</section>
</template>

<script>
import APICLient from '../services/APIClient.js';
const client = new APICLient();
export default {
  name: 'nearby-venues-list',
  data: () => {
    return {
      loading: false,
      venues: []
    }
  },
  created: function () {
    this.loadVenues();
  },
  methods: {
    loadVenues: function () {
      client.getVenues().subscribe(venues => this.venues = venues);
    }
  }
}
</script>

<style>
</style>
