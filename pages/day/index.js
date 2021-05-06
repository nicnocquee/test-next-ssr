export default function DayPage({ facts }) {
  return (
    <div>
      <ul>
        {facts &&
          facts.map((f, i) => {
            return <li key={i}>{f.text}</li>;
          })}
      </ul>
    </div>
  );
}

export async function getServerSideProps(context) {
  await new Promise((r) => {
    setTimeout(() => {
      r();
    }, 5000);
  });
  const res = await fetch(`https://cat-fact.herokuapp.com/facts`);
  const data = await res.json();
  return {
    props: {
      facts: data,
    }, // will be passed to the page component as props
  };
}
