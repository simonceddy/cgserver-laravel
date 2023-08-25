@extends('layout')

@section('app')
    <div class="w-full h-fit min-h-full col justify-start items-center bg-white dark:bg-black dark:text-aqua-spring text-black font-sans">
        <x-nav.navbar>
            <x-nav.nav-link href="/pages">
                Pages
            </x-nav.nav-link>
            <x-nav.nav-link href="/logout">
                Logout
            </x-nav.nav-link>
        </x-nav.navbar>
        <div class="col justify-start items-center flex-1 w-full md:w-4/5 xl:w-2/3 relative border-2 rounded-md border-cornflower-blue">
            <div class="page flex-1 col justify-start items-center">
                @yield('content')
            </div>
        </div>
    </div>
@endsection
