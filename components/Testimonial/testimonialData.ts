import image1 from "@/public/images/user/user-01.png";
import image2 from "@/public/images/user/user-02.png";
import { Testimonial } from "@/types/testimonial";

export const testimonialData: Testimonial[] = [
  {
    id: 1,
    name: "David Smith",
    designation: "Founder @TechInnovators",
    image: image1,
    content:
      "Upliftio transformed our digital presence with their exceptional UI/UX design and robust web development services. Our user engagement has significantly increased.",
  },
  {
    id: 2,
    name: "John Abraham",
    designation: "CEO @AppCreators",
    image: image2,
    content:
      "The team at Upliftio delivered a top-notch mobile app that exceeded our expectations. Their expertise in app development is unparalleled.",
  },
  {
    id: 3,
    name: "Emily Johnson",
    designation: "CTO @WebSolutions",
    image: image1,
    content:
      "Working with Upliftio was a game-changer for our business. Their comprehensive solutions helped us scale quickly and efficiently.",
  },
  {
    id: 4,
    name: "Michael Brown",
    designation: "Product Manager @InnovateTech",
    image: image2,
    content:
      "Upliftio's innovative approach to UI/UX design and development has set us apart from our competitors. We couldn't be happier with the results.",
  },
];
