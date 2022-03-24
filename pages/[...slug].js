import Head from "next/head";
import { createClient } from "../prismicio";
import SliceZone from "next-slicezone";

import resolver from "../sm-resolver.js";

export default function Event({ page, slices }) {
  return (
    <div>
      <Head>
        <title>{page.metaTitle}</title>
        <meta name="description" content={page.metaDescription} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div className="layout">
          <h1>{page.eventTitle}</h1>
        </div>
        {!!slices?.length && (
        <SliceZone slices={slices}  resolver={resolver} />
        )}
      </main>
    </div>
  );
}

export async function getStaticPaths(props) {
  const client = createClient();
  const events = await client.getAllByType("event");

  return {
    paths: events.map(({ uid }) => ({ params: { slug: [uid] } })) || [],
    fallback: false,
  };
}
export async function getStaticProps({ params }) {
  const uid = params.slug[0];

  const client = createClient();
  const doc = await client.getByUID("event", uid);
//   console.log('document', doc)
  const page = {
    ...doc.data,
    slugs: doc.slugs,
    uid: doc.uid,
    type: doc.type,
  };

  return {
    props: { page, slices: doc.data?.slices },
  };
}
