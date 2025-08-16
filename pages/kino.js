import Image from 'next/image';
// pages/kino.js

// =========================================================
// 1. КИНОНЫ МЭДЭЭЛЭЛ
// Та шинээр кино нэмэх, засах, устгахдаа зөвхөн ЭНЭ ХЭСГИЙГ л өөрчилнө.
// =========================================================
const movies = [
  {
    id: 1,
    title: 'ДАХИН ТӨРСӨН БЯЦХАН ТЭРБУМТАН',
    imageUrl: 'https://i.ibb.co/L5tNrvM/movie1.png', // Энд киноны зургийн линкийг тавина
    linkUrl: '/watch/1' // Энэ киног үзэх хуудасны хаяг
  },
  {
    id: 2,
    title: 'НУУЦ ТЭРБУМТАН',
    imageUrl: 'https://i.ibb.co/hMpp8x4/movie2.png',
    linkUrl: '/watch/2'
  },
  {
    id: 3,
    title: 'ЭЭЖЭЭ БИ УХМЭЭРГҮЙ БАЙНА',
    imageUrl: 'https://i.ibb.co/v4d2FCH/movie3.png',
    linkUrl: '/watch/3'
  },
  {
    id: 4,
    title: 'МИНИЙ НӨХӨР МИНИЙ ДҮҮГИЙН АМРАГ',
    imageUrl: 'https://i.ibb.co/gR3Gk8q/movie4.png',
    linkUrl: '/watch/4'
  },
  {
    id: 5,
    title: 'ГАДУУРХАГДСАН ОХИН',
    imageUrl: 'https://i.ibb.co/Jqj84Yv/movie5.png',
    linkUrl: '/watch/5'
  },
  {
    id: 6,
    title: 'ЭРГЭЭД ИРЭЭЧ ЭЭЖЭЭ',
    imageUrl: 'https://i.ibb.co/vL0Z2v4/movie6.png',
    linkUrl: '/watch/6'
  },
  // ШИНЭЭР КИНО НЭМЭХ ЖИШЭЭ:
  // {
  //   id: 7,
  //   title: 'ШИНЭ КИНОНЫ НЭР',
  //   imageUrl: 'https://.../shine_zurag.png',
  //   linkUrl: '/watch/7'
  // },
];

// =========================================================
// Энэ хэсгийг өөрчлөх шаардлагагүй
// =========================================================

export async function getServerSideProps(context) {
  const { token } = context.query;
  const SECRET_KEY = 'MINII-NUUTS-TULHUUR-123'; 

  if (token === SECRET_KEY) {
    return { props: { authorized: true } };
  } else {
    return { props: { authorized: false } };
  }
}

export default function KinoPage({ authorized }) {
  
  if (authorized) {
    return (
      <>
        {/* ========================================================= */}
        {/* 2. ХУУДАСНЫ БҮТЭЦ (HTML) */}
        {/* ========================================================= */}
        <div className="main-container">
          <h1 className="page-title">Кинонууд</h1>
          <div className="movie-grid">
            {movies.map(movie => (
              <a key={movie.id} href={movie.linkUrl} className="movie-card">
                <Image src={movie.imageUrl} alt={movie.title} width={180} height={270} />
                <div className="movie-title">{movie.title}</div>
              </a>
            ))}
          </div>
        </div>

        {/* ========================================================= */}
        {/* 3. ДИЗАЙН (CSS) */}
        {/* ========================================================= */}
        <style jsx global>{`
          body {
            background-color: #141414;
            color: white;
            font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
              Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
            margin: 0;
            padding: 0;
          }
          .main-container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 20px;
          }
          .page-title {
            text-align: center;
            font-size: 2.5rem;
            margin-bottom: 30px;
          }
          .movie-grid {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
            gap: 20px;
          }
          .movie-card {
            background-color: #222;
            border-radius: 8px;
            overflow: hidden;
            text-decoration: none;
            color: white;
            display: flex;
            flex-direction: column;
            transition: transform 0.2s ease-in-out;
          }
          .movie-card:hover {
            transform: scale(1.05);
            box-shadow: 0 10px 20px rgba(0,0,0,0.5);
          }
          .movie-card img {
            width: 100%;
            height: 270px; /* Энэ хэмжээг өөрчилж зургийн өндрийг тохируулна */
            object-fit: cover;
            display: block;
          }
          .movie-title {
            padding: 12px;
            font-size: 0.9rem;
            font-weight: bold;
            text-align: center;
            flex-grow: 1;
            display: flex;
            align-items: center;
            justify-content: center;
          }
        `}</style>
      </>
    );
  }

  // Зөвшөөрөлгүй үед харагдах хуудас
  return (
    <div style={{ padding: '50px', fontFamily: 'sans-serif', textAlign: 'center', color: 'red' }}>
      <h1>Хандах эрхгүй!</h1>
      <p>Энэ хуудсанд зөвхөн тусгай холбоосоор хандах боломжтой.</p>
    </div>
  );
}