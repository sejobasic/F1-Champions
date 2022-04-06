function makeMarquee() {
  const title = "TOP 12 F1 WORLD CHAMPIONS";

  // Fill array with title variable 50 times and join with hyphen
  const marqueeText = new Array(50).fill(title).join(" —— ");

  // select marquee span from html
  // set our repeating title as the content
  const marquee = document.querySelector(".marquee span");
  // Set content inside element
  marquee.innerHTML = marqueeText;
}

makeMarquee();

function carMarquee() {
  const car = document.querySelectorAll(".car-img");
}

function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// grab all flag icons
const flags = document.querySelectorAll(".flag");

// get access to each flag
flags.forEach((flag, index) => {
  flag.animate(
    [
      // Keyframes
      { transform: "scale(1)" },
      { transform: "scale(1.2)" },
      { transform: "scale(1)" }
    ],
    {
      // timing options
      // use index to  create a staggered animation delay
      delay: 300 * index,
      duration: 3000,
      iterations: Infinity
    }
  );
});

const wheels = document.querySelectorAll(".wheel");

wheels.forEach((wheel, index) => {
  // get random number between 0 and 45 using random function
  const randomNumber = random(0, 45);

  wheel.animate(
    [
      // Keyframes
      { transform: "rotate(0deg)" },
      { transform: `rotate(${randomNumber}deg)` },
      { transform: "rotate(0deg)" }
    ],
    {
      // timing options
      // use index to  create a staggered animation delay
      delay: 300 * index,
      duration: 5000,
      iterations: Infinity
    }
  );
});

// detect when section enters viewport then add class of 'in-viewpor'
// when exit viewport, remove in-viewport class
inView(".section")
  .on("enter", (section) => {
    section.classList.add("in-viewport");
  })
  .on("exit", (section) => {
    section.classList.remove("in-viewport");
  });

// set the class to add only once we have scrolled 0.2 into our section
inView.threshold(0.2);

// select each section and loop through them
// in each section grab driver and icon, add transition delay to both
const sections = document.querySelectorAll(".section");

sections.forEach((section, index) => {
  const drivers = section.querySelectorAll(".lineup li");
  const icons = section.querySelectorAll(".icon");

  drivers.forEach((driver, index) => {
    const delay = index * 100;
    driver.style.transitionDelay = `${delay}ms`;
  });

  icons.forEach((icon, index) => {
    // only transition icons in when the drivers have faded in
    const delay = (drivers.length + index) * 100;
    icon.style.transitionDelay = `${delay}ms`;
  });
});

// select all scroll links and run a function
const scrollLinks = document.querySelectorAll(".js-scroll");

scrollLinks.forEach((link) => {
  link.addEventListener("click", (event) => {
    // block default browser behavior
    event.preventDefault();
    // grab the href attribute from our link
    const href = link.getAttribute("href");
    // use scroll into view to scroll to our desired elements
    document.querySelector(href).scrollIntoView({
      behavior: "smooth"
    });
  });
});
