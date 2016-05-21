var photosIndex = 0;
var photos = [];
var numberOfLoadedPhotos = 0;
var hasFired = false;

function createCell(imageURL) {
    var cell = document.createElement("div");
    cell.className = "cell loading";

    var image = new Image();
    image.src = imageURL;
    image.onload = function() {
        cell.className = "cell";
        numberOfLoadedPhotos += 1;
        if (numberOfLoadedPhotos >= 10) {
            numberOfLoadedPhotos = 0;
            hasFired = false;
        }
    }
    cell.appendChild(image);

    return cell;
}

function monkeyPatchMapReduce(element) {
    element.reduce = [].reduce;
    element.map = [].map;
}

function getMinimumHeightOfColumns() {
    var columns = $(".column");
    // Hack because of time constraints
    monkeyPatchMapReduce(columns);
    var heights = columns.map(function(column) {
        return $(column).height();
    });
    var minimum = heights.reduce(function(acc, value) {
        return (acc > value) ? value : acc;
    });
    return minimum;
}

function getMinimumFireHeight() {
    var columnHeight = getMinimumHeightOfColumns();
    return columnHeight - (0.25 * columnHeight);
}

function getMaximumHeightOfViewport() {
    return $(window).scrollTop() + $(window).height();
}

function appendPhotos() {
    if (!hasFired && photosIndex < photos.length) {
        hasFired = true;

        var photosSubset = photos.slice(photosIndex, photosIndex + 10);

        var grid = document.querySelector('#grid');
        var cells = photosSubset.map(createCell);
        salvattore.appendElements(grid, cells);

        photosIndex += 10;
    }
}

$(document).ready(function() {

    $.ajax({
        url:"photos.json",
        dataType:"json",
        success: function(response) {
            photos = response.photos;
            appendPhotos();
        }
    });

    $(window).scroll(function() {
        getMinimumHeightOfColumns();
        if (getMaximumHeightOfViewport() > getMinimumFireHeight()) {
            appendPhotos();
        }
    });

});
