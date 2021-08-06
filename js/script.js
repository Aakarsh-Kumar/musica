function getData() {

    fetch('http://ws.audioscrobbler.com/2.0/?method=tag.gettoptracks&tag=disco&api_key=3bbbcc10bfc48375e206c2167be29ce1&format=json').then(response=>response.json()).then(data=>songlist(data))            
}
getData()

function songlist(data) {
    for (let i = 0; i < (data.tracks).track.length; i++) {
        // var div = document.createElement("div");
        document.getElementById('songs-list').innerHTML += "<a href='"+((data.tracks).track[i]).url+"' target='_blank' class='song-content'>"+((data.tracks).track[i]).name+"</a><br>"
    }
}