export function vue() {

    const app = Vue.createApp({

        data() {
            return {
                albumsData: [],
                error: null,
                selectedAlbum: null,
                loadingAlbums: true,
                loadingAlbumDetails: false,
                showPopup: false,
                search: {
                    song_name: '',
                    artist_name: '',
                    genre_name: ''
                }
            };
        },

        created() {
              console.log("Vue is running");
            this.getAlbums();
        },

        methods: {

            getAlbums(searchParams = {}) {
                this.loadingAlbums = true;
                this.error = null;

                let url = "http://127.0.0.1:8000/api/songs";

                // builds the url for the search functionality
                const query = new URLSearchParams(searchParams).toString();
                if (query) {
                    url += `?${query}`;
                }

                // Simulate an API 

                fetch(url)
                .then(res => res.json())
                .then(data => {
                    // map API → Vue structure
                    this.albumsData = data.map(song => ({
                        id: song.id,
                        title: song.name,
                        artist: song.artist?.name || "Unknown",
                        genre: song.genre?.name || "Unknown",
                        price: `$${song.price}`,
                        description: song.description,
                        image_url: song.thumbnail
                    }));

                    this.loadingAlbums = false;
                })
                .catch(err => {
                    this.error = err.message;
                    this.loadingAlbums = false;
                });

                this.loadingAlbums = false;
            },

            getAlbum(id) {
                console.log(id);

                this.loadingAlbumDetails = true;
                this.error = null;
                this.selectedAlbum = null;

                fetch(`http://127.0.0.1:8000/api/songs/${id}`)
                    .then(res => res.json())
                    .then(data => {
                        console.log("Album data:", data);

                        
                        this.selectedAlbum = {
                            id: data.id,
                            title: data.name,
                            artist: data.artist?.name || "Unknown",
                            genre: data.genre?.name || "Unknown",
                            price: `$${data.price}`,
                            description: data.description,
                            image_url: data.thumbnail
                        };
                        console.log(this.selectedAlbum);

                        this.loadingAlbumDetails = false;
                        this.showPopup = true;

                        
                        // document.querySelector("#albumPopup").classList.remove("hidden");
                    })
                    .catch(err => {
                        this.error = err.message;
                        this.loadingAlbumDetails = false;
                    });

            },
            closePopUp() {
                this.showPopup = false;
                this.selectedAlbum = null;
            },
            searchAlbums() {
                this.getAlbums(this.search);
            }
        }

    });

    app.mount("#app");

}

