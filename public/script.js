let timeout;

function copyTelephoneToClipboard() {
  const telephoneNumber = "+420 731 519 819";

  // Copy the text inside the text field
  navigator.clipboard.writeText(telephoneNumber);

  $(".alert").addClass("show");

  clearTimeout(timeout);

  timeout = setTimeout(() => {
    $(".alert").removeClass("show");
  }, 2000);
}

function closeAlert() {
  clearTimeout(timeout);
  $(".alert").removeClass("show");
}

function copyEmailToClipboard() {
  const email = "radekstary23@gmail.com";

  // Copy the text inside the text field
  navigator.clipboard.writeText(email);

  $(".alert").addClass("show");

  clearTimeout(timeout);

  timeout = setTimeout(() => {
    $(".alert").removeClass("show");
  }, 2000);
}

var lastScrollTop = 0;

function changeBgOnWidthChange() {
  if (window.matchMedia("(max-width: 990px)").matches) {
    $("nav").addClass("darkBlueBg");
  } else {
    $("nav").removeClass("darkBlueBg");
  }
}

const windowIsResizedToSmallSize = 0;

$(window).resize(function () {
  changeBgOnWidthChange();
});

//when website is scrolled
$(window).scroll(function () {
  //how far is scroll from top of website
  let scrollTop = $(document).scrollTop();

  let scrollingDown = scrollTop > lastScrollTop;

  if (scrollTop < 60) {
    $("nav").removeClass("blueBg");
    $("nav").removeClass("transparent");
  } else if (scrollingDown) {
    $("nav").addClass("transparent");
  } else if (!scrollingDown) {
    $("nav").addClass("blueBg");
    $("nav").removeClass("transparent");
  }

  lastScrollTop = scrollTop;
});

$(document).ready(function () {
  //scroll into contact section
  $(".scrollToContactButton").click(() => {
    $([document.documentElement, document.body]).animate(
      {
        scrollTop: $(".contact").offset().top,
      },
      700
    );
  });

  //scroll into projects section
  $(".scrollToProjectButton").click(function () {
    $([document.documentElement, document.body]).animate(
      {
        scrollTop: $(".projects").offset().top,
      },
      700
    );
  });

  //scroll into aboutMe section
  $(".scrollToAboutMeButton").click(function () {
    $([document.documentElement, document.body]).animate(
      {
        scrollTop: $(".aboutMe").offset().top,
      },
      800
    );
  });
});
