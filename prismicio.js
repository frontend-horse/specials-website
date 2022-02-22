import * as prismic from "@prismicio/client";
import Link from "next/link";
import smConfig from "./sm.json";

export const apiEndpoint = smConfig.apiEndpoint;

export const linkResolver = (doc) => {
  if (doc.type === "homepage") {
    return "/";
  }

  return "/";
};

export const customLink = (type, element, content, children, index) => (
  <Link
    key={index}
    href={linkResolver(element.data)}
    as={linkResolver(element.data)}
  >
    <a>{content}</a>
  </Link>
);

export const Router = {
  routes: [{ type: "page", path: "/:uid" }],
};

export const createClient = () => {
  const client = prismic.createClient(apiEndpoint, {
    routes: Router.routes,
  });

  return client;
};
