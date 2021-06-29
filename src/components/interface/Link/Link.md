## Lien - Link

Le lien permet la navigation. Pour les actions d’un autre type, comme la soumission d’un formulaire, il faut utiliser le composant boutons.

### Lien contextuel
Le lien contextuel se trouve au sein d’un texte et reprend les caractéristiques typographiques de celui-ci (font, couleur, taille) tout en étant souligné.

```jsx
<Link
    title="titre lien interne"
    href="/">lien contextuel
</Link>
```

```jsx
<Link
    icon="ri-arrow-go-back-line"
    iconPosition="left"
    title="titre lien interne" href="/my-page">
    lien contextuel avec icône
</Link>
```

```jsx
<Link
    icon="ri-arrow-go-back-line"
    title="titre lien interne"
    href="/my-page">
    lien contextuel avec icône
</Link>
```

#### Usage avec react-router-dom

```jsx
import { BrowserRouter as Router, Route, Link as RouterLink } from 'react-router-dom';
import { RouterContextProvider} from '../../../hooks/useRouterContext';
// Wrap the entire app with RouterContextProvider
<RouterContextProvider Router={RouterLink}>
<Router>
    <Route
        path="/"
        component={(props) => (
            <>
              <Link href="https://dataesr.fr">external</Link>
               //
              <Link to="/">internal</Link>
            </>
        )}
    />
</Router>
</RouterContextProvider>
```

### Lien externe
Le lien ‘externe’ doit être utilisé pour les liens pointant vers un autre site et ouvrant un nouvel onglet (via l’attribut target=”blank”).

```jsx
<Link
    title="titre lien externe - nouvelle fenêtre"
    href="/"
    target="_blank">lien externe - nouvelle fenêtre
</Link>
```

#### Lien simple

```jsx
<Link
    href="/my-page"
    isSimple>lien simple
</Link>
```

#### Usage avec react-router-dom

```jsx
import { BrowserRouter as Router, Route, Link as RouterLink } from 'react-router-dom';

<Router>
    <Route
        path="/"
        component={(props) => (
            <Link
                isSimple
                as={<RouterLink to="/my-page">lien simple</RouterLink>}
            />
        )}
    />
</Router>
```

```jsx
<Link
    href="/"
    isSimple
    icon="ri-arrow-right-line">lien simple avec icône à droite
</Link>
```

```jsx
<Link
    href="/"
    isSimple
    icon="ri-arrow-left-line"
    iconPosition="left">lien simple avec icône à gauche
</Link>
```

L’icône seule n'est à utiliser que très rarement, et le lien doit contenir un texte afin d'être lu par les lecteurs d'écran.
```jsx
<Link
    href="/"
    isSimple
    icon="ri-arrow-right-up-line"
/>
```
