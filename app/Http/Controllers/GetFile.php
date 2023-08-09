<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Response;
use Illuminate\Support\Facades\Storage;

class GetFile extends Controller
{
    /**
     * Handle the incoming request.
     */
    public function __invoke(Request $request, $filename)
    {
        // TODO find request image in storage/uploads
        $path = 'public/' . $filename;
        if (Storage::exists($path)) {
            return response()->file(storage_path('app/' . $path));
        }
        return response(null, 404);
        // TODO return file response with request file
    }
}
