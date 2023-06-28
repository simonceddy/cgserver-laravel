<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class UploadFile extends Controller
{
    /**
     * Handle the incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function __invoke(Request $request)
    {
        if (!$request->ajax()) {
            return response()->json([
                'success' => false,
                'error' => []
            ]);
        }
        $file = $request->file('uploaded-file');

        if ($file === null) {
            return response()->json([
                'success' => false,
                'message' => 'No files uploaded!'
            ]);
        }

        $file->store('storage/uploads');
        dump($file);
        //Storage::put('app/assets', $contents);
        return response()->json([
            'success' => true,
            // TODO src
            'message' => 'File uploaded!',
            'url' => Storage::url('media/get/'.$file->hashName())
        ]);
    }

}