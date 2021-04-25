var tl = gsap.timeline();

const navList = document.querySelectorAll(".nav-list ul li");
navList.forEach((nl, index) => {
  tl.from(nl, { opacity: 0, duration: `${index / 4}` });
});

tl.fromTo(
  ".banner h1",
  { opacity: 0, x: -15 },
  { opacity: 1, x: 0, duration: 1 },
  "-=2"
);

const filmPoster = document.querySelectorAll(".film-poster ul");
filmPoster.forEach((fp, index) => {
  tl.to(fp, { opacity: 1, duration: 0.3 });
});
