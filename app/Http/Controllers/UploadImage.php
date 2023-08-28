<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Intervention\Image\Facades\Image;
use Spatie\ImageOptimizer\OptimizerChainFactory;

class UploadImage extends Controller
{
    /**
     * Handle the incoming request.
     */
    public function __invoke(Request $request)
    {
        // Validate and process the uploaded image
        // dd($request);
        if ($request->hasFile('uploaded-file')) {
            $image = $request->file('uploaded-file');

            // Define the path where you want to store the optimized image
            $path = storage_path('app/public');
            // dd($path);

            // Create the image instance
            $imageInstance = Image::make($image->getRealPath());
            $imageInstance->encode('webp');
            $fn = $image->getClientOriginalName() . '.webp';
            // dd($fn, $imageInstance);
            // Save the optimized image
            $imageInstance->save($path . '/' . $fn);

            $optimizerChain = OptimizerChainFactory::create();
            $optimizerChain->optimize($path . '/' . $fn);

            return response()->json([
                'success' => true,
                // TODO src
                'message' => 'File uploaded!',
                'src' => $fn
            ]);
        }
        return response()->json([
            'success' => false,
            'message' => 'No files uploaded!'
        ]);
    }
}
