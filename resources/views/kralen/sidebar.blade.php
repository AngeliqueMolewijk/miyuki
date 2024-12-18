<div class="flex-shrink-0 p-3">
    <a href="/" class="d-flex align-items-center pb-3 mb-3 link-body-emphasis text-decoration-none border-bottom">
        <svg class="bi pe-none me-2" width="30" height="24">
            <use xlink:href="#bootstrap" />
        </svg>
    </a>
    <ul class="list-unstyled ps-0">
        <li class="mb-1">
            <button class="btn btn-toggle d-inline-flex align-items-center rounded border-0 collapsed"
                data-bs-toggle="collapse" data-bs-target="#home-collapse" aria-expanded="true">
                Add new
            </button>
            <div class="collapse show" id="home-collapse">
                <ul class="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                    <li><a href="{{ route('kralen.create') }}"
                            class="link-body-emphasis d-inline-flex text-decoration-none rounded">Nieuwe Kraal</a></li>
                    <li><a href="{{ route('kleuren.create') }}"
                            class="link-body-emphasis d-inline-flex text-decoration-none rounded">Nieuwe Kleur</a></li>
                    <li><a href="{{ route('createCategorie') }}"
                            class="link-body-emphasis d-inline-flex text-decoration-none rounded">Nieuwe Categorie</a>
                    </li>
                    <li><a href="{{ route('projects.create') }}"
                            class="link-body-emphasis d-inline-flex text-decoration-none rounded">Nieuw Project</a></li>
                </ul>
            </div>
        </li>
        @if (request()->is('kralen') or request()->is('searchmix*') or request()->is('list*') or request()->is('opvoorraad*'))
            <li class="mb-1">
                <button class="btn btn-toggle d-inline-flex align-items-center rounded border-0 collapsed"
                    data-bs-toggle="collapse" data-bs-target="#dashboard-collapse" aria-expanded="true">
                    Sort kralen
                </button>
                <div class="collapse show" id="dashboard-collapse">
                    <ul class="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                        <li> @sortablelink('stock', 'Stock')
                        </li>
                        <li> @sortablelink('name', 'Naam')
                        </li>
                        <li>@sortablelink('nummer', 'Nummer')</li>
                    </ul>
                </div>
            </li>
        @endif
        @if (request()->is('projects*') or request()->is('filter*'))
            <li class="mb-1">
                <button class="btn btn-toggle d-inline-flex align-items-center rounded border-0 collapsed"
                    data-bs-toggle="collapse" data-bs-target="#orders-collapse" aria-expanded="true">
                    Projecten
                </button>
                <div class="collapse show" id="orders-collapse">
                    <ul class="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                        <li class="nav-item">
                            <a href="{{ route('projects.create') }}"
                                class="link-body-emphasis d-inline-flex text-decoration-none rounded">Nieuw Project</a>

                        </li>
                        <li class="nav-item">
                            <a class="link-body-emphasis d-inline-flex text-decoration-none rounded"
                                href={{ route('projects.index') }}>Alle
                                Projecten</a>
                        </li>
                        @foreach ($allcategories as $categorie)
                            <li class="nav-item">
                                <a class="link-body-emphasis d-inline-flex text-decoration-none rounded"
                                    href="/filter/{{ $categorie->categoriename }}">{{ $categorie->categoriename }}</a>
                            </li>
                        @endforeach
                    </ul>
                </div>
            </li>
        @endif
        @if (request()->is('kralen') or request()->is('searchmix*') or request()->is('list*') or request()->is('opvoorraad*'))
            <li class="border-top my-3"></li>
            <li class="mb-1">
                <button class="btn btn-toggle d-inline-flex align-items-center rounded border-0 collapsed"
                    data-bs-toggle="collapse" data-bs-target="#account-collapse" aria-expanded="treu">
                    Kralen
                </button>
                <div class="collapse show" id="account-collapse">
                    <ul class="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                        <li><a href="{{ url('/searchmix') }}"
                                class="link-body-emphasis d-inline-flex text-decoration-none rounded">Mix</a></li>
                        <li><a href={{ url('/list') }}
                                class="link-body-emphasis d-inline-flex text-decoration-none rounded">List</a></li>
                        <li><a href={{ url('/opvoorraad') }}
                                class="link-body-emphasis d-inline-flex text-decoration-none rounded">Op voorraad</a>
                        </li>
                    </ul>
                </div>
            </li>
        @endif
    </ul>
</div>
