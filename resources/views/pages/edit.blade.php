@extends('layout')
@section('vite')
    @vite('resources/js/tiptap/index.jsx')
@endsection

@section('title', 'Editing ' . $title)

<div class="row w-full m-2 h-fit">
    <h2 class="font-bold font-cursive text-3xl my-2 px-2">Editing {{ $title }}</h2>
    <div class="w-full flex-1">
        <div id="tiptap-container">
            {{ $body }}
        </div>
    </div>
    <x-interactive.button type="submit">
        Save
    </x-interactive.button>
    <x-interactive.button>
        Cancel
    </x-interactive.button>
</div>
