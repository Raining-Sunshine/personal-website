import React from "react";
import "./App.css";

const navItems = [
  // 后续可以把 href 替换成真实子页面路径，例如："/blog"、"/links"、"/fanworks"、"/others"
  { label: "博客", href: "#blog" },
  { label: "相关链接", href: "#links" },
  { label: "同人", href: "#fanworks" },
  { label: "其他", href: "#others" },
];

export default function App() {
  return (
    <div className="site-shell">
      <header className="hero-header">
        <img
          src="/header.png"
          alt="站点头图"
          className="hero-image"
        />
        <div className="hero-overlay">
          <div className="site-title">Diotima Chang</div>
        </div>
      </header>

      <div className="thin-strip" aria-hidden="true" />

      <nav className="main-nav" aria-label="主导航">
        {navItems.map((item) => (
          <a key={item.href} href={item.href} className="nav-link">
            {item.label}
          </a>
        ))}
      </nav>

      <main className="home-main">
        <section className="profile-card" aria-label="个人简介">
          <div className="avatar-wrap">
            <img src="/avatar.jpg" alt="头像" className="avatar" />
          </div>

          <div className="intro-panel">
            <p className="eyebrow">About me</p>
            <h1>Hi，This is Diotima</h1>
            <p>
              I enjoy material science and currently applying for my PhD. I mainly focus on computational material science and I am proficient in using COMSOL and Gaussian. I learnt them all myself. I also enjoy studing computer related stuffs like neural network, cyber security, algorithms...Everything related is cool to me. Besides that, I am also writing fanfiction on AO3. Most of my works are Chinese, But maybe I will publish some translation works one day. It's already in my to-do list now.
            </p>
            <p>
              You can see some of my works from the links below. I am also trying to merge them back into my own site.
            </p>
          </div>
        </section>

        <section className="content-grid">
          <article id="blog" className="section-card">
            <h2>Blogs</h2>
            <p>http://bbs.keinsci.com/thread-42564-1-1.html</p>
          </article>

          <article id="links" className="section-card">
            <h2>相关链接</h2>
            <p>https://github.com/Raining-Sunshine,  https://archiveofourown.org/users/Diotima_Chang</p>
          </article>

          <article id="fanworks" className="section-card">
            <h2>同人</h2>
            <p>用于整理同人创作、图片、设定、短文、收藏或专题页面。</p>
          </article>

          <article id="others" className="section-card">
            <h2>其他</h2>
            <p>可以放杂项内容、公告、联系方式、页面更新日志等。</p>
          </article>
        </section>
      </main>
    </div>
  );
}
