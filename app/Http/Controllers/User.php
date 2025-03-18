<?php

namespace App\Http\Controllers;

use App\Models\datas;
use App\Models\user as ModelsUser;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Session;
use Inertia\Inertia;

class User  extends Controller
{
    public function userIfno(Request $request)
    {
        // return $request['trimmedPhone'];
        $phoneNum = $request->validate([
            'trimmedPhone' => 'required|numeric'
        ]);
        $findEmail = ModelsUser::where('number',$phoneNum['trimmedPhone'])->first();
        if ($findEmail) {
            $findEmail->update([
                'number' => $phoneNum['trimmedPhone'],
            ]);
            Session::put('user', $findEmail);
            return Inertia::location('/');
        } else {
            $newUser = ModelsUser::create([
                'number' => $phoneNum['trimmedPhone'],
            ]);
            Session::put('user', $newUser);
            return Inertia::location('/');
        }
        
    }
}
