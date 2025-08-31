document.addEventListener("DOMContentLoaded", function () {
  //
  const biodata = {
    nama: "Ahfaz Bactiar Febliama, M.Pd",
    profesi: "Web Development | Graphic Designer | Content Creator",
    foto: "Ahfaz.jpeg",
    tentang:
      "Saya mengajar di dua Instansi, yaitu di SMK Negeri 1 Kalianget sebagai guru produktif DKV dan guru Informatika dan di Universitas Bahauddin Mudhary Madura sebagai dosen pendidikan teknologi informasi pengampu mata kuliah pada semester ini adalah Platform Based Programing.",
    kontak: {
      email: "IT.gor38@gmail.com",
      telepon: "085 230 787 025",
      lokasi: "Grand Symphony Paberasan, Kecamatan Kota Sumenep",
    },
    //
    mediaSosial: [
      { nama: "Tiktok", url: "https://tiktok.com/@ahfazbactiar" },
      { nama: "GitHub", url: "https://github.com/ahfazbactiar" },
      { nama: "Instagram", url: "https://instagram.com/Yus_Splash" },
    ],

    projects: [
      {
        nama: "Website Sekolah",
        deskripsi:
          "Proyek ini adalah website yang saya bangun dalm beberapa bulan terakhir.",
        url: "https://smk1kalianget.sch.id/",
      },
      {
        nama: "Website DKV",
        deskripsi:
          "website sederhana untuk menampilkan hasil karya siswa DKV dan lain-;ain.",
        url: "https://www.dkvsmkn1kalianget.com/home",
      },
    ],
  };

  //
  function createElement(tag, className, content = "") {
    const element = document.createElement(tag);
    if (className) {
      element.className = className;
    }
    if (content) {
      element.innerHTML = content;
    }
    return element;
  }

  //
  const headerContainer = document.getElementById("header-container");
  const profileCard = createElement("div", "profile-card");

  const profilePic = createElement("img", "profile-pic");
  profilePic.src = biodata.foto;
  profilePic.alt = "Foto Profil";

  const namaHeader = createElement("h1", "", biodata.nama);
  const profesiParagraph = createElement("p", "", biodata.profesi);

  profileCard.appendChild(profilePic);
  profileCard.appendChild(namaHeader);
  profileCard.appendChild(profesiParagraph);
  headerContainer.appendChild(profileCard);

  // 4. Menangani Main Content
  const mainContainer = document.getElementById("main-container");

  // Bagian Tentang Saya
  const aboutSection = createElement("section", "about-me");
  aboutSection.appendChild(createElement("h2", "", "Tentang Saya"));
  aboutSection.appendChild(createElement("p", "", biodata.tentang));
  mainContainer.appendChild(aboutSection);

  // Bagian Detail Kontak
  const contactSection = createElement("section", "details");
  contactSection.appendChild(createElement("h2", "", "Detail Kontak"));
  const contactList = createElement("ul");
  for (const key in biodata.kontak) {
    const listItem = createElement(
      "li",
      "",
      `<strong>${key.charAt(0).toUpperCase() + key.slice(1)}:</strong> ${
        biodata.kontak[key]
      }`
    );
    contactList.appendChild(listItem);
  }
  contactSection.appendChild(contactList);
  mainContainer.appendChild(contactSection);

  // Tambahkan bagian Project di sini
  const projectsSection = createElement("section", "projects");
  projectsSection.appendChild(createElement("h2", "", "Proyek"));
  const projectsList = createElement("ul");
  biodata.projects.forEach((project) => {
    const listItem = createElement("li");
    const projectName = createElement("h3", "", project.nama);
    const projectDesc = createElement("p", "", project.deskripsi);
    const projectLink = createElement("a", "", "Lihat Proyek");
    projectLink.href = project.url;
    projectLink.target = "_blank";

    listItem.appendChild(projectName);
    listItem.appendChild(projectDesc);
    listItem.appendChild(projectLink);
    projectsList.appendChild(listItem);
  });
  projectsSection.appendChild(projectsList);
  mainContainer.appendChild(projectsSection);

  // Bagian Media Sosial
  const socialSection = createElement("section", "social-media");
  socialSection.appendChild(createElement("h2", "", "Media Sosial"));
  const socialList = createElement("ul");
  biodata.mediaSosial.forEach((link) => {
    const listItem = createElement("li");
    const anchor = createElement("a", "", link.nama);
    anchor.href = link.url;
    anchor.target = "_blank";
    listItem.appendChild(anchor);
    socialList.appendChild(listItem);
  });
  socialSection.appendChild(socialList);
  mainContainer.appendChild(socialSection);

  // 5. Menangani Footer
  const footerContainer = document.getElementById("footer-container");
  const currentYear = new Date().getFullYear();
  const footerText = createElement(
    "p",
    "",
    `&copy; ${currentYear} ${biodata.nama}. Hak Cipta Dilindungi.`
  );
  footerContainer.appendChild(footerText);
});


