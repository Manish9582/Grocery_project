<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use App\Models\datas;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Session;

class Data extends Controller
{
    public function addproduct(Request $request)   //upload Data
    {

        $findEmail = datas::where('unit', $request->unit)
            ->where('type', $request->type)
            ->where('title', $request->title)
            ->where('price', $request->price)
            ->first();
        if ($findEmail) {
            if ($request->hasFile('image')) {
                $path = $request->file('image')->store('images', 'public');
                $findEmail->update([
                    'title' => $request->title,
                    'images' => $path,
                    'type' => $request->type,
                    'product' => $request->product,
                    'price' => $request->price,
                    'unit' => $request->unit,
                    'packing' => $request->cover,
                    'country' => $request->country,
                    'featur' => $request->featur,
                    'discription' => $request->discription
                ]);
                return Inertia::location('/');
            }
        } else {
            if ($request->hasFile('image')) {
                $path = $request->file('image')->store('images', 'public');
                datas::create([
                    'title' => $request->title,
                    'images' => $path,
                    'type' => $request->type,
                    'product' => $request->product,
                    'price' => $request->price,
                    'unit' => $request->unit,
                    'packing' => $request->cover,
                    'country' => $request->country,
                    'featur' => $request->featur,
                    'discription' => $request->discription
                ]);
                return Inertia::location('/');
            }
        }
        return redirect()->back();
    }


    public function retriveData()  //recsive Data
    {
        $dairy = datas::whereIn('product', ['dairy', 'bread', 'egg'])
            ->distinct()
            ->limit(14)
            ->get();
        $snacks = datas::whereIn('product', ['snacks', 'munchies'])
            ->distinct()
            ->limit(14)
            ->get();
        $vegetable = datas::where('product', ['vegetable','fruits'])
            ->distinct()
            ->limit(14)
            ->get();
        return Inertia::render('Home', [
            'dairy' => $dairy,
            'snacks' => $snacks,
            'vegetable' => $vegetable,
        ]);
    }


    public function AddProductSession(Request $req)
    {
        $FindSignlCard = datas::find($req['val']);
        $cardSession = Session::get('product', []);
        $cardSession[$FindSignlCard->id] = [
            'title' => $FindSignlCard->title,
            'price' => $FindSignlCard->price,
            'unit' => $FindSignlCard->unit,
            'images' => $FindSignlCard->images,
            'quantity' => 1
        ];
        Session::put('product', $cardSession);
    }

    public function updateQuantity(Request $quan)
    {
        $cardSession = Session::get('product', []);
        $newQuantity = $cardSession[$quan->id]['quantity'] + $quan->value;
        $cardSession[$quan->id]['quantity']=$newQuantity;
        Session::put('product', $cardSession);
    }
}
