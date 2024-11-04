//задание 1


const musicCollection = {
    albums: [
        { title: "Abbey Road", artist: "The Beatles", year: "1969" },
        { title: "Back in Black", artist: "AC/DC", year: "1980" },
        { title: "Rumors", artist: "Fleetwood Mac", year: "1977" },
    ],

    [Symbol.iterator]() {
        let index = 0;
        const albums = this.albums;
        return {
            next() {
                if (index < albums.length) {
                    return { value: albums[index++], done: false };
                } else {
                    return { done: true };
                }
            }
        };
    }
};

// Используем цикл for...of для перебора альбомов
for (const album of musicCollection) {
    console.log(`${album.title} - ${album.artist} (${album.year})`);
}



