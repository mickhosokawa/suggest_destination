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
            [
                'id' => 1, 
                'name' => 'Japan', 
                'capital' => 'Tokyo', 
                'population' => '1,257,000,000', 
                'location' => 'East Asia',
                'outline' => 'For writers, a random sentence can help them get their creative juices flowing. Since the topic of the sentence is completely unknown, it forces the writer to be creative when the sentence appears. There are a number of different ways a writer can use the random sentence for creativity. The most common way to use the sentence is to begin a story. Another option is to include it somewhere in the story. A much more difficult challenge is to use it to end a story. In any of these cases, it forces the writer to think creatively since they have no idea what sentence will appear from the tool.',
                'top_five' => [
                    ['id' => 1, 'name' => 'Kyoto'],
                    ['id' => 2, 'name' => 'Tokyo'],
                    ['id' => 3, 'name' => 'Osaka'],
                    ['id' => 4, 'name' => 'Sapporo'],
                    ['id' => 5, 'name' => 'Yokohama'],
                ],
            ],
            [
                'id' => 2, 
                'name' => 'South Korea', 
                'capital' => 'Seoul', 
                'population' => '51,966,948', 
                'location' => 'East Asia',
                'outline' => 'For writers, a random sentence can help them get their creative juices flowing. Since the topic of the sentence is completely unknown, it forces the writer to be creative when the sentence appears. There are a number of different ways a writer can use the random sentence for creativity. The most common way to use the sentence is to begin a story. Another option is to include it somewhere in the story. A much more difficult challenge is to use it to end a story. In any of these cases, it forces the writer to think creatively since they have no idea what sentence will appear from the tool.',
                'top_five' => [
                    ['id' => 1, 'name' => 'Seoul'],
                    ['id' => 2, 'name' => 'Seoul2'],
                    ['id' => 3, 'name' => 'Seoul3'],
                    ['id' => 4, 'name' => 'Seoul4'],
                    ['id' => 5, 'name' => 'Seoul5'],
                ],
            ],
            [
                'id' => 3, 
                'name' => 'Thailand', 
                'capital' => 'BangKok', 
                'population' => '69,648,117', 
                'location' => 'Southeast Asia',
                'outline' => 'For writers, a random sentence can help them get their creative juices flowing. Since the topic of the sentence is completely unknown, it forces the writer to be creative when the sentence appears. There are a number of different ways a writer can use the random sentence for creativity. The most common way to use the sentence is to begin a story. Another option is to include it somewhere in the story. A much more difficult challenge is to use it to end a story. In any of these cases, it forces the writer to think creatively since they have no idea what sentence will appear from the tool.',
                'top_five' => [
                    ['id' => 1, 'name' => 'Bangkok'],
                    ['id' => 2, 'name' => 'Bangkok2'],
                    ['id' => 3, 'name' => 'Bangkok3'],
                    ['id' => 4, 'name' => 'Bangkok4'],
                    ['id' => 5, 'name' => 'Bangkok5'],
                ],
            ],
            [
                'id' => 4, 
                'name' => 'United States', 
                'capital' => 'Washington, D.C.', 
                'population' => '333,287,557', 
                'location' => 'North America',
                'outline' => 'For writers, a random sentence can help them get their creative juices flowing. Since the topic of the sentence is completely unknown, it forces the writer to be creative when the sentence appears. There are a number of different ways a writer can use the random sentence for creativity. The most common way to use the sentence is to begin a story. Another option is to include it somewhere in the story. A much more difficult challenge is to use it to end a story. In any of these cases, it forces the writer to think creatively since they have no idea what sentence will appear from the tool.',
                'top_five' => [
                    ['id' => 1, 'name' => 'Seattle'],
                    ['id' => 2, 'name' => 'Los Angels'],
                    ['id' => 3, 'name' => 'Las Vegas'],
                    ['id' => 4, 'name' => 'Arizona'],
                    ['id' => 5, 'name' => 'New York'],
                ],
            ],
            [
                'id' => 5, 
                'name' => 'Australia', 
                'capital' => 'Canberra', 
                'population' => '26,925,400',
                'location' => 'Oceania',
                'outline' => 'For writers, a random sentence can help them get their creative juices flowing. Since the topic of the sentence is completely unknown, it forces the writer to be creative when the sentence appears. There are a number of different ways a writer can use the random sentence for creativity. The most common way to use the sentence is to begin a story. Another option is to include it somewhere in the story. A much more difficult challenge is to use it to end a story. In any of these cases, it forces the writer to think creatively since they have no idea what sentence will appear from the tool.',
                'top_five' => [
                    ['id' => 1, 'name' => 'Sydney'],
                    ['id' => 2, 'name' => 'Melborne'],
                    ['id' => 3, 'name' => 'Brisbane'],
                    ['id' => 4, 'name' => 'Perth'],
                    ['id' => 5, 'name' => 'Canberra'],
                ],
            ],
        ]);
        
        foreach($countries as $country) {
            if($name == $country['name']) {
                return response()->json($country);
            }
        }
    }
    
}
