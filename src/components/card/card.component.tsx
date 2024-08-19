import "./card.style.css";

function Card({
  src,
  name,
  courses,
  teachers,
}: {
  src: string;
  name: string;
  courses: number;
  teachers: number;
}) {
  return (
    <div className="card">
      <img src={src} height={60} width={60} />
      <div>
        <h3>{name}</h3>
        <h6>
          {courses} courses &#x2022; {teachers} teachers
        </h6>
      </div>
    </div>
  );
}

export default Card;
