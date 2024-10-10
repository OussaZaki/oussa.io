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
        {`Oussama Zaki — or “Oussa” for short — is a Moroccan-born millennial who has traveled the world, merging his passions for culture, art, and technology. Now based in Stockholm, he brings a global perspective to the tech industry. His career is shaped by diverse experiences at major companies like Google, Klarna, Svea Solar, and Spotify.`}
      </p>
      <p className="mb-2">
        {`With a foundation in Computer Science, Oussa’s career trajectory is a unique blend of art and engineering. His journey began with Combinatorial Optimization Algorithms and Heuristics, but soon expanded into the innovative field of human-computer interaction. Here, he discovered a new passion: merging the art of Design & UX with engineering excellence.`}
      </p>
      <p className="mb-4">
        {`Today, Oussa leads the Iteration Platform team at Miro. In this role, he aims to foster a culture of experimentation and continuous iteration, empowering teams to unleash their full creative potential in building the future of the visual workspace.`}
      </p>
      <div className="my-8">
        <BlogPosts />
      </div>
    </section>
  );
}
