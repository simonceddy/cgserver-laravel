@extends('layout')
@section('title', 'Login')
@section('app')
<div class="col justify-center items-center w-full h-full">
    <form
      class="col p-2 justify-center items-center w-96"
      action="/login"
      method="POST"
    >
      @csrf
      <label
        class="row m-2 w-full justify-between items-center"
        for="username"
      >
        <span>Username</span>
        <input
          type="text"
          class="p-1 ml-2 border focus:border-pastel-green border-b-cornflower-blue"
          id="username"
          name="username"
        />
      </label>
      <label
        class="row m-2 w-full justify-between items-center"
        for="password"
      >
        <span>Password</span>
        <input
          type="password"
          id="password"
          class="p-1 ml-2 border focus:border-pastel-green border-b-cornflower-blue"
          name="password"
        />
      </label>
      <div class="p-2">
        <button type="submit" class="border-2 border-black hover:border-cornflower-blue active:border-pastel-green p-2 rounded-md m-2 relative">
          Login
        </button>
      </div>
    </form>
  </div>
@endsection
