import Vue from 'vue'
import Vuex from 'vuex'
import Axios from 'axios'
import router from './router'
import Song from './models/song';

Vue.use(Vuex)

let musicApi = Axios.create({
  baseURL: 'https://itunes.apple.com/search?term=',
  timeout: 3000
})

export default new Vuex.Store({
  state: {
    song: [],
    songs: {}
  },
  mutations: {
    setSong(state, song) {
      state.song = song
    },
    setSongs(state,songs){
      state.songs = songs
    }
  },
  actions: {
getSongs({commit,dispatch}) {
musicApi.get('/songs')
.then(res => {
  commit('setSongs',res.data)
})
},
search({dispatch, commit}, artist){
  musicApi.get(`/${artist}`)
  .then(res => {
    let music = res.data.results.map(s => new Song(s))
    commit('setSong', music)
  })
},
addToSongs({dispatch, commit}) {
  musicApi.post('/songs', obj.song)
  .then(res =>{
    dispatch('createSongs', res)
  })
},
createSongs({dispatch, commit}, data) {
  let newPlaylist = []
  newPlaylist.push(data.data)
  musicApi.post('',{ songs: newPlaylist})
  .then(res => {
    commit('setSongs', res.data)
  })
}
  }
})
