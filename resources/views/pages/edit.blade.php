@extends('layouts.admin')
@section('vite')
    @vite('resources/js/tiptap/index.jsx')
@endsection

@section('title', 'Editing ' . $title)

@section('content')
    <form class="col w-full justify-start items-start m-2 h-fit" method="POST" action="/pages/{{ $slug }}">
        @csrf
        @method('PUT')
        <h2 class="font-bold font-cursive text-3xl my-2 px-2">Editing {{ $title }}</h2>
        <div class="w-full flex-1">
            <textarea style="display: none;" id="tiptap-body" name="body">
                {!! $body !!}
            </textarea>
            <div id="tiptap-container">
            </div>
        </div>
        <x-interactive.button type="submit">
            Save
        </x-interactive.button>
        <a class="border-2 border-black hover:border-cornflower-blue active:border-pastel-green p-2 rounded-md m-2 relative" href="/pages">
            Cancel
        </a>
    </form>
@endsection
