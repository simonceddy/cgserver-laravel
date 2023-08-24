<button class="border-2 border-black hover:border-cornflower-blue active:border-pastel-green p-2 rounded-md m-2 relative" {{ $attributes->merge(['type' => 'button']) }}>
    {{$slot}}
</div>
