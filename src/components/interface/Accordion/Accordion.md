## Accordions - Accordéons

Condenser l'espace
### Accordéon simple

```jsx
import { AccordionItem, Accordion } from '.';

<Accordion className="custom-class">
  <AccordionItem title="first line accordion">
      Accordion Item #1
  </AccordionItem>
</Accordion>
```

### Accordéon multiple

```jsx
import { AccordionItem, Accordion } from '.';

<Accordion className="custom-class">
  <AccordionItem title="first line accordion">
    Accordion Item #1
  </AccordionItem>
  <AccordionItem title="second line accordion">
    Accordion Item #2
  </AccordionItem>
  <AccordionItem title="third line accordion">
    <article>
      <h1>Title</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid architecto assumenda autem deleniti eius error
        eum exercitationem hic libero modi mollitia numquam obcaecati provident quis quisquam, repellendus tempore
        temporibus ullam.
      </p>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque cum debitis doloribus magni reiciendis ullam voluptates voluptatibus! Asperiores aspernatur ipsum magni. Aperiam consequatur, dignissimos esse laborum minus possimus tempora tenetur!</p>
    </article>
  </AccordionItem>
</Accordion>
```
