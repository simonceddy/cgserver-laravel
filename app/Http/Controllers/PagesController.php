<?php

namespace App\Http\Controllers;

use App\Models\Page;
use Illuminate\Http\Request;

class PagesController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth', [
            'except' => 'show'
        ]);
    }

    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return view('pages.index', ['pages' => Page::all(['title', 'slug', 'updatedAt'])]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(Page $page)
    {
        return view('pages.show', $page);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Page $page)
    {
        return view('pages.edit', $page);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Page $page)
    {
        $body = $request->request->get('body');
        $page->body = $body;
        $result = $page->save();
        if (!$result) {
            // TODO there has been an error
            return view('pages.edit', $page);
        }
        // TODO confirm saved
        return redirect('pages');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Page $page)
    {
        //
    }
}
