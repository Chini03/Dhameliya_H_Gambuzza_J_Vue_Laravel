<?php

namespace App\Http\Controllers;

use App\Models\Songs;
use Illuminate\Http\Request;

class SongController extends Controller
{
    public function index(Request $request) {
        $songName = $request->get('song_name', '');
        $artistName = $request->get('artist_name', '');
        $genreName = $request->get('genre_name', '');

        // dd($artistId);
        // preparing the query
        $songsQuery = Songs::query();
        // creating a filter for song name, using where since it is in the same table
        if(! empty($songName)) {
            $songsQuery->where('name', 'LIKE', '%' . $songName . '%');
        }

        // creating filters for artist name and genre name and using whereHas since they are in a related table
        if (! empty($artistName) ) {
            $songsQuery->whereHas('artist', function($songsQuery) use ($artistName){
                $songsQuery->where('name', 'LIKE', '%' . $artistName . '%');
            });
        }

        if (! empty($genreName) ) {
            $songsQuery->whereHas('genre', function($songsQuery) use ($genreName){
                $songsQuery->where('name', 'LIKE', '%' . $genreName . '%');
            });
        }



        // asking laravel to include artist and genre in the JSON code
        $songsQuery->with('artist');
        $songsQuery->with('genre');
        $songs = $songsQuery->get();
        return $songs;
    }
    public function show(Songs $song) {
        $song->load(['artist', 'genre']);
        return $song;
    }
}
