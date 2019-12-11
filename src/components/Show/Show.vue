<template>
  <div>
    <div class="container">
      <div class="row">
        <div class="col-md-9">
          <div>
            <img alt="" class="" :src="image" />
            <div class="caption-full">
              <h4 class="text-left">₦ {{ price }}</h4>
              <h4>{{ name }}</h4>
              <p>{{ description }}</p>
              <div v-if="auth">
                <router-link :to="{ path: '/edit/' + id }"
                  ><a class="btn btn-primary">Edit</a></router-link
                >

                <button id="style" class="btn btn-danger" @click="deleted">
                  Delete
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import cookie from 'js-cookie';
export default {
  data() {
    return {
      id: '',
      name: '',
      price: '',
      image: '',
      description: '',
    };
  },
  methods: {
    deleted() {
      axios
        .delete(`/campground/${this.$route.params.id}`, {
          headers: {
            Authorization: cookie.get('token'),
          },
        })
        .then(res => {
          this.$router.push('/campgrounds');
        })
        .catch(err);
    },
  },
  mounted: function() {
    axios.get(`/campground/${this.$route.params.id}`).then(res => {
      this.id = res.data.campground.id;
      this.name = res.data.campground.name;
      this.price = res.data.campground.price;
      this.image = res.data.campground.image;
      this.description = res.data.campground.description;
    });
  },
  computed: {
    auth() {
      return this.$store.getters.isAuthenticated;
    },
  },
};
</script>

<style>
#style {
  margin-left: 20px;
}
</style>
