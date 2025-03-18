<?php

use App\Http\Controllers\adminData;
use App\Http\Controllers\Category;
use App\Http\Controllers\Data;
use App\Http\Controllers\profile;
use App\Http\Controllers\User;
use App\Http\Middleware\checkAdmin;
use Illuminate\Support\Facades\Route;

// page routes
Route::inertia('/about', 'About');
Route::inertia('/contact', 'Contact');
Route::inertia('/service', 'Service');


// Data controller
Route::get('/', [Data::class, 'retriveData']);
Route::post('/addUser', [User::class, 'userIfno']);
Route::post('/addcard', [Data::class, 'AddProductSession']);


// Category controller
Route::get('/item/{category}/{id}', [Category::class, 'SglItem']);
Route::get('/category/{cate}/{type}', [Category::class, 'category']);
Route::get('/Searchproduct', [Category::class, 'searchItem']);
Route::inertia('/quantity', 'component/UpdateQuantity');


// admin page Handle
Route::inertia('/form', 'admin/Adminform');
Route::post('/addmin', [adminData::class, 'formAdmin']);
Route::inertia('/login', 'admin/AdminLog');
Route::post('/logsubmit', [adminData::class, 'LoginAdmin']);
//update session data
Route::post('/updatequan', [Data::class, 'updateQuantity']);
//MiddlewareAddforAdminifLogin
Route::middleware(checkAdmin::class)->group(function () {
    //uploadData
    Route::inertia('/upload', 'auth/AddProduct');
    Route::post('/upload', [Data::class, 'addproduct'])->name('product');
    Route::get('/getall_product', [adminData::class, 'ItemList']);
    Route::get('/search', [adminData::class, 'search']);
    //DleteSinglItem
    Route::get('/singleItem/{id}', [adminData::class, 'DleteSinglItem']);
    //UpdatePageOpen
    Route::get('/edit/{id}', [adminData::class, 'editProduct']);
    //Update Route
    Route::post('/updateproduct/{id}', [adminData::class, 'updateproduct']);
    //logoutAdmin 
    Route::get('/logoutAdmin',[adminData::class,'logout']);
});


//Profile Route
Route::prefix('account')->group(function(){
    Route::get('/order',[profile::class,'myOrdre']);
    Route::get('/address',[profile::class,'myAddress']);
    Route::get('/gift',[profile::class,'gift']);
    Route::get('/privacy',[profile::class,'privcy']);
    Route::get('/logout',[profile::class,'logOut']);
});

