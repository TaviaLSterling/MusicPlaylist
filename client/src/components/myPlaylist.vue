<template>
<div class="myplaylist container">
    <div class="row">
        <div class="col-sm-4" v-for="data in Myplaylist" :key="data.id">
            <audio controls>
                <source :src="data.preview">
            </audio>
            {{data.artist}}
             {{data.trackName}} 
             {{data.album}}
            <button @click="deleteSongs(song)">Delete</button>
         </div>
         </div>
    </div>
</template>

<script>
export default {
  name: "Myplaylist",
  // data() {
  //   return {};
  // },
  mounted() {
    this.$store.dispatch("getSongs")
  },
  computed: {
    Myplaylist() {
      return this.$store.state.myplaylist;
    }
  },
  methods: {
    deleteSong(song) {
      this.$store.dispatch("deleteSong", song);
    },
    addSongs(song) {
        this.$store.dipatch('addSongs', song)
    }
  }
};
</script>

<style>
</style>