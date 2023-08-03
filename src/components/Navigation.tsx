import { Link } from "cinnabun/router"
import { pathStore } from "../state"

export const Navigation = () => (
  <nav>
    <ul>
      <li>
        <Link to="/" store={pathStore}>
          Home
        </Link>
      </li>
      <li>
        <Link to="/counter" store={pathStore}>
          Counter
        </Link>
      </li>
    </ul>
  </nav>
)
