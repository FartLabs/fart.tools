import { A, BLOCKQUOTE, H2, P } from "@fartlabs/htx";
import { PageSection } from "#/components/page_section.tsx";
import { ChatButton } from "#/components/page_button/buttons/chat_button.tsx";

export function ForewordSection() {
  return (
    <PageSection>
      <H2 id="foreword" class="page-heading">
        Modern software solutions in a snap
      </H2>

      <P>
        Personal computing has the potential to be a deeply personalized
        experience, a digital extension of ourselves. Yet, the software we rely
        on often falls short of this ideal. While we have the tools to connect
        with others, capture moments, and explore the world, the underlying
        software is designed for a generic "average user." This
        one-size-fits-all approach stifles individuality and limits the
        potential of our devices. Much like passing gas in a quiet room, we're
        forced to adapt to the software, rather than the software adapting to
        us.
      </P>

      <P>
        Individuals from around the world have joined the movement to reclaim
        personal computing.
      </P>

      <BLOCKQUOTE>
        <P>
          Want a new feature? Wait for an update. Want an old feature back?
          Tough luck, it didn't increase engagement. Maybe you have some great
          ideas — like a simpler messaging app for your grandma, permanently
          disabling auto-flash on your camera, or a map that can compare
          multiple routes. Unless you're a developer with a lot of patience, the
          power to reshape software is out of your hands.
        </P>

        <P>
          -{" "}
          <A href="https://tyler.cafe/" class="fart-link">
            Tyler Angert
          </A>
        </P>
      </BLOCKQUOTE>

      <BLOCKQUOTE>
        <P>
          In sum, I believe that there exists a better way forward for personal
          computing. I do not purport to have all the answers, but I am coming
          at this equipped with some intriguing starting points, and motivated
          by a lifelong obsession with what potential personal computing
          presents to the future of our society.
        </P>

        <P>
          -{" "}
          <A href="https://alexobenauer.com/" class="fart-link">
            Alexander Obenauer
          </A>
        </P>
      </BLOCKQUOTE>

      <P>
        Inspired by decades of science fiction and technological advancements,
        we gained the opportunity to shape a future where technology truly
        serves our needs. By challenging the biased, self-serving agendas and
        walled gardens that dominate the tech industry, we can take control of
        our digital experiences.
      </P>

      <P>
        Let's disengage the airlock on this{" "}
        <A
          href="https://urbandictionary.com/define.php?term=Dutch+oven"
          class="fart-link"
        >
          Dutch oven
        </A>. Join us! <ChatButton />
      </P>

      <P>
        -{" "}
        <A href="https://etok.me/" class="fart-link">
          Ethan Davidson
        </A>, Chief Scientist & Founder at FartLabs
      </P>
    </PageSection>
  );
}
