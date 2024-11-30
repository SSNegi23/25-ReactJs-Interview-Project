interface RouteConfig {
  id: number;
  path: string;
  name: string;
  component: string;
  props?: Record<string, any>;
}

export const minorProjects: RouteConfig[] = [
  { id: 1, path: "accordion", name: "Accordion", component: "Accordion" },
  {
    id: 2,
    path: "random-color",
    name: "Random Color Generator",
    component: "RandomColor",
  },
  {
    id: 3,
    path: "star-rating",
    name: "Star Rating",
    component: "StarRating",
    props: { noOfStars: 10 },
  },
  {
    id: 4,
    path: "image-slider",
    name: "Image Slider",
    component: "ImageSlider",
    props: { url: "https://picsum.photos/v2/list", limit: 10, page: 1 },
  },
  {
    id: 5,
    path: "load-more-data",
    name: "Load More Data",
    component: "LoadMoreData",
  },
];

export const majorProjects: RouteConfig[] = [
  { id: 1, path: "accordion", name: "Accordion", component: "Accordion" },
  {
    id: 2,
    path: "random-color-generator",
    name: "Random Color Generator",
    component: "RandomColor",
  },
  {
    id: 3,
    path: "star-rating",
    name: "Star Rating",
    component: "StarRating",
    props: { noOfStars: 10 },
  },
  {
    id: 4,
    path: "image-slider",
    name: "Image Slider",
    component: "ImageSlider",
    props: { url: "https://picsum.photos/v2/list", limit: 10, page: 1 },
  },
  {
    id: 5,
    path: "load-more-data",
    name: "Load More Data",
    component: "LoadMoreData",
  },
];
