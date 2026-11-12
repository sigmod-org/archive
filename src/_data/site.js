export default {
  title: "SIGMOD Archive",
  www: "https://www.sigmod.org",
  // Canonical address; SITE_URL is set by the deploy that builds for archive.sigmod.org
  url: process.env.SITE_URL || "https://sigmod-org.github.io/archive",
  longTitle: "ACM Special Interest Group on Management of Data",
  description: "Copies of ACM SIGMOD's historical publications: the SIGMOD Anthology, the Digital Symposium Collection (DiSC) and the DBLP DVD mirror.",
  repo: "https://github.com/sigmod-org/archive",
  editBase: "https://github.com/sigmod-org/archive/edit/main/",
  volunteerNote:
    "The SIGMOD Archive is maintained by volunteers from the SIGMOD and PODS communities. The archived pages are kept as they were published and may contain outdated links.",
  partners: [
    { name: "VLDB Endowment", url: "https://vldb.org/", logo: "/assets/partners/vldb.gif" },
    { name: "SIGKDD", url: "https://kdd.org/", logo: "/assets/partners/kdd.png" },
    { name: "IEEE TCDE", url: "http://tab.computer.org/tcde/", logo: "/assets/partners/tcde.png" },
    { name: "EDBT Endowment", url: "https://www.edbt.org/", logo: "/assets/partners/edbt.png" },
  ],
};
