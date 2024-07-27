const phone = "https://api.whatsapp.com/send?phone=+2348152883456";
const closeBtn = document.querySelector(".close");
const openBtn = document.querySelector(".menu");
const aside = document.querySelector("aside");
const projectsContainer = document.querySelector(".project-container");
const form = document.querySelector("form");
const fullName = document.getElementById("name");
const email = document.getElementById("email");
const message = document.getElementById("message");
const items = document.querySelectorAll(".item");
const projectData = [
  {
    id: crypto.randomUUID(),
    image: "images/followmebet.png",
    name: "Followmebet",
    type: "React",
    ProjectInfo:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aperiam doloremque similique, quae voluptatum debitis ipsa autem dolorem voluptate doloribus neque.",
    technologyUsed: "Technologies Used",
    technology: ["images/react.png", "images/js.png", "images/tailwind.png"],
    url: "http://followmebet.com.ng/",
  },
  {
    id: crypto.randomUUID(),
    image: "images/confy.png",
    name: "Comfy Store",
    type: "React",
    ProjectInfo:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aperiam doloremque similique, quae voluptatum debitis ipsa autem dolorem voluptate doloribus neque.',
    technologyUsed: "Technologies Used",
    technology: ["images/react.png", "images/js.png", "images/tailwind.png"],
    url: "https://isaac-comfy-storee.netlify.app/",
  },
  {
    id: crypto.randomUUID(),
    image: "images/airtimeProject.png",
    name: "Airtime project",
    type: "React",
    ProjectInfo:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aperiam doloremque similique, quae voluptatum debitis ipsa autem dolorem voluptate doloribus neque.",
    technologyUsed: "Technologies Used",
    technology: ["images/react.png", "images/js.png", "images/tailwind.png"],
    url: "https://airtime22.netlify.app/",
  },
  {
    id: crypto.randomUUID(),
    image: "images/colorPicker.png",
    name: "Color Generator",
    type: "React",
    ProjectInfo:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aperiam doloremque similique, quae voluptatum debitis ipsa autem dolorem voluptate doloribus neque.',
    technologyUsed: "Technologies Used",
    technology: ["images/react.png", "images/js.png", "images/tailwind.png"],
    url: "https://thriving-hamster-88791a.netlify.app/",
  },
  {
    id: crypto.randomUUID(),
    image: "images/guess-game.png",
    name: "Guess Number",
    type: "Javascript",
    ProjectInfo:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aperiam doloremque similique, quae voluptatum debitis ipsa autem dolorem voluptate doloribus neque.',
    technologyUsed: "Technologies Used",
    technology: [ "images/js.png", ],
    url: "https://guesting-game.netlify.app/",
  },
  {
    id: crypto.randomUUID(),
    image: "images/samuelxx.png",
    name: "Product Display",
    type: "React",
    ProjectInfo:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aperiam doloremque similique, quae voluptatum debitis ipsa autem dolorem voluptate doloribus neque.',
    technologyUsed: "Technologies Used",
    technology: [ "images/react.png", "images/js.png", "images/tailwind.png"],
    url: "https://samuelexx.netlify.app/",
  },
  {
    id: crypto.randomUUID(),
    image: "images/MixMaster.png",
    name: "Mix Master",
    type: "React",
    ProjectInfo:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aperiam doloremque similique, quae voluptatum debitis ipsa autem dolorem voluptate doloribus neque.',
    technologyUsed: "Technologies Used",
    technology: [ "images/react.png", "images/js.png", "images/tailwind.png"],
    url: "https://samuelexx.netlify.app/",
  },
];

document.addEventListener("DOMContentLoaded", () => {
  const links = document.querySelectorAll("nav ul li a");
  const filterButtons = document.querySelectorAll(".filter-btn");

  function setActiveLink() {
    links.forEach((link) => {
      link.parentElement.classList.remove("active");
      aside.style.transform = `translateX(-200rem)`;
    });
    this.parentElement.classList.add("active");
  }

  links.forEach((link) => {
    link.addEventListener("click", setActiveLink);
  });

  // Add event listeners to filter buttons
  filterButtons.forEach((button) => {
    button.addEventListener("click", function() {
      filterButtons.forEach(btn => btn.classList.remove("active")); // Remove active class from all buttons
      this.classList.add("active"); // Add active class to the clicked button

      const filterType = this.getAttribute("data-filter");
      filterProjects(filterType);
    });
  });

  function displayProjects(projects) {
    projectsContainer.innerHTML = projects.map(generateProjectHTML).join("");
  }

  function filterProjects(type) {
    if (type === "all") {
      displayProjects(projectData);
    } else {
      const filteredProjects = projectData.filter(project => project.type === type);
      displayProjects(filteredProjects);
    }
  }

  function generateProjectHTML(project) {
    return `
      <div class="project ">
        <img src="${project.image}" alt="project" />
        <div class="content">
          <h2>${project.name}</h2>
          <p>${project.ProjectInfo}</p>
          <h2>${project.technologyUsed}</h2>
          <div class="skills">
            ${project.technology.map(
              (image) => `<img src="${image}" alt="${image.split("/").pop().split(".")[0]}" />`
            ).join("")}
          </div>
          <div class="btn-container">
            <a href="${project.url}" target="_blank">
              <button>Visit Site</button>
            </a>
          </div>
        </div>
      </div>
    `;
  }

  displayProjects(projectData);
});

function sendEmail() {
  const bodyMsg = `Full Name: ${fullName.value}<br>Email: ${email.value}<br>Message: ${message.value}`;
  Email.send({
    Host: "smtp.elasticemail.com",
    Username: "isaackeyz55@gmail.com",
    Password: "3088195542A113ADA07377F337988C1AF369",
    To: "isaackeyz55@gmail.com",
    From: "isaackeyz55@gmail.com",
    Subject: "empty",
    Body: bodyMsg,
  }).then((message) => {
    if (message === "OK") {
      Swal.fire({
        title: "Success!",
        text: "Message sent successfully!",
        icon: "success",
      });
    }
  });
}

function checkInputs() {
  for (const item of items) {
    if (item.value === "") {
      item.classList.add("error");
      item.parentElement.classList.add("error");

      item.addEventListener("keyup", () => {
        if (item.value !== "") {
          item.classList.remove("error");
          item.parentElement.classList.remove("error");
        }
      });
    } else {
      item.classList.remove("error");
      item.parentElement.classList.remove("error");
    }
  }
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  checkInputs();
  if (
    !fullName.classList.contains("error") &&
    !email.classList.contains("error") &&
    !message.classList.contains("error")
  ) {
    sendEmail();
    fullName.value = email.value = message.value = "";
  }
});

document.querySelector("#whatsapp").setAttribute("href", phone);
AOS.init()
