<?php

namespace App\Http\Controllers;

use App\Models\datas;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Session;
use Inertia\Inertia;

class Category extends Controller
{
    public function category(string $val, string $val2)
    {
        $data = datas::where('title', 'like', '%' . $val2 . '%')
            ->orWhere('type', 'like', '%' . $val2 . '%')
            ->where('product', $val)->get();

        $unique = datas::where('product', $val)->distinct()->get();
        return Inertia::render('component/ProductCate', [
            'stordata' => $data,
            'unique' => $unique
        ]);
    }

    public function SglItem(string $category, int $id) //<-Show Single Data
    {

        $stordata = datas::where('id', $id)->first();
        $unique = datas::where('type', $category)->get();
        return Inertia::render('Single', [
            'stordata' => $stordata,
            'unique' => $unique
        ]);
    }
    public function searchItem(Request $searCh)   //<-SearchItem
    {
        $retrive = datas::where('product', 'like', '%' . $searCh->searchItem . '%')
            ->orWhere('title', 'like', '%' . $searCh->searchItem . '%')
            ->orWhere('type', 'like', '%' . $searCh->searchItem . '%')
            ->get();
        return Inertia::render('component/Search', [
            'retrive' => $retrive
        ]);
    }
}
