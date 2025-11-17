export default function Button({ label = 'Ten button mac dinh' }) {
  return (
    // props.label
    <button className="bg-emerald-50 p-2 font-bold rounded-2xl">{label}</button>
  )
}