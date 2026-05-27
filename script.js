const externalLinkAttrs = {
  target: "_blank",
  rel: "noopener noreferrer"
};

const linkLabels = {
  x: "X",
  instagram: "Instagram",
  github: "GitHub",
  email: "Mail"
};

const linkIcons = {
  x: "X",
  instagram: "IG",
  github: "GH",
  email: "@"
};

function createElement(tag, className, text) {
  const element = document.createElement(tag);

  if (className) {
    element.className = className;
  }

  if (text) {
    element.textContent = text;
  }

  return element;
}

function createLink(key, href, variant = "button") {
  const link = createElement("a", `link-${variant}`);
  link.href = href;
  link.setAttribute("aria-label", `${linkLabels[key]}を開く`);

  if (!href.startsWith("mailto:")) {
    Object.entries(externalLinkAttrs).forEach(([attr, value]) => {
      link.setAttribute(attr, value);
    });
  }

  const icon = createElement("span", "link-icon", linkIcons[key]);
  icon.setAttribute("aria-hidden", "true");
  link.append(icon, document.createTextNode(linkLabels[key]));

  return link;
}

function renderProfile() {
  document.getElementById("profile-name").textContent = profile.name;
  document.getElementById("profile-title").textContent = profile.title;
  document.getElementById("profile-tagline").textContent = profile.tagline;

  const heroLinks = document.getElementById("hero-links");
  heroLinks.append(
    createLink("github", profile.links.github),
    createLink("x", profile.links.x),
    createLink("email", profile.links.email, "button secondary")
  );

  const aboutBody = document.getElementById("about-body");
  profile.bio.forEach((paragraph) => {
    aboutBody.appendChild(createElement("p", "", paragraph));
  });

  const contactLinks = document.getElementById("contact-links");
  Object.entries(profile.links).forEach(([key, href]) => {
    contactLinks.appendChild(createLink(key, href, "panel"));
  });
}

function createTagList(items) {
  const list = createElement("ul", "tag-list");

  items.forEach((item) => {
    const tag = createElement("li", "tag", item);
    list.appendChild(tag);
  });

  return list;
}

function renderProjects() {
  const projectList = document.getElementById("project-list");

  projects.forEach((project) => {
    const card = createElement("article", "project-card");
    const visual = createElement("div", `project-visual ${project.visual}`);
    visual.setAttribute("aria-hidden", "true");

    if (project.image) {
      const image = createElement("img", "project-image");
      image.src = project.image;
      image.alt = "";
      visual.appendChild(image);
    }

    const content = createElement("div", "project-content");
    const meta = createElement("p", "project-meta", `${project.jam} / ${project.period}`);
    const title = createElement("h3", "", project.title);
    const description = createElement("p", "project-description", project.description);

    const stats = createElement("dl", "project-stats");
    stats.innerHTML = `
      <div><dt>Team</dt><dd>${project.teamSize}人</dd></div>
      <div><dt>Tech</dt><dd>${project.technologies.join(" / ")}</dd></div>
    `;

    const roleTitle = createElement("h4", "", "担当");
    const roleTags = createTagList(project.role);

    const highlightTitle = createElement("h4", "", "工夫した点");
    const highlightList = createElement("ul", "note-list");
    project.highlights.forEach((item) => {
      highlightList.appendChild(createElement("li", "", item));
    });

    const challengeTitle = createElement("h4", "", "苦労した点");
    const challengeList = createElement("ul", "note-list");
    project.challenges.forEach((item) => {
      challengeList.appendChild(createElement("li", "", item));
    });

    const actions = createElement("div", "project-actions");
    const playLink = createElement("a", "link-button", "itch.ioで見る");
    playLink.href = project.url;
    Object.entries(externalLinkAttrs).forEach(([attr, value]) => {
      playLink.setAttribute(attr, value);
    });
    actions.appendChild(playLink);

    content.append(
      meta,
      title,
      description,
      stats,
      roleTitle,
      roleTags,
      highlightTitle,
      highlightList,
      challengeTitle,
      challengeList,
      actions
    );

    card.append(visual, content);
    projectList.appendChild(card);
  });
}

function renderSkills() {
  const skillList = document.getElementById("skill-list");

  skills.forEach((skill) => {
    const card = createElement("section", "skill-card");
    card.append(createElement("h3", "", skill.category), createTagList(skill.items));
    skillList.appendChild(card);
  });
}

renderProfile();
renderProjects();
renderSkills();
document.getElementById("year").textContent = new Date().getFullYear();
