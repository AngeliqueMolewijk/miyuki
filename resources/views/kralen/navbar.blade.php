<nav class="navbar sticky-top navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
        <a class="navbar-brand" href="{{ route('kralen.index') }}">Navbar</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                    <a class="nav-link" href="{{ url('/allekralen') }}">Alle Kralen</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="{{ route('kralen.index') }}">Mijn Kralen</a>
                </li>
                {{-- <li class="nav-item">
                    <a class="nav-link" href="{{ url('/searchmix') }}">Mix</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="{{ url('/list') }}">List</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="{{ url('/opvoorraad') }}">Op voorraad</a>
                </li> --}}
                <li class="nav-item">
                    <a class="nav-link" href="{{ url('/kleuren') }}">Kleuren</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="{{ url('/projects') }}">Projecten</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="{{ url('/readpatternphp') }}">Build Pattern</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="https://beadographer.com/profile/" target="_blank">Beadographer</a>
                </li>
                @guest
                    <li class="nav-item">
                        <a class="nav-link {{ request()->is('login') ? 'active' : '' }}"
                            href="{{ route('login') }}">Login</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link {{ request()->is('register') ? 'active' : '' }}"
                            href="{{ route('register') }}">Register</a>
                    </li>
                @else
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                            aria-expanded="false">
                            {{ Auth::user()->name }}
                        </a>
                        <ul class="dropdown-menu">
                            <li><a class="dropdown-item" href="{{ route('logout') }}"
                                    onclick="event.preventDefault();
                            document.getElementById('logout-form').submit();">Logout</a>
                                <form id="logout-form" action="{{ route('logout') }}" method="POST">
                                    @csrf
                                </form>
                            </li>
                        </ul>
                    </li>
                @endguest
            </ul>
            <form action="{{ url('/search') }}" method="POST" class="d-flex">
                @csrf
                <input class="form-control me-2" type="search" name="search"placeholder="Search" aria-label="Search">
                <button class="btn btn-outline-success" type="submit">Search</button>
            </form>
        </div>
    </div>
</nav>
