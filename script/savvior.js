var images = [
    "https://pixabay.com/static/uploads/photo/2015/12/03/10/43/cat-1074657_960_720.jpg",
    "https://pbs.twimg.com/profile_images/378800000532546226/dbe5f0727b69487016ffd67a6689e75a.jpeg",
    "http://g-ecx.images-amazon.com/images/G/01/img15/pet-products/small-tiles/30423_pets-products_january-site-flip_3-cathealth_short-tile_592x304._CB286975940_.jpg",
    "http://d21vu35cjx7sd4.cloudfront.net/dims3/MMAH/thumbnail/590x420/quality/90/?url=http%3A%2F%2Fs3.amazonaws.com%2Fassets.prod.vetstreet.com%2Fbb%2Fe8%2F698d932c44f7aae2b069c7afcfa2%2Fpetting-cat-thinkstockphotos-487980522-590sm4716.jpg",
    "http://cdn.grumpycats.com/wp-content/uploads/2016/03/IMG_0372-1-758x758.jpg",
    "https://s-media-cache-ak0.pinimg.com/736x/f0/26/05/f0260599e1251c67eefca31c02a19a81.jpg"
];

function createBoxes() {
    var boxes = images.map(function(source) {
        var img = document.createElement("img");
        img.src = source;
        var box = document.createElement("div");
        box.className = "box";
        box.appendChild(img);
        return box;
    });

    return boxes;
}

$(document).ready(function() {
    'use strict';
    savvior.init('#grid', {
        'screen and (max-width: 600px)': { columns: 1 },
        'screen and (min-width: 600px) and (max-width: 800px)': { columns: 2 },
        'screen and (min-width: 800px) and (max-width: 1000px)': { columns: 3 },
        'screen and (min-width: 1000px)': { columns: 4 }
    });
    var boxes = createBoxes();
    console.log(savvior.ready('#grid'))

    var options = {
        method: 'append',
        clone: false
    };

    savvior.appendElements('#grid', boxes, options, function(grid) {
        console.log(grid);
    });
});
