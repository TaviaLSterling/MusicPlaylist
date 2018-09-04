<template>
<div class="myplaylist container">
  
    <div class="row">
        <div class="col-sm-4 offset-sm-8" v-for="data in myplaylist" :key="data.id">
            <audio controls>
                <source :src="data.preview">
            </audio>
            {{data.artist}}
             {{data.trackName}} 
             {{data.album}}
            <button @click="deleteSong(data)">Delete</button>
         </div>
         </div>
    </div>
    
</template>

<script>
export default {
  name: "myplaylist",
  // data() {
  //   return {};
  // },
  mounted() {
    this.$store.dispatch("getSongs")
  },
  computed: {
    myplaylist() {
      return this.$store.state.playlist;
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