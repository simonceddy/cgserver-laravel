@extends('layouts.admin')

@section('title', 'Pages')

@section('content')
    <div class="w-full h-auto col justify-start items-center p-2 rounded-lg page-content font-sans whitespace-pre-wrap">
        <div class="col justify-start items-start w-full">
            <div class="row justify-between items-center w-full bg-dandelion/30">
                <span class="mr-2 text-sm w-1/4">Last Updated</span>
                <span class="flex-1 text-lg">Title</span>
            </div>
            @foreach ($pages as $page)
            <div class="row justify-between items-center w-full">
                <span class="p-1 m-1 w-1/4">{{ $page->updatedAt->shortRelativeDiffForHumans() }}</span>
                <a class="p-1 m-1 flex-1 text-xl hover:underline" href="pages/{{ $page->slug }}/edit">{{ $page->title }}</a>
            </div>
            @endforeach
        </div>
    </div>
@endsection
