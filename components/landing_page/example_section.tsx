import { A, H2 } from "@fartlabs/htx";
import { PageSection } from "#/components/page_section.tsx";

export function ExampleSection() {
  return (
    <PageSection class="example">
      <H2 id="seconds" class="page-heading">
        <A class="page-link-visible-on-hover" href="#seconds">
          Build modern software solutions in seconds
        </A>
      </H2>

      {EXAMPLE_CODE}
    </PageSection>
  );
}

// https://github.com/FartLabs/jsonx_docs/pull/25
const EXAMPLE_CODE =
  `<pre class="border-tube-green glow"><code class="hljs"><span class="hljs-keyword">import</span> { <span class="hljs-title class_">Lab</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">"labs/labs.ts"</span>;

<span class="hljs-keyword">interface</span> <span class="hljs-title class_">Note</span> {
  title?: <span class="hljs-built_in">string</span>;
  <span class="hljs-attr">content</span>: <span class="hljs-built_in">string</span>;
}

<span class="hljs-keyword">const</span> notesLab = <span class="hljs-keyword">new</span> <span class="hljs-title class_">Lab</span>()
  .<span class="hljs-title function_">variable</span>(<span class="hljs-string">"notes"</span>, <span class="hljs-keyword">new</span> <span class="hljs-title class_">Map</span>&lt;<span class="hljs-built_in">string</span>, <span class="hljs-title class_">Note</span>&gt;())
  .<span class="hljs-title function_">procedure</span>(
    <span class="hljs-string">"notes.add"</span>,
    <span class="hljs-function">(<span class="hljs-params">note: Note, { notes }</span>) =&gt;</span> {
      <span class="hljs-keyword">const</span> id = crypto.<span class="hljs-title function_">randomUUID</span>();
      notes.<span class="hljs-title function_">set</span>(id, note);
      <span class="hljs-keyword">return</span> { id };
    },
    [<span class="hljs-string">"notes"</span>],
  )
  .<span class="hljs-title function_">procedure</span>(
    <span class="hljs-string">"notes.get"</span>,
    <span class="hljs-function">(<span class="hljs-params">{ id }: { id: <span class="hljs-built_in">string</span> }, { notes }</span>) =&gt;</span> {
      <span class="hljs-keyword">return</span> notes.<span class="hljs-title function_">get</span>(id);
    },
    [<span class="hljs-string">"notes"</span>],
  )
  .<span class="hljs-title function_">procedure</span>(
    <span class="hljs-string">"notes.list"</span>,
    <span class="hljs-function">(<span class="hljs-params">_, { notes }</span>) =&gt;</span> {
      <span class="hljs-keyword">return</span> <span class="hljs-title class_">Array</span>.<span class="hljs-title function_">from</span>(notes.<span class="hljs-title function_">values</span>());
    },
    [<span class="hljs-string">"notes"</span>],
  );

notesLab.<span class="hljs-title function_">execute</span>(
  <span class="hljs-string">"notes.add"</span>,
  { <span class="hljs-attr">title</span>: <span class="hljs-string">"Hello"</span>, <span class="hljs-attr">content</span>: <span class="hljs-string">"World"</span> },
);

<span class="hljs-keyword">const</span> notes = notesLab.<span class="hljs-title function_">execute</span>(
  <span class="hljs-string">"notes.list"</span>,
  {},
);

<span class="hljs-variable language_">console</span>.<span class="hljs-title function_">log</span>(notes);
</code></pre>`;
