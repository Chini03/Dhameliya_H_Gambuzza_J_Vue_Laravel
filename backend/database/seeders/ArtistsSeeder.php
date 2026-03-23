<?php

namespace Database\Seeders;

use App\Models\Artists;
use Illuminate\Database\Seeder;

class ArtistsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Artists::factory()->count(10)->create();
    }
}
