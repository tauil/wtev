<template>
<section id="nearby-venues-list">
  <h2>Venues related to {{section}} nearby: {{location}}</h2>
  <p>({{radius}} meters far)</p>
  
  <button @click="refineSearch = true" v-if="!refineSearch">Refine Search</button>
  
  <form id="app" @submit.prevent="loadVenues(location)" v-if="refineSearch">
    <div class="flex">
      <p class="flex-child">
        <label for="location">Location</label>
        <input id="location" v-model="location" type="text" name="location" autocomplete="off">
      </p>
      
      <p class="flex-child">
        <label for="section">Venue Type (Pizzeria, Burger)</label>
        <input id="section" v-model="section" type="text" name="section" autocomplete="off">
      </p>
      
      <p class="flex-child">
        <label for="radius">Radius of distance from you</label>
        <input id="radius" v-model="radius" type="number" name="radius" autocomplete="off">
      </p>
    </div>
    
    <div id="form-actions">
      <button @click="refineSearch = false">Cancel</button>
      <input type="submit" value="Search">
    </div>
  </form>
  
  <ul v-if="!loading">
    <li v-for="venue in venues" :key="venue.id">
      <a v-bind:href="venueMap(venue.location.address)" target="_new">{{venue.name}}</a><br />
      {{venue.location.address}} {{venue.location.postalCode}}<br />
      {{venue.categories.map(c => c.name).join(', ')}}
    </li>
    <li v-if="venues.length === 0">No venues found with this criteria.</li>
  </ul>

  <p v-if="loading">Loading...</p>
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
      refineSearch: false,
      // Default location case user doesn't allow browser to get the location.
      location: 'Amsterdam, NH, Netherlands',
      radius: 250,
      section: 'pizza',
      venues: []
    }
  },
  created: function () {
    this.loadVenues();
  },
  methods: {
    venueMap: function (address) {
      return 'https://www.google.com/maps/search/?api=1&query=' + address;
    },
    loadVenues: function (location) {
      this.loading = true;
      let component = this;

      const observerResolver = {
        next: (venues) => {
          component.venues = venues;
          component.loading = false;
        },
        error: (error) => {
          console.log(error);
        }
      }

      // If location explicitly set, use it and return
      if (location) {
        client.getVenues(component.location, component.radius, component.section).subscribe(observerResolver);
        return;
      }

      navigator.geolocation.getCurrentPosition(
        function(position) {
          component.location = position.coords.latitude + ',' + position.coords.longitude;
          client.getVenues(component.location, component.radius, component.section).subscribe(observerResolver);
        },
        function() {
          // Loading vanues using default location
          client.getVenues(component.location, component.radius, component.section).subscribe(observerResolver);
        }
      );
      
    }
  }
}
</script>

<style scoped>
</style>
