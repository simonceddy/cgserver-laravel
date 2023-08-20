@extends('layout')

@section('title', $title)

<div class="w-full h-auto col justify-start items-center p-2 rounded-lg page-content font-sans whitespace-pre-wrap">
    <h2 class="font-bold font-cursive text-3xl my-2 px-2">{{ $title }}</h2>
    <div class="w-full flex-1">
        {{ $body }}
    </div>
</div>
