export function vue() {

    const app = Vue.createApp({

        data() {
            return {
                albumsData: [],
                error: null,
                selectedAlbum: null,
                loadingAlbums: true,
                loadingAlbumDetails: false
            };
        },

        created() {
              console.log("Vue is running");
            this.getAlbums();
        },

        methods: {

            getAlbums() {

                // Simulate an API 

                this.albumsData = [
                    {
                        id: 1,
                        genre: "Rock",
                        artist: "Pink Floyd",
                        title: "The Wall",
                        price: "$29.99",
                        description: "Classic progressive rock album.",
                        image_url: ""
                    },
                    {
                        id: 2,
                        genre: "Jazz",
                        artist: "Miles Davis",
                        title: "Kind of Blue",
                        price: "$24.99",
                        description: "Legendary jazz masterpiece.",
                        image_url: ""
                    }
                ];

                this.loadingAlbums = false;
            },

            getAlbum(id) {

                this.loadingAlbumDetails = true;
                this.error = null;
                this.selectedAlbum = null;

                const foundAlbum = this.albumsData.find(album => album.id === id);

                if (!foundAlbum) {
                    this.error = "Album not found.";
                    this.loadingAlbumDetails = false;
                    return;
                }

                this.selectedAlbum = foundAlbum;
                this.loadingAlbumDetails = false;
            }

        }

    });

    app.mount("#app");

}

