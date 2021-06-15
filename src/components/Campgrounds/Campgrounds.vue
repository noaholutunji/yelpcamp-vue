<template>
  <div class="container">
    <header class="jumbotron">
      <div class="container">
        <h1>
          <span class="glyphicon glyphicon-tent"></span>Welcome To YelpCamp
        </h1>
        <p>View our hand picked campgrounds from all over the world</p>

        <p v-if="auth">
          <router-link to="/new" class="btn btn-lg btn-success"
            >Add New Campground</router-link
          >
        </p>

        <div class="text-center text-info" v-if="!auth">
          To add to campground, you need to login or signup
        </div>
      </div>
    </header>

    <template>
      <div class="row text-center">
        <div class="campground-wrapper">
          <div v-for="campground in campgrounds" :key="campground.id">
            <div class="col-md-3 col-sm-6">
              <div>
                <img class="campground-img" alt="" :src="campground.image" />

                <h4>{{ campground.name }}</h4>

                <router-link :to="{ path: '/campground/' + campground.id }"
                  ><a class="btn btn-primary">More Info</a></router-link
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </template>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  data() {
    return {
      campgrounds: null,
    };
  },
  mounted: function() {
    axios.get('/campgrounds').then(result => {
      console.log(result);
      this.campgrounds = result.data.campgrounds;
    });
  },
  computed: {
    auth() {
      return this.$store.getters.isAuthenticated;
    },
  },
};
</script>

<style scoped>
.campground-wrapper {
  display: flex;
  flex-wrap: wrap;
}
.campground-img {
  width: 18em;
  padding-top: 10px;
}
</style>
