<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class profile extends Controller
{
    public function myOrdre(){
        $item='order';
        return inertia('Profile',compact('item'));
    }
    public function myAddress(){
        $item='address';
        return inertia('Profile',compact('item'));
    }
    public function gift(){
        $item='gift';
        return inertia('Profile',compact('item'));
    }
    public function privcy(){
        $item='privacy';
        return inertia('Profile',compact('item'));
    }
    public function logOut(){
        $getUserPro=session()->get('user');
        if(isset($getUserPro)){
            session()->forget('user');
            return redirect('/');
        }
    }
   
}
