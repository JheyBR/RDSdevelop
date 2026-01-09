import { Blog } from "@/types/blog";

const blogData: Blog[] = [
  {
    id: 1,
    title: "Cómo automatizar procesos sin morir en el intento",
    paragraph:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sit amet dictum neque, laoreet dolor.",
    image: "/images/blog/blog-01.jpg",
    author: {
      name: "Luis Toncel",
      image: "/images/blog/author-01.png",
      designation: "Graphic Designer",
    },
    tags: ["Desarrollo"],
    publishDate: "2025",
  },
  {
    id: 2,
    title: "Lo que tu empresa puede aprender de los videojuegos",
    paragraph:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sit amet dictum neque, laoreet dolor.",
    image: "/images/blog/blog-02.jpg",
    author: {
      name: "Jheison Barbosa",
      image: "/images/blog/author-02.png",
      designation: "Content Writer",
    },
    tags: ["Educación"],
    publishDate: "2025",
  },
  {
    id: 3,
    title: "Casos reales: empresas que crecieron con nosotros",
    paragraph:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sit amet dictum neque, laoreet dolor.",
    image: "/images/blog/blog-03.jpg",
    author: {
      name: "Hilianet Barbosa",
      image: "/images/blog/author-03.png",
      designation: "Graphic Designer",
    },
    tags: ["Testimonio"],
    publishDate: "2025",
  },
];
export default blogData;
