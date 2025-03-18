<?php

namespace App\Http\Controllers;

use App\Models\admin;
use App\Models\datas;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Session;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;


class adminData extends Controller
{
    public function ItemList()
    {
        $list = datas::paginate(10);
        return Inertia::render('admin/ListProduct', compact('list'));
    }

    public function search(Request $data)
    {
        $retrive = datas::where('product', 'like', '%' . $data->search . '%')
            ->orWhere('title', 'like', '%' . $data->search . '%')
            ->orWhere('type', 'like', '%' . $data->search . '%')
            ->paginate(10);
        return Inertia::render('admin/adminSearch', [
            'retrive' => $retrive
        ]);
    }
    public function formAdmin(Request $add)
    {
        $AddAdmin = admin::create([
            'name' => trim($add->admin['name']),
            'last' => trim($add->admin['last']),
            'gender' => trim($add->admin['gender']),
            'age' => trim($add->admin['age']),
            'phone' => trim($add->admin['phone']),
            'email' => trim($add->admin['email']),
            'password' => password_hash(trim($add->admin['password']), PASSWORD_DEFAULT)
        ]);

        if ($AddAdmin) {
            return Inertia::render('admin/AdminLog');
        } else {
            return Inertia::render('admin/Adminform');
        }
    }


    public function LoginAdmin(Request $log)
    {
        $password = trim($log->adminlogin['password']);
        $adminVal = Admin::where('email', trim($log->adminlogin['email']))->first();
        if ($adminVal && password_verify($password, $adminVal->password)) {
            Session::put('admin', $adminVal);
            return redirect('/');
        }
    }

    public function DleteSinglItem(int $id)
    {
        $SigleData = datas::find($id);
        if (unlink("storage/" . $SigleData->images)) {
            datas::where('id', $id)->delete($id);
            return redirect('/getall_product');
        }
    }

    public function editProduct(int $id)
    {
        $SigleData = datas::find($id);
        return Inertia::render('admin/Editproduct', [
            'singleData' => $SigleData
        ]);
    }

    public function updateproduct(Request $data, int $id)
    {
        $findUpSinglVal = datas::find($id);
        $path = $data->file('image')->store('images', 'public');
        if ($path) {
            if ($findUpSinglVal->images && Storage::disk('public')->exists($findUpSinglVal->images)) {
                Storage::disk('public')->delete($findUpSinglVal->images);
            }
            $findUpSinglVal->update([
                'title' => $data->title,
                'images' => $path,
                'type' => $data->type,
                'product' => $data->product,
                'price' => $data->price,
                'unit' => $data->unit,
                'packing' => $data->cover,
                'country' => $data->country,
                'featur' => $data->featur,
                'discription' => $data->discription
            ]);
            return redirect('/getall_product');
        } else {
            $findUpSinglVal->update([
                'title' => $data->title,
                'type' => $data->type,
                'product' => $data->product,
                'price' => $data->price,
                'unit' => $data->unit,
                'packing' => $data->cover,
                'country' => $data->country,
                'featur' => $data->featur,
                'discription' => $data->discription
            ]);
            return redirect('/getall_product');
        }
    }
}
