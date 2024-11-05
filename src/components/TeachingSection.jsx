import {ways} from "../data";
import WayToTeach from "./WayToTeach";
export default function TeachingSection() {
    return (
    <section>
      <h1>Наш подход к обучению</h1>
      <ul>
        {ways.map(way=>(<WayToTeach key={way.title} {...way}/>))}
      </ul>
    </section>
)
}