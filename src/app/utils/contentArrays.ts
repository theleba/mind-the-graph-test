import { MenuProps } from "antd";

export const services = [
  {
    image: "/images/infographics.svg",
    title: "Graphical Abstracts and Infographics",
    text: "Improve your papers’ impact and visibility through quality visual communication",
  },
  {
    image: "/images/scientificPoster.svg",
    title: "Scientific Poster in a few clicks",
    text: "Add visual impact to your posters with scientific illustrations and graphics",
  },
  {
    image: "/images/slidePresentation.svg",
    title: "Make better Slide Presentation",
    text: "Transform your lectures, meetings and classes into high-impact visual experiences",
  },
];

export const functionalities = [
  {
    image: "/images/functionalities/ico_drag.svg",
    title: "Drag and Drop",
    text: "Easily select and manage illustrations, text and templates",
  },
  {
    image: "/images/functionalities/ico_premade.svg",
    title: "Pre-Made Resources",
    text: "Don’t waste time! Use our templates and just customize colours, text etc",
  },
  {
    image: "/images/functionalities/ico_platform.svg",
    title: "Online Platform",
    text: "Access your creations at any time and from anywhere",
  },
  {
    image: "/images/functionalities/ico_odemand.svg",
    title: "On-demand Illustrations",
    text: "Don’t find exactly what you need? We will design it for you!",
  },
  {
    image: "/images/functionalities/ico_multiple.svg",
    title: "Multiple Sizing Options",
    text: "Ready-to-go templates in all popular sizes",
  },
  {
    image: "/images/functionalities/ico_share.svg",
    title: "Share creations",
    text: "Share your creations with your team or other users",
  },
];

export const header = [
  {
    title: "Templates",
    url: "https://mindthegraph.com/infographic-templates/",
    key: "templates",
  },
  {
    title: "Pricing",
    url: "https://mindthegraph.com/pricing/?q=abtest",
    key: "pricing",
  },
  {
    title: "Blog",
    url: "https://mindthegraph.com/blog/",
    key: "blog",
  },
  {
    title: "Jobs",
    url: "https://www.linkedin.com/company/mind-the-graph/jobs/?viewAsMember=true",
    key: "jobs",
  },
];

export const items: MenuProps["items"] = [
  {
    label: "Templates",
    key: "1",
  },
  {
    label: "Pricing",
    key: "2",
  },
  {
    label: "Blog",
    key: "3",
  },
  {
    label: "Jobs",
    key: "4",
  },
  {
    type: "divider",
  },
  {
    key: "5",
    label: "Login",
  },
  {
    key: "6",
    label: "Sign up free",
  },
];
