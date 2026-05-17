import { BlogPosts } from "app/components/posts";
import GradientDivider from "./components/divider";

export default function Page() {
  return (
    <section>
      <h1 className="mb-0 text-2xl font-semibold tracking-tighter">Oussa</h1>
      <h3 className="mb-8 text-m font-light tracking-tighter">
        Art & Engineering
      </h3>
      <p className="mb-2">
        {`Born in Casablanca, based in Stockholm, shaped by the cities in between. Before Miro, I spent time at Google, Klarna, Svea Solar, and Spotify. Different bets, different cultures, one mission: building things people actually love to use, and teams who enjoy building them.`}
      </p>
      <p className="mb-2">
        {`Grew up loving math and geometry. Found comfort in art and design at the same time. Didn't yet know I was supposed to pick a side. Got curious about code early, spending teenage hours writing C on the family Pentium PC. I came up through computer science from there, drawn to combinatorial optimization and modern heuristics. But it was in human-computer interaction where it finally clicked: engineering and design aren't separate disciplines. They're one craft.`}
      </p>
      <p className="mb-4">
        {`Today, I'm a senior engineering leader and designer at Miro. My mission is to elevate developer productivity, reliability, and joy across our software delivery lifecycle. Right now, three things have my full attention: experimentation, AI-assisted engineering, and developer tools.`}
      </p>
      <div className="my-8">
        <BlogPosts />
      </div>
    </section>
  );
}
