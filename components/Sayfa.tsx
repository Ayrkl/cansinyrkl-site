import { ICERIK, type Dil } from "@/lib/icerik";
import { YazdirDugmesi } from "@/components/YazdirDugmesi";

export function Sayfa({ dil }: { dil: Dil }) {
  const i = ICERIK[dil];
  const digerKod = dil === "tr" ? "en" : "tr";
  return (
    <div className="sayfa">
      <header className="ust">
        <div>
          <a className="ust-ad" href="#">
            {i.ad}
          </a>
          <span className="ust-rol">{i.rol}</span>
        </div>
        <nav aria-label={dil === "tr" ? "Sayfa içi" : "On this page"}>
          <a href="#projeler">{i.nav.projeler}</a>
          <a href="#deneyim">{i.nav.deneyim}</a>
          <a href="#iletisim">{i.nav.iletisim}</a>
          <a className="dil-degistir" href={i.digerDil.url} lang={digerKod} hrefLang={digerKod}>
            {i.digerDil.metin}
          </a>
        </nav>
      </header>

      <main>
        <section className="giris">
          <div className="giris-sol">
            <h1>{i.baslik}</h1>
            <p className="giris-metin">{i.giris}</p>
            <div className="simdi">
              <span className="simdi-etiket">{i.simdiEtiket}</span>
              <p>{i.simdi}</p>
            </div>
            <div className="eylemler">
              <a className="dugme birincil" href="#projeler">
                {i.eylemler.projeler}
              </a>
              <a className="dugme" href="#iletisim">
                {i.eylemler.iletisim}
              </a>
              <YazdirDugmesi metin={i.eylemler.yazdir} />
            </div>
          </div>
          <aside className="kunye" aria-labelledby="kunye-baslik">
            <h2 id="kunye-baslik">{i.kunyeBaslik}</h2>
            <dl>
              {i.kunye.map((k) => (
                <div key={k.etiket}>
                  <dt>{k.etiket}</dt>
                  <dd>{k.deger}</dd>
                </div>
              ))}
            </dl>
          </aside>
        </section>

        <section className="bolum" id="projeler" aria-labelledby="projeler-baslik">
          <h2 id="projeler-baslik">{i.nav.projeler}</h2>
          <div>
            <p className="bolum-aciklama">{i.projelerAciklama}</p>
            <article className="one-cikan">
              <p className="one-cikan-etiket">{i.oneCikanEtiket}</p>
              <div className="one-cikan-ust">
                <h3>
                  <span className={`isaret ${i.oneCikan.renk}`} aria-hidden="true" />
                  {i.oneCikan.ad}
                </h3>
                <span className="proje-tur">{i.oneCikan.tur}</span>
              </div>
              <p>{i.oneCikan.aciklama}</p>
              <ul>
                {i.oneCikan.maddeler.map((m) => (
                  <li key={m}>{m}</li>
                ))}
              </ul>
              <p className="proje-yigin">{i.oneCikan.yigin}</p>
            </article>
            <ul className="projeler">
              {i.projeler.map((p) => (
                <li className="proje" key={p.ad}>
                  <h3>
                    <span className={`isaret ${p.renk}`} aria-hidden="true" />
                    {p.ad}
                  </h3>
                  <span className="proje-tur">{p.tur}</span>
                  <p>{p.aciklama}</p>
                  <p className="proje-yigin">{p.yigin}</p>
                  {p.baglanti && (
                    <a className="proje-baglanti" href={p.baglanti.url} rel="noopener">
                      {p.baglanti.metin}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="bolum" id="deneyim" aria-labelledby="deneyim-baslik">
          <h2 id="deneyim-baslik">{i.nav.deneyim}</h2>
          <div className="deneyim">
            {i.deneyim.map((d) => (
              <article key={d.sirket}>
                <div className="deneyim-ust">
                  <h3>{d.sirket}</h3>
                  <span className="deneyim-unvan">{d.unvan}</span>
                  <span className="deneyim-donem">{d.donem}</span>
                </div>
                <ul>
                  {d.maddeler.map((m) => (
                    <li key={m}>{m}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section className="bolum" aria-labelledby="calisma-baslik">
          <h2 id="calisma-baslik">{i.calismaBaslik}</h2>
          <ol className="calisma">
            {i.calisma.map((c) => (
              <li key={c}>{c}</li>
            ))}
          </ol>
        </section>

        <section className="bolum" aria-labelledby="yigin-baslik">
          <h2 id="yigin-baslik">{i.yiginBaslik}</h2>
          <dl className="yigin">
            {i.yigin.map((g) => (
              <div key={g.grup}>
                <dt>{g.grup}</dt>
                <dd>{g.ogeler}</dd>
              </div>
            ))}
          </dl>
        </section>

        <section className="bolum" aria-labelledby="egitim-baslik">
          <h2 id="egitim-baslik">
            {i.egitimBaslik}
            {dil === "tr" ? " ve " : " and "}
            {i.dillerBaslik.toLowerCase()}
          </h2>
          <div className="ikili">
            <div>
              <h3>{i.egitimBaslik}</h3>
              <ul className="sade">
                {i.egitim.map((e) => (
                  <li key={e}>{e}</li>
                ))}
              </ul>
            </div>
            <div>
              <h3>{i.dillerBaslik}</h3>
              <ul className="sade">
                {i.diller.map((d) => (
                  <li key={d}>{d}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className="bolum" id="iletisim" aria-labelledby="iletisim-baslik">
          <h2 id="iletisim-baslik">{i.nav.iletisim}</h2>
          <div>
            <p>{i.iletisimMetin}</p>
            <div className="baglantilar">
              {i.baglantilar.map((b) => (
                <a key={b.url} className="dugme" href={b.url} rel="me noopener">
                  {b.metin}
                </a>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="alt">
        <p>{i.altbilgi}</p>
        <nav aria-label={dil === "tr" ? "Alt bağlantılar" : "Footer links"}>
          {i.baglantilar.map((b) => (
            <a key={b.url} href={b.url} rel="me noopener">
              {b.metin}
            </a>
          ))}
          <a href={i.digerDil.url} lang={digerKod} hrefLang={digerKod}>
            {i.digerDil.metin}
          </a>
        </nav>
      </footer>
    </div>
  );
}
