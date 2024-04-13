export default function Contact({ id, name, number }) {
  return (
    <div>
      <li key={id}>
        <p>Name: {name}</p>
        <p>Number:{number}</p>
      </li>
      <button>Delete</button>
    </div>
  );
}
