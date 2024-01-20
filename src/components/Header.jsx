import { Link } from "./Link";

export const Header = (props) => {
    return (
        <header>
            <nav>
            {
          props.links.map(link => {
            return (
              <Link 
                key={link.name} 
                name={link.name} 
                link={link.link} 
                />
            )
          })
        }
            </nav>
        </header>
    )
}