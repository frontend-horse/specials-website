import Link from "next/link";

export default function ShowCard({ events }) {
  return (
    <div className="show-card-grid">
      {events.map(({ uid, eventTitle }) => (
        <Link href={`/${uid}`} key={uid}>
          <a>
            <div className="show-card-grid__card">
              <h2>{eventTitle}</h2>
            </div>
          </a>
        </Link>
      ))}
    </div>
  );
}
