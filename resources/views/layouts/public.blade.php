@extends('layout')

@section('app')
    <div id="layout-container" class="w-full h-full bg-white dark:bg-black dark:text-aqua-spring text-black whitespace-nowrap overflow-y-auto">
        <div id="content-resize" class="sm:w-11/12 md:w-5/6 lg:w-3/4 xl:w-2/3 mx-auto w-full min-h-full h-fit col justify-start items-center bg-cornflower-blue/10">
            <header id="header-container" class="w-full h-[25%] min-h-[25%] col justify-center items-center mb-2 border-2 rounded-lg border-dandelion">
                <h1 class="font-bold md:text-5xl sm:text-4xl text-3xl mt-3 mb-4 px-2 text-center font-heading text-cornflower-blue">
                    Christine Grayden
                </h1>
                <div class="text-3xl font-bold text-pastel-green font-cursive">
                    Writing in Bass Coast
                </div>
                <x-nav.navbar>
                    <x-nav.nav-link href="/">
                        Home
                    </x-nav.nav-link>
                    <x-nav.nav-link href="/pages/about">
                        About
                    </x-nav.nav-link>
                    <x-nav.nav-link href="/pages/books-sales">
                        Books
                    </x-nav.nav-link>
                    <x-nav.nav-link href="/pages/contact">
                        Contact
                    </x-nav.nav-link>
                    <x-nav.nav-link href="https://www.basscoastpost.com/christine-grayden">
                        Blog
                    </x-nav.nav-link>
                </x-nav.navbar>
            </header>
            <div class="w-full page-content flex-1 p-2">
                @yield('content')
            </div>
            <x-footer>
            </x-footer>
        </div>
    </div>
@endsection
