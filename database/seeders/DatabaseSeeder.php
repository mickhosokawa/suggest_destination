<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Country;
use App\Models\Topfive;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // \App\Models\User::factory(10)->create();

        // \App\Models\User::factory()->create([
        //     'name' => 'Test User',
        //     'email' => 'test@example.com',
        // ]);

        $this->call(CountrySeeder::class);
        $countries = Country::all()->sortBy('id');

        foreach($countries as $country) {
            for($i = 1; $i <= 5; $i++) {
                Topfive::factory()->create([
                    'country_id' => $country->id,
                    'branch' => $i,
                ]);
            }
        }

        $topFive = Topfive::all()->sortBy('id');
        
        foreach($topFive as $place) {
            Country::where('id', $place->id)
                ->update([
                    'top_five_id' => $place->id,
                ]);
        }
    }
}
