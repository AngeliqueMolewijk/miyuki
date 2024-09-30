<nav class="navbar sticky-top navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
        <a class="navbar-brand" href="#">Navbar</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href="{{ route('kralen.index') }}">Home</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="{{ url('/searchmix') }}">Mix</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="{{ url('/list') }}">List</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="{{ url('/opvoorraad') }}">Op voorraad</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="{{ url('/kleuren') }}">Kleuren</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="{{ url('/projects') }}">Projecten</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="{{ route('kralen.create') }}">Nieuwe kralen</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="{{ route('projects.create') }}">Nieuw project</a>
                </li>
                {{-- <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button"
                        data-bs-toggle="dropdown" aria-expanded="false">
                        Dropdown
                    </a>
                    <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                        <li><a class="dropdown-item" href="#">Action</a></li>
                        <li><a class="dropdown-item" href="#">Another action</a></li>
                        <li>
                            <hr class="dropdown-divider">
                        </li>
                        <li><a class="dropdown-item" href="#">Something else here</a></li>
                    </ul> --}}
                </li>
                {{-- <li class="nav-item">
                    <a class="nav-link disabled">Disabled</a>
                </li> --}}
            </ul>
            <form action="{{ url('/search') }}" method="POST" class="d-flex">
                @csrf
                <input class="form-control me-2" type="search" name="search"placeholder="Search" aria-label="Search">
                <button class="btn btn-outline-success" type="submit">Search</button>
            </form>
        </div>
    </div>
</nav>
