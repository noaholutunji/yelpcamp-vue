<template>
  <div class="container">
    <h3 class="text-center">Edit</h3>
    <div class="editForm">
      <form @submit.prevent="onSubmit">
        <div class="form-group">
          <input
            type="text"
            name="name"
            class="form-control"
            value=""
            v-model="name"
          />
        </div>
        <div class="form-group">
          <input
            type="text"
            name="price"
            class="form-control"
            value=""
            v-model="price"
          />
        </div>
        <div class="form-group">
          <input
            type="text"
            name="image"
            class="form-control"
            value=""
            v-model="image"
          />
        </div>
        <div class="form-group">
          <input
            type="text"
            name="description"
            class="form-control"
            value=""
            v-model="description"
          />
        </div>
        <div class="form-group">
          <input type="submit" value="Submit" class="btn btn-primary" />
        </div>
      </form>
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
    onSubmit() {
      const formData = {
        name: this.name,
        price: this.price,
        image: this.image,
        description: this.description,
      };
      console.log(formData);
      axios
        .patch(`/campground/${this.$route.params.id}`, formData, {
          headers: {
            Authorization: cookie.get('token'),
          },
        })
        .then(res => {
          this.$router.push(`/campground/${this.$route.params.id}`);
        })
        .catch(error => console.log(error));
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

<style scoped>
.editForm {
  width: 40%;
  margin: 25px auto;
}
</style>
