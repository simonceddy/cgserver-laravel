@extends('layouts.public')

@section('title', $title)

@section('content')
    <div class="w-full h-auto col justify-start items-center p-2 rounded-lg page-content font-sans whitespace-pre-wrap">
        <x-pages.title :title="$title" />
        <x-pages.body :body="$body" />
    </div>
@endsection
