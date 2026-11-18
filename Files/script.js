// Stores all slider images and their matching text
const slides = [
    {
        image: "Images/blue.png",
        alt: "Gym equipment inside Cill Barra Community Sports Centre",
        title: "PAYG: Flexible Fitness, Your Way.",
        subtitle: "Join Cill Barra Community Gym today. No long-term contracts.",
        buttonText: "Join Now",
        buttonLink: "Login.html"
    },
    {
        image: "Images/green.png",
        alt: "Fitness class at Cill Barra Community Sports Centre",
        title: "Book a Class Today",
        subtitle: "Take part in fun fitness classes for all levels.",
        buttonText: "View Classes",
        buttonLink: "Classes.html"
    },
    {
        image: "Images/orange.png",
        alt: "Sports hall at Cill Barra Community Sports Centre",
        title: "Facilities for Everyone",
        subtitle: "Explore our gym, hall, classes and community spaces.",
        buttonText: "View Facilities",
        buttonLink: "Facilities.html"
    }
];

// Keeps track of the current slide number
let currentSlide = 0;

// Finds the HTML elements we need to change
const sliderImage = document.getElementById("sliderImage");
const sliderTitle = document.getElementById("sliderTitle");
const sliderSubtitle = document.getElementById("sliderSubtitle");
const sliderCallToAction = document.getElementById("sliderCallToAction");
const sliderImageOne = document.getElementById("sliderImageOne");
const sliderImageTwo = document.getElementById("sliderImageTwo");

let activeImage = sliderImageOne;
let hiddenImage = sliderImageTwo;
let isChangingSlide = false;

const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

// Changes the image and text with a smooth fade-in effect
function showSlide(slideIndex) {
    if (isChangingSlide) {
        return;
    }

    isChangingSlide = true;

    const slide = slides[slideIndex];

    hiddenImage.src = slide.image;
    hiddenImage.alt = slide.alt;

    hiddenImage.classList.add("slider-image-active");
    activeImage.classList.remove("slider-image-active");

    sliderTitle.textContent = slide.title;
    sliderSubtitle.textContent = slide.subtitle;

    sliderCallToAction.textContent = slide.buttonText;
    sliderCallToAction.href = slide.buttonLink;

    setTimeout(function () {
        const oldActiveImage = activeImage;

        activeImage = hiddenImage;
        hiddenImage = oldActiveImage;

        isChangingSlide = false;
    }, 1000);
}

// Moves to the next slide
function nextSlide() {
    currentSlide++;

    if (currentSlide >= slides.length) {
        currentSlide = 0;
    }

    showSlide(currentSlide);
}

// Moves to the previous slide
function previousSlide() {
    currentSlide--;

    if (currentSlide < 0) {
        currentSlide = slides.length - 1;
    }

    showSlide(currentSlide);
}

// Button click events
nextBtn.addEventListener("click", nextSlide);
prevBtn.addEventListener("click", previousSlide);

// Automatically changes slide every 10 seconds
setInterval(nextSlide, 10000);

// Shows the first slide when the page loads
showSlide(currentSlide);