import { useEffect, useMemo, useState } from "react";
import { ArrowLeft, ArrowRight, Search, X } from "lucide-react";
import { menuCategories, menuPhotoPaths } from "./menuData";
import { restaurant } from "./data";

export default function MenuPage() {
  const [query, setQuery] = useState("");
  const [lightbox, setLightbox] = useState(null);
  const [showTop, setShowTop] = useState(false);
  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 500);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const filteredCategories = useMemo(() => {
    const value = query.trim().toLowerCase();
    if (!value) return menuCategories;
    return menuCategories.map((category) => ({
      ...category,
      items: category.items.filter(([name, price, note]) =>
        `${name} ${price} ${note}`.toLowerCase().includes(value)
      ),
    })).filter((category) => category.items.length);
  }, [query]);

  return (
    <div className="menu-page">
      <header className="menu-page-header">
        <div className="container menu-page-topbar">
          <a href="/" className="menu-back"><ArrowLeft size={16} /> Zambalii Grill</a>
          <span className="menu-wordmark">The menu</span>
        </div>
        <div className="container menu-heading">
          <p className="eyebrow"><span /> Take your time</p>
          <h1>Good things<br /><em>to eat.</em></h1>
          <p>Browse the Zambalii Grill menu, find your favorites, and make your way to the table.</p>
        </div>
      </header>

      <div className="menu-sticky-tools">
        <div className="container">
          <div className="menu-search"><Search size={17} /><input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search the menu" aria-label="Search the menu" />{query && <button onClick={() => setQuery("")} aria-label="Clear search"><X size={16} /></button>}</div>
          <nav className="category-nav" aria-label="Menu categories">
            {menuCategories.map((category) => <a key={category.id} href={`#${category.id}`}>{category.name}</a>)}
          </nav>
        </div>
      </div>

      <main className="container menu-content">
        {filteredCategories.length ? filteredCategories.map((category) => (
          <section className="menu-category" id={category.id} key={category.id}>
            <div className="menu-category-title"><span className="menu-number">{String(menuCategories.indexOf(category) + 1).padStart(2, "0")}</span><h2>{category.name}</h2></div>
            {category.note && <p className="menu-policy">{category.note}</p>}
            <div className="menu-items">
              {category.items.map(([name, price, note]) => <article className="menu-item" key={`${category.id}-${name}`}><div><h3>{name}</h3>{note && <p>{note}</p>}</div><strong>{price || "—"}</strong></article>)}
            </div>
          </section>
        )) : <div className="menu-empty"><Search size={25} /><h2>No dishes found</h2><p>Try another search term.</p></div>}

        <section className="original-menu">
          <div><p className="eyebrow"><span /> For reference</p><h2>See the original<br /><em>menu boards.</em></h2><p>Digital browsing is faster, but the original menu is here whenever you want to compare.</p></div>
          <div className="original-menu-buttons">{menuPhotoPaths.map((photo) => <button key={photo.src} onClick={() => setLightbox(photo)}>{photo.alt.replace("Original Zambalii Grill ", "")} <ArrowRight size={16} /></button>)}</div>
        </section>

        <section className="menu-cta"><p className="eyebrow"><span /> Ready to visit?</p><h2>Come hungry.<br /><em>We’ll save you a seat.</em></h2><p>{restaurant.address}</p><a className="button button--gold" href={restaurant.mapUrl} target="_blank" rel="noreferrer">Get directions <ArrowRight size={17} /></a></section>
      </main>

      {showTop && <button className="back-top" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>Back to top</button>}
      {lightbox && <div className="lightbox" role="dialog" aria-label="Original menu photo" onClick={() => setLightbox(null)}><button onClick={() => setLightbox(null)} aria-label="Close original menu"><X /></button><img src={lightbox.src} alt={lightbox.alt} onError={(event) => { event.currentTarget.style.display = "none"; }} /></div>}
    </div>
  );
}
