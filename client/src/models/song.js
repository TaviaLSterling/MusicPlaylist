export default class Song {
    constructor(data) {
        this.trackName = data.trackName,
        this.artist = data.artistName,
        this.collectionName = data.collectionName,
        this.album = data.artworkUrl60.replace(/60x60/g, "200x200"),
        this.preview = data.previewUrl,
        this.trackId = data.trackId
    }
}