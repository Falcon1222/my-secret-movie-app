import Link from 'next/link';

/* =========================================================
  1. Өгөгдлийн сангийн үүрэг гүйцэтгэх хэсэг.
  Энд байгаа videoUrl-уудыг өөрийн хүссэнээр солиорой.
 =========================================================*/
const movies = [
  {
    id: 1,
    title: 'Амьдрал',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ?rel=0&autoplay=1&mute=1&controls=1'
  },
  {
    id: 2,
    title: 'Хүчирхэг нэгэн',
    videoUrl: 'https://www.youtube.com/embed/some_other_video_id?rel=0&autoplay=1&mute=1&controls=1'
  },
  {
    id: 3,
    title: 'Цөлийн Шуурга',
    videoUrl: 'https://www.youtube.com/embed/another_video_id?rel=0&autoplay=1&mute=1&controls=1'
  }
];

/* =========================================================
  Хуудас бүрээр өгөгдөл дамжуулах функц
 =========================================================*/
export async function getServerSideProps(context) {
  const { id } = context.params;
  const movie = movies.find(m => m.id.toString() === id);

  if (!movie) {
    return { notFound: true };
  }

  return { props: { movie } };
}

/* =========================================================
  Үндсэн компонентын хэсэг (HTML ба CSS)
 =========================================================*/
export default function WatchPage({ movie }) {
  return (
    <>
      <div className="watch-container">
        <h1 className="movie-title">{movie.title}</h1>
        <div className="video-player-wrapper">
          <iframe
            src={movie.videoUrl}
            title={movie.title}
            frameBorder="0"
            /* "allow" property-д autoplay-г зөвшөөрч өгнө */
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
         
        <Link href="/kino?token=MINII-NUUTS-TULHUUR-123" className="back-button">
          &larr; Буцах
        </Link>
      </div>

      <style jsx global>{`
        body {
          background-color: #000;
          color: white;
          font-family: sans-serif;
          margin: 0;
          display: flex;
          justify-content: center;
          align-items: center;
          min-height: 100vh;
        }
        .watch-container {
          width: 90%;
          max-width: 1100px;
          text-align: center;
        }
        .movie-title {
          margin-bottom: 20px;
        }
        .video-player-wrapper {
          position: relative;
          padding-bottom: 56.25%; /* 16:9 харьцаа */
          height: 0;
          overflow: hidden;
          background-color: #111;
          border-radius: 8px;
        }
        .video-player-wrapper iframe {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
        }
        .back-button {
          display: inline-block;
          margin-top: 30px;
          padding: 10px 20px;
          background-color: #333;
          color: white;
          text-decoration: none;
          border-radius: 5px;
          transition: background-color 0.2s;
        }
        .back-button:hover {
          background-color: #555;
        }
      `}</style>
    </>
  );
}