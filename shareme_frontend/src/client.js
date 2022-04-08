import sanityClient from "@sanity/client";
import imageUrlBuiler from "@sanity/image-url";

export const client = sanityClient({
	projectId: process.env.REACT_APP_SANITY_PROJECT_ID,
	dataset: "production",
	apiVersion: "2021-11-16",
	useCdn: true,
	token: process.env.REACT_APP_SANITY_TOKEN,
});

const builder = imageUrlBuiler(client);

export const urlFor = (source) => builder.image(source);
