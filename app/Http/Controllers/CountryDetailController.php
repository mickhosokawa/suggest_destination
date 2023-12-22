<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class CountryDetailController extends Controller
{


    public function index() {
        $coutries = ([
            ['id' => 1, 'name' => 'Japan'],
            ['id' => 2, 'name' => 'South Korea'],
            ['id' => 3, 'name' => 'Thailand'],
            ['id' => 4, 'name' => 'United States'],
            ['id' => 5, 'name' => 'Australia'],
        ]);

        return response()->json($coutries);
    }
    /**
     * Display the specified resource.
     */
    public function show(string $name)
    {
        $countries = ([
            ['id' => 1, 'name' => 'Japan'],
            ['id' => 2, 'name' => 'South Korea'],
            ['id' => 3, 'name' => 'Thailand'],
            ['id' => 4, 'name' => 'United States'],
            ['id' => 5, 'name' => 'Australia'],
        ]);
        
        foreach($countries as $country) {
            if($name == $country['name']) {
                return response()->json($country);
            }
        }
    }
    
}
