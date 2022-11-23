# Skela

This package provides a simple, fast and lightweight statefull library with 0 dependencies for developers to create user interfaces with.

```javascript
import { Container, H1, Text } from "@jaime-alvarez/skela";

const myComponent = Container(
  {
    id: "main",
  },
  H1({ className: "world" }, Text("Hello, World!"))
);

myComponent.paint();
```

Results into this:

```html
<div id="main">
  <h1 class="world">Hello, World!</h1>
</div>
```

A simple component that fetches from an API:

```javascript
import { Container, H1, Button, Text, createState } from "@jaime-alvarez/skela";

const API_URL = "https://catfact.ninja/fact";

function Component() {
  const [data, setData, dataSubscription] = createState("", true);
  const [isLoading, setIsLoading, loadSubscription] = createState(false, true);

  const req = async () => {
    try {
      setIsLoading(true);
      const res = await fetch(API_URL);
      const _json = await res.json();
      setData(_json.fact);
    } catch (e) {
      setData("Unable to get a response.");
    } finally {
      setIsLoading(false);
    }
  };

  return Container(
    {
      subscriptions: [dataSubscription, loadSubscription],
      onmount: req,
    },
    Container(
      {
        style: "padding: 10px;",
      },
      H1(
        {
          className: "cat-fact",
        },
        Text(() => data())
      )
    ),
    Container(
      {
        style: "padding: 10px;",
      },
      Button(
        () => (isLoading() ? { disabled: "" } : { onclick: req }),
        Text("Fetch new")
      )
    )
  );
}

Component().paint();
```

Results into:

```html
<div>
  <div style="padding: 10px;">
    <h1 class="cat-fact">
      A cat almost never meows at another cat, mostly just humans. Cats
      typically will spit, purr, and hiss at other cats.
    </h1>
  </div>
  <div style="padding: 10px;">
    <button>Fetch new</button>
  </div>
</div>
```

Mounting:

```javascript
import {
  Container,
  H1,
  Text,
  createState,
  $NO_PROPS,
} from "@jaime-alvarez/skela";

const title = H1($NO_PROPS, Text("Hello, World!"));

const container = Container({ id: "main" });

title.paint(container);

container.paint();
//  Calling paint with no argument will mount on document.body
// NOTE: painting a node into another one won't make this node a direct child of it.
```

Result:

```html
<div id="main">
  <h1>Hello, World!</h1>
</div>
```

Unmounting:

```javascript
import {
  Container,
  H1,
  Text,
  createState,
  createFragmentKey,
} from "@jaime-alvarez/skela";

const myComponentKey = createFragmentKey();

const container = Container(
  { id: "main" },
  H1(
    {
      key: myComponentKey,
    },
    Text("Hello, World!")
  ),
  Button(
    { onclick: () => Tree.getNode(myComponentKey)?.unpaint() },
    Text("Unmount")
  )
);

container.paint();
```

Results into:

```html
<div id="main">
  <h1>Hello, World!</h1>
  <button>Unmount</button>
</div>
```

After button click:

```html
<div id="main">
  <button>Unmount</button>
</div>
```
