<! - resources/views/products/index.blade.php → <!DOCTYPE html>
    <html>

    <head>
        <title>Product List</title>
        <script src="https://cdn.tailwindcss.com"></script>

    </head>

    <body class="bg-gray-200">
        <a href="{{ url('/') }}">
            <button class="bg-sky-500 my-2 mx-2 text-white text-black px-3 py-2 h-10" type="submit">Home</button>
        </a>

        <div
            class="flex justify-center  items-center content-center flex-col align-items-center min-h-screen border-2 border-black">
            <div class="w-1/4">
                <div class="flex justify-between w-full">
                    <h1 class="text-xl font-bold">Product List</h1>
                    <a class="ms-3 bg-sky-500 text-white text-black px-3 py-2"
                        href="{{ route('products.create') }}">Create</a>

                </div>
                <ul>
                    @foreach ($products as $product)
                        <li class="my-3 list-none bg-white px-10 py-3">
                            <div class="flex justify-between items-center">
                                <div class="flex flex-col ">

                                    <p>
                                        {{ ucwords($product->name) }} - PKR .{{ $product->price }}
                                    </p>

                                    <p class="text-xs my-1">
                                        {{ substr(ucwords($product->description), -20) }}
                                    </p>
                                </div>
                                <div class="flex items-center">

                                    <a class="ms-3 bg-sky-500 text-white text-black px-3 py-2 h-10"
                                        href="{{ route('kralen.edit', $product->id) }}">Edit</a>
                                    <form method="post" class="pt-4s"
                                        action="{{ route('kralen.destroy', $product->id) }}">
                                        @csrf
                                        @method('DELETE')
                                        <button type="submit"
                                            class="ms-3  bg-red-500 text-white text-black place-self-center  px-3 py-2">Delete</button>
                                    </form>
                                </div>

                            </div>
                        </li>
                    @endforeach
                </ul>
            </div>
        </div>
    </body>

    </html>
