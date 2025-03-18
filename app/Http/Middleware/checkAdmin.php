<?php

namespace App\Http\Middleware;

use App\Models\admin;
use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Session;
use Symfony\Component\HttpFoundation\Response;

class checkAdmin
{
    /**
     * Handle an incoming request.
     *
     * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
     */
    public function handle(Request $request, Closure $next): Response
    {
        $StorAminSession =  Session::get('admin');
        if (isset($StorAminSession)) {
            $getAdmin = admin::where('email', $StorAminSession->email)
                ->where('phone', $StorAminSession->phone)->first();
            if ($getAdmin->email == $StorAminSession->email && $getAdmin->phone == $StorAminSession->phone) {
                return $next($request);
            } else {
                return redirect('/');
            }
        } else {
            return redirect('/');
        }
    }
}
