<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
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
        Log::info('file upload received');
        // if (!$request->ajax()) {
        //     return response()->json([
        //         'success' => false,
        //         'error' => 'NO AJ'
        //     ]);
        // }
        $file = $request->file('uploaded-file');

        if ($file === null) {
            return response()->json([
                'success' => false,
                'message' => 'No files uploaded!'
            ]);
        }

        $file->store('public');
        // dump($file, Storage::url($file->hashName()));
        //Storage::put('app/assets', $contents);
        return response()->json([
            'success' => true,
            // TODO src
            'message' => 'File uploaded!',
            'src' => $file->hashName()
        ]);
    }

}
