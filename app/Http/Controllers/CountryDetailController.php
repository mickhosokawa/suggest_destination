<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\Country;
use Illuminate\Http\Request;

class CountryDetailController extends Controller
{


    public function index() {
        $countries = Country::whereIn('id', [1,2,3,4,5])->get();

        return response()->json($countries);
    }
    /**
     * Display the specified resource.
     */
    public function show(string $name)
    {
        $country = Country::with('Topfive')->where('name', $name)->first();
        return response()->json($country);
    }
    
}
