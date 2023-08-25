@extends('layouts.admin')

@section('title', 'Pages')

@section('content')
    <div class="w-full h-auto col justify-start items-center p-2 rounded-lg page-content font-sans whitespace-pre-wrap">
        @foreach ($pages as $page)
            <a class="p-1 m-1 text-xl hover:underline" href="pages/{{ $page->slug }}/edit">{{ $page->title }}</a>
        @endforeach
    </div>
@endsection
