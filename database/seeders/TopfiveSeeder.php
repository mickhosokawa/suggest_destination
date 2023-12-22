<?php

namespace Database\Seeders;

use App\Models\Topfive;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class TopfiveSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Topfive::factory()->count(100)->create();
    }
}
