import Head from "next/head";
import ShowCardGrid from "../components/ShowCardGrid";

import { createClient } from "../prismicio";

export default function Home({ page, events }) {
  return (
    <div>
      <Head>
        <title>{page.metaTitle}</title>
        <meta name="description" content={page.metaDescription} />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div className="layout">
          <h1>{page.title}</h1>
          <ShowCardGrid events={events} />
        </div>
      </main>
    </div>
  );
}

export async function getStaticProps() {
  const client = createClient();
  const doc = (await client.getSingle("homepage")) || {};
  const events = await client.getAllByType("event");

  const formattedEvents = events.map((event) => {
    return {
      ...event.data,
      uid: event.uid,
    };
  });

  return {
    props: {
      // slices: doc.data.slices,
      page: doc.data,
      events: formattedEvents,
    },
  };
}
