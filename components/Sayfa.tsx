import { DILLER, ICERIK, type Dil } from "@/lib/icerik";
import { YazdirDugmesi } from "@/components/YazdirDugmesi";
import { TemaDugmesi } from "@/components/TemaDugmesi";
import { AsagiIkonu, GithubIkonu, LinkedinIkonu, OkIkonu } from "@/components/Ikonlar";

function Etiket({ metin }: { metin: string }) {
  return <p className="bolum-etiket">{metin}</p>;
}

export function Sayfa({ dil }: { dil: Dil }) {
  const i = ICERIK[dil];
  const digerDiller = DILLER.filter((d) => d.kod !== dil);
  const navEtiket = { tr: "Sayfa içi", en: "On this page", ja: "ページ内" }[dil];
  const altEtiket = { tr: "Alt bağlantılar", en: "Footer links", ja: "フッターのリンク" }[dil];
  const kaydirEtiket = { tr: "Aşağı kaydır", en: "Scroll down", ja: "下にスクロール" }[dil];
  const dilEtiket = { tr: "Dil", en: "Language", ja: "言語" }[dil];
  return (
    <>
      <header className="ust">
        <div className="ust-ic">
          <a className="marka" href="#">
            <span className="marka-isaret" aria-hidden="true" />
            {i.marka}
          </a>
          <nav className="ust-nav" aria-label={navEtiket}>
            <a href="#hakkimda">{i.nav.hakkimda}</a>
            <a href="#projeler">{i.nav.projeler}</a>
            <a href="#beceriler">{i.nav.beceriler}</a>
            <a href="#deneyim">{i.nav.deneyim}</a>
            <a href="#iletisim">{i.nav.iletisim}</a>
          </nav>
          <div className="ust-sag">
            <span className="dil-secici" aria-label={dilEtiket}>
              {DILLER.map((d, n) => (
                <span key={d.kod}>
                  {n > 0 && (
                    <span className="dil-ayrac" aria-hidden="true">
                      /
                    </span>
                  )}
                  {d.kod === dil ? (
                    <span className="dil-aktif">{d.kisa}</span>
                  ) : (
                    <a href={d.url} lang={d.kod} hrefLang={d.kod}>
                      {d.kisa}
                    </a>
                  )}
                </span>
              ))}
            </span>
            <TemaDugmesi etiket={i.tema} />
            <YazdirDugmesi metin={i.cv} sinif="dugme kucuk" />
          </div>
        </div>
      </header>

      <main>
        <section className="giris" id="giris">
          <div className="giris-ic">
            <p className="ust-yazi">
              <span className="nokta" aria-hidden="true" />
              {i.ustYazi}
            </p>
            <h1>{i.ad}</h1>
            <p className="giris-rol">{i.rol}</p>
            <p className="odaklar">
              {i.odaklar.map((o, n) => (
                <span key={o}>
                  {n > 0 && (
                    <span className="odak-ayrac" aria-hidden="true">
                      /
                    </span>
                  )}
                  {o}
                </span>
              ))}
            </p>
            <p className="giris-metin">{i.giris}</p>
            <div className="eylemler">
              <a className="dugme birincil" href="#iletisim">
                {i.eylemler.iletisim}
                <OkIkonu />
              </a>
              <YazdirDugmesi metin={i.cv} />
              <a className="baglanti-ok" href="#projeler">
                {i.eylemler.projeler}
                <OkIkonu />
              </a>
            </div>
            <p className="stack">
              <span className="stack-etiket">{i.stackEtiket}:</span>
              {i.stack.map((s) => (
                <span className="pil" key={s}>
                  {s}
                </span>
              ))}
            </p>
          </div>
          <a className="asagi" href="#hakkimda" aria-label={kaydirEtiket}>
            <AsagiIkonu />
          </a>
        </section>

        <section className="bolum" id="hakkimda" aria-labelledby="hakkimda-baslik">
          <div className="ic">
            <Etiket metin={i.hakkimda.etiket} />
            <div className="iki-sutun">
              <div>
                <h2 id="hakkimda-baslik">{i.hakkimda.baslik}</h2>
                {i.hakkimda.paragraflar.map((p) => (
                  <p className="govde-metin" key={p}>
                    {p}
                  </p>
                ))}
                <dl className="sayilar">
                  {i.hakkimda.sayilar.map((s) => (
                    <div key={s.aciklama}>
                      <dt>{s.deger}</dt>
                      <dd>{s.aciklama}</dd>
                    </div>
                  ))}
                </dl>
              </div>
              <div>
                <p className="kucuk-baslik">{i.hakkimda.odakBaslik}</p>
                <ol className="odak-liste">
                  {i.hakkimda.odakListe.map((o, n) => (
                    <li key={o}>
                      <span className="sira">{String(n + 1).padStart(2, "0")}</span>
                      {o}
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          </div>
        </section>

        <section className="bolum" id="projeler" aria-labelledby="projeler-baslik">
          <div className="ic">
            <Etiket metin={i.projeler.etiket} />
            <div className="bolum-ust">
              <h2 id="projeler-baslik">{i.projeler.baslik}</h2>
              <p className="altyazi">{i.projeler.altyazi}</p>
            </div>
            <div className="kartlar">
              {i.projeler.liste.map((p, n) => (
                <article className="kart" key={p.ad}>
                  <div className="kart-ust">
                    <p className="kart-kategori">
                      <span className="sira">{String(n + 1).padStart(2, "0")}</span>
                      {p.kategori.map((k, m) => (
                        <span key={k}>
                          {m > 0 && (
                            <span className="odak-ayrac" aria-hidden="true">
                              /
                            </span>
                          )}
                          {k}
                        </span>
                      ))}
                    </p>
                    <span className="durum">{p.durum}</span>
                  </div>
                  <h3>{p.ad}</h3>
                  <p className="kart-metin">{p.aciklama}</p>
                  {p.maddeler && (
                    <ul className="kart-maddeler">
                      {p.maddeler.map((m) => (
                        <li key={m}>{m}</li>
                      ))}
                    </ul>
                  )}
                  <p className="piller">
                    {p.etiketler.map((e) => (
                      <span className="pil" key={e}>
                        {e}
                      </span>
                    ))}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bolum" id="beceriler" aria-labelledby="beceriler-baslik">
          <div className="ic">
            <Etiket metin={i.beceriler.etiket} />
            <div className="bolum-ust">
              <h2 id="beceriler-baslik">{i.beceriler.baslik}</h2>
              <p className="altyazi">{i.beceriler.altyazi}</p>
            </div>
            <div className="beceri-tablo">
              {i.beceriler.gruplar.map((g) => (
                <div className={`beceri-grup${g.vurgu ? " vurgulu" : ""}`} key={g.ad}>
                  <h3>{g.ad}</h3>
                  <p className="piller">
                    {g.ogeler.map((o) => (
                      <span className="pil" key={o}>
                        {o}
                      </span>
                    ))}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bolum" id="deneyim" aria-labelledby="deneyim-baslik">
          <div className="ic">
            <Etiket metin={i.deneyim.etiket} />
            <h2 id="deneyim-baslik">{i.deneyim.baslik}</h2>
            <ol className="zaman">
              {i.deneyim.liste.map((d) => (
                <li className="zaman-oge" key={d.donem}>
                  <div className="zaman-ust">
                    <div>
                      <h3>{d.unvan}</h3>
                      <p className="zaman-sirket">{d.sirket}</p>
                    </div>
                    <span className="zaman-donem">{d.donem}</span>
                  </div>
                  <ul className="zaman-maddeler">
                    {d.maddeler.map((m) => (
                      <li key={m}>{m}</li>
                    ))}
                  </ul>
                  <p className="piller">
                    {d.etiketler.map((e) => (
                      <span className="pil ince" key={e}>
                        {e}
                      </span>
                    ))}
                  </p>
                </li>
              ))}
            </ol>
            <div className="egitim">
              <p className="kucuk-baslik">{i.deneyim.egitimBaslik}</p>
              <ul className="egitim-liste">
                {i.deneyim.egitim.map((e) => (
                  <li key={e}>{e}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className="bolum" id="iletisim" aria-labelledby="iletisim-baslik">
          <div className="ic">
            <Etiket metin={i.iletisim.etiket} />
            <div className="iki-sutun iletisim">
              <div>
                <h2 id="iletisim-baslik">{i.iletisim.baslik}</h2>
                <p className="govde-metin">{i.iletisim.metin}</p>
                <dl className="bilgi">
                  {i.iletisim.bilgi.map((b) => (
                    <div key={b.etiket}>
                      <dt>{b.etiket}</dt>
                      <dd>{b.deger}</dd>
                    </div>
                  ))}
                </dl>
              </div>
              <div className="iletisim-kartlar">
                {i.iletisim.kartlar.map((k) => (
                  <a className="iletisim-kart" href={k.url} rel="me noopener" key={k.url}>
                    <span className="iletisim-ikon" aria-hidden="true">
                      {k.tur === "github" ? <GithubIkonu /> : <LinkedinIkonu />}
                    </span>
                    <span className="iletisim-yazi">
                      <span className="iletisim-ad">{k.ad}</span>
                      <span className="iletisim-deger">{k.deger}</span>
                    </span>
                    <OkIkonu />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="alt">
        <div className="ic alt-ic">
          <p>{i.altbilgi}</p>
          <nav className="alt-nav" aria-label={altEtiket}>
            <a href={BAG.github} rel="me noopener" aria-label="GitHub">
              <GithubIkonu />
            </a>
            <a href={BAG.linkedin} rel="me noopener" aria-label="LinkedIn">
              <LinkedinIkonu />
            </a>
            {digerDiller.map((d) => (
              <a key={d.kod} href={d.url} lang={d.kod} hrefLang={d.kod}>
                {d.ad}
              </a>
            ))}
          </nav>
        </div>
      </footer>
    </>
  );
}

const BAG = { github: "https://github.com/Ayrkl", linkedin: "https://www.linkedin.com/in/canyrkl" };
