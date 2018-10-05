<template>
<div class="itunes container">
  
    <div class="col-sm-6" v-for="song in songs" :key="song.id">
        <button @click="addSongs(song)">Add</button>
        {{song.artist}} {{song.trackName}}
        <img :src="song.album">
        <audio controls>
            <source :src="song.preview" type="audio/ogg">
            </audio>
           
            </div>
        </div>
</template>

<script>
export default {
  name: "itunes",
  data() {
    return {

    };
  },
  computed: {
    songs() {
      return this.$store.state.songs;
    }
  },
  methods: {
    addSongs(song) {
      this.$store.dispatch("addSongs", song);
    }
  }
};
</script>

<style>
</style>